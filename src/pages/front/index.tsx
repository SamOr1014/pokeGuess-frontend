import { MoveDown } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { useQuizState } from '../../hooks/useQuizState';

const PIKACHU_GIF_URL = 'https://i.redd.it/eti95tjbyb7a1.gif';

export const FrontPage = () => {
  const { fetchQuestion } = useQuizState((s) => s);

  return (
    <div className="p-10 flex-1 flex flex-col justify-center items-center gap-5">
      <img src={PIKACHU_GIF_URL} alt="Pikachu Dancing" />
      <p className="w-1/2 text-center text-2xl font-semibold tracking-tight lg:text-5xl bg-gradient-to-br from-red-600 via-zinc-700 to-zinc-100 text-transparent bg-clip-text">
        Are You Ready for the challenge, Pokemon Trainer
      </p>
      <div className="flex animate-bounce">
        <MoveDown />
        <span className="text-xl">Press Here to accept Challenge!</span>
        <MoveDown />
      </div>
      <Link to={'/quiz'}>
        <Button variant={'destructive'} onClick={fetchQuestion}>
          Start
        </Button>
      </Link>
    </div>
  );
};
