import { FC } from "react";
import {
  AnalyticIcon,
  BoardIcon,
  ChevronDown,
  ChevronLeftIcon,
  ClockIcon,
  PlayIcon,
  ProjectIcon,
  SettingIcon,
} from "../../../icons";

interface MenuProps {}

export const Menu: FC<MenuProps> = () => {
  return (
    <section className="divide-y-[1px] text-neutral-400 flex flex-col">
      <div className="flex items-center gap-5 py-5">
        <div className="size-10 grid place-content-center rounded-full bg-indigo-700">
          <PlayIcon className="size-6 text-white" />
        </div>
        <p className="flex-1 text-neutral-800 font-medium">3:20:00</p>
        <div className="size-10 grid place-content-center">
          <ChevronLeftIcon className="size-4 text-neutral-800" />
        </div>
      </div>

      <div className="flex-1 py-5 flex flex-col">
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

      <div className="flex items-center gap-2 py-5">
        <img
          className="size-8 rounded-full object-cover"
          src="/profile.jpg"
          alt="Perfil"
        />
        <span className="text-sm font-light flex-1">Christopher Romero</span>
        <ChevronDown className="size-4 text-neutral-400" />
      </div>
    </section>
  );
};

export default Menu;
