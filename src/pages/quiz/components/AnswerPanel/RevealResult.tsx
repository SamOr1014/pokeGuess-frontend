import { ArrowBigRight } from 'lucide-react';
import { Button } from '../../../../components/ui/button';
import { useQuizState } from '../../../../hooks/useQuizState';

export const RevealResult = () => {
  const { validate, fetchQuestion } = useQuizState((state) => state);

  return (
    <div className="flex flex-col gap-12">
      {validate?.correct ? (
        <h3 className="text-center scroll-m-20 lg:text-4xl text-xl font-extrabold tracking-tight lg:text-5xl">
          Correct! Well Done!
        </h3>
      ) : (
        <>
          <h3 className="text-center lg:text-2xl lg-base font-extrabold tracking-tight">
            Sorry! The Correct Answer is:
          </h3>
          <span className="text-center lg:text-5xl text-3xl">
            {validate?.pokemonName}
          </span>
        </>
      )}
      <div className="grid place-items-center">
        <Button
          data-testid={'next-question-button'}
          className="lg:text-2xl text-base p-3"
          size={'lg'}
          onClick={fetchQuestion}
        >
          Next
          <ArrowBigRight />
        </Button>
      </div>
    </div>
  );
};
