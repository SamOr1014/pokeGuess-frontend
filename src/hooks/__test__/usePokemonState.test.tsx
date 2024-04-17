import { describe, expect, it } from 'vitest';
import { initialState, usePokemonState } from '../usePokemonState';
import { renderHook } from '@testing-library/react';

describe('usePokemonState', () => {
  it('render properly', () => {
    const { result } = renderHook(() =>
      usePokemonState((s) => ({ isError: s.isError, isLoading: s.isLoading }))
    );
    expect(result.current).toStrictEqual(initialState);
  });
});
