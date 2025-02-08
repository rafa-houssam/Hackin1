'use client'
import Image from "next/image"; 
import { ChevronRight } from "lucide-react"; 
import { Button } from "@/components/ui/button"; 
import Link from "next/link"; 

export default function TravelPage() { 
  return ( 
    <div className="min-h-screen bg-[#FFF8E6] flex flex-col items-center relative"> 
      {/* Header */} 
     

      {/* No Events Section */} 
      <Link href="/" className="ml-30 bg-slate-500 mt-2">Previous</Link>

      <div className="mt-10 w-3/4 text-center flex flex-col items-center"> 
        <Image src="/images/no-events.jpg" alt="No Events" width={300} height={300} className="mb-6" /> 
        <h2 className="text-3xl font-bold text-gray-800">No Upcoming Events</h2> 
        <p className="text-lg text-gray-600 mt-2">Stay tuned! Exciting events will be announced soon.</p> 
      </div> 
    </div> 
  ); 
}
