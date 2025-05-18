import { Box, Paper, useTheme, IconButton } from '@mui/material';
import { authTheme, getAuthStyles } from '@/Features/Auth/Styles/authTheme';
import { useThemeContext } from '@/App/Config/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const theme = useTheme();
  const authStyles = getAuthStyles(theme);
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.mode === 'dark'
          ? authTheme.gradients.background.dark
          : authTheme.gradients.background.light,
        position: 'relative'
      }}
    >
      <IconButton
        onClick={toggleTheme}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: 'white'
        }}
      >
        {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: 2,
          background: theme.palette.mode === 'dark'
            ? authTheme.gradients.paper.dark
            : authTheme.gradients.paper.light,
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}; 