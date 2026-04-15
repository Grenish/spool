"use client";

import { Button } from "@/components/ui/button";
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { SidebarSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const { toggleSidebar } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem
        className="
          group flex items-center justify-between
          data-[collapsible=icon]:justify-center
        "
      >
        <Link
          href="/me"
          className="
            flex items-center gap-2
            data-[collapsible=icon]:justify-center
          "
        >
          <Image
            src="/spool.png"
            width={30}
            height={30}
            alt="logo"
            className="rounded-sm"
          />
          <span className="truncate group-data-[collapsible=icon]:hidden">
            <h2 className="text-xl font-bold">Spool.</h2>
          </span>
        </Link>

        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="
            shrink-0
            group-data-[collapsible=icon]:hidden
            group-data-[collapsible=icon]:group-hover:flex
          "
        >
          <SidebarSimpleIcon />
        </Button>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
