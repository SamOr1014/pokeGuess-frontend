import { Link } from 'react-router-dom';
import { ThemeSwitch } from '../../../components/ThemeSwitch';
import { Button } from '../../../components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '../../../components/ui/navigation-menu';
import pokeball from '/pokeball.svg';
import { useQuizState } from '../../../hooks/useQuizState';

export const NavBar = () => {
  const reset = useQuizState((s) => s.resetState);
  return (
    <div className="flex items-center justify-between w-full h-[55px] md:text-2xl text-base sticky top-0 z-10 bg-[hsl(var(--background))]">
      <div
        data-testid={'logo'}
        className="flex flex-1 gap-1 p-3 justify-start items-center"
      >
        <img
          src={pokeball}
          className="md:w-[30px] md:h-[30px] w-[5vw] h-[5vw]"
        />
        <span className="cursor-default select-none ">PokeGuesser</span>
      </div>
      <NavigationMenu data-testid={'nav-menu'} className="flex gap-5 w-full">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <Button variant="link" className="font-light" onClick={reset}>
                Home
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <ThemeSwitch />
      </NavigationMenu>
    </div>
  );
};
