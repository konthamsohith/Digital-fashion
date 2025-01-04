import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
}

export default function Button({ variant = 'solid', className = '', children, ...props }: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-lg font-semibold transition-colors";
  const variants = {
    solid: "bg-[#cc73f8] text-white hover:bg-[#b85de4]",
    outline: "border border-[#cc73f8] text-[#cc73f8] hover:bg-[#cc73f8] hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}