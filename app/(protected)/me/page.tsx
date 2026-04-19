import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ActivityIcon,
  BoxArrowUpIcon,
  LayoutIcon,
  LinkIcon,
  PlusIcon,
  UserIcon,
  StarIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function MeDashboard() {
  return (
    <div className="flex-1 space-y-8 p-6 md:p-8 pt-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your Spool.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Create Spoolink
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <UserIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
            <ActivityIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+5,432</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Links</CardTitle>
            <LinkIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">
              +12 new links this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement</CardTitle>
            <StarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">44.3%</div>
            <p className="text-xs text-muted-foreground">
              +2.4% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle>Spool Performance</CardTitle>
            <CardDescription>
              Top performing links across your hubs this week.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium flex items-center">
                  <BoxArrowUpIcon className="mr-2 h-4 w-4 text-blue-500" />
                  Portfolio Hub
                </span>
                <span className="text-muted-foreground">4,230 clicks</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium flex items-center">
                  <LinkIcon className="mr-2 h-4 w-4 text-green-500" />
                  Twitter Campaign
                </span>
                <span className="text-muted-foreground">2,850 clicks</span>
              </div>
              <Progress value={54} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium flex items-center">
                  <LayoutIcon className="mr-2 h-4 w-4 text-purple-500" />
                  Dark Theme Store
                </span>
                <span className="text-muted-foreground">1,940 clicks</span>
              </div>
              <Progress value={36} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium flex items-center">
                  <LinkIcon className="mr-2 h-4 w-4 text-orange-500" />
                  Newsletter Signup
                </span>
                <span className="text-muted-foreground">1,120 clicks</span>
              </div>
              <Progress value={21} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest interactions and updates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    SL
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Spoolink Created
                  </p>
                  <p className="text-sm text-muted-foreground">
                    "My New Project" link added
                  </p>
                </div>
                <div className="ml-auto font-medium text-xs text-muted-foreground">
                  Just now
                </div>
              </div>
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    TH
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Theme Applied
                  </p>
                  <p className="text-sm text-muted-foreground">
                    "Midnight Blue" applied to Hub
                  </p>
                </div>
                <div className="ml-auto font-medium text-xs text-muted-foreground">
                  2h ago
                </div>
              </div>
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    IG
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Integration Synced
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Notion database connected
                  </p>
                </div>
                <div className="ml-auto font-medium text-xs text-muted-foreground">
                  5h ago
                </div>
              </div>
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    SH
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Spoolhub Published
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Main portfolio is live
                  </p>
                </div>
                <div className="ml-auto font-medium text-xs text-muted-foreground">
                  1d ago
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
