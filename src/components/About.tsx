import { CheckCircle, Car, Sparkles, FileCheck } from 'lucide-react';

export function About() {
  const benefits = [
    "Plus de 20 ans d'expérience",
    "Techniciens certifiés",
    "Garantie à vie sur nos interventions",
    "Agrément toutes assurances"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className="relative group p-2">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/40 to-transparent rounded-3xl blur-lg -z-10 group-hover:from-blue-100/60 transition-colors" />
            <img 
              src="https://images.unsplash.com/photo-1518830892177-d7611245a832?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Notre équipe"
              className="rounded-2xl shadow-xl aspect-[5/4] object-cover w-full max-h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden md:block transform transition-transform group-hover:-translate-y-1 duration-300">
              <p className="text-4xl font-bold text-blue-600">20+</p>
              <p className="text-gray-600 font-medium">Années d'expérience</p>
            </div>
          </div>
          
          <div className="relative max-w-lg">
            <div className="absolute -inset-x-6 -inset-y-4 bg-blue-50/50 rounded-2xl -z-10" />
            <h2 className="text-3xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900">
              Votre spécialiste du pare-brise <br />
              <span className="text-blue-600 relative inline-block">
                à Besançon
                <span className="absolute -bottom-1.5 left-0 right-0 h-2.5 bg-blue-100/50 -z-10 transform -rotate-1" />
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed font-medium">
              Depuis plus de <span className="text-blue-700 font-bold">20 ans</span>, nous assurons la sécurité de nos clients avec des services de réparation et remplacement de pare-brise de haute qualité.
            </p>
            <ul className="space-y-4 text-base bg-white/80 backdrop-blur rounded-xl p-6 shadow-sm border border-gray-100/80">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  </div>
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-900/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
          <div className="relative">
            <h3 className="text-3xl font-bold mb-12 text-blue-600 leading-tight text-center">
              Des services pratiques pour <br className="hidden md:block" />
              votre tranquillité
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="hidden md:block">
                      <Car className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-2 leading-snug text-gray-900">
                        Véhicule de prêt gratuit
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Bénéficiez d'un véhicule de prêt sans frais pendant toute la durée de l'intervention
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="hidden md:block">
                      <Sparkles className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-2 leading-snug text-gray-900">
                        Service complet
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Nettoyage intégral de votre véhicule inclus avec chaque intervention
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="hidden md:block">
                    <FileCheck className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-3 leading-snug text-gray-900">
                      Gestion administrative simplifiée
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Nous collaborons avec <span className="font-medium text-gray-900">toutes les compagnies d'assurance</span> pour vous garantir une prise en charge rapide et transparente, sans avance de frais.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Notre équipe s'occupe de toutes les formalités pour vous offrir une expérience simple et sans contrainte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}