import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { SearchInput } from './SearchInput';
import { DatePickerInput } from './DatePickerInput';
import { NotificationButton } from './NotificationButton';

export const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Box
      sx={{
        p: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Breadcrumbs 
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ fontSize: '0.975rem' }}
      >
        <Link
          component={RouterLink}
          to="/"
          color="inherit"
          sx={{ 
            textDecoration: 'none',
            fontSize: '0.975rem',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          Home
        </Link>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return last ? (
            <Typography 
              color="text.primary" 
              key={to}
              sx={{ fontSize: '0.975rem' }}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Typography>
          ) : (
            <Link
              component={RouterLink}
              color="inherit"
              to={to}
              key={to}
              sx={{ 
                textDecoration: 'none',
                fontSize: '0.975rem',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
          );
        })}
      </Breadcrumbs>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <SearchInput />
        <DatePickerInput />
        <NotificationButton />
      </Box>
    </Box>
  );
}; 