import React from 'react';
// import { ArrowUpRight } from 'lucide-react';

export default function RealEstateAdvisors() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="h-1 bg-black"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Left Section */}
          <div className='rounded-lg p-5 mt-[2rem]' >
            <h1 className="text-[3.5rem] font-[600] mb-8 leading-[1.2]">
              Your Trusted Real
            
              Estate <span className="text-[#C08735]">Advisors</span>
            </h1>
            
            {/* Stats Grid */}
            <div className="grid lg:grid-cols-2 grid-cols-2 gap-6 mt-[3rem]">
              {/* Card 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 card-client-no">
                <div className="text-5xl font-bold text-black mb-2">17k+</div>
                <p className="text-gray-700 text-sm">Satisfied Customers</p>
              </div>
              
              {/* Card 2 - Highlighted */}
              <div className="bg-[#C08735] rounded-2xl p-6 card-client-no">
                <div className="text-5xl font-bold text-white mb-2">25+</div>
                <p className="text-white text-sm">Satisfied Customers</p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 card-client-no">
                <div className="text-5xl font-bold text-black mb-2">150+</div>
                <p className="text-gray-700 text-sm">Satisfied Customers</p>
              </div>
              
              {/* Card 4 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 card-client-no">
                <div className="text-5xl font-bold text-black mb-2">25+</div>
                <p className="text-gray-700 text-sm">Satisfied Customers</p>
              </div>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="space-y-8">
            {/* Description Box */}
            <div className="rounded-lg p-8">
              <p className="text-gray-800 leading-relaxed">
                Experience a higher standard of service with Your Trusted Real Estate Advisors — experts in finding homes and investments that truly fit your vision.From prime locations to seamless transactions, we're here to ensure every decision you make is confident and rewarding.
              </p>
            </div>
            
            {/* Middle Section */}
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center gap-6">
              <div className="flex-1">
                <p className="text-gray-800 leading-relaxed">
                At Your Trusted Real Estate Advisors, we make your property journey smooth, transparent, and stress-free from start to finish                </p>
                <img className='mt-2' src='/images/round-text.png'/>

              </div>
              
              {/* Logo Circle */}
              <div className="w-[50%] bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-gray-300">
                <div className="text-center">
                  <div className="text-yellow-700 text-2xl mb-1">
                  <img src='/images/building.png'/>
                 

                  </div>
                  <div className="text-gray-600 text-xs">
                  </div>
                </div>
              </div>
            </div>
            
            {/* Building Image */}
     
          </div>
        </div>
      </div>
    </div>
  );
}