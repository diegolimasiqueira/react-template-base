import { http, HttpResponse } from 'msw';

interface LoginRequest {
  email: string;
  password: string;
}

export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const { email, password } = await request.json() as LoginRequest;
    if (email === 'teste@acelen.com' && password === '123456') {
      return HttpResponse.json({
        user: { id: 1, name: 'Usuário Teste', email },
        token: 'mock-token-123'
      }, { status: 200 });
    }
    return HttpResponse.json(
      { message: 'Credenciais inválidas' },
      { status: 401 }
    );
  }),

  http.post('/api/logout', () => {
    return HttpResponse.json(
      { message: 'Logout realizado com sucesso' },
      { status: 200 }
    );
  }),

  http.get('/api/user/me', ({ request }) => {
    const auth = request.headers.get('authorization');
    if (auth === 'Bearer mock-token-123') {
      return HttpResponse.json({
        id: 1,
        email: 'teste@acelen.com',
        name: 'Usuário Teste',
      });
    }
    return HttpResponse.json({ message: 'Não autorizado' }, { status: 401 });
  }),

  http.get('/', () => {
    return HttpResponse.json({ message: 'API está funcionando' });
  }),

  http.get('/login', () => {
    return HttpResponse.json({ message: 'Página de login' });
  }),
]; 