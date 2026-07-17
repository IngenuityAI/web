import { AppShell } from "@/components/shell/AppShell";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren<{}>) {
  return <AppShell>{props.children}</AppShell>;
}
