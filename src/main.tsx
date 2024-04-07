import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components/themeProvider.tsx';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
);
