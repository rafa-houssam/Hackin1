"use client"; // Required to use usePathname()

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { Bell, Search } from "lucide-react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current route

  // List of pages to exclude from the global layout
  const excludedPages = ["/login1", "/login2", "/login3", "/login4"];

  // If the current page is in excludedPages, return only the children
  if (excludedPages.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center relative">
        {/* Header */}
        <header className="w-full bg-[#1C6999] py-4 px-6 flex items-center justify-between relative z-10">
          {/* Search Bar - Centered */}
          <div className="flex-1 flex justify-center">
            <div className="relative flex items-center bg-white rounded-full px-4 py-2 w-96">
              <Search className="text-gray-500" />
              <input 
  type="text" 
  placeholder="Search for events..." 
  aria-label="Search events" 
  className="ml-2 outline-none border-none bg-transparent text-gray-800 w-full" 
  disabled
/>

            </div>
          </div>

          {/* Right-side Icons */}
          <div className="flex items-center gap-6">
            <Bell className="text-white cursor-pointer" />
            <Link href="/login2">Login</Link>
            <Link href="/profile">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
              />
            </Link>
          </div>
        </header>

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
}
