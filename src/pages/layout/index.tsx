import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Toaster } from '../../components/ui/toaster';

export const Layout = () => {
  return (
    <div
      data-testid={'layout-container'}
      className="container relative md:px-10 px-0 h-svh font-pixel flex flex-col"
    >
      <div className="flex items-center justify-between w-full h-[60px] gap-3 p-3">
        <NavBar />
      </div>
      <Outlet />
      <Toaster />
    </div>
  );
};
