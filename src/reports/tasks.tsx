import { FC } from "react";
import { useAppStore } from "../store/app";

interface TasksProps {}

export const Tasks: FC<TasksProps> = () => {
  const tasks = useAppStore((state) => state.tasks);
  const completeTask = useAppStore((state) => state.completeTask);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {tasks.map((item, index) => (
        <div
          className="p-4 rounded-md bg-orange-400/5 flex flex-col gap-1"
          key={index}
        >
          <div className="flex items-center justify-between">
            <input type="checkbox" className="size-10 rounded-md" />
            <p className="text-xs text-blue-400">
              {item.completed ? "Completado" : "Pendiente"}
            </p>
          </div>

          <p className="font-medium text-lg flex-1">{item.name}</p>

          <button className="bg-red-500 py-2 px-6 rounded-md font-medium text-sm">
            Eliminar
          </button>
        </div>
      ))}
    </section>
  );
};
