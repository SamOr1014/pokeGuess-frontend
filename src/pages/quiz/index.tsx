import { useQuizState } from '../../hooks/useQuizState';
import { useEffect } from 'react';
import { AnswerPanel } from './components/AnswerPanel';
import { QuizToolbar } from './components/Toolbar';
import { PokemonDisplay } from './components/PokemonDisplay';

export const Quiz = () => {
  const { fetchQuestion, isLoading, currentQuestion, isError } = useQuizState(
    (s) => s
  );

  // when direct enter /quiz, fetch automatically
  useEffect(() => {
    if (!isLoading && !currentQuestion && !isError) {
      fetchQuestion();
    }
  }, []);

  return (
    <div
      data-testid={'quiz-container'}
      className="flex-1 flex flex-col gap-3 w-full max-h-full p-6 overflow-y-auto"
    >
      <QuizToolbar />
      <PokemonDisplay />
      <AnswerPanel />
    </div>
  );
};
