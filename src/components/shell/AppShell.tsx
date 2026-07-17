import { PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";

export function AppShell(props: PropsWithChildren<{}>) {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-row bg-secondary p-2 pl-0">
      <Sidebar />
      <main className="w-full h-full bg-background rounded-md">
        {props.children}
      </main>
    </div>
  );
}
