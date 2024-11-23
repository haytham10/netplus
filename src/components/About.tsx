import React from 'react';
import { CheckCircle } from 'lucide-react';

export function About() {
  const benefits = [
    "Plus de 20 ans d'expérience",
    "Techniciens certifiés",
    "Garantie à vie sur nos interventions",
    "Agrément toutes assurances"
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
              alt="Notre équipe"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-4xl font-bold text-blue-700">20+</p>
              <p className="text-gray-600">Années d'expérience</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Votre spécialiste du pare-brise à Besançon
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Depuis plus de 20 ans, nous assurons la sécurité de nos clients avec des services de réparation et remplacement de pare-brise de haute qualité.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-700 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}