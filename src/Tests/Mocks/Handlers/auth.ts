import { http, HttpResponse } from 'msw';

export const authHandlers = [
  http.post('/api/login', async ({ request }) => {
    const { email, password } = await request.json() as { email: string; password: string };
    
    if (email === 'teste@acelen.com' && password === '123456') {
      return HttpResponse.json({
        token: 'mock-token-123',
        user: { id: '1', email: 'teste@acelen.com', name: 'Usuário Teste' },
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

  http.post('/api/reset-password', async ({ request }) => {
    const { email } = await request.json() as { email: string };
    
    if (email === 'teste@acelen.com') {
      return HttpResponse.json(
        { message: 'Email de recuperação enviado' },
        { status: 200 }
      );
    }
    
    return HttpResponse.json(
      { message: 'Email não encontrado' },
      { status: 404 }
    );
  }),

  http.get('/api/user/me', ({ request }) => {
    const auth = request.headers.get('authorization');
    if (auth === 'Bearer mock-token-123') {
      return HttpResponse.json({
        id: '1',
        email: 'teste@acelen.com',
        name: 'Usuário Teste',
      });
    }
    return HttpResponse.json({ message: 'Não autorizado' }, { status: 401 });
  }),
];