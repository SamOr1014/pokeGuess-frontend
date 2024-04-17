import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  initialState,
  PokemonQuestion,
  useQuizState,
  ValidatedAnswer,
} from '../useQuizState';
import { PokeGuessInstance } from '../../utilities/axiosInstance';

describe('useQuizState', () => {
  const mockData: PokemonQuestion = {
    pokemonId: 1,
    pokemonCry: 'cry url',
    pokemonImg: 'url',
    pokemonNameList: ['a', 'b', 'c', 'd'],
  };
  const mockValidateData: ValidatedAnswer = {
    correct: true,
    image: 'img_url',
    pokemonName: 'bulbasaur',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });
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
    const mockInstance = vi.spyOn(PokeGuessInstance, 'get');
    const { result } = renderHook(() => useQuizState((state) => state));

    mockInstance.mockResolvedValueOnce({ data: mockData });

    await act(async () => result.current.fetchQuestion());
    expect(result.current.currentQuestion).toBeDefined();
    expect(result.current.currentQuestion).toStrictEqual(mockData);
  });
  it('validateAnswer', async () => {
    const mockInstance = vi.spyOn(PokeGuessInstance, 'post');
    const { result } = renderHook(() => useQuizState((state) => state));

    mockInstance.mockResolvedValueOnce({ data: mockValidateData });

    await act(async () => result.current.validateAnswer('randomAnswer'));
    expect(result.current.validate).toBeDefined();
    expect(result.current.validate).toStrictEqual(mockValidateData);
  });

  it('error handling fetchQuestion', async () => {
    const mockInstanceGet = vi.spyOn(PokeGuessInstance, 'get');
    const { result } = renderHook(() => useQuizState((state) => state));

    mockInstanceGet.mockRejectedValueOnce({ data: {}, error: {} });

    await act(async () => result.current.fetchQuestion());
    expect(mockInstanceGet).toBeCalled();
    expect(result.current.isError).toStrictEqual(true);
  });
  it('error handling fetchQuestion', async () => {
    const mockInstancePost = vi.spyOn(PokeGuessInstance, 'post');
    const { result } = renderHook(() => useQuizState((state) => state));

    mockInstancePost.mockRejectedValueOnce({ data: mockValidateData });

    await act(async () => result.current.validateAnswer('randomAnswer'));
    expect(result.current.isError).toStrictEqual(true);
  });
});
