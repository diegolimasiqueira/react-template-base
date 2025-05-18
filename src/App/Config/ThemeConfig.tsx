import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../Styles/theme';
import { useThemeContext } from './ThemeContext';

export const ThemeConfig = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useThemeContext();
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};