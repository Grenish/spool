import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@phosphor-icons/react/dist/ssr";

type DeleteButtonProps = {
  iconOnly?: boolean;
  size?: React.ComponentProps<typeof Button>["size"];
  title?: string;
  desc?: string;
};

export default function DeleteButton({
  iconOnly = false,
  size,
  title = "Are you sure?",
  desc = "This action permanently deletes the link and its associated data. If you may need it later, consider disabling the link instead.",
}: DeleteButtonProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={"destructive"}
          size={size ?? (iconOnly ? "icon" : "default")}
          aria-label="Delete"
        >
          <TrashIcon />
          {!iconOnly ? "Delete" : null}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{desc}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant={"destructive"}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
