import { FC } from "react";
import { useAppStore } from "../../../store";
import { TasksDone as TasksDoneList } from "../../../reports";

interface TasksDoneProps {}

export const TasksDone: FC<TasksDoneProps> = () => {
  const tasks = useAppStore((state) => state.tasks);

  const tasksDone = tasks.filter((task) => task.status === "Done");

  return (
    <div className="bg-pink-200/30 rounded-3xl py-2 p-4 grid grid-rows-[auto_1fr]">
      <h2 className="text-pink-500 text-xl font-medium py-3 px-4">
        Terminadas
      </h2>
      {tasksDone.length <= 0 ? (
        <div className="flex items-center justify-center">
          <span className="text-lg text-pink-300 font-bold">
            No hay tareas terminadas
          </span>
        </div>
      ) : (
        <TasksDoneList data={tasksDone} />
      )}
    </div>
  );
};
