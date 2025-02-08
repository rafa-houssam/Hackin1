'use client';  
import Image from "next/image";  
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";  
import Link from "next/link";  
import { Button } from "@/components/ui/button";  

export default function Log2() {  
  return (  
    <div className="min-h-screen bg-[#FFF8E6] flex flex-col items-center">  
      
      {/* ✅ Header Added */}
      <header className="w-screen fixed top-0 left-0 bg-[#1C6999] py-2 px-6 flex items-center justify-between mb-20">  
        {/* Left: Logo */}  
        <div className="flex items-center">  
          <Image  
            src="/images/logoII.svg"  
            alt="ONYVA Logo"  
            width={70}  
            height={35}  
            className="object-contain"  
          />  
        </div>  

        {/* Right: Language & Login */}  
        <div className="flex items-center gap-3">  
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

      {/* ✅ Main Content with Exact Layout */}  
      <div className="flex justify-center items-center w-full mt-20 px-0 mb-5">  
        {/* Map Image - Applying the same width and spacing */}  
          <div className="w-1/2 flex flex-col items-center justify-center mr-20 mt-20">   
           <Image  
             src="./images/Algeria.svg"   
             alt="Decorative Circle"   
             width={300}   
             height={700}   
           />   
           <h1 className="text-3xl md:text-4xl font-extrabold text-[#f2ce4b] mt-6 text-center drop-shadow-lg tracking-wide ml-10">
          Register Now & <span className="text-[#ffd335]">Navigate Your Journey!</span> 
         </h1>
         
         </div>  

        {/* Login Form - Using the same spacing and layout */}  
        <div className="w-1/3 p-6 border border-black rounded-xl bg-white shadow-lg mt-20">  
          <h2 className="text-xl font-bold mb-4">Login</h2>  
            
          <div className="mb-4">  
            <label className="block font-semibold">Email</label>  
            <input type="email" placeholder="type ..." className="w-full bg-blue-200 p-2 rounded-md border border-black mt-1" />  
          </div>  

          <div className="mb-4">  
            <label className="block font-semibold">Password</label>  
            <input type="password" placeholder="type ..." className="w-full bg-blue-200 p-2 rounded-md border border-black mt-1" />  
          </div>  

          <div className="mb-4">  
            <label className="block font-semibold">Confirm Password</label>  
            <input type="password" placeholder="type ..." className="w-full bg-blue-200 p-2 rounded-md border border-black mt-1" />  
          </div>  

          {/* ✅ Updated Navigation Buttons (Next & Previous instead of Arrows) */}  
          <div className="flex justify-between mt-6">  
            <Link href="/login1">  
              <Button className="text-blue-800 border border-blue-800 px-4 py-2 rounded-full">  
                Previous  
              </Button>  
            </Link>  
            <Link href="/login4">  
              <Button className="text-blue-800 border border-blue-800 px-4 py-2 rounded-full">  
                Next  
              </Button>  
            </Link>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
}
