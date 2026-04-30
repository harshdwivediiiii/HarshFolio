import { create } from 'zustand'

interface AppState {
  isAboutOpen: boolean;
  setAboutOpen: (isOpen: boolean) => void;
  isResumeOpen: boolean;
  setResumeOpen: (isOpen: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isAboutOpen: false,
  setAboutOpen: (isOpen) => set({ isAboutOpen: isOpen }),
  isResumeOpen: false,
  setResumeOpen: (isOpen) => set({ isResumeOpen: isOpen }),
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
}));
