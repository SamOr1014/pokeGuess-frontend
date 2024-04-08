import { useQuizState } from '../../../../hooks/useQuizState';

export const Score = () => {
  const { currentScore, currentQuestionCount } = useQuizState((s) => s);
  return (
    <span data-testid={'scoreboard'} className="text-xl p-1">
      Score: {currentScore}/{currentQuestionCount}
    </span>
  );
};
