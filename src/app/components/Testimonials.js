"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Mohd Ali",
      role: "Marketing",
      avatar: "/images/testimonil-1.png",
      quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti",
      rating: 5
    },
    {
      id: 2,
      name: "Albert Flores",
      role: "Designer",
      avatar: "/images/testimonil-1.png",
      quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti",
      rating: 5
    },
    {
      id: 3,
      name: "Robert Fox",
      role: "Developer",
      avatar: "/images/testimonil-1.png",
      quote: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
      rating: 5
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Manager",
      avatar: "/images/testimonil-1.png",
      quote: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae",
      rating: 5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
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
    dotsClass: "slick-dots testimonial-dots"
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="px-4">
      <div className="bg-[#F5F1EB] rounded-2xl p-8 h-full relative">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-gray-300">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>

        {/* User Info */}
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
            <Image
              src={testimonial.avatar}
              alt={`${testimonial.name} avatar`}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
        </div>

        {/* Quote */}
        <p className="text-gray-700 leading-relaxed mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        {/* Rating */}
        {/* <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div> */}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="lg:text-[22px] md:text-5xl font-bold text-gray-900 mb-4">
            People Love Living With Realtor
          </h2>
          <p className="text-gray-600 text-[16px]">
            Aliquam lacinia diam qua lacus euismod
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}