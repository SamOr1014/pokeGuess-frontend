import { ArrowBigRight } from 'lucide-react';
import { Button } from '../../../../components/ui/button';
import { useQuizState } from '../../../../hooks/useQuizState';

export const RevealResult = () => {
  const { validate, fetchQuestion } = useQuizState((state) => state);

  return (
    <>
      {validate?.correct ? (
        <h3 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Correct! Well Done!
        </h3>
      ) : (
        <>
          <h3 className="text-center text-2xl font-extrabold tracking-tight">
            Sorry! The Correct Answer is:
          </h3>
          <span className="text-center text-4xl">{validate?.pokemonName}</span>
        </>
      )}
      <div className="grid place-items-center">
        <Button className="text-2xl p-5" size={'lg'} onClick={fetchQuestion}>
          Next
          <ArrowBigRight />
        </Button>
      </div>
    </>
  );
};
