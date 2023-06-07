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
  emptyResponseArray: () => void;
  counterResetting: () => void;
};

export const useQuestionsStore = create<Store & Actions>((set) => {
  // Obtener los datos del session storage, si están disponibles
  const storedName = sessionStorage.getItem('name');
  const storedPunctuation = sessionStorage.getItem('punctuation');

  // Estado inicial con datos del session storage o valores predeterminados
  const initialState: Store = {
    name: storedName || '',
    punctuation: storedPunctuation ? parseInt(storedPunctuation) : 0,
    isIdentified: storedName ? true : false,
    isFinished: true,
    userAnswers: [],
  };

  return {
    ...initialState,
    saveUserName: (data) => {
      // Guardar en el session storage
      sessionStorage.setItem('name', data);
      set({
        name: data,
        isIdentified: true,
      });
    },
    saveAnswers: (data) => {
      set((state) => ({
        userAnswers: [...state.userAnswers, data],
      }));
    },
    increaseScore: () => {
      set((state) => ({
        punctuation: state.punctuation + 1,
        isFinished: state.punctuation + 1 === questions.length,
      }));
    },
    emptyResponseArray: () => {
      set(() => ({
        userAnswers: [],
      }));
    },
    counterResetting: () => {
      set(() => ({
        punctuation: 0,
      }));
    },
  };
});
