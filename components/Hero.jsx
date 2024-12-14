import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 bg-background overflow-hidden">
      <div>
        <button className="bg-white text-black font-bold py-3 px-6 rounded-lg shadow-md hover:bg-black hover:text-white transition duration-300 mx-auto block mb-2">
          ID DARK
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="group relative">
          {/* Main Heading */}
          <h1 className="font-[Urbanist] font-bold text-[30px] sm:text-[45px] lg:text-[55.57px] leading-[40px] sm:leading-[55px] lg:leading-[75.57px] tracking-[-0.015em] text-foreground text-center mb-0 transition-all duration-700 group-onClick:translate-y-20 group-hover:opacity-0 group-hover:scale-75">
            I&apos;m <span className="text-blue-500">Jenny</span>,<br /> Product Designer
          </h1>

          {/* Animated Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 relative z-10">
            {/* Left Text Section */}
            <div className="text-left transition-all duration-700 group-hover:translate-y-[-100px]">
              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-xl mb-8">
                Jenny&apos;s exceptional product design ensures our website&apos;s success. Highly recommended!
              </p>
            </div>

            {/* Center Image Section */}
            <div className="relative flex justify-center items-center group">
              {/* Half-Circle Background (Static, Hidden on Small Screens) */}
              <div className="absolute w-[300px] sm:w-[400px] lg:w-[450px] h-[300px] sm:h-[400px] lg:h-[450px] -z-10" style={{ top: "5px" }}>
                <Image
                  src="/images/Ellipse 2.svg"
                  alt="Decorative Circle"
                  width={800}
                  height={800}
                />
              </div>

              {/* Man Image (Static, Hidden on Small Screens) */}
              <div >
                <Image
                  src="/images/men.svg"
                  alt="Jenny, Product Designer"
                  width={400}
                  height={400}
                  className="rounded-full"
                />
              </div>

              {/* Flowers Image (Hidden Initially, Grows on Hover) */}
              <Image
                src="/images/flowers.svg"
                alt="Decorative Flowers"
                width={400}
                height={400}
                className="absolute transition-all duration-700 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-125 group-hover:translate-y-[-50px]"
              />
            </div>

            {/* Right Text Section */}
            <div className="text-right transition-all duration-700 group-hover:translate-y-[-100px]">
              <div className="lg:block hidden">
                <Image
                  src="/images/stars.svg"
                  alt="Jenny, Product Designer"
                  width={100}
                  height={100}
                  className="rounded-full absolute right-3 top-0"
                />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-foreground mb-4 mt-6">
                10 Years of Experience
              </h2>
              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-md mb-4">
                Combining creativity and technical expertise to design exceptional digital products.
              </p>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-30 bg-white/30 backdrop-blur-sm p-0 rounded-full opacity-100 group-hover:opacity-0 group-hover:translate-y-5 transition-all duration-700">
            <div className="relative z-20">
              <Link
                href="#portfolio"
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500 text-white z-20 hover:bg-blue-600 transition-colors"
              >
                Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center px-4 py-2 rounded-full border border-border hover:bg-accent transition-colors z-20"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>

      {/* Media Query for Small Screens */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Adjustments for Small Screens */
          .lg\\:block {
            display: none;
          }

          .text-lg {
            font-size: 14px;
          }

          .text-xl {
            font-size: 16px;
          }

          h1 {
            font-size: 30px;
            line-height: 40px;
          }

          h2 {
            font-size: 24px;
          }

          p {
            font-size: 14px;
          }

          .group-hover\\:opacity-0 {
            opacity: 1 !important;
          }

          /* Flex Layout on Small Screens */
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
