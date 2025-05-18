import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { getAuthStyles } from '@/Features/Auth/Styles/authTheme';
import { useTheme } from '@mui/material/styles';

interface ResetPasswordDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (email: string) => Promise<void>;
  loading: boolean;
}

export const ResetPasswordDialog = ({ open, onClose, onSubmit, loading }: ResetPasswordDialogProps) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const theme = useTheme();
  const styles = getAuthStyles(theme);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await onSubmit(email);
      onClose();
    } catch (err) {
      setError('Erro ao enviar email de recuperação. Tente novamente.');
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: {
          background: styles.paper.background,
          borderRadius: 2,
          minWidth: 320,
        },
      }}
    >
      <DialogTitle>
        <Typography variant="h6" component="div" sx={{ color: 'text.primary' }}>
          Recuperar Senha
        </Typography>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Digite seu email para receber as instruções de recuperação de senha.
            </Typography>
          </Box>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
            helperText={error}
            required
            sx={{
              '& .MuiInputBase-input': {
                ...styles.textField.autofill,
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} sx={{ color: 'text.secondary' }}>
            Cancelar
          </Button>
          <Button 
            type="submit" 
            variant="contained"
            sx={styles.button.contained}
          >
            Enviar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}; 