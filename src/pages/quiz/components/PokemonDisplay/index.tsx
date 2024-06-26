import { Spinner } from '../../../../components/Spinner';
import { useQuizState } from '../../../../hooks/useQuizState';
import { cn } from '../../../../lib/utils';

const BG_URL =
  'https://res.cloudinary.com/dzynqn10l/image/upload/v1633196203/Msc/pokemon-bg_ig4uv3.jpg';

export const PokemonDisplay = () => {
  const { currentQuestion, validate } = useQuizState((s) => s);
  return (
    <div data-testid={'guess-pokemon-display'} className="select-none">
      <div className="relative w-full h-full flex justify-center items-center">
        <img data-testid={'guess-pokemon-bg'} src={BG_URL} />
        {currentQuestion?.pokemonImg ? (
          <img
            data-testid={'guess-pokemon-image'}
            src={currentQuestion?.pokemonImg}
            className={cn(
              'w-[45%] absolute top-[10%] left-[8%] brightness-0',
              validate && 'brightness-100 transition duration-1000 ease-out'
            )}
          />
        ) : (
          <Spinner className="w-[45%] h-[45%] absolute top-[25%] left-[7%] text-zinc-950" />
        )}
        <img
          src="/pokeball.svg"
          className={cn(
            'w-[47%] h-[47%] absolute top-[15%] right-[5%]',
            !validate && 'animate-wiggle'
          )}
        />
      </div>
    </div>
  );
};
