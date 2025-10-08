import Image from 'next/image';

export default function WhyChooseUs() {
  const features = [
    {
      iconSrc: "/images/icons/icon-1.png",
      title: "Find Your Dream Home",
      description: "Discover properties tailored to your needs"
    },
    {
      iconSrc: "/images/icons/icon-2.svg",
      title: "Unlock Property Value",
      description: "Maximize your investment potential"
    },
    {
      iconSrc: "/images/icons/icon-3.svg",
      title: "Effortless Property Management",
      description: "Streamlined solutions for your properties"
    },
    {
      iconSrc: "/images/icons/icon-4.svg",
      title: "Smart Investments. Informed Decisions",
      description: "Data-driven insights for better choices"
    }
  ];

  return (
    <div className="min-h-[60vh] bg-gradient-to-b from-black to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[3.5rem] text-white font-[600] mb-8 leading-[1.2]">
            Why Choose Kalsi Estate
          </h1>
          <p className="text-gray-400 text-lg">
            Excellence in every aspect of real estate
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Card Container */}
              <div className="relative bg-black hover:border-amber-600 rounded-lg p-8 transition-all duration-300 hover:bg-gray-800/80 h-full border-[#262626] border-[1px]">
                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 text-gray-600 group-hover:text-amber-600 transition-colors">
                  <Image 
                    src="/images/arrow-icon.svg" 
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </div>

                {/* Icon */}
                <div className="mb-8 m-auto flex justify-center items-center">
                    <Image 
                      src={feature.iconSrc}
                      alt={feature.title}
                      width={32}
                      height={32}
                      className="w-8 h-8 filter brightness-0 invert"
                    />
                  
                </div>

                {/* Title */}
                <h3 className="text-[14px] font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors text-center">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}