import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PenIcon } from "@phosphor-icons/react/dist/ssr";

type EditButtonProps = {
  title: string;
  desc: string;
  children: React.ReactElement;
  iconOnly?: boolean;
  size?: React.ComponentProps<typeof Button>["size"];
  variant?: React.ComponentProps<typeof Button>["variant"];
};

export default function EditButton({
  title,
  desc,
  children,
  iconOnly = false,
  size,
  variant,
}: EditButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          size={size ?? (iconOnly ? "icon" : "default")}
          aria-label="Edit"
        >
          <PenIcon />
          {!iconOnly ? "Edit" : null}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
