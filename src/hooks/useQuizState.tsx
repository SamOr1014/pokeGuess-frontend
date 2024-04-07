import { create } from 'zustand';

type QuizState = {
    startQuiz: boolean;
};

type QuizStateAction = {
    updateQuizState: (state: boolean) => void;
};

export const useQuizState = create<QuizState & QuizStateAction>((set) => ({
    startQuiz: false,
    updateQuizState: (newQuizState) => set({ startQuiz: newQuizState }),
}));
