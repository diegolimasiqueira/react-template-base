import { Navigate } from 'react-router-dom';
import { useAuth } from '@/Features/Auth/Hooks/useAuth';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  console.log('[ProtectedRoute] Verificando autenticação:', { user });

  if (!user) {
    console.log('[ProtectedRoute] Usuário não autenticado, redirecionando para login');
    return <Navigate to="/login" replace />;
  }

  console.log('[ProtectedRoute] Usuário autenticado, renderizando rota protegida');
  return <>{children}</>;
};