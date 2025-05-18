import { AuthProvider } from '@/Features/Auth/Hooks/useAuth';

export const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}; 