export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] hero-section">
      {/* Background overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white max-w-2xl">
            <h1 className="text-[3rem] md:text-5xl lg:text-[3rem] font-[600] mb-6 leading-[2]">
              Find Your Perfect 
        <br/>
             Home with Kalsi Estate
            </h1>
            
            <p className="text-[14px]  mb-8 text-gray-200">
              Discover a wide range of properties that match your lifestyle and budget. 
              We make finding your dream home simple and stress-free.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#C08735] text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-[#C08735]/80 transition-colors">
                Explore Properties
              </button>
              <button className="border-2 border-[white] text-[#ffffff] px-6 py-3 rounded-lg text-base font-semibold hover:bg-white hover:text-[#C08735] transition-colors">
                Contact Agent
              </button>
            </div>

        
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#C08735] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#C08735]/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}

    </section>
  );
}