import { create } from 'zustand';
import { Quest } from '../interfaces/quest';
import { questions } from '../utils/questions';

type Store = {
  name: string;
  punctuation: number;
  isIdentified: boolean;
  isFinished: boolean;
  userAnswers: Quest[];
};

type Actions = {
  saveUserName: (data: string) => void;
  saveAnswers: (data: Quest) => void;
  increaseScore: () => void;
  endTest: () => void;
  emptyResponseArray: () => void;
};

export const useQuestionsStore = create<Store & Actions>((set) => ({
  name: '',
  punctuation: 0,
  isIdentified: false,
  isFinished: true,
  userAnswers: [],
  saveUserName: (data) =>
    set({
      name: data,
      isIdentified: true,
    }),
  saveAnswers: (data) =>
    set((state) => ({
      userAnswers: [...state.userAnswers, data],
    })),
  increaseScore: () =>
    set((state) => ({
      punctuation: state.punctuation + 1,
      isFinished: state.punctuation === questions.length && true,
    })),
  endTest: () =>
    set(() => ({
      isFinished: true,
    })),
  emptyResponseArray: () =>
    set((state) => ({
      userAnswers: state.userAnswers.splice(0,0),
    })),
}));
