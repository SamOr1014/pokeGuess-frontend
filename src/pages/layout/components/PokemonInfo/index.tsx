import { Pokedex } from '../../../../components/Pokedex';
import { Popover, PopoverTrigger } from '../../../../components/ui/popover';
import { usePokemonState } from '../../../../hooks/usePokemonState';
import { PokemonCard } from './PokemonCard';

export const PokemonInfo = () => {
  const { fetchPokemon, reset } = usePokemonState((state) => ({
    fetchPokemon: state.fetchPokemon,
    reset: state.reset,
  }));
  return (
    <Popover
      onOpenChange={(open) => {
        open ? fetchPokemon() : reset();
      }}
    >
      <PopoverTrigger
        data-testid={'pokemon-card-popover-trigger'}
        className="flex justify-center items-center rounded-full w-20 animate-wiggle absolute bottom-2 right-2 p-3"
      >
        <Pokedex />
      </PopoverTrigger>
      <PokemonCard />
    </Popover>
  );
};
