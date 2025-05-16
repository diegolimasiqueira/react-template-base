import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/shared/services/authService';

export const Home = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Bem-vindo, {user?.name}!
      </Typography>
      <Typography variant="body1" paragraph>
        Esta é a página inicial protegida do template base.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Sair
      </Button>
    </Box>
  );
}; 