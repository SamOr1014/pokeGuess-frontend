import { create } from 'zustand';
import { PokemonTypes } from '../types/pokemonType';
import { PokeGuessInstance } from '../utilities/axiosInstance';

export type Pokemon = {
  pokemonId: number;
  pokemonCry: string;
  pokemonImg: string;
  pokemonName: string;
  weight: number;
  height: number;
  type: PokemonTypes[];
};

export type PokemonState = {
  isLoading: boolean;
  isError: boolean;
  pokemon?: Pokemon;
};

const initialState: PokemonState = {
  isLoading: false,
  isError: false,
};

export type PokemonStateAction = {
  fetchPokemon: () => void;
  reset: () => void;
};

export const usePokemonState = create<PokemonState & PokemonStateAction>(
  (set) => ({
    ...initialState,
    fetchPokemon: async () => {
      try {
        set({ isLoading: true });
        const { data } = await PokeGuessInstance.get<Pokemon>('/learn');
        set({ pokemon: data, isLoading: false });
      } catch (e) {
        set({ ...initialState, isError: true });
      }
    },
    reset: () => set(initialState),
  })
);
