"use client";

import { Home, Users, Award } from 'lucide-react';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function HeroSection() {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitHeroFormData = async (formData) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      await submitHeroFormData(formData);
      setSubmitStatus({ 
        success: true, 
        message: 'Thank you! We will contact you soon.' 
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
      console.error('Hero form submission error:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Error submitting form. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[80vh] hero-section">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-start">
          {/* Left Content */}
          <div className="text-white max-w-2xl">
            <h1 className="text-[2rem] md:text-5xl lg:text-[3rem] font-[600] lg:mb-6 mb-2 lg:leading-[1.3] leading-[35px]">
              Find Your Perfect 
              <br/>
              Home with DreamNest
            </h1>
            
            <p className="text-[14px] lg:mb-8 mb-5 text-gray-200">
              Discover a wide range of properties that match your lifestyle and budget. 
              We make finding your dream home simple and stress-free.
            </p>

            <div className="flex flex-wrap gap-4 lg:mb-12 mb-5">
              <button className="bg-[#AC9020] text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-[#AC9020]/80 transition-colors">
                <a href='#featured-property'>
                  Explore Properties
                </a>
              </button>
              <button className="border-2 border-[white] text-[#ffffff] px-6 py-3 rounded-lg text-base font-semibold hover:bg-white hover:text-[#AC9020] transition-colors">
                <a href='#contact-us'>Contact Agent</a>
              </button>
            </div>

            {/* Info Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:gap-0 gap-3" >
              {/* Info Box 1 - Properties */}
              <div className="flex items-center space-x-3 bg-[#c0863500] bg-opacity-50 rounded-lg p-0">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-[black]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">500+</h3>
                  <p className="text-gray-200 text-sm">Properties Listed</p>
                </div>
              </div>

              {/* Info Box 2 - Clients */}
              <div className="flex items-center space-x-3 bg-transperent bg-opacity-50 rounded-lg p-0">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[black]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">1000+</h3>
                  <p className="text-gray-200 text-sm">Happy Clients</p>
                </div>
              </div>

              {/* Info Box 3 - Experience */}
              <div className="flex items-center space-x-3 bg-transperent bg-opacity-50 rounded-lg p-0">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-[black]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">15+</h3>
                  <p className="text-gray-200 text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">Get a Free Consultation</h2>
            
            {submitStatus.message && (
              <div className={`p-3 rounded-lg mb-4 ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-0 hero-form">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-4">
                <div className="floating-input">
                  <input
                    type="text"
                    name="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label>Your Name</label>
                </div>
                <div className="floating-input">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label>Email Address</label>
                </div>
              </div>


                <div className='grid grid-cols-1 md:grid-col-1 gap-4'>
                  <div className='mb-5'>
                  <PhoneInput
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(value) => setFormData({...formData, phone: value || ''})}
                    defaultCountry="IN"
                    international
                    countryCallingCodeEditable={false}
                    className="phone-input-hero"
                    inputClassName="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none text-sm"
                    required
                  />
                </div>
              </div>

              {/* Phone and Preferred Location Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
              
                <div className="floating-input">
                  <input
                    type="text"
                    name="preferredLocation"
                    placeholder=" "
                    value={formData.preferredLocation}
                    onChange={handleChange}
                  />
                  <label>Preferred Location</label>
                </div>

                    <div className="floating-input">
                <input
                 type="text"
                  name="requirements"
                  placeholder=" "
              
                  value={formData.requirements}
                  onChange={handleChange}
                  className="resize-none"
                />
                <label>Specific Requirements</label>
              </div>
              </div>

            

              {/* Property Type */}
              <div className="floating-input mb-2">
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
              <div className="floating-input">
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

              {/* Requirements */}
          

              {/* Language */}
              <div className="floating-input">
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

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#AC9020] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#AC9020]/80 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}