import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Item, ItemActions, ItemContent } from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";

export default function Themes() {
  return (
    <div className="w-full h-dvh overflow-hidden flex items-start justify-center relative">
      {/* Message */}
      <div className="inset-0 absolute bg-linear-to-b from-transparent to-background z-50 flex items-center justify-center">
        <Card className="max-w-xl w-full">
          <CardHeader>
            <CardTitle>Work In Progress</CardTitle>
            <CardDescription>Still working on this plan.</CardDescription>
          </CardHeader>
          <CardContent>
            I&apos;m currently brewing up an amazing collection of free-of-cost
            premium themes for your pages. Stay tuned for the launch!
          </CardContent>
        </Card>
      </div>
      <div className="max-w-4xl w-full mx-auto pt-10 space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Themes.</h2>
          <p className="text-muted-foreground">
            Discover beautifully crafted themes to make your Spool page truly
            yours. Stand out with stunning, premium designs for free—no strings
            attached.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[...new Array(9)].map((_, i) => (
            <Card key={i} className="max-w-2xs py-0">
              <CardContent className="bg-muted w-full h-60" />
              <Item className="m-0 pt-0">
                <ItemContent>
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-10" />
                  <div className="flex items-center gap-0.5">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-5" />
                  </div>
                </ItemContent>
                <ItemActions>
                  <Skeleton className="h-8 w-16" />
                </ItemActions>
              </Item>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
