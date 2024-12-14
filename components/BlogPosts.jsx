import Link from "next/link";
import { ArrowRight } from "lucide-react";

import React from "react";

const BlogPosts = () => {
  const blogPosts = [
    {
      title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
      category: "UI/UX Design",
      date: "10 Nov, 2023",
      author: "Jayesh Patil",
      image: "/images/firstpost.svg",
    },
    {
      title: "Sugee: Loan Management System for Rural Sector",
      category: "App Design",
      date: "09 Oct, 2023",
      author: "Jayesh Patil",
      image: "/images/secondpost.svg",
    },
    {
      title: "Cinetrade: Innovative way to invest in Digital Media",
      category: "App Design",
      date: "13 Aug, 2023",
      author: "Jayesh Patil",
      image: "/images/lastpost.svg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          From my <span className="text-blue-500">blog post</span>
        </h2>
        <button className="text-blue-500 text-sm font-semibold hover:underline">
          View All Posts
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md relative"
            style={{ width: "320px", height: "410px" }}
          >
            <div className="relative ">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover "
                style={{ width: "320px", height: "300px" }}
              />
              <button
                className="absolute bottom-3 right-1 bg-white text-gray-800 p-2 rounded-full shadow-md hover:text-white transition"
              >
                <img 
                    src="/images/arrowblue.svg" // replace with your desired image
                    alt="Service Image"
                    width={60}
                    height={60}
                     className=""
                    
                  />
              </button>
            </div>
            <div className="p-4">
              <span className="block text-blue-500 text-sm mb-2">{post.category}</span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <div className="text-gray-500 text-sm flex justify-between">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
