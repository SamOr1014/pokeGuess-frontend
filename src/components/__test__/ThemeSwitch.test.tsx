import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ThemeProvider } from '../themeProvider';
import { ThemeSwitch } from '../ThemeSwitch';

describe('Theme Switch', () => {
  it('render theme switch correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>
    );
    expect(getByTestId('sunIcon')).toBeInTheDocument();
    expect(getByTestId('themeModeSwitch')).toBeInTheDocument();
    expect(getByTestId('moonStarIcon')).toBeInTheDocument();
  });

  it('test switch', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>
    );
    const switchElement = getByTestId('themeModeSwitch') as HTMLInputElement;

    //as default theme is dark so checked as default
    expect(switchElement).toBeChecked();

    fireEvent.click(switchElement);

    expect(switchElement).not.toBeChecked();
  });
});
