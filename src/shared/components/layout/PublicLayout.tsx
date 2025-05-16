import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';

export const PublicLayout = ({ children }: { children: ReactNode }) => (
  <Box
    sx={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at 50% 50%, #0a1929 0%, #0a1929 60%, #020409 100%)',
    }}
  >
    <Container maxWidth="xs">{children}</Container>
  </Box>
); 