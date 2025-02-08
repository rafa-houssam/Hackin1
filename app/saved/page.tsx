"use client";
import Image from "next/image";

export default function SavedEvents() {
  const savedEvents = [
    {
      id: 1,
      title: "Football Championship",
      date: "2025-03-10",
      location: "City Stadium",
      image: "/images/sport1.jpg",
    },
    {
      id: 2,
      title: "Tourist Exploration",
      date: "2025-04-05",
      location: "Grand Canyon",
      image: "/images/trip1.jpg",
    },
    {
      id: 3,
      title: "Charity Fundraiser",
      date: "2025-05-20",
      location: "Community Hall",
      image: "/images/charity1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Your Saved Events</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {savedEvents.map((event) => (
          <div key={event.id} className="bg-white p-4 shadow-lg rounded-lg">
            <Image
              src={event.image}
              alt={event.title}
              width={300}
              height={300}
              className="rounded-lg object-fill"
            />
            <h2 className="text-lg font-bold mt-2">{event.title}</h2>
            <p className="text-sm text-gray-600">{event.date} • 📍 {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
