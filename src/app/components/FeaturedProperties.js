"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MapPin, Home, Bed, Square } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Claremont by Origin",
      location: "Sector 45, Gurgaon",
      image: "/images/f-1.png",
      type: "residential",
      developer: "Origin Developers Pvt Ltd",
      price: "1.20 Cr - 2.45 Cr",
      reraId: "P51800053578",
      propertyType: "Residential",
      bhk: "2,3 BHK",
      area: "850-1200 sqft"
    },
    {
      id: 2,
      title: "Rivali Park Stargaze",
      location: "Borivali East, Mumbai",
      image: "/images/f-2.png",
      type: "commercial",
      featured: false,
      developer: "CCI Projects Pvt Ltd",
      price: "2.50 Cr - 3.68 Cr",
      reraId: "P51800053578",
      propertyType: "Residential",
      bhk: "2,3 BHK",
      area: "722-1114 sqft"
    },
    {
      id: 3,
      title: "Rivali Park Moonrise",
      location: "Golf Course Road",
      image: "/images/f-3.png",
      type: "luxury",
      developer: "Moonrise Developers Ltd",
      price: "3.20 Cr - 4.85 Cr",
      reraId: "P51800053579",
      propertyType: "Residential",
      bhk: "3,4 BHK",
      area: "1200-1800 sqft"
    },
    {
      id: 4,
      title: "Premium Heights",
      location: "Sector 62, Noida",
      image: "/images/f-1.png",
      type: "luxury",
      developer: "Heights Builders Pvt Ltd",
      price: "1.80 Cr - 2.95 Cr",
      reraId: "P51800053580",
      propertyType: "Residential",
      bhk: "2,3 BHK",
      area: "950-1350 sqft"
    },
    {
      id: 5,
      title: "Sky Gardens",
      location: "Andheri West, Mumbai",
      image: "/images/f-2.png",
      type: "luxury",
      developer: "Sky Developers Ltd",
      price: "4.20 Cr - 6.50 Cr",
      reraId: "P51800053581",
      propertyType: "Residential",
      bhk: "3,4 BHK",
      area: "1400-2000 sqft"
    }
  ];



  const PropertyCard = ({ property }) => (
    <div className="w-full">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group lg:w-full  w-[90%] mx-auto lg:mx-3">
        {/* Property Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Property Details */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#AC9020] transition-colors duration-300">
            {property.title}
          </h3>
          
          {/* Developer Info */}
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <MapPin className="w-4 h-4 text-[#AC9020] mr-2" />
            <span>{property.developer}</span>
          </div>
          
          {/* Price */}
          <div className="mb-3">
            <p className="text-lg font-semibold text-gray-900">
              Price - {property.price}
            </p>
          </div>
          
          {/* RERA ID */}
          <div className="mb-4">
            <p className="text-[#AC9020] font-medium text-sm">
              RERA ID - {property.reraId}
            </p>
          </div>
          
          {/* Property Features */}
          <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Home className="w-4 h-4 text-[#AC9020] mr-1" />
              <span>{property.propertyType}</span>
            </div>
            <div className="flex items-center">
              <Bed className="w-4 h-4 text-[#AC9020] mr-1" />
              <span>{property.bhk}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 text-[#AC9020] mr-1" />
              <span>{property.area}</span>
            </div>
          </div>
          
          {/* View Details Button */}
          <button 
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
              property.featured 
                ? 'bg-gray-100 text-black hover:text-white hover:bg-amber-600' 
                : 'bg-gray-100 text-black hover:text-white hover:bg-[#AC9020]'
            }`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white" id='featured-property'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 text-[16px] max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties
          </p>
        </div>

        {/* Properties Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="properties-swiper"
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <PropertyCard property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute lg:left-4 left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#AC9020] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
            <svg className="w-6 h-6 text-[#AC9020] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="swiper-button-next-custom absolute lg:right-4 right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#AC9020] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
            <svg className="w-6 h-6 text-[#AC9020] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;