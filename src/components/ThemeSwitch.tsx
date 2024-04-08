import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Switch } from './ui/switch';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-3">
      <Sun data-testid={'sunIcon'} />
      <Switch
        data-testid={'themeModeSwitch'}
        checked={theme === 'dark'}
        onCheckedChange={(val) => setTheme(val ? 'dark' : 'light')}
      />
      <MoonStar data-testid={'moonStarIcon'} />
    </div>
  );
};
