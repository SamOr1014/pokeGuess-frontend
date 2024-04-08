import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Quiz } from '../quiz';

describe('Front Page', () => {
  it('render correctly', async () => {
    const { getByTestId } = render(<Quiz />, { wrapper: BrowserRouter });

    expect(getByTestId('quiz-container')).toBeInTheDocument();
    expect(getByTestId('quiz-toolbar')).toBeInTheDocument();
    expect(getByTestId('guess-pokemon-display')).toBeInTheDocument();
  });
});
