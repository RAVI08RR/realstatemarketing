import React from 'react';
import Image from 'next/image';
// import { ArrowUpRight } from 'lucide-react';

export default function RealEstateAdvisors() {
  return (
    <div className="bg-white">
      {/* Header */}
      
      {/* Main Content */}
      <div className="container mx-auto px-2 mt-5 mb-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Left Section */}
          <div className='rounded-lg p-5 mt-[0rem]' >
            <h1 className="text-[2.5rem] font-[600] mb-8 leading-[1.2]">
              Your Trusted Real <br className='md:hidden'/>
            
              Estate <span className="text-[#AC9020]">Advisors</span>
            </h1>
            
            {/* Stats Grid */}
            <div className="grid lg:grid-cols-2 grid-cols-2 gap-6 mt-[4.5rem]">
              {/* Card 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 card-client-no">
                <div className="text-5xl font-[600] text-black mb-2">17k+</div>
                <p className="text-gray-700 text-sm">Satisfied Customers</p>
              </div>
              
              {/* Card 2 - Highlighted */}
              <div className="bg-[#AC9020] rounded-lg p-6 card-client-no">
                <div className="text-5xl font-[600] text-white mb-2">25+</div>
                <p className="text-white text-sm">Satisfied Customers</p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 card-client-no">
                <div className="text-5xl font-[600] text-black mb-2">150+</div>
                <p className="text-gray-700 text-sm">Satisfied Customers</p>
              </div>
              
              {/* Card 4 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 card-client-no">
                <div className="text-5xl font-[600] text-black mb-2">25+</div>
                <p className="text-gray-700 text-sm">Satisfied Customers</p>
              </div>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="space-y-8">
            {/* Description Box */}
            <div className="rounded-lg p-8">
              <p className="text-gray-800 leading-relaxed text-[14px]">
                Experience a higher standard of service with Your Trusted Real Estate Advisors — experts in finding homes and investments that truly fit your vision.From prime locations to seamless transactions, we&apos;re here to ensure every decision you make is confident and rewarding.
              </p>
            </div>
            
            {/* Middle Section */}
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center gap-6">
              <div className="flex-1">
                <p className="text-gray-800 leading-relaxed mb-2 text-[14px]">
                At Your Trusted Real Estate Advisors, we make your property journey smooth, transparent, and stress-free from start to finish                </p>
                <Image 
                  className='mt-2' 
                  src='/images/round-text.png'
                  alt="Round text decoration"
                  width={100}
                  height={100}
                />

              </div>
              
              {/* Logo Circle */}
              <div className="w-[50%] bg-white rounded-full flex items-center justify-center flex-shrink-0  ">
                <div className="text-center">
                  <div className="text-yellow-700 text-2xl mb-1">
                  <Image 
                    src='/images/building.png'
                    alt="Building illustration"
                    width={200}
                    height={200}
                  />
                 

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