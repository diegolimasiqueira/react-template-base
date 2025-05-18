import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';
import {
  Notifications,
  NotificationsActive,
  NotificationsOff
} from '@mui/icons-material';

interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  timestamp: Date;
}

interface NotificationsMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  notifications: Notification[];
  onNotificationClick: (id: string) => void;
}

export const NotificationsMenu = ({
  anchorEl,
  onClose,
  notifications,
  onNotificationClick
}: NotificationsMenuProps) => {
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleNotificationClick = (id: string) => {
    onNotificationClick(id);
    onClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      onClick={onClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {notifications.length === 0 ? (
        <MenuItem disabled>
          <ListItemIcon>
            <NotificationsOff fontSize="small" />
          </ListItemIcon>
          <ListItemText>Nenhuma notificação</ListItemText>
        </MenuItem>
      ) : (
        notifications.map((notification) => (
          <MenuItem
            key={notification.id}
            onClick={() => handleNotificationClick(notification.id)}
            sx={{
              backgroundColor: notification.read ? 'inherit' : 'action.hover'
            }}
          >
            <ListItemIcon>
              {notification.read ? (
                <Notifications fontSize="small" />
              ) : (
                <NotificationsActive fontSize="small" color="primary" />
              )}
            </ListItemIcon>
            <Box>
              <ListItemText
                primary={notification.title}
                secondary={notification.message}
              />
              <Typography variant="caption" color="text.secondary">
                {new Date(notification.timestamp).toLocaleString()}
              </Typography>
            </Box>
          </MenuItem>
        ))
      )}
    </Menu>
  );
}; 