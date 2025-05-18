import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@/Shared/Routes/ProtectedRoute';
import Home from '@/Pages/Home/Index';
import React, { Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { SettingsPage } from '@/Pages/Settings/Index';
import { Layout } from '@/Shared/Components/Layout/Layout';
import Samples from '@/Pages/Samples/Index';

// Lazy loading dos componentes
const Login = React.lazy(() => import('@/Pages/Login/Index'));

// Componente de loading
const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <CircularProgress />
  </Box>
);

export const AppRoutes = () => (
  <Suspense fallback={<LoadingFallback />}>
    <Routes>
      {/* Rota de login não tem layout */}
      <Route path="/login" element={<Login />} />

      {/* Rotas protegidas com layout */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Layout>
              <SettingsPage />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/samples"
        element={
          <ProtectedRoute>
            <Layout>
              <Samples />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  </Suspense>
);