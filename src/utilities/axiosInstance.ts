import axios from 'axios';

export const PokeGuessInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/pokeGuess`,
  timeout: 30000,
});
