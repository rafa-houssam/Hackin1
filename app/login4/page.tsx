'use client'
import Image from "next/image"; 
import { useState } from "react"; 
import { ChevronRight, Globe } from "lucide-react"; 
import { Button } from "@/components/ui/button"; 
import Link from "next/link"; 
 
export default function Log2() { 
  return ( 
    <div className="min-h-screen bg-[#FFF8E6] flex flex-col items-center"> 
      {/* Header */} 
      
 
      {/* Main Content */} 
      <div className="flex justify-center items-center w-full mt-10 px-10"> 
        {/* Map Placeholder */} 
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
 
        {/* Sign Up Form */} 
        <div className="w-1/3 p-6 border border-black rounded-xl bg-white shadow-lg"> 
          <h2 className="text-xl font-bold mb-4">Sign Up</h2> 
          
          <div className="mb-4"> 
            <label className="block font-semibold">Phone Number</label> 
            <input type="text" placeholder="type ..." className="w-full bg-blue-200 p-2 rounded-md border border-black mt-1" /> 
          </div> 
 
          <div className="mb-4"> 
            <label className="block font-semibold">ID Card</label> 
            <input type="file" className="w-full bg-blue-200 p-2 rounded-md border border-black mt-1" /> 
          </div> 
 
          <div className="mb-4"> 
            <label className="block font-semibold">Profile Picture</label> 
            <input type="image" className="w-full bg-blue-200 p-2 rounded-md border border-black mt-1" /> 
          </div> 
 
          <div className="mb-4 flex flex-col"> 
            <label className="inline-flex items-center"> 
              <input type="radio" name="terms" className="mr-2" /> I agree on <span className="text-blue-800 font-semibold">terms and services</span>
            </label> 
            <label className="inline-flex items-center"> 
              <input type="radio" name="terms" className="mr-2" /> I love CSE 
            </label> 
          </div> 
          <Link href="/login1">  
              <Button className="text-blue-800 border border-blue-800 px-4 py-2 rounded-full mr-16">  
                Previous  
              </Button>  
            </Link> 
 
          <Link href="/" className="w-2/4 bg-blue-800 text-white py-2 rounded-full text-lg font-semibold p-3">Sign Up</Link> 

 
        </div> 
      </div> 
    </div> 
  ); 
}
