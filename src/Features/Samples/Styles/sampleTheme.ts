import { Theme } from '@mui/material/styles';

export const sampleTheme = {
  colors: {
    background: {
      dark: 'rgba(12,16,23,0.95)',
      light: '#ffffff'
    },
    text: {
      dark: '#ffffff',
      light: '#1a1a1a'
    },
    header: {
      dark: 'rgba(255,255,255,0.08)',
      light: 'rgba(0,0,0,0.08)'
    },
    row: {
      dark: 'rgba(255,255,255,0.04)',
      light: 'rgba(0,0,0,0.04)'
    }
  }
};

export const getSampleStyles = (theme: Theme) => ({
  tableContainer: {
    borderRadius: 2,
    boxShadow: theme.palette.mode === 'dark' ? 0 : 1,
    background: theme.palette.mode === 'dark'
      ? sampleTheme.colors.background.dark
      : sampleTheme.colors.background.light
  },
  table: {
    minWidth: 650
  },
  headerCell: {
    fontWeight: 600,
    color: theme.palette.mode === 'dark'
      ? sampleTheme.colors.text.dark
      : sampleTheme.colors.text.light,
    background: theme.palette.mode === 'dark'
      ? sampleTheme.colors.header.dark
      : sampleTheme.colors.header.light
  },
  cell: {
    color: theme.palette.mode === 'dark'
      ? sampleTheme.colors.text.dark
      : sampleTheme.colors.text.light
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.mode === 'dark'
        ? sampleTheme.colors.row.dark
        : sampleTheme.colors.row.light
    },
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,0.08)'
        : 'rgba(0,0,0,0.08)'
    }
  }
}); 