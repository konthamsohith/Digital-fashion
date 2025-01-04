import React from 'react';

const leaders = [
  {
    name: 'Ganesh Subramanian',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Sharath Puranik',
    role: 'Co-founding Member, Director - Product & Technology',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Abhishek Thakur',
    role: 'Advisor - Data Science',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  }
];

export default function AboutTeam() {
  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <div key={index} className="bg-[#151B2E] rounded-xl overflow-hidden">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
              <p className="text-gray-400">{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-[#151B2E] p-8 rounded-xl text-center">
        <h3 className="text-xl font-semibold mb-4">Our Team</h3>
        <p className="text-gray-400">
          Stylumia is built on a foundation of applied machine learning and industry expertise. 
          Our team blends world-class data scientists (including Kaggle Grandmasters) with seasoned 
          fashion professionals, creating a unique synergy to address real-world challenges.
        </p>
      </div>
    </div>
  );
}