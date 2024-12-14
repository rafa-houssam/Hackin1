import { useState } from "react";
import Image from "next/image";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with 'My Services' on the left and 'Services' in blue */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            My <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {[1, 2, 3].map((item, index) => (
            <div
              key={item}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden p-3 flex flex-col items-center text-center transition-all duration-1000 ease-in-out transform hover:scale-105 h-full"
              style={{ height: '400px', width: '280px' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-full mb-0">
                {/* Image changes based on hover */}
                <Image
                  src={hoveredIndex === index ? "/images/blue2.svg" : "/images/services_global.svg"}
                  alt="UI/UX Design"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-all duration-2000 ease-in-out"
                />
                {/* Arrow changes based on hover, positioned at the bottom right */}
                <div className="absolute bottom-4 right-1 w-16 h-16 flex items-center justify-center rounded-full transition-all duration-2000 ease-in-out hover:bg-blue-400">
                  <Image
                    src={hoveredIndex === index ? "/images/arrowblue.svg" : "/images/up_arrow.svg"}
                    alt="Service Image"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
