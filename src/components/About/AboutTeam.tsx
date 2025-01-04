import React from 'react';

const leaders = [
  {
    name: 'Ganesh Subramanian',
    role: 'Founder & CEO',
    image: 'https://cdn.asp.events/CLIENT_AIS_4ECF9403_5056_B731_4C2E7E25E0DDB2FB/peopleProfiles/3059CB5B-A1F4-D87E-EA7CC10EA1EE983E-profileimg.jpg/fit-in/500x500/filters:no_upscale()?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Sharath Puranik',
    role: 'Co-founding Member, Director - Product & Technology',
    image: 'https://www.stylumia.ai/wp-content/uploads/2020/02/imgonline-com-ua-BlackWhite-CenBnNdHSWpbCV-e1582794223639-1-1.jpg?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Abhishek Thakur',
    role: 'Advisor - Data Science',
    image: 'https://miro.medium.com/v2/resize:fit:1000/0*H1SEVSaV75cydTQ7?auto=format&fit=crop&w=400&q=80'
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