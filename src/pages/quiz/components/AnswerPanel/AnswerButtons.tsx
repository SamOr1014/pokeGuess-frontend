import { useQuizState } from '../../../../hooks/useQuizState';
import { Button } from '../../../../components/ui/button';
import { Skeleton } from '../../../../components/ui/skeleton';
import { useEffect } from 'react';
import { createSoundObj } from '../../../../utilities/createSoundObject';
import sound from '../../../../asset/whos-that-pokemon_.mp3';
import pokeBall from '/pokeball.svg';

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
  const { currentQuestion, isLoading, validateAnswer, mute } = useQuizState(
    (state) => state
  );

  useEffect(() => {
    if (currentQuestion && !mute) {
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
            className="md:text-3xl text-lg p-8 relative"
            key={name}
            onClick={() => validateAnswer(name)}
          >
            {name}
            <img
              src={pokeBall}
              className="w-[30px] h-[30px] -rotate-12 absolute -top-[15%] -left-[2%] animate-wiggle"
            />
            <img
              src={pokeBall}
              className="w-[30px] h-[30px] rotate-12 absolute -top-[15%] -right-[2%] animate-wiggle"
            />
          </Button>
        ))
      )}
    </div>
  );
};
