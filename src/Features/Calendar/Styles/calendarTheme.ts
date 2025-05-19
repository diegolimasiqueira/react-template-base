import { Theme } from '@mui/material';

export const getCalendarStyles = (theme: Theme) => ({
  calendar: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2),
    minHeight: 600,
  },
  event: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    borderRadius: 4,
    padding: '2px 8px',
    fontWeight: 500,
    fontSize: 14,
    cursor: 'pointer',
    border: '1px solid #e0e0e0',
    boxShadow: theme.shadows[1],
  },
  toolbar: {
    marginBottom: theme.spacing(2),
  },
  // Cores customizadas para eventos
  eventActive: {
    backgroundColor: '#43a047', // verde
    color: '#fff',
  },
  eventInactive: {
    backgroundColor: '#e53935', // vermelho
    color: '#fff',
  },
  eventMeeting: {
    backgroundColor: '#1976d2', // azul
    color: '#fff',
  },
}); 