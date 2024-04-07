import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../components/pages/errorPage';
import { Quiz } from '../components/pages/quiz/Quiz';
import { StartQuiz } from '../components/pages/quiz/StartQuiz';

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
