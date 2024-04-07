import { useQuizState } from '../../../hooks/useQuizState';
import { Button } from '../../../components/ui/button';
import { Skeleton } from '../../../components/ui/skeleton';
import { useEffect } from 'react';
import { createSoundObj } from '../../../utilities/createSoundObject';
import sound from '../../../asset/whos-that-pokemon_.mp3';

const ButtonSkeletons = () => {
  return (
    <>
      <Skeleton className="h-[42px] rounded-lg w-full" />
      <Skeleton className="h-[42px] rounded-lg w-full" />
      <Skeleton className="h-[42px] rounded-lg w-full" />
      <Skeleton className="h-[42px] rounded-lg w-full" />
    </>
  );
};

export const AnswerButtons = () => {
  const { currentQuestion, isLoading, validateAnswer } = useQuizState(
    (state) => state
  );

  useEffect(() => {
    if (currentQuestion) {
      const audio = createSoundObj({ soundLink: sound });
      audio.play();
      return () => audio.pause();
    }
  }, [currentQuestion]);

  return (
    <div className="grid grid-cols-2 md:gap-10 gap-6">
      {isLoading || !currentQuestion ? (
        <ButtonSkeletons />
      ) : (
        currentQuestion.pokemonNameList.map((name) => (
          <Button
            className="md:text-xl text-lg"
            key={name}
            onClick={() => validateAnswer(name)}
          >
            {name}
          </Button>
        ))
      )}
    </div>
  );
};
