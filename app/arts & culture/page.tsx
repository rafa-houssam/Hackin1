'use client'
import Image from "next/image"; 
import { ChevronRight } from "lucide-react"; 
import { Button } from "@/components/ui/button"; 
import Link from "next/link"; 

export default function TravelPage() { 
  return ( 
    <div className="min-h-screen bg-[#FFF8E6] flex flex-col items-center relative"> 
      {/* Header */} 
      <header className="w-full bg-blue-600 py-4 px-6 flex justify-between items-center relative z-10"> 
        <div className="flex items-center gap-4"> 
          <Image src="/images/logoII.svg" alt="Logo" width={80} height={80} /> 
        </div> 
        <div className="flex gap-4"> 
          <Link href="/" className="font-bold text-white px-4 py-2 rounded-lg">Home</Link> 
          <Link href="#" className="font-bold text-white px-4 py-2 rounded-lg">New Trip</Link> 
          <Link href="#" className="font-bold text-white px-4 py-2 rounded-lg">Recommendations</Link> 
          <Link href="#" className="font-bold text-white px-4 py-2 rounded-lg">Settings</Link> 
          <Link href="#" className="font-bold text-white px-4 py-2 rounded-lg">Guidelines</Link> 
          <button className="font-bold text-white bg-blue-700 px-4 py-2 rounded-lg">English ▼</button> 
          <Link href="/login2" className="font-bold text-white bg-blue-700 px-4 py-2 rounded-lg">Login</Link> 
        </div> 
      </header> 
      

      {/* No Events Section */} 
      <Link href="/">Previous</Link>
      <div className="mt-10 w-3/4 text-center flex flex-col items-center"> 
        <Image src="/images/no-events.jpg" alt="No Events" width={300} height={300} className="mb-6" /> 
        <h2 className="text-3xl font-bold text-gray-800">No Upcoming Events</h2> 
        <p className="text-lg text-gray-600 mt-2">Stay tuned! Exciting events will be announced soon.</p> 
      </div> 
    </div> 
  ); 
}
