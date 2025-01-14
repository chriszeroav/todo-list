import { FC } from "react";
import { useAppStore } from "../../../store";
import { TasksOnApproval as TasksOnApprovalList } from "../../../reports";

interface TasksOnApprovalProps {}

export const TasksOnApproval: FC<TasksOnApprovalProps> = () => {
  const tasks = useAppStore((state) => state.tasks);

  const tasksOnApproval = tasks.filter((task) => task.status === "On approval");

  return (
    <div className="bg-green-200/30 rounded-3xl py-2 p-4 grid grid-rows-[auto_1fr]">
      <h2 className="text-green-500 text-xl font-medium py-3 px-4">
        En aprobacion
      </h2>
      {tasksOnApproval.length <= 0 ? (
        <div className="flex items-center justify-center">
          <span className="text-lg text-green-300 font-bold">
            No hay tareas en aprobacion
          </span>
        </div>
      ) : (
        <TasksOnApprovalList data={tasksOnApproval} />
      )}
    </div>
  );
};
