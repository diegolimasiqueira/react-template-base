import { ErrorPage } from '@/shared/components/ui/ErrorPage';

export const ServerError = () => {
  return (
    <ErrorPage
      statusCode={500}
      title="Erro interno do servidor"
      message="Ocorreu um erro inesperado. Por favor, tente novamente mais tarde."
    />
  );
}; 