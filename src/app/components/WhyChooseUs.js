import Image from 'next/image';

export default function WhyChooseUs() {
  const features = [
    {
      iconSrc: "/images/wh-1.png",
      title: "Find Your Dream Home",
      description: "Discover properties tailored to your needs"
    },
    {
      iconSrc: "/images/wh-2.png",
      title: "Unlock Property Value",
      description: "Maximize your investment potential"
    },
    {
      iconSrc: "/images/wh-3.png",
      title: "Effortless Property Management",
      description: "Streamlined solutions for your properties"
    },
    {
      iconSrc: "/images/wh-4.png",
      title: "Smart Investments. Informed Decisions",
      description: "Data-driven insights for better choices"
    }
  ];

  return (
    <div className="min-h-[60vh] bg-gradient-to-b from-black to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[2.5rem] text-white font-[600] mb-3 leading-[1.2]">
            Why Choose DreamNest
          </h1>
          <p className="text-gray-400 text-[16px]">
            Excellence in every aspect of real estate
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Card Container */}
              <div className="relative bg-black hover:border-[#c3b5b5] rounded-lg p-8 transition-all duration-300 hover:bg-black/80 h-full border-[#262626] border-[0.8px]">
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
                      className="w-20 h-20 "
                    />
                  
                </div>

                {/* Title */}
                <h3 className="text-[16px] font-semibold text-white mb-2 group-hover:text-[#AC9020] transition-colors text-center">
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