import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/dom';
import { NavBar } from '../layout/components/NavBar';

describe('NavBar', () => {
  it('render correctly', async () => {
    const { getByTestId } = render(<NavBar />, { wrapper: BrowserRouter });

    expect(getByTestId('logo')).toBeInTheDocument();
    expect(getByTestId('nav-menu')).toBeInTheDocument();
    expect(getByTestId('sunIcon')).toBeInTheDocument();
    expect(getByTestId('themeModeSwitch')).toBeInTheDocument();
    expect(getByTestId('moonStarIcon')).toBeInTheDocument();
    expect(await screen.findByText('PokeGuesser')).toBeVisible();
  });
});
