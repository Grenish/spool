import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  CaretRightIcon,
  GoogleLogoIcon,
  InstagramLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function Integrations() {
  const Connection = [
    {
      id: 1,
      icon: <InstagramLogoIcon weight="duotone" />,
      name: "Instagram",
      desc: "Link your Instagram account to automatically import and manage your latest posts.",
    },
    {
      id: 2,
      icon: <XLogoIcon weight="duotone" />,
      name: "X (Formerly Twitter)",
      desc: "Sync your X profile to auto-share your links and track engagement.",
    },
    // {
    //   id: 3,
    //   icon: <GoogleLogoIcon weight="duotone" />,
    //   name: "Google Analytics",
    //   desc: "Track your link clicks and visitor analytics in real-time.",
    // },
  ];
  return (
    <div className="min-h-dvh w-full flex items-center justify-center">
      <div className="max-w-3xl w-full py-5">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Integrations.</h2>
          <p className="text-muted-foreground">
            Connect your favorite tools and platforms to supercharge your links.
          </p>
        </div>
        <div className="mt-5">
          <Card>
            <CardContent>
              {Connection.map((con) => (
                <Item key={con.id} className="px-0">
                  <ItemMedia variant={"icon"}>{con.icon}</ItemMedia>
                  <ItemContent>
                    <ItemTitle>{con.name}</ItemTitle>
                    <ItemDescription>{con.desc}</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button variant={"outline"}>Connect</Button>
                  </ItemActions>
                </Item>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
