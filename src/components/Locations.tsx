
import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
  {
    name: "Cascavel - PR",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    address: "Rua Principal, 123 - Centro, Cascavel - PR",
    mapsUrl: "https://maps.google.com/?q=Cascavel,PR"
  },
  {
    name: "Ourinhos - SP",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    address: "Avenida Central, 456 - Centro, Ourinhos - SP",
    mapsUrl: "https://maps.google.com/?q=Ourinhos,SP"
  }
];

const Locations = () => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-center mb-10 text-neurovida-blue">Our Locations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={location.image} 
                alt={location.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-4">{location.address}</p>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-neurovida-blue text-white px-4 py-2 rounded-lg hover:bg-neurovida-blue/90 transition-colors"
                >
                  <MapPin size={20} />
                  View on Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
