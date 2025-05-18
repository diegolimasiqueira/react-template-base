import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '@/Shared/Hooks/UI/useTheme';
import Box from '@mui/material/Box';

export const TopBar = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        width: '100%'
      }}
    >
      <Toolbar>
        <Box
          component="img"
          src="/src/Assets/Icons/acelen-logo.png"
          alt="Acelen Logo"
          sx={{
            height: 20,
            marginRight: 2,
          }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}; 