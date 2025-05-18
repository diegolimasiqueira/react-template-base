import { Theme } from '@mui/material/styles';

export const breadcrumbTheme = {
  colors: {
    text: {
      dark: '#ffffff',
      light: '#1a1a1a'
    },
    link: {
      dark: 'rgba(255,255,255,0.7)',
      light: 'rgba(0,0,0,0.7)'
    }
  }
};

export const getBreadcrumbStyles = (theme: Theme) => ({
  container: {
    padding: theme.spacing(2),
    color: theme.palette.mode === 'dark'
      ? breadcrumbTheme.colors.text.dark
      : breadcrumbTheme.colors.text.light
  },
  link: {
    color: theme.palette.mode === 'dark'
      ? breadcrumbTheme.colors.link.dark
      : breadcrumbTheme.colors.link.light,
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  text: {
    fontWeight: 500
  }
}); 