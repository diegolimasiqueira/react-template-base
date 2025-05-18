import { createContext, useState, useCallback, useEffect } from 'react';
import { AuthContextType, User } from '@/Features/Auth/Types/auth';
import { authService } from '@/Features/Auth/services/authService';
import { Box, CircularProgress } from '@mui/material';

const LoadingScreen = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <CircularProgress />
  </Box>
);

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const restoreSession = async () => {
      console.log('[AuthProvider] Iniciando restauração de sessão...');
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      if (storedToken && storedUser) {
        try {
          console.log('[AuthProvider] Token e usuário encontrados no localStorage');
          setUser(JSON.parse(storedUser));

          // Em produção, valida com a API
          if (import.meta.env.PROD) {
            try {
              console.log('[AuthProvider] Validando sessão com a API...');
              const currentUser = await authService.getCurrentUser();
              console.log('[AuthProvider] Sessão validada com sucesso:', currentUser);
              setUser(currentUser);
            } catch (error) {
              console.warn('[AuthProvider] Não foi possível validar a sessão com a API:', error);
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              setUser(null);
            }
          }
        } catch (error) {
          console.error('[AuthProvider] Erro ao restaurar sessão:', error);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
        }
      } else {
        console.log('[AuthProvider] Nenhuma sessão encontrada no localStorage');
      }
      setLoading(false);
    };

    restoreSession();

    const handleLogout = () => {
      console.log('[AuthProvider] Evento de logout recebido');
      setUser(null);
    };
    window.addEventListener('auth-logout', handleLogout);
    return () => window.removeEventListener('auth-logout', handleLogout);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      console.log('[AuthProvider] Iniciando login...');
      const userData = await authService.login(email, password);
      console.log('[AuthProvider] Login realizado com sucesso:', userData);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (err) {
      console.error('[AuthProvider] Erro no login:', err);
      setError('Credenciais inválidas');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    try {
      console.log('[AuthProvider] Iniciando logout...');
      await authService.logout();
      setUser(null);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } catch (err) {
      console.error('[AuthProvider] Erro no logout:', err);
      setError('Erro ao fazer logout');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    setLoading(true);
    setError(null);
    try {
      await authService.resetPassword(email);
    } catch (err) {
      setError('Erro ao enviar email de recuperação');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    console.log('[AuthProvider] Carregando...');
    return <LoadingScreen />;
  }

  console.log('[AuthProvider] Estado atual:', { user });
  return (
    <AuthContext.Provider value={{
      user,
      loading,
      error,
      login,
      logout,
      resetPassword,
    }}>
      {children}
    </AuthContext.Provider>
  );
}; 