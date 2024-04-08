import { act, renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useTheme } from '../useTheme';
import { ThemeProvider } from '../../components/themeProvider';

describe('useTheme hook', () => {
  it('testing return theme and setTheme works properly', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      ),
    });

    expect(result.current.theme).toEqual('dark');

    act(() => result.current.setTheme('light'));

    expect(result.current.theme).toEqual('light');
  });
});
