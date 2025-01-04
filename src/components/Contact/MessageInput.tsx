import React from 'react';

interface MessageInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function MessageInput({ value, onChange }: MessageInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-200 mb-1">
        Message <span className="text-blue-400">*</span>
      </label>
      <textarea
        name="message"
        value={value}
        onChange={onChange}
        required
        rows={4}
        className="w-full px-4 py-2 bg-[#1E2538] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        placeholder="How can we help you?"
      />
    </div>
  );
}