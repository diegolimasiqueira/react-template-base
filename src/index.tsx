import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoutes } from '@/App/Routes/AppRoutes';
import { ThemeConfig } from '@/App/Config/ThemeConfig';
import { GlobalStyles } from '@/App/Styles/GlobalStyles';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProviderCustom } from '@/App/Config/ThemeContext';
import { AuthProvider } from '@/Features/Auth/Hooks/useAuth';
import { BrowserRouter } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

// Inicializa o MSW em desenvolvimento
if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./Tests/Mocks/browser');
  worker.start();
}

// Configuração de acessibilidade com axe
if (process.env.NODE_ENV !== 'production') {
  import('@axe-core/react').then(axe => {
    axe.default(React, ReactDOM, 1000);
  }).catch(err => {
    console.warn('Acessibilidade (axe) não configurada:', err);
  });
}

const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <CircularProgress />
  </Box>
);

console.log('Initializing app from index.tsx...');
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');
console.log('Root element found, rendering AppRoutes...');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProviderCustom>
        <ThemeConfig>
          <AuthProvider>
            <GlobalStyles />
            <Suspense fallback={<LoadingFallback />}>
              <AppRoutes />
            </Suspense>
          </AuthProvider>
        </ThemeConfig>
      </ThemeProviderCustom>
    </BrowserRouter>
  </StrictMode>
);