// app/dashboard/layout.tsx
"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onToggleSidebar={() => setSidebarOpen(true)} />

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black opacity-30"
            onClick={() => setSidebarOpen(false)}
          />

          <div className="absolute top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-lg z-50">
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block fixed inset-y-0 left-0 z-40 w-64">
          <Sidebar />
        </div>

        <main className="flex-1 pt-20 md:pl-64 pb-20 bg-gray-50 min-h-screen overflow-hidden">
          {children}
        </main>
      </div>
    </>
  );
}
