import { RevealResult } from './RevealResult';
import { useQuizState } from '../../../../hooks/useQuizState';
import { QandA } from './Q&A';
import { Spinner } from '../../../../components/Spinner';

export const AnswerPanel = () => {
  const { isSubmitting, validate } = useQuizState((s) => s);

  if (isSubmitting) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <Spinner className="h-[50px] w-[50px]" />
      </div>
    );
  }

  return (
    <div data-testid={'answer-panel'} className="flex flex-col gap-5 ">
      {validate ? <RevealResult /> : <QandA />}
    </div>
  );
};
