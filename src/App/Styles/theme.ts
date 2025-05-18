import { createTheme, ThemeOptions, Components } from '@mui/material/styles';

// Gradientes e cores compartilhadas
const lightSidebarGradient = 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)';
const lightTopBarGradient = 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(245,245,245,0.85) 100%)';
const darkSidebarGradient = 'linear-gradient(180deg, rgba(12,16,23,1) 30%, rgba(24,28,36,1) 100%)';
const darkTopBarGradient = 'linear-gradient(180deg, rgba(24,28,36,0.85) 30%, rgba(12,16,23,0.85) 100%)';

const lightBorderColor = '1px solid rgba(0,0,0,0.08)';
const darkBorderColor = '1px solid rgba(255,255,255,0.08)';
const boxShadow = '0 2px 8px 0 rgba(0,0,0,0.12)';

// Estilos compartilhados para componentes
const sharedComponentStyles: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
    },
  },
};

const lightComponentStyles: Components = {
  ...sharedComponentStyles,
  MuiDrawer: {
    styleOverrides: {
      paper: {
        background: lightSidebarGradient,
        color: '#000',
        borderRight: lightBorderColor,
        boxShadow: boxShadow,
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        background: lightTopBarGradient,
        color: '#000',
        borderBottom: lightBorderColor,
        boxShadow: boxShadow,
        backdropFilter: 'blur(8px)',
      },
    },
  },
};

const darkComponentStyles: Components = {
  ...sharedComponentStyles,
  MuiDrawer: {
    styleOverrides: {
      paper: {
        background: darkSidebarGradient,
        color: '#fff',
        borderRight: darkBorderColor,
        boxShadow: boxShadow,
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        background: darkTopBarGradient,
        color: '#fff',
        borderBottom: darkBorderColor,
        boxShadow: boxShadow,
        backdropFilter: 'blur(8px)',
      },
    },
  },
};

const commonThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
};

export const lightTheme = createTheme({
  ...commonThemeOptions,
  components: lightComponentStyles,
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f4f6fb',
      paper: '#fff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#1976d2',
    },
  },
});

export const darkTheme = createTheme({
  ...commonThemeOptions,
  components: darkComponentStyles,
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: 'rgb(5, 7, 10)',
      paper: '#23272F',
    },
    text: {
      primary: '#fff',
      secondary: '#90caf9',
    },
  },
});