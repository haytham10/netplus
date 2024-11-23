import { Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <img 
              src="https://www.netplus-parebrise.com/images/logo2.png" 
              alt="Net Pare-Brise Logo" 
              className="h-20 mb-6"
            />
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              Votre spécialiste du pare-brise à Besançon depuis plus de 20 ans.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-6 tracking-wide">Services</h3>
            <ul className="space-y-3 text-gray-300 font-light">
              <li className="hover:text-white transition-colors">Réparation d'impact</li>
              <li className="hover:text-white transition-colors">Remplacement pare-brise</li>
              <li className="hover:text-white transition-colors">Calibrage ADAS</li>
              <li className="hover:text-white transition-colors">Vitrage latéral</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-6 tracking-wide">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-light">06 65 34 34 15</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
                <span className="font-light">Besançon, France</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-6 tracking-wide">Horaires</h3>
            <ul className="space-y-3 text-gray-300 font-light">
              <li>Lundi - Vendredi: 8h - 18h</li>
              <li>Samedi: 9h - 12h</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-16 pt-8 text-center text-gray-400">
          <p className="text-sm font-light">&copy; 2024 Net Pare-Brise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}