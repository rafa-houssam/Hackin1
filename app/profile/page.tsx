"use client";

import Image from "next/image";
import { Edit, ChevronDown } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center w-full p-6">
      {/* Profile Header */}
      <div className="relative w-full flex flex-col items-center bg-gray-200 py-16">
        <div className="absolute -bottom-16">
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-bold">Djouider Mokhtar Anes</h1>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        {/* Personal Info */}
        <div className="grid grid-cols-2 gap-4 text-lg">
          <p><span className="font-bold">Friends :</span> 123</p>
          <p><span className="font-bold">City :</span> <span className="text-blue-600">Msila</span></p>
          <p><span className="font-bold">Age :</span> 30</p>
          <p><span className="font-bold">Gender :</span> <span className="text-blue-600">Male</span></p>
        </div>

        {/* Bio Section */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">Bio</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. Vel quis tristique felis eu ante et imperdiet.
            Lorem ipsum dolor sit amet consectetur. Vel quis tristique felis eu ante et imperdiet
            Lorem ipsum dolor sit amet consectetur. Vel quis tristique felis eu ante et imperdiet
          </p>
        </div>

        {/* Edit Button */}
        <div className="mt-6 flex items-center gap-4">
          <button className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold">
            <Edit size={18} />
            Edit
          </button>

          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            Button
          </button>

          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center">
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
