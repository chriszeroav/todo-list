import { FC } from "react";
import { useAppStore } from "../../../store";
import { TasksPending as TasksPendingList } from "../../../reports";

interface TasksPendingProps {}

export const TasksPending: FC<TasksPendingProps> = () => {
  const tasks = useAppStore((state) => state.tasks);

  const tasksPending = tasks.filter((task) => task.status === "To do");

  return (
    <div className="bg-amber-200/30 rounded-3xl py-2 px-4 grid grid-rows-[auto_1fr]">
      <h2 className="text-amber-500 text-xl font-medium py-3 px-4">
        Por Hacer
      </h2>
      <TasksPendingList data={tasksPending} />
    </div>
  );
};

export default TasksPending;
