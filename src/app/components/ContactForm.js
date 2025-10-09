"use client";
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[#252525] to-transparent relative">
          {/* City background simulation */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-contact-us">
            {/* Simple city skyline simulation */}
         
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto  w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div className="max-w-[33rem]">
            <h2 className="lg:text-[28px] md:text-5xl font-[600] text-white text-center mb-4 leading-tight">
              Let&apos;s Find Your Dream Property
            </h2>
            <p className="text-gray-300 mb-8 text-lg text-center">
              Get in touch with our experts today
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                  required
                />
              </div>

              {/* Phone Number */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                required
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#C08735] text-white py-4 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300 text-lg"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Right Side - Image Space */}
          <div className="hidden lg:block">
           {/* <img src='/images/contact-img.png' className='w-100'/> */}
          </div>
        </div>
      </div>
    </section>
  );
}