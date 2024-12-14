"use client";
import React from "react";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Jayesh Patil",
      position: "CEO, Lirante",
      rating: 5.0,
      image: "./images/bnadm.svg",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.",
    },
    {
      name: "Jayesh Patil",
      position: "CEO, Lirante",
      rating: 5.0,
      image: "./images/bnadm.svg",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Testimonials That Speak to <span className="text-blue-500">My Results</span>
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum
        ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 rounded-lg shadow-md bg-white"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-yellow-400 ${
                    i < testimonial.rating ? "" : "text-gray-300"
                  }`}
                >
                  &#9733;
                </span>
              ))}
              <span className="text-gray-600 ml-2 font-medium">
                {testimonial.rating}
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonials;