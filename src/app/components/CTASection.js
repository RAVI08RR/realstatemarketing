import React from 'react';

export default function CTASection() {
  return (
    <section className="relative py-20 min-h-[400px] flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[#252525] relative buy-sell-bg">
          {/* Pool/Interior background simulation */}
          <div className="">
            {/* Simple geometric pattern */}
            
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0000004D] bg-opacity-40"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small Label */}
        {/* <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"> */}
          <span className="text-white text-sm font-medium tracking-wider uppercase">
            BUY OR SELL
          </span>
        {/* </div> */}

        {/* Main Heading */}
        <h2 className="text-[33px] md:text-[24px] lg:text-[34px] font-[600] text-white mb-0 lg:leading-[37px]">
          Looking to Buy a new property or sell an existing one? 
        Homez provides an awesome solution!
        </h2>

        {/* CTA Button */}
        <button className="bg-[#AC9020] text-white px-8 py-4 rounded-lg font-[400] hover:bg-amber-700 transition-colors duration-300 text-lg mt-6">
         Get a Free Consultation
        </button>
      </div>
    </section>
  );
}