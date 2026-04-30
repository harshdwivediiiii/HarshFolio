import { create } from 'zustand'

interface AppState {
  isAboutOpen: boolean;
  setAboutOpen: (isOpen: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isAboutOpen: false,
  setAboutOpen: (isOpen) => set({ isAboutOpen: isOpen }),
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
}));
