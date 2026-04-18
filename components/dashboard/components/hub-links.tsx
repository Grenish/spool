import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { PenIcon } from "@phosphor-icons/react/dist/ssr";
import DeleteButton from "./delete-button";

export default function HubLinks({
  linkName,
  linkUrl,
  linkFavi,
  linkDesc,
}: {
  linkName: string;
  linkFavi?: string;
  linkUrl: string;
  linkDesc: string;
}) {
  const initial = linkName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <Item className="bg-card">
      <ItemMedia>
        <Avatar className="size-12">
          <AvatarImage src={linkFavi || linkUrl} alt={linkDesc} />
          <AvatarFallback>{initial}</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{linkName}</ItemTitle>
        <ItemDescription>{linkDesc}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant={"default"} size={"icon-sm"}>
          <PenIcon />
        </Button>
        <DeleteButton iconOnly size={"icon-sm"} />
      </ItemActions>
    </Item>
  );
}
