import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { QuizToolbar } from '../quiz/components/Toolbar';

describe('Front Page', () => {
  it('render correctly', async () => {
    const { getByTestId } = render(<QuizToolbar />, { wrapper: BrowserRouter });

    expect(getByTestId('leave-quiz-button')).toBeInTheDocument();
    expect(getByTestId('mute button')).toBeInTheDocument();
    expect(getByTestId('scoreboard')).toBeInTheDocument();
  });
});
