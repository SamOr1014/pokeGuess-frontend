import { beforeEach, describe, expect, it, vi } from 'vitest';
import { initialState, usePokemonState } from '../usePokemonState';
import { act, renderHook } from '@testing-library/react';
import { PokeGuessInstance } from '../../utilities/axiosInstance';

describe('usePokemonState', () => {
  const mockPokemon = {
    pokemonId: 212,
    pokemonName: 'scizor',
    pokemonCry:
      'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/212.ogg',
    pokemonImg:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
    weight: 118,
    height: 180,
    type: ['bug', 'steel'],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });
  it('render properly', () => {
    const { result } = renderHook(() =>
      usePokemonState((s) => ({
        isError: s.isError,
        isLoading: s.isLoading,
        pokemon: s.pokemon,
      }))
    );
    expect(result.current).toStrictEqual(initialState);
  });
  it('fetchPokemon', async () => {
    const mockInstance = vi.spyOn(PokeGuessInstance, 'get');
    const { result } = renderHook(() => usePokemonState((s) => s));
    mockInstance.mockResolvedValueOnce({
      data: mockPokemon,
    });
    await act(() => result.current.fetchPokemon());
    expect(mockInstance).toBeCalled();
    expect(result.current.pokemon).toStrictEqual(mockPokemon);
    act(() => result.current.reset());
    expect(result.current).toStrictEqual({
      ...result.current,
      ...initialState,
    });
  });
  it('error', async () => {
    const mockInstance = vi.spyOn(PokeGuessInstance, 'get');
    const { result } = renderHook(() => usePokemonState((s) => s));
    mockInstance.mockRejectedValueOnce({ data: {}, error: {} });
    await act(() => result.current.fetchPokemon());
    expect(mockInstance).toBeCalled();
    expect(result.current.isError).toStrictEqual(true);
  });
});
