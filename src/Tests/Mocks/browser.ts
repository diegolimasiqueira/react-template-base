import { setupWorker } from 'msw/browser';
import { handlers } from '@/Tests/Mocks/handlers';
import type { DefaultBodyType, PathParams } from 'msw';

export const worker = setupWorker(...handlers as any);

// Configuração do MSW
worker.events.on('unhandledException', (error) => {
  console.error('MSW Error:', error);
});

worker.events.on('request:start', ({ request }) => {
  console.log('MSW Intercepted:', request.method, request.url);
});

worker.events.on('response:mocked', ({ response }) => {
  console.log('MSW Response:', response.status, response.statusText);
});