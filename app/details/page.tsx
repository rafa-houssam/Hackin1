import Image from "next/image";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/Link";

const EventDetails = () => {
  return (
    <div className="flex justify-center mt-10 px-6">
      {/* Main Content */}
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-6">
        {/* Back Button */}
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold hover:text-blue-600 transition">
          <span className="text-2xl">⬅</span> Back
        </Link>

        {/* Event Image */}
        <div className="mt-4">
          <Image
            src="/images/football.jpg"
            alt="Football Match"
            width={700}
            height={400}
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Event Title */}
        <h2 className="mt-4 text-2xl font-bold">5sna wahed yal3ab match foot</h2>
        <p className="text-gray-500">10 min ago</p>

        {/* Event Category & Location */}
        <div className="flex items-center gap-4 mt-4">
          <span className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full font-semibold">
            Sports
          </span>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin size={20} className="text-red-500" />
            <span className="font-semibold">Stade de mabrouki</span>
          </div>
        </div>

        {/* Event Description */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Aliquet pulvinar odio senectus non 
          ultricies et. Elementum aliquet malesuada volutpat dolor dolor adipiscing 
          nibh. Duis proin tempor a tellus tellus sit. Risus amet pellentesque a 
          blandit adipiscing.
        </p>
      </div>

      {/* Organizer & Participants Section */}
      <div className="ml-8 w-80">
        {/* Organizer Card */}
        <div className="bg-white shadow-lg rounded-xl p-5">
          <h3 className="text-xl font-bold text-center">Organizer</h3>
          <div className="flex items-center gap-3 mt-3">
            <Image
              src="/images/profile.jpg"
              alt="Organizer"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h4 className="font-bold">Bencherif Karim</h4>
              <p className="text-gray-500 text-sm">10 events organized ⭐7</p>
            </div>
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur. Rhoncus sem laoreet vitae mollis 
            aliquam nibh nunc.
          </p>
          <div className="flex justify-between items-center mt-4">
            <button className="flex items-center gap-2 text-blue-600 font-semibold">
              <MessageCircle size={18} /> Message now
            </button>
            <span className="flex items-center gap-1 text-gray-700 font-semibold">
              <Phone size={18} /> 05555555
            </span>
          </div>
        </div>

        {/* Participants List */}
        <div className="mt-6 bg-white shadow-lg rounded-xl p-5">
          <h3 className="text-xl font-bold text-center">Participants</h3>
          <div className="mt-3 space-y-3">
            {[1, 2].map((_, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
                <Image
                  src="/images/profile.jpg"
                  alt="Participant"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-bold">Bencherif Karim</h4>
                  <p className="text-gray-500 text-sm">⭐7</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
