import { DashboardNav } from "@/app/dashboard/components/dashboard_nav";
import type { Metadata } from "next";
import { DashboardSidebar } from "@/app/dashboard/components/dashboard_sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard created using tailwindcss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="tw-flex tw-flex-col">
      <DashboardNav />
      <div>
        <DashboardSidebar />
        <main className="md:tw-ml-52 ">{children}</main>
      </div>
    </div>
  );
}
