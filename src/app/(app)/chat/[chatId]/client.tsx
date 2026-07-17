"use client";

import { API } from "@/classes/API";
import { ErrorSplash } from "@/components/splash/ErrorSplash";
import { LoadingSplash } from "@/components/splash/LoadingSplash";
import { useQuery } from "@tanstack/react-query";

interface IChatWindowProps {
  chatId: string;
}

export function ChatWindow(props: IChatWindowProps) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["chat", props.chatId],
    queryFn: () => API.chats.id(props.chatId).get(),
  });

  if (isLoading) return <LoadingSplash />;
  if (error)
    return <ErrorSplash title="Failed to fetch chat" message={error.message} />;

  return <p>{data?.messages?.[0].content}</p>;
}
