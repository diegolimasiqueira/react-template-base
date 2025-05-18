export interface BreadcrumbItem {
  label: string;
  path: string;
}

export interface BreadcrumbState {
  breadcrumbs: BreadcrumbItem[];
} 