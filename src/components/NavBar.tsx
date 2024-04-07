import { Link } from 'react-router-dom';
import { ThemeSwitch } from './ThemeSwitch';
import { Button } from './ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from './ui/navigation-menu';
import pokeball from '/pokeball.svg';

export const NavBar = () => {
    return (
        <>
            <div className="flex flex-1 gap-1 p-3 text-xl">
                <img src={pokeball} className="w-[30px] h-[30px]" />
                <span className="font-pixel cursor-default select-none">
                    PokeGuesser
                </span>
            </div>
            <NavigationMenu className="flex gap-5 w-full">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link to="/">
                            <Button
                                variant="link"
                                className="text-lg font-light"
                            >
                                Quiz
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                    {/* <NavigationMenuItem>
                        <Button variant="link" className="text-lg font-light">
                            Learn
                        </Button>
                    </NavigationMenuItem> */}
                </NavigationMenuList>
                <ThemeSwitch />
            </NavigationMenu>
        </>
    );
};
