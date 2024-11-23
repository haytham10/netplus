import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-bold text-white mb-4 block">
              Net Pare-Brise
            </span>
            <p className="text-gray-400">
              Votre spécialiste du pare-brise à Besançon depuis plus de 20 ans.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Réparation d'impact</li>
              <li>Remplacement pare-brise</li>
              <li>Calibrage ADAS</li>
              <li>Vitrage latéral</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                03 81 50 47 47
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Besançon, France
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Horaires</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lundi - Vendredi: 8h - 18h</li>
              <li>Samedi: 9h - 12h</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Net Pare-Brise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}