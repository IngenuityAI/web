import { redirect } from "next/navigation";
import { PromptBar } from "./client";
import { API } from "@/classes/API";

interface IPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function Page(props: IPageProps) {
  const { q } = await props.searchParams;

  // TODO: Create chat when q is provided

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl">What's your question?</h1>
      <PromptBar />
    </div>
  );
}
