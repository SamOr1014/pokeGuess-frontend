import { AudioLines, RefreshCcw, ShieldAlert } from 'lucide-react';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';
import { usePokemonState } from '../../../../hooks/usePokemonState';
import { Spinner } from '../../../../components/Spinner';
import { PopoverContent } from '../../../../components/ui/popover';
import { createSoundObj } from '../../../../utilities/createSoundObject';
import {
  generateCardBackgroundColour,
  generateCardColour,
} from '../../../../utilities/PokemonTypeHelper';
import { cn } from '../../../../lib/utils';

const InfoField = ({
  fieldName,
  fieldChildren,
}: {
  fieldName: string;
  fieldChildren: React.ReactNode;
}) => {
  return (
    <div className="flex gap-2">
      <div>{fieldName}: </div>
      {fieldChildren}
    </div>
  );
};

export const PokemonCard = () => {
  const { fetchPokemon, pokemon, isLoading, isError } = usePokemonState(
    (state) => state
  );
  const playSound = () => {
    if (!pokemon) return;
    createSoundObj({
      soundLink: pokemon?.pokemonCry,
    }).play();
  };

  return (
    <PopoverContent
      side={'top'}
      align={'end'}
      alignOffset={20}
      className={cn(
        'font-pixel sm:h-[400px] sm:w-[300px]',
        isLoading || isError
          ? 'bg-[hsl(var(--background))]'
          : pokemon && `${generateCardBackgroundColour(pokemon.type[0])}`
      )}
    >
      {isError ? (
        <div className="w-full h-full flex flex-col justify-center items-center gap-2">
          <ShieldAlert className="w-[45%] h-[45%]" />
          <div className="text-xl">Error Occurred...</div>
          <Button>
            Retry
            <RefreshCcw onClick={fetchPokemon} />
          </Button>
        </div>
      ) : !pokemon || isLoading ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Spinner className="w-[45%] h-[45%]" />
          <span className="text-xl">loading...</span>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="w-max min-w-[15%] dark:bg-white dark:text-black text-white bg-black rounded-sm p-2 text-center">
              #{pokemon.pokemonId}
            </div>
            <div className="flex-1 dark:bg-white dark:text-black text-white bg-black rounded-sm p-2 text-center">
              {pokemon.pokemonName}
            </div>
          </div>
          <div
            className={
              'w-full h-[150px] p-2 dark:bg-white dark:text-black text-white bg-black rounded-sm flex justify-center items-center'
            }
          >
            <img src={pokemon.pokemonImg} className="h-full" />
          </div>
          <Button
            data-testid={'pokemon-audio'}
            className="flex gap-2"
            onClick={playSound}
          >
            <AudioLines />
            <div>Sound</div>
          </Button>
          <InfoField
            fieldName="type"
            fieldChildren={
              <div className="flex-1 flex gap-2">
                {pokemon.type.map((type) => {
                  return (
                    <Badge
                      style={{
                        color: generateCardColour(type),
                      }}
                      key={type}
                    >
                      {type}
                    </Badge>
                  );
                })}
              </div>
            }
          />
          <div className="flex justify-between">
            <InfoField
              fieldName="height"
              fieldChildren={
                <div className="flex-1 flex"> {pokemon.height}cm</div>
              }
            />
            <InfoField
              fieldName="weight"
              fieldChildren={
                <div className="flex-1 flex"> {pokemon.weight}kg</div>
              }
            />
          </div>
          <div className="flex justify-center items-center w-full">
            <Button>
              <RefreshCcw onClick={fetchPokemon} />
            </Button>
          </div>
        </div>
      )}
    </PopoverContent>
  );
};
