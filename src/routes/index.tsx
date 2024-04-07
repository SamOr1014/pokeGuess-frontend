import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../pages/layout';
import { Quiz } from '../pages/quiz';
import { FrontPage } from '../pages/front';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <FrontPage />,
      },
      {
        path: '/quiz',
        element: <Quiz />,
      },
    ],
  },
]);
