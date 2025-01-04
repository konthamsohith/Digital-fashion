import React from 'react';
import Button from '../Button';
import { Linkedin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { useNavigate } from '../../hooks/useNavigate';

interface SlideContentProps {
  title: string;
  subtitle: string;
  hasDemo: boolean;
}

export default function SlideContent({ title, subtitle, hasDemo }: SlideContentProps) {
  const navigate = useNavigate();

  const socialIcons = [
    { Icon: Linkedin, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Facebook, href: "#" },
    { Icon: Youtube, href: "#" }
  ];

  const handleDemoClick = () => {
    navigate('/request-demo');
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-start p-12 bg-gradient-to-r from-black/50 to-transparent">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-white mb-4">
          {title}
          <br />
          {subtitle}
        </h1>
        {hasDemo && (
          <Button 
            variant="solid" 
            onClick={handleDemoClick}
            className="mt-8 text-lg !bg-[#4361ee] hover:!bg-[#3730a3]"
          >
            SCHEDULE A DEMO
          </Button>
        )}
      </div>
      <div className="absolute bottom-8 left-12 flex gap-4">
        {socialIcons.map(({ Icon, href }, index) => (
          <a
            key={index}
            href={href}
            className="text-white hover:text-[#cc73f8] transition-colors"
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
}