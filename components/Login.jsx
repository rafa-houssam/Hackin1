import { useState } from "react";
import { ChevronRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  const [language, setLanguage] = useState("English");

  return (
    <div className="min-h-screen bg-[#fefae0] flex flex-col items-center">
      {/* Header */}
      <div className="w-full p-2 bg-red-600  flex justify-between items-center">
        <div><img
            src="/images/logoII.svg"
            alt="Scenic View"
            className="w-20 h-20"
          /></div>
        <div className="flex gap-2">
          <button className="flex items-center text-white border px-3 py-1 rounded-full">
            <Globe size={16} className="mr-1" /> {language}
          </button>
          <Button className="bg-white text-black rounded-full px-4">Register</Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl w-full p-6 grid grid-cols-2 gap-6 mt-8">
        {/* Left Section */}
        <div className="relative flex flex-col items-center">
          <img
            src="/images/logoII.svg"
            alt="Scenic View"
            className="rounded-lg shadow-md w-full h-[350px] object-cover"
          />
          <div className="absolute bottom-4 left-6 bg-blue-900 text-white p-4 rounded-lg w-[80%] shadow-lg">
            <h2 className="text-2xl font-bold">On <span className="text-yellow-400">y</span> va!</h2>
            <p className="mt-2 text-sm">
              Looking to meet <strong>like-minded</strong> people and be part of exciting social events? Join <strong>[Community Name]</strong> today!
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <span className="w-3 h-3 bg-red-600 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="First name" className="w-full p-2 border rounded-md bg-yellow-400" />
            <input type="text" placeholder="Last name" className="w-full p-2 border rounded-md bg-yellow-400" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded-md bg-yellow-400" />
            <div className="grid grid-cols-2 gap-4">
              <input type="date" placeholder="Birthday" className="w-full p-2 border rounded-md bg-yellow-400" />
              <input type="text" placeholder="City" className="w-full p-2 border rounded-md bg-yellow-400" />
            </div>
              
            <Link href="/login" className="w-full flex justify-center bg-red-600 text-white py-2 rounded-md mt-4"><ChevronRight size={20} /></Link>
            
          </form>
        </div>
      </div>
    </div>
  );
}
