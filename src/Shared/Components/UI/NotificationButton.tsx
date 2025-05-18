import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export const NotificationButton = () => (
  <IconButton
    sx={{
      borderRadius: 2,
      border: '2px solid',
      borderColor: 'divider',
      ml: 1,
      width: 40,
      height: 40,
      p: 0,
      boxSizing: 'border-box',
    }}
  >
    <Badge
      variant="dot"
      color="error"
      overlap="circular"
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <NotificationsNoneIcon />
    </Badge>
  </IconButton>
); 