import { create } from 'zustand';
import { PokeGuessInstance } from '../utilities/axiosInstance';

export type PokemonQuestion = {
  pokemonId: number;
  pokemonCry: string;
  pokemonImg: string;
  pokemonNameList: string[];
};

export type ValidatedAnswer = {
  correct: boolean;
  image: string;
  pokemonName: string;
};

export type Answer = {
  pokemonId: number;
  answer: string;
};

export type QuizState = {
  isLoading: boolean;
  isError: boolean;
  currentQuestion?: PokemonQuestion;
  isSubmitting: boolean;
  validate?: ValidatedAnswer;
  currentScore: number;
  currentQuestionCount: number;
  mute: boolean;
};

export const initialState: QuizState = {
  isLoading: false,
  isError: false,
  currentQuestion: undefined,
  isSubmitting: false,
  validate: undefined,
  currentScore: 0,
  currentQuestionCount: 0,
  mute: false,
};

export type QuizStateAction = {
  updateQuizState: (state: Partial<QuizState>) => void;
  fetchQuestion: () => void;
  validateAnswer: (answer: string) => void;
  resetState: () => void;
  addScore: () => void;
  addQuestionCount: () => void;
  toggleMute: () => void;
};

export const useQuizState = create<QuizState & QuizStateAction>((set, get) => ({
  ...initialState,
  updateQuizState: (updatedState) => set(updatedState),
  fetchQuestion: async () => {
    const {
      updateQuizState,
      currentScore,
      currentQuestionCount,
      mute,
      addQuestionCount,
    } = get();

    try {
      updateQuizState({
        ...initialState,
        currentScore,
        currentQuestionCount,
        mute,
      });
      set({ isLoading: true });
      const { data } =
        await PokeGuessInstance.get<PokemonQuestion>('/question');
      addQuestionCount();
      set({ isLoading: false, currentQuestion: data });
    } catch (e) {
      set({ isLoading: false, isError: true });
    }
  },
  validateAnswer: async (answer) => {
    try {
      set({ isSubmitting: true });
      const pokemonId = get().currentQuestion?.pokemonId;

      if (!pokemonId) throw new Error('Invalid Pokemon ID');

      const body: Answer = {
        answer,
        pokemonId: pokemonId,
      };

      const { data } = await PokeGuessInstance.post<ValidatedAnswer>(
        '/validate',
        body
      );
      if (data.correct) {
        get().addScore();
      }
      set({ isSubmitting: false, validate: data });
    } catch (e) {
      set({ isSubmitting: false, isError: true });
    }
  },
  resetState: () => {
    set(initialState);
  },
  addScore: () => set((prev) => ({ currentScore: prev.currentScore + 1 })),
  addQuestionCount: () =>
    set((prev) => ({ currentQuestionCount: prev.currentQuestionCount + 1 })),
  toggleMute: () =>
    set((prev) => ({
      mute: !prev.mute,
    })),
}));
