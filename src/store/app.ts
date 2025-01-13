import { create } from "zustand";
import { Task } from "../types/app";
import { v4 as uuid } from "uuid";

interface State {
  tasks: Task[];
  createTask: (value: string) => void;
  completeTask: (id: string) => void;
}

export const useAppStore = create<State>((set, get) => {
  return {
    tasks: [],
    createTask: (value) => {
      const { tasks } = get();
      const newTask: Task = { id: uuid(), name: value, completed: false };
      const newTasks = [...tasks, newTask];
      set({ tasks: newTasks });
    },
    completeTask: (id: string) => {
      const { tasks } = get();
      const newTasks = structuredClone(tasks);
      const taskIndex = newTasks.findIndex((item) => item.id === id);
      newTasks[taskIndex] = {
        ...newTasks[taskIndex],
        completed: true,
      };
      set({ tasks: newTasks });
    },
  };
});
