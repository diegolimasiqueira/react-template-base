import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ErrorPageProps {
  title: string;
  message: string;
  statusCode?: number;
  showBackButton?: boolean;
}

export const ErrorPage = ({
  title,
  message,
  statusCode,
  showBackButton = true,
}: ErrorPageProps) => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        {statusCode && (
          <Typography variant="h1" color="primary" gutterBottom>
            {statusCode}
          </Typography>
        )}
        <Typography variant="h4" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {message}
        </Typography>
        {showBackButton && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(-1)}
            sx={{ mt: 2 }}
          >
            Voltar
          </Button>
        )}
      </Box>
    </Container>
  );
}; 