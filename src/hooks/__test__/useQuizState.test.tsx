import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { initialState, PokemonQuestion, useQuizState } from '../useQuizState';

describe('useQuizState', () => {
  const mockData: PokemonQuestion = {
    pokemonId: 1,
    pokemonCry: 'cry url',
    pokemonImg: 'url',
    pokemonNameList: ['a', 'b', 'c', 'd'],
  };
  it('hook render properly', () => {
    const { result } = renderHook(() => useQuizState((state) => state));

    // All expected to be as initialState
    expect(result.current).toStrictEqual({
      // some current contain action some spread to include both action and state
      ...result.current,
      ...initialState,
    });
  });
  it('updateState & resetState', () => {
    const { result } = renderHook(() => useQuizState((state) => state));
    act(() => result.current.updateQuizState({ isLoading: true }));
    expect(result.current.isLoading).toStrictEqual(true);
    act(() => result.current.resetState());
    expect(result.current).toStrictEqual({
      // some current contain action some spread to include both action and state
      ...result.current,
      ...initialState,
    });
  });
  it('addScore, addQuestionCount, toggleMute', () => {
    const { result } = renderHook(() => useQuizState((state) => state));
    act(() => result.current.addScore());
    act(() => result.current.addQuestionCount());
    act(() => result.current.toggleMute());
    expect(result.current.currentScore).toStrictEqual(1);
    expect(result.current.currentQuestionCount).toStrictEqual(1);
    expect(result.current.mute).toStrictEqual(true);
  });
  it('fetchQuestion', async () => {
    const { result } = renderHook(() => useQuizState((state) => state));
    await act(async () => result.current.fetchQuestion());
    console.log('current', result.current);
    expect(result.current.currentQuestion).toBeDefined();
  });
  it('validateAnswer', async () => {
    const { result } = renderHook(() => useQuizState((state) => state));
    act(() => result.current.updateQuizState({ currentQuestion: mockData }));
    await act(async () => result.current.validateAnswer('randomAnswer'));
    expect(result.current.validate).toBeDefined();
    expect(result.current.validate?.correct).toStrictEqual(false);
  });
});
