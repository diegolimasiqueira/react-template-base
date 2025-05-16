import { useState } from 'react';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Alert,
  CircularProgress,
  Paper,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/shared/services/authService';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'remember' ? checked : value,
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await authService.login(formData);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      elevation={8}
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: 'rgba(10, 25, 41, 0.95)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }}
    >
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 700, letterSpacing: 1 }}>
          Acelen
        </Typography>
      </Box>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{ color: '#fff', fontWeight: 700 }}>
        Sign in
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
          {error}
        </Alert>
      )}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          variant="filled"
          InputProps={{
            sx: {
              bgcolor: 'background.paper',
              borderRadius: 1,
              input: { color: '#fff' },
            },
          }}
          InputLabelProps={{
            sx: { color: '#b0b8c1' },
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
          disabled={loading}
          variant="filled"
          InputProps={{
            sx: {
              bgcolor: 'background.paper',
              borderRadius: 1,
              input: { color: '#fff' },
            },
          }}
          InputLabelProps={{
            sx: { color: '#b0b8c1' },
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="remember"
              color="primary"
              checked={formData.remember}
              onChange={handleChange}
              disabled={loading}
              sx={{ color: '#b0b8c1' }}
            />
          }
          label={<span style={{ color: '#b0b8c1' }}>Remember me</span>}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, fontWeight: 700, bgcolor: '#fff', color: '#0a1929', ':hover': { bgcolor: '#e3e3e3' } }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Sign in'}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" sx={{ color: '#b0b8c1' }}>
              Forgot your password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" sx={{ color: '#b0b8c1' }}>
              {"Don't have an account? Sign up"}
            </Link>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, mb: 1, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flex: 1, height: 1, bgcolor: '#22304a' }} />
          <Typography variant="body2" sx={{ mx: 2, color: '#b0b8c1' }}>
            or
          </Typography>
          <Box sx={{ flex: 1, height: 1, bgcolor: '#22304a' }} />
        </Box>
        <Button
          fullWidth
          variant="outlined"
          startIcon={
            <img
              src="/src/assets/icons/acelen-logo.png"
              alt="SSO Acelen"
              style={{ width: 28, height: 28, objectFit: 'contain' }}
            />
          }
          sx={{
            color: '#fff',
            borderColor: '#1976d2',
            backgroundColor: 'rgba(25, 118, 210, 0.08)',
            fontWeight: 700,
            mb: 1,
            mt: 2,
            ':hover': { borderColor: '#fff', bgcolor: 'rgba(25, 118, 210, 0.16)' },
          }}
        >
          SSO Acelen
        </Button>
      </Box>
    </Paper>
  );
}; 