import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Typography, useTheme } from '@mui/material';
import { getBreadcrumbStyles, breadcrumbTheme } from '@/Features/Breadcrumb/Styles/breadcrumbTheme';
import { useBreadcrumb } from '@/Features/Breadcrumb/Hooks/useBreadcrumb';

export const Breadcrumb = () => {
  const theme = useTheme();
  const styles = getBreadcrumbStyles(theme);
  const location = useLocation();
  const { breadcrumbs } = useBreadcrumb(location.pathname);

  if (breadcrumbs.length <= 1) return null;

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={styles.container}>
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return isLast ? (
          <Typography
            key={breadcrumb.path}
            color="text.primary"
            sx={styles.text}
          >
            {breadcrumb.label}
          </Typography>
        ) : (
          <RouterLink
            key={breadcrumb.path}
            to={breadcrumb.path}
            style={{
              textDecoration: 'none',
              color: theme.palette.mode === 'dark'
                ? breadcrumbTheme.colors.link.dark
                : breadcrumbTheme.colors.link.light
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = theme.palette.primary.main;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = theme.palette.mode === 'dark'
                ? breadcrumbTheme.colors.link.dark
                : breadcrumbTheme.colors.link.light;
            }}
          >
            {breadcrumb.label}
          </RouterLink>
        );
      })}
    </Breadcrumbs>
  );
}; 