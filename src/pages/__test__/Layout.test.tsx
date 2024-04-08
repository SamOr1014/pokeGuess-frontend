import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';

describe('Front Page', () => {
  it('render correctly', async () => {
    const { getByTestId } = render(<Layout />, { wrapper: BrowserRouter });

    expect(getByTestId('layout-container')).toBeInTheDocument();
  });
});
