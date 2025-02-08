"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Log2() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [participants, setParticipants] = useState(Array(10).fill(20));
  const [detailsVisible, setDetailsVisible] = useState(Array(10).fill(false));
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const scrollRef = useRef(null);

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
    "Football",
    "Basketball",
    "Tennis",
    "Volleyball",
    "Cricket",
    "Rugby",
    "Hockey",
    "Baseball",
    "Swimming",
    "Athletics"
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
      className={`border border-black px-4 py-2 rounded-full text-sm font-bold transition duration-200 ${
        selectedCategory === category 
          ? "bg-[#1C6999] text-white" 
          : "bg-[#F3F0E6] hover:bg-gray-200"
      }`}
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

      {/* Posts Section */}
      <div className="mt-6 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ml-12">
        {filteredEvents.map((event, index) =>
          <div
            key={index}
            className="bg-white border border-black rounded-xl shadow-lg p-4 flex flex-col items-center"
          >
            <Image
              src={`/images/sport${index + 1}.jpg`}
              alt="Post Image"
              width={300}
              height={200}
              className="w-full h-[200px] object-cover rounded-2xl"
            />

            <h2 className="text-xl font-bold mt-2">
              {event} Event
            </h2>
            <p className="text-sm text-gray-700">
              Date: 2025-02-{index + 1} • 📍 Location {index + 1}
            </p>
            <p className="mt-2 text-sm">
              Participants: {participants[index]} available
            </p>

            <div className="flex justify-between items-center mt-2 gap-x-4">
            <Link href="/details" className="bg-[#FEC700] text-white px-5 py-2 rounded-full font-bold w-full max-w-[200px] hover:bg-[#e0b413]" >Details</Link>

              <button
                onClick={() => toggleParticipation(index)}
                className="mt-2 bg-[#268CCC] text-white px-4 py-2 rounded-full font-bold hover:bg-[#0a6ba8] transition " 
              >
                {participants[index] > 0
                  ? "Participate"
                  : "Cancel Participation"}
              </button>
            </div>

            {detailsVisible[index] &&
              <p className="mt-2 text-sm">
                The annual football championship kicked off with a thrilling
                opening match at the citys main stadium, drawing thousands of
                passionate fans. Featuring 16 teams from across the region, the
                event showcases intense competition, skillful plays, and
                strategic brilliance. Highlights include pre-game festivities,
                halftime shows, and an engaging fan zone with interactive
                activities. The tournament runs for two weeks, culminating in a
                grand finale to crown the champion. {event} event...
              </p>}
          </div>
        )}
      </div>
      <div className="mt-6 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ml-12">
        {filteredEvents.map((event, index) =>
          <div
            key={index}
            className="bg-white border border-black rounded-xl shadow-lg p-4 flex flex-col items-center"
          >
            <Image
              src={`/images/charity${index + 1}.jpg`}
              alt="Post Image"
              width={300}
              height={200}
              className="rounded-2xl w-[300px] h-[200px] object-cover"
            />

            <h2 className="text-xl font-bold mt-2">
              {event} Event
            </h2>
            <p className="text-sm text-gray-700">
              Date: 2025-02-{index + 1} • 📍 Location {index + 1}
            </p>
            <p className="mt-2 text-sm">
              Participants: {participants[index]} available
            </p>

            <div className="flex justify-between items-center mt-2 gap-x-4">
            <Link href="/details" className="bg-[#FEC700] text-white px-5 py-2 rounded-full font-bold w-full max-w-[200px] hover:bg-[#e0b413]" >Details</Link>

              <button
                onClick={() => toggleParticipation(index)}
                className="mt-2 bg-[#268CCC] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#0a6ba8] transition"
              >
                {participants[index] > 0
                  ? "Participate"
                  : "Cancel Participation"}
              </button>
            </div>

            {detailsVisible[index] &&
              <p className="mt-2 text-sm">
                The annual football championship kicked off with a thrilling
                opening match at the citys main stadium, drawing thousands of
                passionate fans. Featuring 16 teams from across the region, the
                event showcases intense competition, skillful plays, and
                strategic brilliance. Highlights include pre-game festivities,
                halftime shows, and an engaging fan zone with interactive
                activities. The tournament runs for two weeks, culminating in a
                grand finale to crown the champion. {event} event...
              </p>}
          </div>
        )}
      </div>
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
              className="rounded-2xl  h-48 object-cover"
            />
            <h2 className="text-xl font-bold mt-2">
              {trip}
            </h2>
            <p className="text-sm text-gray-700">
              Date: 2025-03-{index + 1} • 📍 {trip.split(" ")[0]}
            </p>
            <p className="mt-2 text-sm">
              Participants: {participants[index]} available
            </p>
            <Link href="/details" className="bg-[#FEC700] text-white px-5 py-2 rounded-full font-bold w-full max-w-[200px] hover:bg-[#e0b413]" >Details</Link>
            {detailsVisible[index] &&
              <p className="mt-2 text-sm">
                More details about the {trip}...
              </p>}
            <button
              onClick={() => toggleParticipation(index)}
              className="mt-2 bg-blue-800 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition"
            >
              {participants[index] > 0 ? "Join Trip" : "Cancel Participation"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
