import React from 'react';

interface CaseStudy {
  company: string;
  logo: string;
  quote: string;
  author: string;
  role: string;
  stats: {
    label: string;
    value: string;
  }[];
}

interface CaseStudiesProps {
  studies: CaseStudy[];
}

export default function CaseStudies({ studies }: CaseStudiesProps) {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {studies.map((study, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <img
                src={study.logo}
                alt={study.company}
                className="h-12 mb-6"
              />
              <blockquote className="text-lg text-gray-600 mb-6">
                "{study.quote}"
              </blockquote>
              <div className="mb-8">
                <div className="font-semibold text-gray-900">{study.author}</div>
                <div className="text-gray-500">{study.role}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {study.stats.map((stat, statIndex) => (
                  <div key={statIndex}>
                    <div className="text-2xl font-bold text-[#006BFF]">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}