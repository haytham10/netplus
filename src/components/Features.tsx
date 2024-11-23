export function Features() {
  const features = [
    {
      number: 1,
      title: "Intervention rapide",
      description: "Service d'urgence disponible avec des experts qualifiés pour une réparation efficace."
    },
    {
      number: 2,
      title: "Équipement moderne",
      description: "Nous utilisons les dernières technologies pour des réparations parfaites."
    },
    {
      number: 3,
      title: "Service garanti",
      description: "Garantie sur toutes nos interventions pour votre tranquillité."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-gray-50 relative">
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Pourquoi choisir <span className="text-blue-600">Net Plus Pare-Brise</span> à Besançon ?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
            Avec Net Plus Pare-Brise, bénéficiez d'un service transparent et fiable, où chaque étape est pensée pour vous apporter une expérience sans stress dans un rayon de 25 km autour de Besançon.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            {/* Vertical features list */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl mr-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                    <span className="text-2xl font-bold">{feature.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed tracking-wide">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional benefits */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {['Intervention à domicile', 'Prise en charge assurance'].map((benefit, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition-all duration-300">
                  <p className="font-medium text-gray-900 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="text-green-600">✓</span>
                    </span>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Image */}
          <div className="hidden lg:block relative mt-12 lg:mt-0">
            <div className="sticky top-8 transition-transform duration-700 hover:scale-[1.02]">
              <img 
                src="aside3.jpg" 
                alt="Service Net Plus Pare-Brise" 
                className="rounded-2xl shadow-2xl object-cover h-[600px] w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}