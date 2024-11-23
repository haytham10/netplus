import React from 'react';
import { ShieldCheck, Wrench, Clock } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Intervention rapide",
      description: "Service d'urgence disponible avec des experts qualifiés pour une réparation efficace."
    },
    {
      icon: Wrench,
      title: "Équipement moderne",
      description: "Nous utilisons les dernières technologies pour des réparations parfaites."
    },
    {
      icon: Clock,
      title: "Service garanti",
      description: "Garantie sur toutes nos interventions pour votre tranquillité."
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pourquoi choisir Net Plus Pare-Brise à Besançon ?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <feature.icon className="w-12 h-12 text-blue-700 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}