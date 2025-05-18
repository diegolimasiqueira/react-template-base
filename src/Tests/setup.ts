import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from '@/Tests/Mocks/handlers';
import { beforeAll, afterEach, afterAll } from 'vitest';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());