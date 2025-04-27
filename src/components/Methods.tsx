
import React from 'react';

const Methods = () => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-center mb-10 text-neurovida-blue">Our Methods</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-neurovida-green">
            <h3 className="text-2xl font-bold mb-4 text-neurovida-green">TREINI7</h3>
            <p className="text-gray-700">
              An innovative method focused on stimulating brain plasticity through intensive and motivational activities.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-neurovida-purple">
            <h3 className="text-2xl font-bold mb-4 text-neurovida-purple">MIG (Global Intensive Method)</h3>
            <p className="text-gray-700">
              A global approach that integrates multiple sensory, motor, and cognitive stimuli to enhance rehabilitation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methods;
