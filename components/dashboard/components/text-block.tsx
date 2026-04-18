import { Card, CardContent } from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item";
import DeleteButton from "./delete-button";
import { Button } from "@/components/ui/button";
import { PenIcon } from "@phosphor-icons/react/dist/ssr";

export default function TextBlock() {
  return (
    <Card>
      <CardContent>
        <Item className="p-0">
          <ItemContent>
            <ItemTitle className="font-light">#1</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button size={"icon-sm"}>
              <PenIcon />
            </Button>
            <DeleteButton iconOnly size={"icon-sm"} />
          </ItemActions>
        </Item>
        <h2 className="text-2xl font-bold mb-2">Hello World</h2>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </CardContent>
    </Card>
  );
}
