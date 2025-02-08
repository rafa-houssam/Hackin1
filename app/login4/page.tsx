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
      <header className="w-screen fixed top-0 left-0 bg-[#1C6999] py-2 px-6 flex items-center justify-between mb-24">  
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
        <div className="flex items-center gap-3 mb-3 ">  
          <button className="bg-white border border-black px-3 py-1 rounded-full text-black text-sm">  
            English ▼  
          </button>  
          <Link href="/login2">  
            <button className="bg-white border border-black px-3 py-1 rounded-full text-black text-sm">  
              Login  
            </button>  
          </Link>  
        </div>  
      </header>  
      
 
      {/* Main Content */} 
      <div className="flex justify-center items-center w-full mt-14 px-10"> 
        {/* Map Placeholder */} 
         <div className="w-1/2 flex flex-col items-center justify-center mr-20 mt-20">   
          <Image  
            src="./images/Algeria.svg"   
            alt="Decorative Circle"   
            width={300}   
            height={700}   
          />   
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#FF0D0D] mt-6 text-center drop-shadow-lg tracking-wide ml-10">
 Register Now  <span className="text-[#000000]">& Step out of your <span className="text-[#134666]">bubble!</span></span> 
</h1>
        
        </div>  
 
        {/* Sign Up Form */} 
        <div className="w-1/3 p-6 border border-black rounded-xl bg-white shadow-lg mt-6"> 
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
            <label className="inline-flex items-center "> 
              <input type="radio" name="terms" className="mr-2 " /> I love CSE 
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
