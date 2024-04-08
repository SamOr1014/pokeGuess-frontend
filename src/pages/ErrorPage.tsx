import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      data-testid={'error-page'}
      className="flex flex-col gap-5 justify-center items-center w-full h-svh text-lg"
    >
      <h1 className="text-5xl">Oops!</h1>
      <img src="https://i.redd.it/1wxi2yjtxb7a1.gif" className="w-1/2" />
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {isRouteErrorResponse(error) ? (
          <i>{`${error.status} ${error.statusText}`}</i>
        ) : null}
      </p>
      <Link to={'/'}>
        <Button data-testid={'home-button'} variant={'link'}>
          Home
        </Button>
      </Link>
    </div>
  );
}
