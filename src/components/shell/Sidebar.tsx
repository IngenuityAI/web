"use client";

import {
  IconNode,
  LucideAsterisk,
  LucideHome,
  LucideHouse,
  LucideMessageSquare,
  LucideProps,
  LucideStar,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Component,
  ComponentType,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-20 h-full flex flex-col items-center relative">
      <LucideAsterisk className="size-12" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2">
        <TabButton
          icon={LucideMessageSquare}
          href="/workspace"
          isActive={pathname.startsWith("/workspace")}
        />
        <TabButton
          icon={LucideStar}
          href="/favorites"
          isActive={pathname.startsWith("/favorites")}
        />
      </div>
    </nav>
  );
}

interface ITabButtonProps {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
  isActive?: boolean;
}

function TabButton(props: ITabButtonProps) {
  return (
    <Button
      variant={props.isActive ? "default" : "ghost"}
      className={cn(
        "size-12 rounded-sm",
        props.isActive && "pointer-events-none",
      )}
      render={(p) => <Link {...p} href={props.href} />}
      nativeButton={false}
    >
      <props.icon className="size-6" />
    </Button>
  );
}
