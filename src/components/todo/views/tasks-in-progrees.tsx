import { FC } from "react";
import { useAppStore } from "../../../store";
import { TasksInProgress as TasksInProgressList } from "../../../reports";

interface TasksInProgressProps {}

export const TasksInProgress: FC<TasksInProgressProps> = () => {
  const tasks = useAppStore((state) => state.tasks);

  const tasksInProgress = tasks.filter((task) => task.status === "In progress");

  return (
    <div className="bg-violet-200/30 rounded-3xl p-4 grid grid-rows-[auto_1fr]">
      <h2 className="text-violet-500 text-xl font-medium py-3 px-4">
        En proceso
      </h2>
      {tasksInProgress.length <= 0 ? (
        <div className="flex items-center justify-center">
          <span className="text-lg text-violet-300 font-bold">
            No hay tareas en proceso
          </span>
        </div>
      ) : (
        <TasksInProgressList data={tasksInProgress} />
      )}
    </div>
  );
};
