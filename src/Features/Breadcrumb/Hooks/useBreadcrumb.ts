import { useMemo } from 'react';
import { BreadcrumbItem } from '@/Features/Breadcrumb/Types/breadcrumb';

const routeMap: Record<string, string> = {
  '/': 'Home',
  '/samples': 'Samples',
  '/signin': 'Sign In'
};

export const useBreadcrumb = (pathname: string) => {
  const breadcrumbs = useMemo(() => {
    const paths = pathname.split('/').filter(Boolean);
    const items: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];

    let currentPath = '';
    paths.forEach((path) => {
      currentPath += `/${path}`;
      const label = routeMap[currentPath] || path.charAt(0).toUpperCase() + path.slice(1);
      items.push({ label, path: currentPath });
    });

    return items;
  }, [pathname]);

  return { breadcrumbs };
}; 