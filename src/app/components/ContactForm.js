"use client";
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    preferredLocation: '',
    budget: '',
    requirements: '',
    language: 'English'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitFormData = async (formData) => {
    const apiUrl = "https://script.google.com/macros/s/AKfycbzjfJIq4C1YlhKROMGY2AmsLTK-uvAUGaxNSbcgtcTycRzViy-j6V25c1ZAC0tLc9y5/exec";
    
    // Map form data to match your API structure
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

    const response = await fetch(apiUrl, {
      method: 'POST',
      mode: 'no-cors', // This bypasses CORS but you won't get response data
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // With no-cors mode, we can't read the response, so we assume success
    return { success: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      await submitFormData(formData);
      setSubmitStatus({ 
        success: true, 
        message: 'Thank you for your submission! We will contact you soon.' 
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        preferredLocation: '',
        budget: '',
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
  };

  return (
    <section className="relative min-h-screen flex items-center" id='contact-us'>
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

            <form onSubmit={handleSubmit} className="space-y-4 contact-form">
              {submitStatus.message && (
                <div className={`p-3 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                    required
                  />
                </div>
                <div>
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
              </div>

              <div>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(value) => setFormData({...formData, phone: value || ''})}
                  defaultCountry="IN"
                  international
                  countryCallingCodeEditable={false}
                  className="w-full phone-input-contact"
                  inputClassName="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                  required
                />
              </div>

              <div>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="">What type of property are you looking for?</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Plot">Plot</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  name="preferredLocation"
                  placeholder="Preferred Location"
                  value={formData.preferredLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="">Select Budget Range</option>
                  <option value="Under 50 Lakhs">Under 50 Lakhs</option>
                  <option value="50 Lakhs - 1 Cr">50 Lakhs - 1 Cr</option>
                  <option value="1 Cr - 2 Cr">1 Cr - 2 Cr</option>
                  <option value="2 Cr - 5 Cr">2 Cr - 5 Cr</option>
                  <option value="5 Cr & Above">5 Cr & Above</option>
                </select>
              </div>

              <div>
                <textarea
                  name="requirements"
                  placeholder="Specific Requirements (e.g., 3BHK, Garden, Pool, etc.)"
                  rows="3"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#C08735] text-white py-4 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300 text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Get a Free Consultation'}
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