
import React from 'react';

const Expertise = () => {
  const areas = [
    {
      title: "Neurofunctional Rehabilitation",
      color: "bg-neurovida-blue"
    },
    {
      title: "Cognitive Stimulation",
      color: "bg-neurovida-green"
    },
    {
      title: "Motor Development",
      color: "bg-neurovida-orange"
    },
    {
      title: "School and Social Inclusion",
      color: "bg-neurovida-purple"
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-center mb-10 text-neurovida-blue">Areas of Expertise</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className={`${area.color} text-white p-6 rounded-lg text-center shadow-md transform transition hover:scale-105`}
            >
              <h3 className="font-bold text-xl">{area.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
