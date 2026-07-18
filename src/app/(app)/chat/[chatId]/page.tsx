import { API } from "@/classes/API";
import {
  dehydrate,
  hydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Chat } from "./client";

interface IPageProps {
  params: Promise<{
    chatId: string;
  }>;
}

export default async function Page(props: IPageProps) {
  const { chatId } = await props.params;

  // We need to create a new QueryClient for each request to avoid sharing state between requests
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["chat", chatId],
    queryFn: () => API.chats.id(chatId).get(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Chat chatId={chatId} />
    </HydrationBoundary>
  );
}
