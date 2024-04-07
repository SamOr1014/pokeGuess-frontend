import { Undo2, Volume2, VolumeX } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { useQuizState } from '../../hooks/useQuizState';
import { useEffect } from 'react';
import { cn } from '../../lib/utils';
import { AnswerPanel } from './AnswerPanel';
import { Score } from './components/Score';
import { Spinner } from '../../components/Spinner';

const BG_URL =
  'https://res.cloudinary.com/dzynqn10l/image/upload/v1633196203/Msc/pokemon-bg_ig4uv3.jpg';

export const Quiz = () => {
  const {
    resetState,
    fetchQuestion,
    isLoading,
    currentQuestion,
    isError,
    validate,
    mute,
    toggleMute,
  } = useQuizState((s) => s);

  // when direct enter /quiz, fetch automatically
  useEffect(() => {
    console.log('rerender');
    if (!isLoading && !currentQuestion && !isError) {
      fetchQuestion();
    }
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-12 w-full p-6">
      <div className="w-full flex flex-row justify-between items-center">
        <Score />
        <Button variant={'ghost'} onClick={toggleMute}>
          {!mute ? <VolumeX /> : <Volume2 />}
        </Button>
        <Link to={'/'}>
          <Button
            className="p-3 text-lg flex gap-2"
            variant={'ghost'}
            onClick={resetState}
          >
            <Undo2 />
            <span>Leave</span>
          </Button>
        </Link>
      </div>
      <div className="relative">
        <img src={BG_URL} />
        {currentQuestion?.pokemonImg ? (
          <img
            src={currentQuestion?.pokemonImg}
            className={cn(
              'w-[45%] absolute top-[10%] left-[7%] brightness-0',
              validate ? 'brightness-100 transition duration-1000 ease-out' : ''
            )}
          />
        ) : (
          <Spinner className="w-[45%] h-[45%] absolute top-[25%] left-[7%] text-zinc-950" />
        )}
      </div>
      <AnswerPanel />
    </div>
  );
};
