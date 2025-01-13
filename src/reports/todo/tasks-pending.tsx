import { FC } from "react";
import { Task } from "../../types/app";
import {
  DoneIcon,
  InProgressIcon,
  OnApprovalIcon,
  TrashIcon,
} from "../../icons";
import { useAppStore } from "../../store";

interface TasksPendingProps {
  data: Task[];
}

export const TasksPending: FC<TasksPendingProps> = ({ data }) => {
  const updateStatus = useAppStore((state) => state.updateTask);

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
              onClick={() => updateStatus(item.id, "In progress")}
              className="bg-violet-200/90 size-8 rounded-md flex items-center justify-center"
            >
              <InProgressIcon className="size-5" />
            </button>
            <button
              onClick={() => updateStatus(item.id, "On approval")}
              className="bg-green-200/90 size-8 rounded-md flex items-center justify-center"
            >
              <OnApprovalIcon className="size-5" />
            </button>
            <button
              onClick={() => updateStatus(item.id, "Done")}
              className="bg-pink-200/90 size-8 rounded-md flex items-center justify-center"
            >
              <DoneIcon className="size-5" />
            </button>
            <button className="bg-red-200/90 size-8 rounded-md flex items-center justify-center">
              <TrashIcon className="size-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TasksPending;
