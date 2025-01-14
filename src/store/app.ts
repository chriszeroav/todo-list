import { create } from "zustand";
import { Task, TaskStatus } from "../types/app";
import { v4 as uuid } from "uuid";
import { persist } from "zustand/middleware";

interface State {
  tasks: Task[];
  createTask: (value: string) => void;
  updateTask: (id: string, status: TaskStatus) => void;
  deleteTask: (id: string) => void;
}

export const useAppStore = create<State>()(
  persist(
    (set, get) => {
      return {
        tasks: [],
        createTask: (value) => {
          const { tasks } = get();

          const newTask: Task = {
            id: uuid(),
            name: value,
            status: "To do",
            created_at: new Date().toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
          };
          const newTasks = [...tasks, newTask];
          set({ tasks: newTasks });
        },
        updateTask: (id, status) => {
          const { tasks } = get();
          const newTasks = structuredClone(tasks);
          const taskIndex = newTasks.findIndex((task) => task.id === id);
          newTasks[taskIndex] = {
            ...newTasks[taskIndex],
            status,
          };
          set({ tasks: newTasks });
        },

        deleteTask: (id: string) => {
          const { tasks } = get();
          const newTasks = [...tasks].filter((item) => item.id !== id);
          set({ tasks: newTasks });
        },
      };
    },
    {
      name: "app",
    }
  )
);
