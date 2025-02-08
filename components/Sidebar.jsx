"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, PlusCircle, Star, Settings, Book, LogOut, Menu } from "lucide-react";

const Sidebar = () => {
  const [selected, setSelected] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <Home />, href: "/" },
    { name: "New 5rja", icon: <PlusCircle />, href: "/kherja" },
    { name: "Saved events", icon: <Star />, href: "/saved" },
    { name: "Settings", icon: <Settings />, href: "/settings" },
    { name: "Guidelines", icon: <Book />, href: "/guidlines" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="md:hidden p-3 text-black fixed top-4 left-4 z-50 bg-[#97D7FF] rounded-lg shadow-lg" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={28} />
      </button>

      {/* Sidebar */}
      <aside
        className={`h-screen w-64 bg-[#97D7FF] text-black flex flex-col py-6 px-4 space-y-6 border-r border-black fixed top-0 left-0 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-45 lg:w-56 xl:w-64`}
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/logoII.svg"
            alt="ONYVA Logo"
            width={80}
            height={80}
            priority
            className="border-none outline-none shadow-none"
          />
          <h1 className="font-bold text-xl mt-2">ONYVA</h1>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col space-y-2 w-full">
          {menuItems.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              onClick={() => setSelected(item.name)}
              className={`flex flex-row items-center gap-4 text-lg font-bold py-3 px-5 rounded-lg w-full transition duration-200 ${
                selected === item.name ? "bg-[#268CCC] rounded-full text-white" : "hover:bg-[#0860B0] rounded-full"
              }`}
            >
              {item.icon} <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Logout Button - Pushes to Bottom */}
        <div className="mt-auto">
          <button className="flex flex-row items-center gap-4 text-lg font-bold py-3 px-5 rounded-lg w-full transition duration-200 hover:bg-[#B0E0FF]">
            <LogOut /> <Link href="/login2">Logout</Link>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
