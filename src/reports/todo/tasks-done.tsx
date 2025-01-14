import { FC } from "react";
import { Task } from "../../types/app";
import {
  InProgressIcon,
  OnApprovalIcon,
  PendingIcon,
  TrashIcon,
} from "../../icons";
import { useAppStore } from "../../store";

interface TasksDoneProps {
  data: Task[];
}

export const TasksDone: FC<TasksDoneProps> = ({ data }) => {
  const updateStatus = useAppStore((state) => state.updateTask);
  const deleteTask = useAppStore((state) => state.deleteTask);

  return (
    <div className="flex flex-col gap-2">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-neutral-50 shadow-sm p-4 rounded-2xl flex flex-col gap-2"
        >
          <h3 className="text-sm">{item.name}</h3>
          <p className="text-neutral-400 text-xs">{item.created_at}</p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => updateStatus(item.id, "To do")}
              className="bg-amber-200/90 size-8 rounded-md flex items-center justify-center group hover:bg-amber-300/60 transition-colors"
            >
              <PendingIcon className="size-5 group-hover:animate-jiggle" />
            </button>
            <button
              onClick={() => updateStatus(item.id, "In progress")}
              className="bg-violet-200/90 size-8 rounded-md flex items-center justify-center group hover:bg-violet-300/60 transition-colors"
            >
              <InProgressIcon className="size-5 group-hover:animate-jiggle" />
            </button>
            <button
              onClick={() => updateStatus(item.id, "On approval")}
              className="bg-green-200/90 size-8 rounded-md flex items-center justify-center group hover:bg-green-300/60 transition-colors"
            >
              <OnApprovalIcon className="size-5 group-hover:animate-jiggle" />
            </button>

            <button
              onClick={() => deleteTask(item.id)}
              className="bg-red-200/90 size-8 rounded-md flex items-center justify-center group hover:bg-red-300/60 transition-colors"
            >
              <TrashIcon className="size-5 group-hover:animate-jiggle" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
