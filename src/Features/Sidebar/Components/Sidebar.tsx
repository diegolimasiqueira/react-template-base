import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  useTheme
} from '@mui/material';
import {
  Home as HomeIcon,
  TableChart as TableChartIcon,
  Logout as LogoutIcon,
  CalendarMonth as CalendarMonthIcon
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/Features/Auth/Hooks/useAuth';
import { getSidebarStyles } from '@/Features/Sidebar/Styles/sidebarTheme';

interface SidebarProps {
  width?: number;
}

export const Sidebar = ({ width = 240 }: SidebarProps) => {
  const theme = useTheme();
  const styles = getSidebarStyles(theme);
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          ...styles.drawer
        },
      }}
    >
      <Box sx={styles.toolbar} />
      <Box sx={styles.content}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/"
              selected={location.pathname === '/'}
              sx={styles.listItemButton}
            >
              <ListItemIcon sx={styles.listItemIcon}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/samples"
              selected={location.pathname === '/samples'}
              sx={styles.listItemButton}
            >
              <ListItemIcon sx={styles.listItemIcon}>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Samples" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/formsample"
              selected={location.pathname === '/formsample'}
              sx={styles.listItemButton}
            >
              <ListItemIcon sx={styles.listItemIcon}>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Form Sample" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/calendar"
              selected={location.pathname === '/calendar'}
              sx={styles.listItemButton}
            >
              <ListItemIcon sx={styles.listItemIcon}>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider sx={styles.divider} />
      <Box sx={styles.footer}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={logout} sx={styles.listItemButton}>
              <ListItemIcon sx={styles.listItemIcon}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}; 