import { PokemonTypes } from '../types/pokemonType';

export const generateCardBackgroundColour = (type: PokemonTypes) => {
  switch (type) {
    case 'bug':
      return 'bg-[#a8a77a]';
    case 'dark':
      return 'bg-[#705746]';
    case 'dragon':
      return 'bg-[#6f35fc]';
    case 'electric':
      return 'bg-[#f7d02c]';
    case 'fairy':
      return 'bg-[#d685ad]';
    case 'fighting':
      return 'bg-[#c22e28]';
    case 'fire':
      return 'bg-[#ee8130]';
    case 'flying':
      return 'bg-[#a98ff3]';
    case 'ghost':
      return 'bg-[#735797]';
    case 'grass':
      return 'bg-[#7ac74c]';
    case 'ground':
      return 'bg-[#e2bf65]';
    case 'ice':
      return 'bg-[#96d9d6]';
    case 'normal':
      return 'bg-[#a8a77a]';
    case 'poison':
      return 'bg-[#a33ea1]';
    case 'psychic':
      return 'bg-[#f95587]';
    case 'rock':
      return 'bg-[#b6a136]';
    case 'shadow':
      return 'bg-[#511379]';
    case 'steel':
      return 'bg-[#b7b7ce]';
    case 'unknown':
      return 'bg-gray-700';
    case 'water':
      return 'bg-[#6390f0]';
    default:
      return 'bg-black';
  }
};

export const generateCardColour = (type: PokemonTypes) => {
  switch (type) {
    case 'bug':
      return '#a8a77a';
    case 'dark':
      return '#705746';
    case 'dragon':
      return '#6f35fc';
    case 'electric':
      return '#f7d02c';
    case 'fairy':
      return '#d685ad';
    case 'fighting':
      return '#c22e28';
    case 'fire':
      return '#ee8130';
    case 'flying':
      return '#a98ff3';
    case 'ghost':
      return '#735797';
    case 'grass':
      return '#7ac74c';
    case 'ground':
      return '#e2bf65';
    case 'ice':
      return '#96d9d6';
    case 'normal':
      return '#a8a77a';
    case 'poison':
      return '#a33ea1';
    case 'psychic':
      return '#f95587';
    case 'rock':
      return '#b6a136';
    case 'shadow':
      return '#511379';
    case 'steel':
      return '#b7b7ce';
    case 'water':
      return '#6390f0';
    default:
      return 'black';
  }
};
