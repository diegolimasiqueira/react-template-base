/**
 * ATENÇÃO: Esta é uma implementação mock para desenvolvimento e testes.
 * 
 * IMPORTANTE: Substitua este arquivo pela implementação real de autenticação
 * antes de colocar em produção. Remova as credenciais de teste e implemente
 * a integração com sua API de autenticação.
 * 
 * @see README.md para mais informações sobre como remover este mock
 */

// Credenciais mock para teste
const MOCK_USER = {
  email: 'teste@acelen.com',
  password: '123456',
};

export interface LoginCredentials {
  email: string;
  password: string;
  remember?: boolean;
}

export interface AuthResponse {
  token: string;
  user: {
    email: string;
    name: string;
  };
}

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    // Simula delay de rede
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
      credentials.email === MOCK_USER.email &&
      credentials.password === MOCK_USER.password
    ) {
      const response: AuthResponse = {
        token: 'mock-jwt-token',
        user: {
          email: credentials.email,
          name: 'Usuário Teste',
        },
      };

      // Se remember for true, usa localStorage, senão usa sessionStorage
      const storage = credentials.remember ? localStorage : sessionStorage;
      storage.setItem('auth_token', response.token);
      storage.setItem('user', JSON.stringify(response.user));
      return response;
    }

    throw new Error('Credenciais inválidas');
  },

  logout: () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('auth_token');
    sessionStorage.removeItem('user');
  },

  isAuthenticated: (): boolean => {
    return !!(localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token'));
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user') || sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
}; 