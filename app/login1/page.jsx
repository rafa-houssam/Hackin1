'use client'; 
import Image from 'next/image'; 
import Link from 'next/link'; 
import { Button } from "@/components/ui/button";  

import { ChevronLeft, ChevronRight } from 'lucide-react'; 

export default function Page() { 
  return ( 
    <div className="min-h-screen bg-[#FFF8E6] flex flex-col items-center"> 
      {/* ✅ FULL-WIDTH HEADER FIX */}
      <header className="w-screen fixed top-0 left-0 bg-[#1C6999] py-2 px-6 flex items-center justify-between mb-20 ">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image 
            src="/images/logoII.svg" 
            alt="ONYVA Logo" 
            width={70} // Adjusted smaller size
            height={35} 
            className="object-contain"
          />
        </div>

        {/* Right: Language & Login */}
        <div className="flex items-center gap-3 ">
          <button className="bg-white border border-black px-3 py-1 rounded-full text-black text-sm">
            English ▼
          </button>
          <Link href="/login">
            <button className="bg-white border border-black px-3 py-1 rounded-full text-black text-sm">
              Login
            </button>
          </Link>
        </div>
      </header>

      {/* MAIN CONTENT FIX - REMOVE SIDEBAR GAP */}
      <div className="flex justify-center items-center w-full mt-10 px-0"> 
        {/* Map Image */} 
        <div className="w-1/2 flex justify-center mr-20"> 
          <Image src="/images/Algeria.svg" alt="Map of Algeria" width={300} height={450} /> 
        </div> 

        {/* Registration Form */} 
        <div className="w-1/3 p-4 border border-black rounded-xl bg-white shadow-lg relative mt-14"> 
          {/* Step Indicator */} 
          <div className="flex justify-center mb-4"> 
            <span className="w-2 h-2 bg-blue-800 rounded-full mx-1"></span> 
            <span className="w-2 h-2 bg-gray-300 rounded-full mx-1"></span> 
            <span className="w-2 h-2 bg-gray-300 rounded-full mx-1"></span> 
          </div> 

          <div className="mb-3"> 
            <label className="block font-semibold">First name</label> 
            <input type="text" placeholder="Type..." className="w-full bg-blue-200 p-2 rounded-md border border-black mt-1" /> 
          </div> 

          <div className="mb-3"> 
            <label className="block font-semibold">Last name</label> 
            <input type="text" placeholder="Type..." className="w-full bg-blue-200 p-2 rounded-md border border-black mt-1" /> 
          </div> 

          <div className="mb-3"> 
            <label className="block font-semibold">Birthday</label> 
            <input type="date" className="w-full bg-blue-200 p-2 rounded-md border border-black mt-1" /> 
          </div> 

          <div className="mb-3"> 
            <label className="block font-semibold">City</label> 
            <select className="w-full bg-blue-200 p-2 rounded-md border border-black mt-1"> 
              <option>Choose</option> 
              <option>Algiers</option> 
              <option>Oran</option> 
              <option>Constantine</option> 
            </select> 
          </div> 

          {/* Navigation Buttons */} 
          <div className="flex justify-between mt-4"> 
            <button className="text-blue-800"> 
              <Link href="/login2"> <Button className="text-blue-800 border border-blue-800 px-4 py-2 rounded-full">  
              previous 
              </Button></Link> 
            </button> 
            <button className="text-blue-800"> 
             
              <Link href="/login3"> <Button className="text-blue-800 border border-blue-800 px-4 py-2 rounded-full">  
                Next  
              </Button></Link> 
            </button> 
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
}
