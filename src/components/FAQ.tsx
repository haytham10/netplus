import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Combien de temps dure une réparation ?",
      answer: "Une réparation standard prend généralement entre 30 minutes et 1 heure. Pour un remplacement complet, comptez environ 2 heures. Nous nous efforçons de minimiser votre temps d'attente tout en garantissant un travail de qualité."
    },
    {
      question: "Est-ce que mon assurance couvre la réparation ?",
      answer: "La plupart des assurances auto avec une garantie bris de glace couvrent les réparations ou remplacements. Nous pouvons vous aider à vérifier votre couverture et gérer directement les démarches avec votre assurance."
    },
    {
      question: "Puis-je conduire avec un pare-brise fissuré ?",
      answer: "Légalement et pour votre sécurité, il n'est pas recommandé de conduire avec un pare-brise endommagé. Une fissure peut s'aggraver rapidement et compromettre la structure du véhicule en cas d'accident."
    },
    {
      question: "Quelle est la différence entre réparation et remplacement ?",
      answer: "La réparation convient aux petits impacts (moins de 2cm) et fissures courtes. Le remplacement est nécessaire pour les dommages plus importants, les impacts dans le champ de vision ou les fissures étendues."
    }
  ];

  return (
    <div className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Questions fréquemment posées
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trouvez rapidement des réponses à vos questions concernant nos services de réparation et remplacement de pare-brise.
          </p>
        </div>
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200/60 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 text-left transition-colors hover:bg-gray-50/50"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex justify-between items-center gap-4">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 text-gray-500 transition-all duration-300 ease-out",
                      openIndex === index && "rotate-180 text-blue-500"
                    )}
                  />
                </div>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-out",
                  openIndex === index ? "max-h-64" : "max-h-0"
                )}
              >
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}