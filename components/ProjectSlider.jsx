"use client";

import React, { useState } from "react";

const ProjectSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const slides = [
    {
      title: "Lirante",
      subtitle: "Lirante",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.",
      image: "/images/slide.svg",
    },
    {
      title: "Lirante",
      subtitle: "Lirante",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.",
      image: "/images/slide.svg",
    },
    {
      title: "New Slide",
      subtitle: "New Subtitle",
      description:
        "This is a new slide added to the carousel to demonstrate duplication.",
      image: "/images/slide.svg",
    },
    {
      title: "Another Slide",
      subtitle: "Another Subtitle",
      description:
        "This is another new slide for the carousel slider.",
      image: "/images/slide.svg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Let&apos;s have a look at my <span className="text-blue-500">Portfolio</span>
      </h2>

      <div className="relative overflow-x-auto rounded-lg shadow-md mb-8">
        <div className="flex flex-nowrap space-x-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-none w-80 sm:w-1/2 relative bg-gray-100 rounded-lg overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div
                  className={`absolute inset-0 bg-white-400 bg-opacity-25 backdrop-blur-sm transition-all duration-300 transform ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
                <div
                  className={`absolute bottom-0 left-0 w-full p-6 bg-white bg-opacity-20 backdrop-blur-sm transition-all duration-300 transform ${
                    hoveredIndex === index ? "translate-y-0" : "translate-y-full"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <h3 className="text-2xl font-semibold text-white-400">
                    {slide.title} - {slide.subtitle}
                  </h3>
                  <p className="text-white-400 mt-2">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === 0 ? "bg-blue-500" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          {["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"].map(
            (category, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            )
          )}
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Lirante</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
          <button
            className="mt-4 inline-flex items-center text-blue-500 hover:underline font-semibold"
          >
            Learn More
            <span className="ml-2">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
