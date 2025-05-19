import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Badge,
  useTheme,
  Avatar
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import { useAuth } from '@/Features/Auth/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { UserMenu } from '@/Features/TopBar/Components/UserMenu';
import { NotificationsMenu } from '@/Features/TopBar/Components/NotificationsMenu';
import { useThemeContext } from '@/App/Config/ThemeContext';
import { getTopBarStyles } from '@/Features/TopBar/Styles/topBarTheme';

interface TopBarProps {
  onMenuClick?: () => void;
}

export const TopBar = ({ onMenuClick }: TopBarProps) => {
  const theme = useTheme();
  const styles = getTopBarStyles(theme);
  const { user, logout } = useAuth();
  const { mode, toggleTheme } = useThemeContext();
  const navigate = useNavigate();
  const [notificationsAnchor, setNotificationsAnchor] = useState<null | HTMLElement>(null);
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null);

  const handleNotificationsClick = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationsAnchor(event.currentTarget);
  };

  const handleUserMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setNotificationsAnchor(null);
    setUserMenuAnchor(null);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/signin');
  };

  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          component="img"
          src="src/Assets/Logo/acelen-logo.png"
          alt="Acelen Logo"
          sx={{
            height: 20,
            width: 'auto',
            objectFit: 'contain',
            display: { xs: 'none', sm: 'block' }
          }}
        />
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={styles.actions}>
          <IconButton color="inherit" onClick={handleNotificationsClick}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton
            onClick={handleUserMenuClick}
            size="small"
            sx={{ ml: 2 }}
          >
            <Avatar sx={styles.avatar}>
              {user?.name?.[0]?.toUpperCase() || 'U'}
            </Avatar>
          </IconButton>

          <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>

        <NotificationsMenu
          anchorEl={notificationsAnchor}
          onClose={handleClose}
          notifications={[]}
          onNotificationClick={() => {}}
        />

        <UserMenu
          anchorEl={userMenuAnchor}
          onClose={handleClose}
          onLogout={handleLogout}
          onSettings={() => navigate('/settings')}
        />
      </Toolbar>
    </AppBar>
  );
}; 