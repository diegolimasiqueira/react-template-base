import { Theme } from '@mui/material/styles';

export const topBarTheme = {
  gradients: {
    background: {
      dark: 'linear-gradient(180deg, rgba(24,28,36,0.85) 30%, rgba(12,16,23,0.85) 100%)',
      light: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)'      
    }
  },
  colors: {
    text: {
      dark: '#ffffff',
      light: '#ffffff'
    }
  }
};

export const getTopBarStyles = (theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: theme.palette.mode === 'dark'
      ? topBarTheme.gradients.background.dark
      : topBarTheme.gradients.background.light
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    flexGrow: 1,
    color: topBarTheme.colors.text[theme.palette.mode]
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  },
  avatar: {
    width: 32,
    height: 32,
    bgcolor: theme.palette.primary.main
  }
}); 