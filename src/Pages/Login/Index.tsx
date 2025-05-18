import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  FormControlLabel,
  Checkbox,
  Link,
  Stack,
  Alert
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useAuth } from '@/Features/Auth/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '@/Shared/Components/Layout/TopBar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[Login] Iniciando login com:', { email });
    setError(null);
    try {
      await login(email, password);
      console.log('[Login] Login realizado com sucesso, navegando para home...');
      navigate('/');
    } catch (err) {
      console.error('[Login] Erro no login:', err);
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  console.log('[Login] error state:', error);

  return (
    <>
      <TopBar />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: 10,
        }}
      >
        <Paper
          elevation={8}
          sx={{
            p: 4,
            width: 360,
            maxWidth: '90vw',
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" fontWeight={700} mb={2} align="center">
            Sign in
          </Typography>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <FormControlLabel
              control={<Checkbox checked={remember} onChange={e => setRemember(e.target.checked)} />}
              label="Remember me"
              sx={{ mt: 1 }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, mb: 1 }}
              type="submit"
            >
              SIGN IN
            </Button>
            <Box textAlign="right" mb={2}>
              <Link href="#" underline="hover" variant="body2">
                Forgot your password?
              </Link>
            </Box>
          </Box>
          <Divider>or</Divider>
          <Stack direction="column" spacing={1} mt={2}>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              fullWidth
              color="inherit"
            >
              SIGN IN WITH GOOGLE
            </Button>
            <Button
              variant="outlined"
              startIcon={<FacebookIcon />}
              fullWidth
              color="inherit"
            >
              SIGN IN WITH FACEBOOK
            </Button>
          </Stack>
          <Box mt={3} textAlign="center">
            <Typography variant="body2">
              Don't have an account?{' '}
              <Link href="#" underline="hover">
                Sign up
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
}