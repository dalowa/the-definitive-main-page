import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SearchStore {
  selectedEngineIndex: number;
  searchHistory: string[];
  changeSelectedEngine: (index: number) => void;
  addToHistory: (query: string) => void;
  clearHistory: () => void;
}

export const useSearchStore = create(
  persist<SearchStore>(
    (set, get) => ({
      selectedEngineIndex: 0,
      searchHistory: [],
      
      changeSelectedEngine: (index: number) => {
        set({ selectedEngineIndex: index });
      },
      
      addToHistory: (query: string) => {
        const { searchHistory } = get();
        if (query.trim() && !searchHistory.includes(query)) {
          const newHistory = [query, ...searchHistory].slice(0, 10); // Keep only last 10 searches
          set({ searchHistory: newHistory });
        }
      },
      
      clearHistory: () => {
        set({ searchHistory: [] });
      }
    }),
    {
      name: "search-settings",
      version: 1,
    }
  )
);