import { act, render, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PokemonDisplay } from '../quiz/components/PokemonDisplay';
import { useQuizState } from '../../hooks/useQuizState';

describe('Front Page', () => {
  it('render correctly', async () => {
    const { getByTestId } = render(<PokemonDisplay />);

    expect(getByTestId('guess-pokemon-bg')).toBeInTheDocument();
  });
  it('condition - current ques exist', () => {
    const { result } = renderHook(() => useQuizState((s) => s));
    const { getByTestId } = render(<PokemonDisplay />);

    act(() =>
      result.current.updateQuizState({
        currentQuestion: {
          pokemonId: 1,
          pokemonCry: 'cry url',
          pokemonImg: 'url',
          pokemonName: 'a',
          pokemonNameList: ['a', 'a', 'a', 'a'],
        },
      })
    );
    expect(getByTestId('guess-pokemon-image')).toBeInTheDocument();
  });
});
