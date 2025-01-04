import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a 
      href={href}
      className="text-gray-600 hover:text-[#cc73f8] transition-colors font-medium"
    >
      {children}
    </a>
  );
}