"use client"
import { DashboardNav } from "@/app/dashboard/components/navbar";
import type { Metadata } from "next";
import { DashboardSidebar } from "@/app/dashboard/components/sidebar";
import { DataProvider } from '../contexts/post';
import useAuthCheck from "../useAuthCheck";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuthCheck(); // Call the auth check here

  return (
    <DataProvider>
      <div className="tw-flex tw-flex-col">
        <DashboardNav />
        <div>
          <DashboardSidebar />
          <main className="lg:tw-ml-[59px]">{children}</main>
        </div>
      </div>
    </DataProvider>
  );
}
