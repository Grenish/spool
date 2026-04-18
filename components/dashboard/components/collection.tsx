import { Card, CardContent, CardHeader } from "@/components/ui/card";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { PenIcon } from "@phosphor-icons/react/dist/ssr";
import DeleteButton from "./delete-button";

type CollectionCardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function CollectionCard({
  title,
  description,
  children,
}: CollectionCardProps) {
  return (
    <Card>
      <CardHeader>
        <Item className="px-0 py-0">
          <ItemContent>
            <ItemTitle className="text-xl font-semibold">{title}</ItemTitle>
            <ItemDescription>{description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size={"icon-sm"}>
              <PenIcon />
            </Button>
            <DeleteButton iconOnly size={"icon-sm"} />
          </ItemActions>
        </Item>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
