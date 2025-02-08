"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function TravelPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [participants, setParticipants] = useState(Array(10).fill(20));
  const [detailsVisible, setDetailsVisible] = useState(Array(10).fill(false));
  const scrollRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const categories = [
    "All",
    "Sports",
    "charity",
    "Travels",
    "Volunteer",
    "Music",
    "Technology",
    "Arts & Culture",
    "Health",
    "Science"
  ];
  const events = [
    "Sahara Expedition",
          "Constantine Exploration",
          "Oran Beach Trip",
          "Tlemcen Heritage Tour",
          "Ghardaïa Oasis Adventure",
          "Annaba Coastal Escape",
          "Bejaïa Hiking Trip",
          "Tamanrasset Desert Safari",
          "Tipaza Historical Walk",
          "Djanet Stargazing"
  ];

  const scrollCategories = direction => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const toggleParticipation = index => {
    setParticipants(prev => {
      const newParticipants = [...prev];
      if (newParticipants[index] > 0) {
        newParticipants[index] -= 1;
      } else {
        newParticipants[index] += 1;
      }
      return newParticipants;
    });
  };

  const toggleDetails = index => {
    setDetailsVisible(prev => {
      const newDetails = [...prev];
      newDetails[index] = !newDetails[index];
      return newDetails;
    });
  };
  const filteredEvents = events.filter(event =>
    event.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    <div className="min-h-screen bg-[#FFF8E6] flex flex-col items-center relative">
      {/* Header */}

      {/* Category Buttons with Horizontal Scroll */}
      <div className="relative w-full flex items-center justify-center mt-6 px-4">
        <button
          onClick={() => scrollCategories("left")}
          className="absolute left-4 bg-gray-300 p-2 rounded-full"
        >
          <ChevronRight className="rotate-180" size={20} />
        </button>

        <div ref={scrollRef} className="flex gap-2 overflow-hidden w-2/3 px-4">
        {categories.map((category, index) => (
  <Link
    key={category}
    href={index === 0 ? "/" : `/${category
      .toLowerCase()
      .replace(/ & /g, "-")
      .replace(/ /g, "-")}`}
  >
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

        <button
          onClick={() => scrollCategories("right")}
          className="absolute right-4 bg-gray-300 p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="w-2/4 mt-6">
        <input
          type="text"
          placeholder="Search for an event..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-400 rounded-full"
        />
      </div>

      {/* Trips Section */}
      <div className="mt-6 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ml-12">
        {[
          "Sahara Expedition",
          "Constantine Exploration",
          "Oran Beach Trip",
          "Tlemcen Heritage Tour",
          "Ghardaïa Oasis Adventure",
          "Annaba Coastal Escape",
          "Bejaïa Hiking Trip",
          "Tamanrasset Desert Safari",
          "Tipaza Historical Walk",
          "Djanet Stargazing"
        ].map((trip, index) =>
          <div
            key={index}
            className="bg-white border border-black rounded-xl shadow-lg p-4 flex flex-col items-center"
          >
            <Image
              src={`/images/trip${index + 1}.jpg`}
              alt="Trip Image"
              width={300}
              height={200}
              className="rounded-2xl w-full h-48 object-cover"
            />
            <h2 className="text-xl font-bold mt-2">
              {trip}
            </h2>
            <p className="text-sm text-gray-700 flex items-center"> 
  Date: 2025-02-{index + 1} •  
  <span className="flex items-center ml-2">
     Location{index + 1} <img width={25} height={25} src="/images/location.svg" className="mr-1" />
    
  </span>
</p>
            <p className="mt-2 text-sm">
              Participants: {participants[index]} available
            </p>
            <div className="flex justify-center">
  <Link 
    href="/details" 
    className="bg-[#FEC700] text-white px-5 py-2 rounded-full font-bold w-full max-w-[200px] hover:bg-[#e0b413] text-center"
  >
    Details
  </Link>
</div>
            {detailsVisible[index] &&
              <p className="mt-2 text-sm">
                More details about the {trip}...
              </p>}
            <button
              onClick={() => toggleParticipation(index)}
              className="mt-2 bg-[#268CCC] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#0a6ba8] transition"
            >
              {participants[index] > 0 ? "Join Trip" : "Cancel Participation"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
