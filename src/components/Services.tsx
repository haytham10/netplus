import { Shield, Wrench, Clock, Car } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export function Services() {
  const services = [
    {
      icon: Shield,
      title: "Réparation d'impact",
      description: "Traitement rapide des impacts et fissures pour éviter leur propagation. Nos experts utilisent des techniques de pointe pour garantir une réparation durable et sécurisée de votre pare-brise.",
      image: "/impact-repair.jpg"
    },
    {
      icon: Wrench,
      title: "Remplacement complet",
      description: "Installation professionnelle de pare-brise avec garantie constructeur. Nous utilisons uniquement des pièces d'origine pour assurer la sécurité et la qualité optimale de votre véhicule.",
      image: "/windshield-replacement.jpg"
    },
    {
      icon: Clock,
      title: "Intervention rapide",
      description: "Service d'urgence disponible avec intervention sous 24h. Notre équipe mobile peut intervenir rapidement sur site ou à domicile pour répondre à vos besoins urgents.",
      image: "/quick-service.jpg"
    },
    {
      icon: Car,
      title: "Toutes marques",
      description: "Expertise sur tous types de véhicules et de vitrage automobile. De la citadine au véhicule utilitaire, nous disposons des compétences et du matériel adapté à chaque situation.",
      image: "/all-brands.jpg"
    }
  ];

  return (
    <section id="services" className="py-12 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20 lg:space-y-40">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-20 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-all duration-700 ease-out brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 p-4 lg:p-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="hidden lg:flex bg-gradient-to-br from-blue-50 to-indigo-50 w-14 h-14 rounded-2xl items-center justify-center shadow-sm"
                >
                  <service.icon className="w-6 h-6 text-blue-600" />
                </motion.div>
                <div className="space-y-6">
                  <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-700">
                    {service.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed tracking-wide">
                    {service.description}
                  </p>
                </div>
                <Button 
                  className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                  variant="default"
                >
                  <span className="font-medium">En savoir plus</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}