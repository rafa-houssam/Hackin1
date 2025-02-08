"use client"; 
import Image from "next/image"; 
import { useState, useRef } from "react"; 
import { ChevronRight } from "lucide-react"; 
import Link from "next/link"; 

export default function Log2() { 
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [participants, setParticipants] = useState(Array(10).fill(20)); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const scrollRef = useRef(null); 

  const categories = [ 
    "All", "Sports", "Charity", "Travels", "Volunteer", "Music", 
    "Technology", "Arts & Culture", "Health", "Science" 
  ]; 

  const scrollCategories = (direction) => { 
    if (scrollRef.current) { 
      const { scrollLeft, clientWidth } = scrollRef.current; 
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2; 
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" }); 
    } 
  }; 

  const toggleParticipation = (index) => { 
    setParticipants((prev) => { 
      const newParticipants = [...prev]; 
      newParticipants[index] = newParticipants[index] > 0 ? newParticipants[index] - 1 : newParticipants[index] + 1; 
      return newParticipants; 
    }); 
  }; 

  const events = [ 
    "Football", "Basketball", "Tennis", "Volleyball", "Cricket", 
    "Rugby", "Hockey", "Baseball", "Swimming", "Athletics" 
  ]; 

  // Filter events based on search query 
  const filteredEvents = events.filter((event) => 
    event.toLowerCase().includes(searchQuery.toLowerCase()) 
  ); 

  return ( 
    <div className="min-h-screen bg-[#FFF8E6] flex flex-col items-center relative"> 
      {/* Categories Scroll Bar */} 
      <div className="relative w-full flex items-center justify-center mt-6 px-4"> 
        <button onClick={() => scrollCategories("left")} className="absolute left-4 bg-gray-300 p-2 rounded-full"> 
          <ChevronRight className="rotate-180" size={20} /> 
        </button> 

        <div ref={scrollRef} className="flex gap-2 overflow-hidden w-2/3 px-4"> 
          {categories.map((category, index) => ( 
            <Link key={category} href={index === 0 ? "/" : `/${category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}> 
              <button 
                onClick={() => setSelectedCategory(category)} 
                className={`border border-black px-5 py-2 rounded-full text-sm font-bold transition duration-200 
                ${selectedCategory === category ? "bg-[#1C6999] text-white" : "bg-[#F3F0E6] hover:bg-gray-200"}`} 
              > 
                {category} 
              </button> 
            </Link> 
          ))} 
        </div> 

        <button onClick={() => scrollCategories("right")} className="absolute right-4 bg-gray-300 p-2 rounded-full"> 
          <ChevronRight size={20} /> 
        </button> 
      </div> 

      {/* Search Bar */} 
      <div className="w-2/4 mt-6 bg-white"> 
        <input 
          type="text" 
          placeholder="Search for an event..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          className="w-full px-4 py-2 border border-gray-400 rounded-full bg-white" 
        /> 
      </div> 

      {/* Posts Section */} 
      <div className="mt-6 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ml-12"> 
        {filteredEvents.length > 0 ? ( 
          filteredEvents.map((event, index) => ( 
            <div key={index} className="bg-white border border-black rounded-xl shadow-lg p-4 flex flex-col items-center w-full"> 
              <Image 
                src={`/images/sport${index + 1}.jpg`} 
                alt="Post Image" 
                width={300} 
                height={200} 
                className="rounded-2xl w-full h-[200px] object-cover" 
              /> 

              <h2 className="text-xl font-bold mt-2 text-center"> 
                {event} Event 
              </h2> 
              <p className="text-sm text-gray-700 text-center"> 
                Date: 2025-02-{index + 1} • 📍 Location {index + 1} 
              </p> 
              <p className="mt-2 text-sm text-center"> 
                Participants: {participants[index]} available 
              </p> 

              <div className="flex flex-col items-center mt-2 gap-y-2"> 
                <Link href="/details" className="bg-[#FEC700] text-white px-5 py-2 rounded-full font-bold w-full max-w-[200px] hover:bg-[#e0b413]">Details</Link> 

                <button 
                  onClick={() => toggleParticipation(index)} 
                  className="bg-[#268CCC] text-white px-5 py-2 rounded-full font-bold hover:bg-[#0a6ba8] transition w-full max-w-[200px]" 
                > 
                  {participants[index] > 0 ? "Participate" : "Cancel Participation"} 
                </button> 
              </div> 
            </div> 
          )) 
        ) : ( 
          <div className="text-center col-span-2 mt-8"> 
            <p className="text-gray-600 text-lg font-bold">No results found 🔍</p> 
            <p className="text-gray-500">Try searching for something else.</p> 
          </div> 
        )} 
      </div> 
    </div> 
  ); 
} 
