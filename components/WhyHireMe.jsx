import { useState } from 'react';
import Image from 'next/image';

export default function WhyHireMe() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-100 rounded-lg shadow-md p-8 flex flex-col sm:flex-row items-center gap-8 max-w-4xl">
        {/* Left Section with Image */}
        <div
          className="flex-shrink-0 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Original image */}
          <Image
            src="/images/men2.svg" // Default image
            alt="Profile Picture"
            width={350}
            height={600}
            className={`rounded-full transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          />
          {/* Hover image */}
          <Image
            src="/images/men2blue.svg" // Image on hover
            alt="Profile Picture Hover"
            width={350}
            height={600}
            className={`rounded-full absolute top-[-20px] left-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Right Section with Content */}
        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-4">
            Why <span className="text-blue-500">Hire me?</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate,
            bibendum sodales.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold">450+</h2>
              <p className="text-gray-500">Projects Completed</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">450+</h2>
              <p className="text-gray-500">Projects Completed</p>
            </div>
          </div>
          <button className="px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-black hover:text-white">
  Hire me
</button>

        </div>
      </div>
    </div>
  );
}
