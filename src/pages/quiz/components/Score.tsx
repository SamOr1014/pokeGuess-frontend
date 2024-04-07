import { useQuizState } from '../../../hooks/useQuizState';

export const Score = () => {
  const { currentScore, currentQuestionCount } = useQuizState((s) => s);
  return (
    <span className="text-xl p-1">
      Score: {currentScore}/{currentQuestionCount}
    </span>
  );
};
