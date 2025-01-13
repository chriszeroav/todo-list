import { FC } from "react";
import {
  AnalyticIcon,
  BoardIcon,
  ClockIcon,
  ProjectIcon,
  SettingIcon,
} from "../../../icons";

interface MenuProps {
  Counter: FC;
  ProfileSettings: FC;
}

export const Menu: FC<MenuProps> = ({ Counter, ProfileSettings }) => {
  return (
    <section className="divide-y-[1px] divide-neutral-200 grid grid-rows-[auto_1fr_auto]">
      <Counter />
      <div className="py-5 flex flex-col">
        <a
          href="#"
          className="flex items-center gap-4 p-4 rounded-md transition-colors hover:bg-neutral-100 relative"
        >
          <ClockIcon className="size-6 text-neutral-400" />
          <span className="text-base text-neutral-400">Cronometro</span>
          <div className="absolute top-1/2 -translate-y-1/2 right-7 size-2 rounded-full bg-red-400 animate-pulse" />
        </a>

        <a
          href="#"
          className="flex items-center gap-4 p-4 rounded-md transition-colors hover:bg-neutral-100 relative"
        >
          <BoardIcon className="size-6 text-indigo-500" />
          <span className="text-base text-indigo-900">Lista de Tareas</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-4 p-4 rounded-md transition-colors hover:bg-neutral-100 relative"
        >
          <ProjectIcon className="size-6 text-neutral-400" />
          <span className="text-base text-neutral-400">Proyectos</span>
          <div className="absolute top-1/2 -translate-y-1/2 right-7 size-2 rounded-full bg-red-400 animate-pulse" />
        </a>

        <a
          href="#"
          className="flex items-center gap-4 p-4 rounded-md transition-colors hover:bg-neutral-100 relative"
        >
          <AnalyticIcon className="size-6 text-neutral-400" />
          <span className="text-base text-neutral-400">Analiticas</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-4 p-4 rounded-md transition-colors hover:bg-neutral-100 relative"
        >
          <SettingIcon className="size-6 text-neutral-400" />
          <span className="text-base text-neutral-400">Ajustes</span>
        </a>
      </div>
      <ProfileSettings />
    </section>
  );
};

export default Menu;
