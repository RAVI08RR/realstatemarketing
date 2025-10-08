export default function Header() {
  return (
    <header className="bg-white shadow-sm " >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[100px]">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
            <img src="/images/logo.svg" className="w-72"/>
           
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
              Properties
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
              Get Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-amber-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}