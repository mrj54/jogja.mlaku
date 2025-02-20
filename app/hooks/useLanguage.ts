import { create } from 'zustand';

type LanguageStore = {
  language: 'en' | 'id';
  setLanguage: (language: 'en' | 'id') => void;
};

export const useLanguage = create<LanguageStore>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
}));