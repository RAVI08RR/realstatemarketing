"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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



  const TestimonialCard = ({ testimonial }) => (
    <div className="w-full">
      <div className="bg-[#F5F1EB] rounded-2xl p-8 h-full relative mx-4">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-gray-300">
          <svg className="w-8 h-8" fill="#AC9020" viewBox="0 0 24 24">
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
        <div className="text-center mb-10">
          <h2 className="lg:text-[22px] md:text-5xl font-bold text-gray-900 mb-2">
            People Love Living With Realtor
          </h2>
          <p className="text-gray-600 text-[16px]">
            Aliquam lacinia diam qua lacus euismod
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet testimonial-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active testimonial-bullet-active',
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
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}