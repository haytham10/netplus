import React from 'react';
import { Shield, Wrench, Clock, Car } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Shield,
      title: "Réparation d'impact",
      description: "Traitement rapide des impacts et fissures pour éviter leur propagation."
    },
    {
      icon: Wrench,
      title: "Remplacement complet",
      description: "Installation professionnelle de pare-brise avec garantie constructeur."
    },
    {
      icon: Clock,
      title: "Intervention rapide",
      description: "Service d'urgence disponible avec intervention sous 24h."
    },
    {
      icon: Car,
      title: "Toutes marques",
      description: "Expertise sur tous types de véhicules et de vitrage automobile."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions professionnelles pour tous vos besoins en vitrages automobiles
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition group">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition">
                <service.icon className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}