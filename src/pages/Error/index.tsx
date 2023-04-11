import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  let error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Aaaaaaa! :&#40;</h1>
        <p>Desculpa, {error.statusText}</p>
      </div>
    );
  }

  const value = error as Error;

  return (
    <div>
      <h1>Aaaaaaa! :&#40;</h1>
      <p>Desculpa, {value.message || 'ocorreu um erro inesperado'}</p>
    </div>
  );
}
