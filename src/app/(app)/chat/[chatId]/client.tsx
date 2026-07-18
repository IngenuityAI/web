"use client";

import { API } from "@/classes/API";
import { ChatInput } from "@/components/chat/ChatInput";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { ErrorSplash } from "@/components/splash/ErrorSplash";
import { LoadingSplash } from "@/components/splash/LoadingSplash";
import { useQuery } from "@tanstack/react-query";
import { LucideAsterisk } from "lucide-react";

interface IChatWindowProps {
  chatId: string;
}

export function Chat(props: IChatWindowProps) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["chat", props.chatId],
    queryFn: () => API.chats.id(props.chatId).get(),
  });

  if (isLoading || !data || !data.messages) return <LoadingSplash />;
  if (error)
    return <ErrorSplash title="Failed to fetch chat" message={error.message} />;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full p-8 flex flex-row gap-2 items-center">
        <LucideAsterisk className="size-8" />
        <h1 className="text-xl">Ingenuity AI</h1>
        <p className="text-xl text-muted-foreground">|</p>
        <h2 className="text-xl text-muted-foreground">{data.title}</h2>
      </div>
      <ChatWindow messages={data.messages} />
      <ChatInput />
    </div>
  );
}
