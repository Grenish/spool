import ThemeToggleButton from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export default function MeDashboard() {
  return (
    <div className="min-h-dvh w-full flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto">
        <div className="flex items-center justify-between w-full">
          <div>
            <h4 className="text-xl font-semibold">Spool.</h4>
            <h3 className="text-2xl">Hello John Doe,</h3>
          </div>
          <div className="space-x-2">
            <ThemeToggleButton />
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h2 className="font-semibold">Quick Links</h2>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Card>
              <CardHeader>
                <CardTitle>Spoolink</CardTitle>
                <CardDescription>
                  Shorten your links and share it with your audience numerious
                  number of times with advanced settings.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Off to Spoolink</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Spoohub</CardTitle>
                <CardDescription>
                  Create your page with all your links in one place with
                  complete freedom of your design. Make it yours.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Off to Spoolhub</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h2 className="font-semibold">Quick Analysis Summary</h2>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            <Card>
              <CardHeader>
                <CardTitle>Clicks</CardTitle>
                <CardDescription>
                  Number of clicks to your spoolink
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Item className="px-0 p-0">
                  <ItemMedia>
                    <Avatar className="size-8">
                      <AvatarFallback>SP</AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Spoolink 1</ItemTitle>
                    <ItemDescription>
                      Lorem ipsum dolor sit amet...
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>441</ItemActions>
                </Item>
                <Item className="px-0 p-0">
                  <ItemMedia>
                    <Avatar className="size-8">
                      <AvatarFallback>SP</AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Spoolink 2</ItemTitle>
                    <ItemDescription>
                      Lorem ipsum dolor sit amet...
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>441</ItemActions>
                </Item>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Spoolhub</CardTitle>
                <CardDescription>
                  Number of clicks to your spoolink
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Item className="px-0 p-0">
                  <ItemContent>
                    <ItemTitle>Visitors</ItemTitle>
                  </ItemContent>
                  <ItemActions>13k</ItemActions>
                </Item>
                <Item className="px-0 p-0">
                  <ItemContent>
                    <ItemTitle>Page View</ItemTitle>
                  </ItemContent>
                  <ItemActions>12k</ItemActions>
                </Item>
                <Item className="px-0 p-0">
                  <ItemContent>
                    <ItemTitle>Bounce Rate</ItemTitle>
                  </ItemContent>
                  <ItemActions>75%</ItemActions>
                </Item>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Countries</CardTitle>
                <CardDescription>Visitors contries</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Item className="px-0 p-0">
                  <ItemContent>
                    <ItemTitle>India</ItemTitle>
                  </ItemContent>
                  <ItemActions>20%</ItemActions>
                </Item>
                <Item className="px-0 p-0">
                  <ItemContent>
                    <ItemTitle>Iraq</ItemTitle>
                  </ItemContent>
                  <ItemActions>10%</ItemActions>
                </Item>
                <Item className="px-0 p-0">
                  <ItemContent>
                    <ItemTitle>Mexico</ItemTitle>
                  </ItemContent>
                  <ItemActions>5%</ItemActions>
                </Item>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
