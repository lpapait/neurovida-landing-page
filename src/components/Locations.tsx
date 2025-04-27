
import React from 'react';

const Locations = () => {
  const locations = [
    "Cascavel - PR",
    "Ourinhos - SP",
    "Presidente Prudente - SP",
    "Rehabilitation Clinic - PR"
  ];

  return (
    <section className="bg-slate-50 py-12">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-center mb-10 text-neurovida-blue">Physical Locations</h2>
        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="bg-white p-4 text-center rounded-lg shadow-sm border border-gray-100">
              <p className="text-lg font-medium text-gray-800">{location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
