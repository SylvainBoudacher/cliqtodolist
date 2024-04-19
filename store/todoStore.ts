import { create } from "zustand";
import { Todo } from "./../model/todo.model";

type Action = {
  items: Todo[];
  addItem(item: Todo): void;
  toggleItem(item: Todo): void;
  removeItem(item: Todo): void;
};

export const useTodoStore = create<Action>((set) => ({
  items: [],
  addItem: (item: Todo) => set((state) => ({ items: [...state.items, item] })),
  toggleItem: (item) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === item.id ? { ...i, status: !i.status } : i
      ),
    })),
  removeItem: (item) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== item.id) })),
}));
