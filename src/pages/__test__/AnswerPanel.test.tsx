import { act, cleanup, render, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { screen } from '@testing-library/dom';
import { AnswerPanel } from '../quiz/components/AnswerPanel';
import { useQuizState } from '../../hooks/useQuizState';
import { afterEach } from 'node:test';

describe('Front Page', () => {
  afterEach(() => {
    cleanup();
  });
  it('render correctly', async () => {
    const { getByTestId } = render(<AnswerPanel />);
    expect(await screen.findByText('Who is that pokemon?')).toBeVisible();
    expect(getByTestId('pokemon-audio')).toBeInTheDocument();
  });

  it('condition - isSubmitting true', () => {
    const { result } = renderHook(() => useQuizState((s) => s));
    const { getByTestId } = render(<AnswerPanel />);

    act(() => result.current.updateQuizState({ isSubmitting: true }));
    expect(getByTestId('spinner')).toBeInTheDocument();
    act(() => result.current.updateQuizState({ isSubmitting: false }));
  });

  it('condition - validate obj exist', () => {
    const { result } = renderHook(() => useQuizState((s) => s));
    const { getByTestId } = render(<AnswerPanel />);

    act(() =>
      result.current.updateQuizState({
        validate: {
          correct: true,
          image: 'url',
          pokemonName: 'name',
        },
      })
    );
    expect(getByTestId('next-question-button')).toBeInTheDocument();
  });
});
