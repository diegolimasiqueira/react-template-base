import { useAuth } from '@/Features/Auth/Hooks/useAuth';
import { CustomButton } from '@/Shared/Components/UI/CustomButton';
import { Typography, Box } from '@mui/material';

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <Box>
      <Typography variant="h6" component="h1" gutterBottom>
        Home
      </Typography>
    </Box>
  );
}