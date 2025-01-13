import { FC } from "react";
import { ChevronLeftIcon, PlayIcon } from "../../../icons";

interface CounterProps {}

export const Counter: FC<CounterProps> = () => {
  return (
    <div className="flex items-center gap-5 py-5">
      <div className="size-10 grid place-content-center rounded-full bg-indigo-700">
        <PlayIcon className="size-6 text-white" />
      </div>
      <p className="flex-1 text-neutral-800 font-medium">3:20:00</p>
      <div className="size-10 grid place-content-center">
        <ChevronLeftIcon className="size-4 text-neutral-800" />
      </div>
    </div>
  );
};
