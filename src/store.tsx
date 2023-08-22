import { create } from 'zustand'

interface AppState {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}

export const useAppStore = create<AppState>((set) => ({
    isDarkTheme: false,
    toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
}));
