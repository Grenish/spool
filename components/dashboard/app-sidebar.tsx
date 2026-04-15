import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "./components/logo";
import UserButton from "./components/user-button";
import {
  AxeIcon,
  HeartIcon,
  HouseIcon,
  LinkIcon,
  PaintBrushBroadIcon,
  PlugIcon,
} from "@phosphor-icons/react/dist/ssr";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Apps</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/me">
                  <HouseIcon /> Home
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                <Link href="/me/spoolink">
                  <AxeIcon /> Shortener
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                <Link href="/me/spoolhub">
                  <LinkIcon />
                  All My Links
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <PlugIcon /> Plugins
              </SidebarMenuButton>
              <SidebarMenuButton>
                <PaintBrushBroadIcon /> Themes
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarGroupLabel>Extras</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuButton asChild>
              <Link href={"/me/support"}>
                <HeartIcon weight="duotone" /> Support
              </Link>
            </SidebarMenuButton>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserButton
          fullname="John Doe"
          profileImage="https://github.com/shadcn.png"
          email="johndoe@john.com"
        />
      </SidebarFooter>
    </Sidebar>
  );
}
