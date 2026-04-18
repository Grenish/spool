import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  CaretRightIcon,
  InstagramLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function Integrations() {
  return (
    <div className="min-h-dvh w-full flex items-start justify-center">
      <div className="max-w-3xl w-full py-5">
        <FieldSet>
          <Field>
            <FieldGroup>
              <Field>
                <Item className="bg-card">
                  <ItemContent>
                    <ItemTitle className="text-3xl">Integrations</ItemTitle>
                    <ItemDescription>
                      Connect your social content, analytics, and monetization
                      tools in one place. Manage posts, compare performance,
                      create shoppable content, and auto-reply to comments while
                      strengthening connections with your supporters.
                    </ItemDescription>
                  </ItemContent>
                </Item>
                <Item className="bg-card">
                  <ItemMedia variant={"icon"}>
                    <InstagramLogoIcon />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Instagram</ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant={"outline"} size={"xs"}>
                      Connect <CaretRightIcon />
                    </Button>
                  </ItemActions>
                </Item>
                <Item className="bg-card">
                  <ItemMedia variant={"icon"}>
                    <XLogoIcon />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>X (Formerly Twitter)</ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant={"outline"} size={"xs"}>
                      Connect <CaretRightIcon />
                    </Button>
                  </ItemActions>
                </Item>
              </Field>
            </FieldGroup>
          </Field>
        </FieldSet>
      </div>
    </div>
  );
}
