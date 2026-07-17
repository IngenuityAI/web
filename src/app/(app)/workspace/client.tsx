import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";

export function PromptBar() {
  return (
    <form>
      <ButtonGroup className="scale-110">
        <Input placeholder="Type a prompt..." size={48} name="q" />
        <Button type="submit" variant="default">
          <LucideSearch className="size-4" /> Search
        </Button>
      </ButtonGroup>
    </form>
  );
}
