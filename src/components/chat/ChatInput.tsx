import { InputGroup, InputGroupButton } from "@/components/ui/input-group";
import { Textarea } from "../ui/textarea";
import { ArrowUpIcon } from "lucide-react";

export function ChatInput() {
  return (
    <InputGroup className="max-w-200 mb-4 flex-col p-2 mt-2">
      <Textarea
        placeholder="Type your message..."
        className="w-full border-none resize-none focus:ring-offset-0 focus-visible:ring-0 max-h-16 min-h-4"
        style={{
          backgroundColor: "transparent",
        }}
      />
      <div className="flex w-full flex-row mt-2">
        <InputGroupButton
          type="submit"
          variant="default"
          size="icon-sm"
          className="ml-auto"
        >
          <ArrowUpIcon />
        </InputGroupButton>
      </div>
    </InputGroup>
  );
}
