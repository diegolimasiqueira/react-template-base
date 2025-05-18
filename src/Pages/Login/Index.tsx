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
import { ResetPasswordDialog } from '@/Shared/Components/UI/ResetPasswordDialog';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [resetOpen, setResetOpen] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);

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

  const handleResetPassword = async (email: string) => {
    setResetLoading(true);
    // Simulação de envio de e-mail (mock)
    await new Promise((res) => setTimeout(res, 1200));
    setResetLoading(false);
    setResetSent(true);
    setTimeout(() => {
      setResetSent(false);
      setResetOpen(false);
    }, 1800);
  };

  console.log('[Login] error state:', error);

  return (
    <>
      <TopBar />
      <Box
        sx={(theme) => ({
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: 10,
          background:
            theme.palette.mode === 'dark'
              ? 'radial-gradient(ellipse at 60% 40%, #183b5a 0%, #0a101a 80%)'
              : 'radial-gradient(ellipse at 60% 40%, #e3f0ff 0%, #f4f6fb 80%)',
        })}
      >
        <Paper
          elevation={8}
          sx={(theme) => ({
            p: 4,
            width: 360,
            maxWidth: '90vw',            
            background: 
              theme.palette.mode === 'dark'
              ? 'radial-gradient(ellipse at 60% 40%, #001 0%, #0a101a 80%)'
              : 'radial-gradient(ellipse at 60% 40%, #e3f0ff 0%, #f4f6fb 80%)',
            borderRadius: 3,
          })}
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
              size="small"
              sx={(theme) => ({
                '& input:-webkit-autofill': {
                  WebkitBoxShadow:
                    theme.palette.mode === 'dark'
                      ? '0 0 0 1000px #000 inset'
                      : '0 0 0 1000px #e3f0ff inset',
                  WebkitTextFillColor:
                    theme.palette.mode === 'dark' ? '#fff' : '#1a1a1a',
                  transition: 'background-color 5000s ease-in-out 0s',
                },
              })}
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
              size="small"
              sx={(theme) => ({
                '& input:-webkit-autofill': {
                  WebkitBoxShadow:
                    theme.palette.mode === 'dark'
                      ? '0 0 0 1000px #000 inset'
                      : '0 0 0 1000px #e3f0ff inset',
                  WebkitTextFillColor:
                    theme.palette.mode === 'dark' ? '#fff' : '#1a1a1a',
                  transition: 'background-color 5000s ease-in-out 0s',
                },
              })}
            />
            <FormControlLabel
              control={<Checkbox checked={remember} onChange={e => setRemember(e.target.checked)} />}
              label="Remember me"
              sx={{ mt: 1 }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={(theme) => ({
                mt: 2,
                mb: 1,
                background:
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(90deg, #fff 0%, #fff 100%)'
                    : '#000',
                color:
                  theme.palette.mode === 'dark'
                    ? '#000'
                    : '#fff',
                fontWeight: 700,
                '&:hover': {
                  background:
                    theme.palette.mode === 'dark'
                      ? 'linear-gradient(90deg, #ccc 0%, #ccc 100%)'
                      : '#222',
                },
              })}
              type="submit"
            >
              SIGN IN
            </Button>
            <Box textAlign="center" mb={2}>
              <Link href="#" underline="hover" variant="body2" onClick={e => { e.preventDefault(); setResetOpen(true); }}>
                Forgot your password?
              </Link>
            </Box>
          </Box>
          <Divider>or</Divider>
          <Stack direction="column" spacing={1} mt={2}>            
            <Button
              variant="outlined"              
              fullWidth
              sx={(theme) => ({
                mt: 2,
                mb: 1,
                background:
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(90deg, #fff 0%, #fff 100%)'
                    : '#000',
                color:
                  theme.palette.mode === 'dark'
                    ? '#000'
                    : '#fff',
                fontWeight: 700,
                '&:hover': {
                  background:
                    theme.palette.mode === 'dark'
                      ? 'linear-gradient(90deg, #ccc 0%, #ccc 100%)'
                      : '#222',
                },
              })}
            >
              Login with SSO
            </Button>
          </Stack>
          <Box mt={3} textAlign="center">
            <Typography variant="body2">
              Don't have an account?{' '}
              <Link href="#" underline="hover">
                Request access
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
      <ResetPasswordDialog
        open={resetOpen}
        onClose={() => setResetOpen(false)}
        onSubmit={handleResetPassword}
        loading={resetLoading}
      />
      {resetSent && (
        <Box position="fixed" top={24} left={0} width="100vw" display="flex" justifyContent="center" zIndex={1400}>
          <Alert severity="success" sx={{ borderRadius: 2, minWidth: 320 }}>
            Se um e-mail válido foi informado, você receberá instruções para redefinir sua senha.
          </Alert>
        </Box>
      )}
    </>
  );
}