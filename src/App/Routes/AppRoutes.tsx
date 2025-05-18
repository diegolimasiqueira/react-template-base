import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@/Shared/Routes/ProtectedRoute';
import Home from '@/Pages/Home/Index';
import React, { Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { Layout } from '@/Shared/Components/Layout/Layout';
import { SampleTable } from '@/Features/Samples/Components/SampleTable';

// Lazy loading dos componentes
const SignIn = React.lazy(() => import('@/Features/Auth/Pages/SignIn/Index'));

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
      <Route path="/signin" element={<SignIn />} />

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
        path="/samples"
        element={
          <ProtectedRoute>
            <Layout>
              <SampleTable />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  </Suspense>
);