import React from 'react';
import Image from 'next/image';

const Realstatesoloution = () => {
  const solutions = [
    {
      imageSrc: "/images/rs-1.png",
      title: "Real Estate Solutions",
      description: "Smart choices for every property need."
    },
    {
      imageSrc: "/images/rs-2.png",
      title: "Find Your Perfect Property",
      description: "Discover spaces that fit your lifestyle."
    },
    {
      imageSrc: "/images/rs-3.png",
      title: "Commercial, Residential & Plot Properties",
      description: "Discover spaces that fit your lifestyle."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-2">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[2rem] font-[800] text-gray-900 mb-0">
            Real Estate Solutions
          </h1>
          <p className="text-gray-600 lg:text-[16px] sm:text-xl">
            Find Your Perfect Property
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 sm:p-10 flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="mb-8 flex items-center justify-center">
                <Image
                  src={solution.imageSrc}
                  alt={solution.title}
                  width={100}
                  height={100}
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="lg:text-[18px] sm:text-2xl font-[600] text-gray-900 mb-1 whitespace-pre-line lg:w-[200px]">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-[14px] leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Realstatesoloution;