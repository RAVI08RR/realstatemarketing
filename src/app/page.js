import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedProperties from './components/FeaturedProperties';
import WhyChooseUs from './components/WhyChooseUs';
import TrustedAdvisors from './components/TrustedAdvisors';
import ContactForm from './components/ContactForm';
import CTASection from './components/CTASection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Realstatesoloution from './components/Realstatesoloution';

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <HeroSection />
      <TrustedAdvisors />
     
      <WhyChooseUs />
       <FeaturedProperties />
      <Realstatesoloution />
      
      <CTASection />
      
      <Testimonials />
     
       <ContactForm />
      <Footer />
    </div>
  );
}
