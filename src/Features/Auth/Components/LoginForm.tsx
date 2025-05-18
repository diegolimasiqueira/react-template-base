import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  FormControlLabel,
  Checkbox,
  Link,
  Stack,
  Alert,
  useTheme
} from '@mui/material';
import { useAuth } from '@/Features/Auth/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ResetPasswordDialog } from '@/Features/Auth/Components/ResetPasswordDialog';
import { authTheme, getAuthStyles } from '@/Features/Auth/Styles/authTheme';

export const LoginForm = () => {
  const theme = useTheme();
  const authStyles = getAuthStyles(theme);
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

  return (
    <>
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
          sx={{
            '& input:-webkit-autofill': authStyles.textField.autofill,
          }}
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
          sx={{
            '& input:-webkit-autofill': authStyles.textField.autofill,
          }}
        />
        <FormControlLabel
          control={<Checkbox checked={remember} onChange={e => setRemember(e.target.checked)} />}
          label="Remember me"
          sx={{ mt: 1 }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            mb: 1,
            ...authStyles.button.contained,
          }}
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
          sx={{
            mt: 2,
            mb: 1,
            ...authStyles.button.outlined,
          }}
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
}; 