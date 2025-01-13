import { FC } from "react";
import { Menu, Counter, ProfileSettings } from "./components/layout";
import { AddTask } from "./forms";
import { TasksPending } from "./components/todo";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <main className="grid grid-cols-[250px_1fr] gap-10 min-h-dvh p-5">
      <Menu Counter={Counter} ProfileSettings={ProfileSettings} />
      <section className="grid grid-rows-[auto_1fr] gap-8">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">Lista de tareas</h1>
          <AddTask />
        </header>
        <div className="grid grid-cols-4 gap-10">
          <TasksPending />
          <div className="bg-violet-200/30 rounded-md py-2 px-4">Hola</div>
          <div className="bg-green-200/30 rounded-md py-2 px-4">Hola</div>
          <div className="bg-pink-200/30 rounded-md py-2 px-4">Hola</div>
        </div>
      </section>
    </main>
  );
};
