import { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/Entities/User/Types';
import { login as authLogin, logout as authLogout, getCurrentUser } from '../services/authService';
import { Box, CircularProgress } from '@mui/material';

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LoadingScreen = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <CircularProgress />
  </Box>
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      console.log('[AuthProvider] Iniciando restauração de sessão...');
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      if (storedToken && storedUser) {
        try {
          console.log('[AuthProvider] Token e usuário encontrados no localStorage');
          setUser(JSON.parse(storedUser));
          setToken(storedToken);

          // Em produção, valida com a API
          if (import.meta.env.PROD) {
            try {
              console.log('[AuthProvider] Validando sessão com a API...');
              const currentUser = await getCurrentUser();
              console.log('[AuthProvider] Sessão validada com sucesso:', currentUser);
              setUser(currentUser);
            } catch (error) {
              console.warn('[AuthProvider] Não foi possível validar a sessão com a API:', error);
              // Em produção, remove o token se a validação falhar
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              setUser(null);
              setToken(null);
            }
          }
        } catch (error) {
          console.error('[AuthProvider] Erro ao restaurar sessão:', error);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
          setToken(null);
        }
      } else {
        console.log('[AuthProvider] Nenhuma sessão encontrada no localStorage');
      }
      setIsLoading(false);
    };

    restoreSession();

    const handleLogout = () => {
      console.log('[AuthProvider] Evento de logout recebido');
      setUser(null);
      setToken(null);
    };
    window.addEventListener('auth-logout', handleLogout);
    return () => window.removeEventListener('auth-logout', handleLogout);
  }, []);

  const login = async (email: string, password: string) => {
    console.log('[AuthProvider] Iniciando login...');
    const response = await authLogin(email, password);
    console.log('[AuthProvider] Login realizado com sucesso:', response);
    setUser(response.user);
    setToken(response.token);
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
  };

  const logout = () => {
    console.log('[AuthProvider] Iniciando logout...');
    authLogout();
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const value = { user, token, login, logout };

  if (isLoading) {
    console.log('[AuthProvider] Carregando...');
    return <LoadingScreen />;
  }

  console.log('[AuthProvider] Estado atual:', { user, token });
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}; 