import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Quiz } from '../pages/quiz/Quiz';
import { StartQuiz } from '../pages/quiz/StartQuiz';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <StartQuiz />,
      },
      {
        path: '/quiz',
        element: <Quiz />,
      },
    ],
  },
]);
