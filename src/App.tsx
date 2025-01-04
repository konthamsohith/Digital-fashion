import React from 'react';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import LogoSlider from './components/CompanyLogos/LogoSlider';
import Contact from './components/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import RequestDemo from './pages/RequestDemo';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import ChallengesAndSolutions from './pages/ChallengesAndSolutions';
import ConsumerIntelligence from './pages/solutions/ConsumerIntelligence';
import Apollo from './pages/solutions/Apollo';
import ImaGenie from './pages/solutions/ImaGenie';
import About from './pages/About';
import Partners from './pages/Partners';
import LoadingPage from './components/Loading/LoadingPage';
import { NavigationProvider } from './contexts/NavigationContext';
import { useNavigation } from './contexts/NavigationContext';

function AppContent() {
  const { isLoading } = useNavigation();
  const path = window.location.pathname;

  if (isLoading) {
    return <LoadingPage />;
  }

  // Auth & general routes
  if (path === '/signin') return <SignIn />;
  if (path === '/signup') return <SignUp />;
  if (path === '/request-demo') return <RequestDemo />;
  if (path === '/blog') return <Blog />;
  if (path === '/contact') return <ContactUs />;
  if (path === '/about') return <About />;
  if (path === '/partners') return <Partners />;

  // Combined challenges & solutions route
  if (path === '/solutions' || path === '/challenges') return <ChallengesAndSolutions />;

  // Solution routes
  if (path === '/solutions/consumer-intelligence') return <ConsumerIntelligence />;
  if (path === '/solutions/apollo') return <Apollo />;
  if (path === '/solutions/imagenie') return <ImaGenie />;

  // Home page
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <LogoSlider />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}