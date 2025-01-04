import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  icon: LucideIcon;
  placeholder: string;
  type?: string;
  className?: string;
}

export default function FormInput({
  label,
  name,
  value,
  onChange,
  required,
  icon: Icon,
  placeholder,
  type = 'text',
  className = ''
}: FormInputProps) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-200 mb-1">
        {label} {required && <span className="text-blue-400">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full pl-10 pr-4 py-2 bg-[#1E2538] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}