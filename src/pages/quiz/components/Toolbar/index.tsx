import { Undo2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/ui/button';
import { MuteButton } from './MuteButton';
import { Score } from './Score';
import { useQuizState } from '../../../../hooks/useQuizState';

export const QuizToolbar = () => {
  const { resetState } = useQuizState((s) => s);
  return (
    <div
      data-testid={'quiz-toolbar'}
      className="w-full flex flex-row justify-between items-center"
    >
      <Score />
      <MuteButton />
      <Link to={'/'}>
        <Button
          data-testid={'leave-quiz-button'}
          className="p-3 text-lg flex gap-2"
          variant={'ghost'}
          onClick={resetState}
        >
          <Undo2 />
          <span>Leave</span>
        </Button>
      </Link>
    </div>
  );
};
