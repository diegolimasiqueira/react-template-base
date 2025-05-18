import { Theme } from '@mui/material/styles';

export const authTheme = {
  gradients: {
    background: {
      dark: 'radial-gradient(ellipse at 60% 40%, #183b5a 0%, #0a101a 80%)',
      light: 'radial-gradient(ellipse at 60% 40%, #e3f0ff 0%, #f4f6fb 80%)',
    },
    paper: {
      dark: 'radial-gradient(ellipse at 60% 40%, #001 0%, #0a101a 80%)',
      light: 'radial-gradient(ellipse at 60% 40%, #e3f0ff 0%, #f4f6fb 80%)',
    },
    button: {
      dark: 'linear-gradient(90deg, #fff 0%, #fff 100%)',
      light: '#000',
    },
    buttonHover: {
      dark: 'linear-gradient(90deg, #ccc 0%, #ccc 100%)',
      light: '#222',
    },
  },
  colors: {
    button: {
      dark: '#000',
      light: '#fff',
    },
    text: {
      dark: '#fff',
      light: '#1a1a1a',
    },
  },
};

export const getAuthStyles = (theme: Theme) => ({
  button: {
    contained: {
      background: theme.palette.mode === 'dark' 
        ? authTheme.gradients.button.dark
        : authTheme.gradients.button.light,
      color: theme.palette.mode === 'dark' 
        ? authTheme.colors.button.dark
        : authTheme.colors.button.light,
      '&:hover': {
        background: theme.palette.mode === 'dark'
          ? authTheme.gradients.buttonHover.dark
          : authTheme.gradients.buttonHover.light,
      },
    },
    outlined: {
      background: theme.palette.mode === 'dark'
        ? authTheme.gradients.button.dark
        : authTheme.gradients.button.light,
      color: theme.palette.mode === 'dark'
        ? authTheme.colors.button.dark
        : authTheme.colors.button.light,
      '&:hover': {
        background: theme.palette.mode === 'dark'
          ? authTheme.gradients.buttonHover.dark
          : authTheme.gradients.buttonHover.light,
      },
    },
  },
  textField: {
    autofill: {
      WebkitBoxShadow: theme.palette.mode === 'dark'
        ? '0 0 0 1000px #000 inset'
        : '0 0 0 1000px #e3f0ff inset',
      WebkitTextFillColor: theme.palette.mode === 'dark'
        ? authTheme.colors.text.dark
        : authTheme.colors.text.light,
      transition: 'background-color 5000s ease-in-out 0s',
    },
  },
  paper: {
    background: theme.palette.mode === 'dark'
      ? authTheme.gradients.paper.dark
      : authTheme.gradients.paper.light,
  },
}); 