import { useContext } from 'react';
import { ThemeProviderContext } from '../components/themeProvider';

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  return context;
};
