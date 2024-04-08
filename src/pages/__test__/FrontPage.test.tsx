import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FrontPage } from '../front';
import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/dom';

describe('Front Page', () => {
  it('render correctly', async () => {
    const { getByTestId } = render(<FrontPage />, { wrapper: BrowserRouter });

    expect(getByTestId('pikachu-dance')).toBeInTheDocument();
    expect(getByTestId('nav-to-quiz')).toBeInTheDocument();
    expect(
      await screen.findByText('Press Here to accept Challenge!')
    ).toBeVisible();
  });
});
