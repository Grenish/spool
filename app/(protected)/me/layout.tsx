import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function ProtectedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/*<DashNavbar />*/}
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">{children}</main>
      </SidebarProvider>
    </>
  );
}
