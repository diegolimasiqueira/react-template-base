import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

interface ResetPasswordDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
  loading?: boolean;
}

export const ResetPasswordDialog: React.FC<ResetPasswordDialogProps> = ({
  open,
  onClose,
  onSubmit,
  loading = false,
}) => {
  const [email, setEmail] = useState('');
  const theme = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  useEffect(() => {
    if (!open) setEmail('');
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: (theme) => ({
          borderRadius: 3,
          minWidth: 400,
          background:
            theme.palette.mode === 'dark'
              ? 'radial-gradient(ellipse at 60% 40%, #001 0%, #0a101a 80%)'
              : 'radial-gradient(ellipse at 60% 40%, #e3f0ff 0%, #f4f6fb 80%)',
          color: theme.palette.mode === 'dark' ? '#fff' : '#1a1a1a',
        }),
      }}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 22, color: (theme) => theme.palette.mode === 'dark' ? '#fff' : '#1a1a1a' }}>
          Reset password
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ mb: 2, color: (theme) => theme.palette.mode === 'dark' ? '#fff' : '#1a1a1a' }}>
            Enter your account's email address, and we'll send you a link to reset your password.
          </Typography>
          <TextField
            autoFocus
            fullWidth
            label="Email address"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            variant="outlined"
            sx={{
              mt: 1,
              mb: 1,
              '& .MuiInputBase-root': {
                bgcolor: 'transparent',
                color: (theme) => theme.palette.mode === 'dark' ? '#fff' : '#1a1a1a',
              },
              '& .MuiInputLabel-root': {
                color: (theme) => theme.palette.mode === 'dark' ? '#fff' : '#1a1a1a',
              },
            }}
            required
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={onClose} color="inherit" disabled={loading}
             sx={(theme) => ({
                minWidth: 100,
                fontWeight: 700,
                background:
                  theme.palette.mode === 'dark'
                    ? '#fff'
                    : '#000',
                color:
                  theme.palette.mode === 'dark'
                    ? '#000'
                    : '#fff',
                '&:hover': {
                  background:
                    theme.palette.mode === 'dark'
                      ? '#ccc'
                      : '#222',
                },
              })}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={loading || !email}
            sx={(theme) => ({
              minWidth: 100,
              fontWeight: 700,
              background:
                theme.palette.mode === 'dark'
                  ? '#fff'
                  : '#000',
              color:
                theme.palette.mode === 'dark'
                  ? '#000'
                  : '#fff',
              '&:hover': {
                background:
                  theme.palette.mode === 'dark'
                    ? '#ccc'
                    : '#222',
              },
            })}
          >
            Continue
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}; 