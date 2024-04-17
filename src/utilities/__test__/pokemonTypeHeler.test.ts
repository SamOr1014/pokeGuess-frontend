import { describe, expect, it } from 'vitest';
import {
  generateCardBackgroundColour,
  generateCardColour,
} from '../PokemonTypeHelper';
import { PokemonTypes } from '../../types/pokemonType';

const types: PokemonTypes[] = ['bug', 'ice', 'rock'];
const bgColor = ['bg-[#a8a77a]', 'bg-[#96d9d6]', 'bg-[#b6a136]'];
const color = ['#a8a77a', '#96d9d6', '#b6a136'];

describe('create sound obj', () => {
  it('generateCardBackgroundColour', async () => {
    types.forEach((type, idx) => {
      expect(generateCardBackgroundColour(type)).toStrictEqual(bgColor[idx]);
    });

    expect(generateCardBackgroundColour('' as PokemonTypes)).toStrictEqual(
      'bg-black'
    );
  });
  it('generateCardColour', () => {
    types.forEach((type, idx) => {
      expect(generateCardColour(type)).toStrictEqual(color[idx]);
    });
    expect(generateCardColour('' as PokemonTypes)).toStrictEqual('black');
  });
});
