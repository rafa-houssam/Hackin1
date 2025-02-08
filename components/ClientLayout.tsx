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
          <label className="flex cursor-pointer gap-2 mr-20">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>

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
