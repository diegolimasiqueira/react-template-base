import { Theme } from '@mui/material/styles';

export const sidebarTheme = {
  colors: {
    background: {
      dark: 'rgba(12,16,23,0.95)',
      light: '#ffffff'
    },
    text: {
      dark: '#ffffff',
      light: '#1a1a1a'
    },
    selected: {
      dark: 'rgba(255,255,255,0.08)',
      light: 'rgba(0,0,0,0.08)'
    },
    hover: {
      dark: 'rgba(255,255,255,0.04)',
      light: 'rgba(0,0,0,0.04)'
    }
  }
};

export const getSidebarStyles = (theme: Theme) => ({
  drawer: {
    background: theme.palette.mode === 'dark'
      ? sidebarTheme.colors.background.dark
      : sidebarTheme.colors.background.light,
    borderRight: 'none'
  },
  toolbar: {
    minHeight: 64 // Altura da TopBar
  },
  content: {
    flexGrow: 1,
    overflow: 'auto'
  },
  footer: {
    marginBottom: 2
  },
  listItemButton: {
    '&.Mui-selected': {
      backgroundColor: theme.palette.mode === 'dark'
        ? sidebarTheme.colors.selected.dark
        : sidebarTheme.colors.selected.light,
      '&:hover': {
        backgroundColor: theme.palette.mode === 'dark'
          ? sidebarTheme.colors.selected.dark
          : sidebarTheme.colors.selected.light
      }
    },
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark'
        ? sidebarTheme.colors.hover.dark
        : sidebarTheme.colors.hover.light
    }
  },
  listItemIcon: {
    color: theme.palette.mode === 'dark'
      ? sidebarTheme.colors.text.dark
      : sidebarTheme.colors.text.light,
    minWidth: 40
  },
  divider: {
    borderColor: theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.12)'
      : 'rgba(0,0,0,0.12)'
  }
}); 