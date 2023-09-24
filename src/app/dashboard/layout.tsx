import { DashboardNav } from "@/app/dashboard/components/navbar";
import type { Metadata } from "next";
import { DashboardSidebar } from "@/app/dashboard/components/sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard created using tailwindcss",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="tw-flex tw-flex-col">
      <DashboardNav />
      <div>
        <DashboardSidebar />
        <main className="sm:tw-ml-52">{children}</main>
      </div>
    </div>
  );
}
