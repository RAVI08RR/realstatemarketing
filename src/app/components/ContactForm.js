"use client";
import React, { useState, useCallback } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Select Property Type',
    preferredLocation: '',
    budget: 'Select Budget Range',
    requirements: '',
    language: 'English'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const submitFormData = async (formData) => {
    const apiUrl = "https://script.google.com/macros/s/AKfycbzjfJIq4C1YlhKROMGY2AmsLTK-uvAUGaxNSbcgtcTycRzViy-j6V25c1ZAC0tLc9y5/exec";
    
    const payload = {
      SheetID: "105KuxnDPJqhBSk0xGiLfro6KVbq4OMxTTuET-eSSj6k",
      Field: {
        Name: formData.name,
        Email: formData.email,
        Phone: formData.phone,
        "kind of property": formData.propertyType || "",
        "preferred location": formData.preferredLocation || "",
        "budget range": formData.budget || "",
        "must-have": formData.requirements || "",
        language: formData.language,
        Status: "RAW"
      }
    };

    await fetch(apiUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return { success: true };
  };

  const handlePhoneChange = useCallback((value) => {
    setFormData(prev => ({
      ...prev,
      phone: value || ''
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      await submitFormData(formData);
      setSubmitStatus({ 
        success: true, 
        message: 'Thank you for your submission! We will contact you soon.' 
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: 'Select Property Type',
        preferredLocation: '',
        budget: 'Select Budget Range',
        requirements: '',
        language: 'English'
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'There was an error submitting the form. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const renderForm = (isMobile = false) => (
    <form onSubmit={handleSubmit} className={`space-y-0 contact-form ${isMobile ? 'mobile-form' : ''}`}>
      {submitStatus.message && (
        <div className={`p-3 rounded-lg mb-4 ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {submitStatus.message}
        </div>
      )}
      
      {/* Name and Email Row */}
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-3 mb-4' : 'grid-cols-1 md:grid-cols-2 lg:gap-4 mb-4'}`}>
        <div className="floating-input dark">
          <input
            type="text"
            name="name"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            autoCorrect="off"
            autoCapitalize="words"
          />
          <label>Your Name</label>
        </div>
        <div className="floating-input dark">
          <input
            type="email"
            name="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            autoCorrect="off"
            autoCapitalize="off"
          />
          <label>Email Address</label>
        </div>
      </div>

      {/* Phone Number */}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="mb-1">
          <PhoneInput
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handlePhoneChange}
            defaultCountry="IN"
            international
            countryCallingCodeEditable={false}
            className="phone-input-contact"
            inputClassName={`w-full px-4 ${isMobile ? 'py-3' : 'py-4'} bg-gray-800 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none text-sm`}
            required
          />
        </div>
      </div>

      {/* Preferred Location and Requirements Row */}
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-3 mb-4' : 'grid-cols-1 lg:grid-cols-2 lg:gap-4 mb-4'}`}>
        <div className="floating-input dark">
          <input
            type="text"
            name="preferredLocation"
            placeholder=" "
            value={formData.preferredLocation}
            onChange={handleChange}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="words"
          />
          <label>Preferred Location</label>
        </div>
        <div className="floating-input dark">
          <input
            type="text"
            name="requirements"
            placeholder=" "
            value={formData.requirements}
            onChange={handleChange}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          <label>Specific Requirements</label>
        </div>
      </div>

      {/* Property Type */}
      <div className="floating-input dark mb-4">
        <select
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
        >
          <option value="Select Property Type">Select Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Plot">Plot</option>
          <option value="Commercial">Commercial</option>
        </select>
        <label>Property Type</label>
      </div>

      {/* Budget Range */}
      <div className="floating-input dark mb-4">
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        >
          <option value="Select Budget Range">Select Budget Range</option>
          <option value="Under 50 Lakhs">Under 50 Lakhs</option>
          <option value="50 Lakhs - 1 Cr">50 Lakhs - 1 Cr</option>
          <option value="1 Cr - 2 Cr">1 Cr - 2 Cr</option>
          <option value="2 Cr - 5 Cr">2 Cr - 5 Cr</option>
          <option value="5 Cr & Above">5 Cr & Above</option>
        </select>
        <label>Budget Range</label>
      </div>

      {/* Language */}
      <div className="floating-input dark mb-4">
        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <label>Language</label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-[#AC9020] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#AC9020]/80 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
      </button>
    </form>
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id='contact-us'>
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[#252525] to-transparent relative">
          {/* City background simulation */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-contact-us">
            {/* Simple city skyline simulation */}
         
          </div>
        </div>
      </div>

      {/* Mobile Layout - Visible only on mobile */}
      <div className="lg:hidden relative z-10 w-full px-4 py-6">
        <div className="max-w-md mx-auto">
          {/* Mobile Header */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-[600] text-white mb-2 leading-tight">
              Find Your Dream Property
            </h2>
            <p className="text-gray-300 text-sm">
              Get expert consultation today
            </p>
          </div>

          {/* Mobile Form */}
          <div className="bg-[#252525] rounded-2xl p-4 ">
            {renderForm(true)}
          </div>
        </div>
      </div>

      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden lg:block relative z-10 container mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div className="w-full max-w-[33rem] mx-auto lg:mx-0">
            <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-[600] text-white text-center mb-4 leading-tight">
              Let&apos;s Find Your Dream Property
            </h2>
            <p className="text-gray-300 mb-6 lg:mb-8 text-base lg:text-lg text-center">
              Get in touch with our experts today
            </p>

            {renderForm(false)}
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