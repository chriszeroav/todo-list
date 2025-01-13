import { FC } from "react";
import { Menu } from "./components/layout";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <main className="grid grid-cols-[250px_1fr] min-h-dvh p-5">
      <Menu />
    </main>
  );
};
