import React from 'react';
import NavLink from './NavLink';
import Button from '../Button';
import StylumiaLogo from '../Logo/StylumiaLogo';
import { useNavigation } from '../../contexts/NavigationContext';

export default function Navbar() {
  const { startLoading } = useNavigation();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    startLoading('/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a 
              href="/"
              onClick={handleLogoClick}
              className="font-bold text-xl cursor-pointer"
            >
              <StylumiaLogo />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/challenges">Challenges & Solutions</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/partners">Partner with Us</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <NavLink href="/signin">Sign In</NavLink>
            <a 
              href="/request-demo"
              className="px-8 py-3 rounded-lg font-semibold transition-colors bg-[#cc73f8] text-white hover:bg-[#b85de4]"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}