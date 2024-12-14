export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bbg-white">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-6">
          Have an Awesome Project Idea?<span className="text-blue-500">Let’s Discuss</span>
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
            Send
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm gap-4">
          <p>:étoile: 4.9/5 Average Ratings</p>
          <p>:trophée: 25+ Winning Awards</p>
          <div className="flex ">
          <img src="./images/check.svg"/>
          <p> Certified Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}