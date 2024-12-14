import React from 'react'
const Experience = () => {
  return (
    <section className="py-10 bg-white-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl leading-relaxed font-bold text-center mb-10">
          My <span className="text-blue-600">Work Experience</span>
        </h2>
        <div className="grid grid-cols-3 gap-4 items-center">
          {/* Left Column */}
          <div className="flex flex-col space-y-6">
            <div className="text-left">
              <h3 className="text-3xl font-semibold">Cognizant, Mumbai</h3>
              <p className="text-gray-600 pb-2">Sep 2016 - July 2020
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-semibold">Sugee Pvt Limited, Mumbai</h3>
              <p className="text-gray-600 pb-2">Sep 2020 - July 2023
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-semibold">Cinetstox, Mumbai</h3>
              <p className="text-gray-600">Sep 2023 - Present
              </p>
            </div>
          </div>
          {/* Middle Column (Timeline with circles) */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center space-y-3">
              <img src='./images/experience.svg'  className="w-2/3 h-auto"/>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex flex-col space-y-6">
            <div className="text-left">
              <h3 className="text-3xl font-semibold">Experience Designer</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-semibold">UI/UX Designer</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-semibold">Lead UX Designer</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience;