import { create } from "zustand";

type Store = {
  heroIsVisible: boolean;
  setHeroIsVisible: (value: boolean) => void;
};

export const useStore = create<Store>()((set) => ({
  heroIsVisible: true,
  setHeroIsVisible: (value) => set({ heroIsVisible: value }),
}));
