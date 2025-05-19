import { Theme } from '@mui/material/styles';

export const shipFormTheme = {
  colors: {
    background: {
      dark: 'rgba(12,16,23,0.95)',
      light: '#ffffff'
    },
    text: {
      dark: '#ffffff',
      light: '#1a1a1a'
    },
    border: {
      dark: 'rgba(255,255,255,0.12)',
      light: 'rgba(0,0,0,0.12)'
    }
  }
};

export const getShipFormStyles = (theme: Theme) => ({
  container: {
    padding: theme.spacing(3),
    background: theme.palette.mode === 'dark'
      ? shipFormTheme.colors.background.dark
      : shipFormTheme.colors.background.light,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.mode === 'dark'
      ? shipFormTheme.colors.border.dark
      : shipFormTheme.colors.border.light}`
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3)
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2)
  },
  sectionTitle: {
    color: theme.palette.mode === 'dark'
      ? shipFormTheme.colors.text.dark
      : shipFormTheme.colors.text.light,
    fontWeight: 600,
    marginBottom: theme.spacing(1)
  },
  row: {
    display: 'flex',
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: theme.spacing(1)
    }
  },
  field: {
    flex: 1
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: theme.spacing(2),
    marginTop: theme.spacing(3)
  }
}); 