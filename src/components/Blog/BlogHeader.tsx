import React from 'react';
import SearchBar from './SearchBar';
import AnimatedSection from '../animations/AnimatedSection';
import SplitText from '../animations/SplitText';

interface BlogHeaderProps {
  onSearch: (term: string) => void;
}

export default function BlogHeader({ onSearch }: BlogHeaderProps) {
  return (
    <div className="bg-[#151B2E] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection animation="fade">
          <SplitText
            text="Fashion Intelligence Blog"
            className="text-4xl font-bold text-white mb-4"
            staggerDelay={30}
          />
        </AnimatedSection>
        <AnimatedSection animation="slide-up" delay={500}>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl">
            Discover the latest insights, trends, and innovations in AI-powered fashion analytics
          </p>
        </AnimatedSection>
        <AnimatedSection animation="scale" delay={800}>
          <SearchBar onSearch={onSearch} />
        </AnimatedSection>
      </div>
    </div>
  );
}