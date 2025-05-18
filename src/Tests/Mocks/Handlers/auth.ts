import { http, HttpResponse } from 'msw';

export const authHandlers = [
  http.post('/api/login', async ({ request }) => {
    const { email, password } = await request.json() as { email: string; password: string };
    
    if (email === 'teste@email.com' && password === '123456') {
      return HttpResponse.json({
        token: 'mock-token-123',
        user: { id: 1, email: 'teste@email.com', name: 'Test User' },
      }, { status: 200 });
    }
    
    return HttpResponse.json(
      { message: 'Credenciais inválidas' },
      { status: 401 }
    );
  }),
];