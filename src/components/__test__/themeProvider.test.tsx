import { describe, expect, it } from 'vitest';
import { ThemeProvider, ThemeProviderContext } from '../themeProvider';
import { useContext } from 'react';
import { render } from '@testing-library/react';

describe('theme provider', () => {
  const TestingComponent = () => {
    const { theme } = useContext(ThemeProviderContext);
    return <div data-testId={'theme'}>{theme}</div>;
  };
  it('proper theme provider', () => {
    const { getByTestId } = render(
      <ThemeProvider defaultTheme="light">
        <TestingComponent />
      </ThemeProvider>
    );
    // default set as light
    expect(getByTestId('theme').textContent).toStrictEqual('light');
  });
});
