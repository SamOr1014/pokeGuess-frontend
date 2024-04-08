import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar';

export const Layout = () => {
  return (
    <div
      data-testid={'layout-container'}
      className="sm:container max-h-svh h-svh font-pixel flex flex-col w-full"
    >
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
