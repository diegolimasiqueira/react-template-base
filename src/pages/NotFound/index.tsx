import { ErrorPage } from '@/shared/components/ui/ErrorPage';

export const NotFound = () => {
  return (
    <ErrorPage
      statusCode={404}
      title="Página não encontrada"
      message="A página que você está procurando não existe ou foi movida."
    />
  );
}; 