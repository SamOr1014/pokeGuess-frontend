import { useQuizState } from '../../../hooks/useQuizState';
import { AnswerButtons } from './AnswerButtons';
import { ArrowBigRightDash, AudioLines } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { createSoundObj } from '../../../utilities/createSoundObject';
import { useCallback } from 'react';

export const QandA = () => {
  const { currentQuestion, mute } = useQuizState();

  const playPokemonCry = useCallback(() => {
    currentQuestion &&
      !mute &&
      createSoundObj({ soundLink: currentQuestion.pokemonCry }).play();
  }, [currentQuestion, mute]);

  return (
    <>
      <h3 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Who is that pokemon?
      </h3>
      <div className="flex text-xl justify-center items-center">
        <span>Checkout its sound</span>
        <ArrowBigRightDash />
        <Button className="p-2" variant={'ghost'} onClick={playPokemonCry}>
          <AudioLines />
        </Button>
      </div>
      <AnswerButtons />
    </>
  );
};
