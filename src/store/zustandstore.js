// src/store/zustandstore.js
import { create } from "zustand";

export const useCounterStore = create((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ counter: state.counter + 1 }));
  },
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
  decrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ counter: state.counter - 1 }));
  },
  getCounter: () => set((state) => state.counter),
}));
