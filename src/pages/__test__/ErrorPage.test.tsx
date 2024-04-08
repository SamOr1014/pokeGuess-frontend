import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../ErrorPage';

describe('Front Page', () => {
  it('render correctly', async () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <ErrorPage />,
      },
    ]);

    const { getByTestId } = render(<ErrorPage />, {
      wrapper: () => <RouterProvider router={router} />,
    });

    expect(getByTestId('error-page')).toBeInTheDocument();
    expect(
      await screen.getByText('Sorry, an unexpected error has occurred.')
    ).toBeVisible();
    expect(await screen.getByText('Oops!')).toBeVisible();
  });
});
