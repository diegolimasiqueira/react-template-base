import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Login } from '@/pages/Login';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { ServerError } from '@/pages/ServerError';
import { ProtectedRoute } from '@/shared/components/ui/ProtectedRoute';
import { AppLayout } from '@/shared/components/layout/AppLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout>
          <Home />
        </AppLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/500',
    element: <ServerError />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]); 