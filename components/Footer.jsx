export default function Footer() {
  return (
    <section className="py-10 bg-white border-t">
      <div className="container mx-auto px-4">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-5xl font-bold">Let's Connect There</h1>
          <button className="bg-[#1890FF] text-white py-2 px-6 rounded-full shadow-md bg-[#1890FF] transition">
            Hire me :flèche_haut_droite:
          </button>
        </div>
        {/* Content Grid */}
        <div className="flex gap-10 border-t pt-8">
          {/* JCREA Section */}
          <div><div className="w-full flex flex-col items-start">
  <div className="flex justify-start items-start mb-4 gap-2">
                  <img src="./images/looogo.svg" alt="Logo" />
                </div>
              </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
            <div className="flex space-x-4">
              <img src="./images/facebook.png"/>
              <img src="./images/youtube.png"/>
            </div>
          </div>
          {/* Navigation Section */}
          <div className=''>
            <h4 className="text-lg font-bold text-[#1890FF] mb-8 w-fit">Navigation</h4>
            <ul className="  w-fit gap-2">
              <li className="hover:text-[#1890FF] cursor-pointer mb-4">Home</li>
              <li className="hover:text-[#1890FF] cursor-pointer mb-4">About Us</li>
              <li className="hover:text-[#1890FF] cursor-pointer mb-4">Service</li>
              <li className="hover:text-[#1890FF] cursor-pointer ">Resume</li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold text-[#1890FF] mb-8 gap-2">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 mb-4">+91 7783445336</li>
              <li className="text-gray-600 mb-4">Jaycrea368@gmail.com</li>
              <li className="text-gray-600">Portfolio-jcrea.com</li>
            </ul>
          </div>
          {/* Subscription Section */}
          <div>
            <h3 className="text-lg font-bold text-[#1890FF] mb-8">Get the Latest Information</h3>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-[#1890FF] text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
                ➤
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}