"use client";
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Claremont by Origin",
      location: "Sector 45, Gurgaon",
      image: "/images/f-1.png",
      type: "residential"
    },
    {
      id: 2,
      title: "Rivali Park Stargaze",
      location: "Borivali East, Mumbai",
      image: "/images/f-2.png",
      type: "commercial",
      featured: true
    },
    {
      id: 3,
      title: "Rivali Park Moonrise",
      location: "Golf Course Road",
      image: "/images/f-3.png",
      type: "luxury"
    },
     {
      id: 4,
      title: "Rivali Park Moonrise",
      location: "Golf Course Road",
      image: "/images/f-1.png",
      type: "luxury"
    },
      {
      id: 5,
      title: "Rivali Park Moonrise",
      location: "Golf Course Road",
      image: "/images/f-2.png",
      type: "luxury"
    }

  ];

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      style={{ zIndex: 2 }}
    >
      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      style={{ zIndex: 2 }}
    >
      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    customPaging: (i) => (
      <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-amber-500 transition-colors duration-300"></div>
    ),
    dotsClass: "slick-dots custom-dots"
  };

  const PropertyCard = ({ property }) => (
    <div className="px-3">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
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
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
            {property.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {property.location}
          </p>
          
          {/* View Details Button */}
          <button 
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
              property.featured 
                ? 'bg-amber-500 text-white hover:bg-amber-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-2">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties
          </p>
        </div>

        {/* Properties Carousel */}
        <div className="relative">
          <Slider {...settings} className='feature-proprty-slider'>
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;