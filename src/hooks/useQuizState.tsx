import { create } from 'zustand';
import { PokeGuessInstance } from '../utilities/axiosInstance';

type PokemonQuestion = {
  pokemonId: number;
  pokemonName: string;
  pokemonCry: string;
  pokemonImg: string;
  pokemonNameList: string[];
};

type ValidatedAnswer = {
  correct: boolean;
  image: string;
  pokemonName: string;
};

type Answer = {
  pokemonId: number;
  answer: string;
};

type QuizState = {
  isLoading: boolean;
  isError: boolean;
  currentQuestion?: PokemonQuestion;
  isSubmitting: boolean;
  validate?: ValidatedAnswer;
  currentScore: number;
  currentQuestionCount: number;
  mute: boolean;
};

const initialState: QuizState = {
  isLoading: false,
  isError: false,
  currentQuestion: undefined,
  isSubmitting: false,
  validate: undefined,
  currentScore: 0,
  currentQuestionCount: 0,
  mute: false,
};

type QuizStateAction = {
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
      addQuestionCount,
    } = get();

    try {
      updateQuizState({ ...initialState, currentScore, currentQuestionCount });
      set({ isLoading: true });
      const { data } = await PokeGuessInstance.get<PokemonQuestion>('/random');
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

      if (!pokemonId) throw new Error('No Pokemon ID');

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
