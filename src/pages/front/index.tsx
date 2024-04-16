import { MoveDown } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { useQuizState } from '../../hooks/useQuizState';

const PIKACHU_GIF_URL = 'https://i.redd.it/eti95tjbyb7a1.gif';

export const FrontPage = () => {
  const { fetchQuestion } = useQuizState((s) => s);

  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-5">
      <img
        data-testid="pikachu-dance"
        src={PIKACHU_GIF_URL}
        alt="Pikachu-gif"
        className="lg:w-[50vw] lg:h-auto w-[100vw]"
      />
      <p className="md:w-1/2 w-full text-center text-2xl font-semibold tracking-tight lg:text-5xl bg-gradient-to-br from-red-600 via-zinc-700 to-zinc-100 text-transparent bg-clip-text">
        Are You Ready for the challenge, Pokemon Trainer
      </p>
      <div className="flex animate-bounce w-full justify-center items-center">
        <MoveDown />
        <div className="lg:text-xl text-base text-center">
          Press Here to accept Challenge!
        </div>
        <MoveDown />
      </div>
      <Link data-testid={'nav-to-quiz'} to={'/quiz'}>
        <Button variant={'destructive'} onClick={fetchQuestion}>
          Start
        </Button>
      </Link>
    </div>
  );
};
