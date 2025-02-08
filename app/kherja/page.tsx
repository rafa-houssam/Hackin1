"use client"; 

import { useState, useEffect } from "react"; 
import { useRouter } from "next/navigation"; 

const New5rja = () => { 
  const router = useRouter(); 
  const [formData, setFormData] = useState({ 
    title: "", 
    place: "", 
    date: "", 
    description: "", 
    remarks: "", 
    category: "", 
    image: "" 
  }); 
  const [showPopup, setShowPopup] = useState(false); 

  const handleChange = e => { 
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  }; 

  const handleSubmit = e => { 
    e.preventDefault(); 
    if (!formData.category) return alert("Please select a category!"); 

    // Save post to localStorage 
    const existingPosts = 
      JSON.parse(localStorage.getItem(formData.category)) || []; 
    const updatedPosts = [...existingPosts, formData]; 
    localStorage.setItem(formData.category, JSON.stringify(updatedPosts)); 

    // Show success popup 
    setShowPopup(true); 
    setTimeout(() => { 
      setShowPopup(false); 
      router.push(`/${formData.category}`); // Redirect to category page 
    }, 1500); 
  }; 

  return ( 
    <div className="flex flex-col items-center w-full p-6 text-black"> 
      <form 
        onSubmit={handleSubmit} 
        className="bg-white w-[600px] p-6 rounded-lg shadow-lg" 
      > 
        <h2 className="text-xl font-bold mb-4 text-center"> 
          Create a New Post 
        </h2> 

        <div className="mb-4"> 
          <label className="block font-bold mb-1">Title</label> 
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            className="w-full px-3 py-2 rounded-full border border-gray-300 bg-white" 
          /> 
        </div> 

        <div className="grid grid-cols-2 gap-4 mb-4"> 
          <div> 
            <label className="block font-bold mb-1">Place</label> 
            <input 
              type="text" 
              name="place" 
              value={formData.place} 
              onChange={handleChange} 
              className="w-full px-3 py-2 rounded-full border border-gray-300 bg-white" 
            /> 
          </div> 
          <div> 
            <label className="block font-bold  mb-1">Date</label> 
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              className="w-full px-3 py-2 rounded-full border border-gray-300 bg-white" 
            /> 
          </div> 
        </div> 

        <div className="mb-4"> 
          <label className="block font-bold mb-1">Description</label> 
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white" 
            rows="3" 
          ></textarea> 
        </div> 

        <div className="mb-4"> 
          <label className="block font-bold mb-1">Category</label> 
          <select 
            name="category" 
            value={formData.category} 
            onChange={handleChange} 
            className="w-full px-3 py-2 rounded-full border border-gray-300 bg-white" 
          > 
            <option value="">Select</option> 
            <option value="sport">Sports</option> 
            <option value="charity">Charity</option> 
            <option value="travels">Travels</option> 
          </select> 
        </div> 

        <div className="flex justify-center"> 
          <button 
            type="submit" 
            className="bg-yellow-400 px-6 py-2 rounded-full font-bold hover:bg-yellow-500" 
          > 
            POST 
          </button> 
        </div> 
      </form> 

      {showPopup && 
        <div className="fixed top-0 left-10 w-full h-full flex items-center justify-center bg-green-500 bg-opacity-50"> 
          <div className="bg-white p-4 rounded-lg shadow-lg text-center"> 
            <p className="text-lg font-bold">Post added successfully!</p> 
          </div> 
        </div>} 
    </div> 
  ); 
}; 

export default New5rja;
