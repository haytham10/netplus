import { MapPin, Phone, Clock, Send, CheckCircle, Mail } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
  <section id="contact" className="relative py-28 md:py-36 overflow-hidden dark:bg-gray-950">
      {/* Enhanced background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:18px_18px] animate-[grain_8s_steps(10)_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_100%_200px,rgba(59,130,246,0.13),transparent_100%)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
  className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-12"
      >
        {/* Success notification */}
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-green-100/90 dark:bg-green-900/90 text-green-900 dark:text-green-100 px-7 py-3 rounded-xl flex items-center gap-3 shadow-2xl border border-green-200 dark:border-green-800"
          >
            <CheckCircle className="w-5 h-5" />
            Message envoyé avec succès !
          </motion.div>
        )}

  <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">
          {/* Contact Information Side */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-300 drop-shadow-sm">
                Contactez-nous
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-7">
                Notre équipe est à votre disposition pour toute question ou demande de devis.
              </p>
            </motion.div>

            <div className="space-y-6">
              {/* Enhanced contact cards with motion */}
              {[
                { 
					icon: Phone,
					title: 'Téléphone',
					content: '06 65 34 34 15',
					href: 'tel:0665343415'
				},
                { 
                  icon: MapPin, 
                  title: 'Adresse', 
                  content: '32 rue Denis Papin\n25000, Besançon',
                  href: 'https://maps.app.goo.gl/TX43891ZBPBeDVmJ7',
				  target: '_blank',
                },
                { icon: Clock, title: 'Horaires', content: 'Lun-Ven: 8h-18h\nSam: 9h-12h' },
                { 
                  icon: Mail, 
                  title: 'Email', 
                  content: 'contact@netplus.fr',
                  href: 'mailto:contact@netplus.fr'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-white/90 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-200"
                >
                  <div className="flex items-center gap-5">
                    <div className="bg-blue-50 dark:bg-blue-900/30 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-800/50 transition-colors">
                      <item.icon className="w-7 h-7 text-blue-700 dark:text-blue-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-0.5">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} target={item.target || undefined} rel={item.target ? 'noopener noreferrer' : undefined} className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 font-medium whitespace-pre-line">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{item.content}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/95 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 max-h-[700px] overflow-y-auto border border-gray-100 dark:border-gray-800"
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-blue-700 dark:text-blue-300">Envoyez-nous un message</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous vous répondrons dans les plus brefs délais. Tous les champs sont requis.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="space-y-5">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="peer w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/80 placeholder-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all shadow-sm"
                    placeholder="Votre nom"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-2 -top-2.5 bg-white dark:bg-gray-900/80 px-2 text-sm text-gray-600 dark:text-gray-300 transition-all
                             peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4
                             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                  >
                    Nom complet
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="peer w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/80 placeholder-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all shadow-sm"
                    placeholder="votre@email.com"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-2 -top-2.5 bg-white dark:bg-gray-900/80 px-2 text-sm text-gray-600 dark:text-gray-300 transition-all
                             peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4
                             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    rows={4}
                    className="peer w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/80 placeholder-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all resize-none shadow-sm"
                    placeholder="Votre message"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-2 -top-2.5 bg-white dark:bg-gray-900/80 px-2 text-sm text-gray-600 dark:text-gray-300 transition-all
                             peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4
                             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                  >
                    Message
                  </label>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-600 dark:from-blue-600 dark:to-blue-500 
                           text-white px-7 py-4 rounded-xl transition-all duration-200 
                           hover:from-blue-800 hover:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-600
                           focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2
                           disabled:opacity-70 disabled:cursor-not-allowed
                           flex items-center justify-center gap-2 shadow-md"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
              En soumettant ce formulaire, vous acceptez d'être contacté au sujet de votre demande.
            </p>
          </motion.div>
        </div>

        {/* Fullwidth Map Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 space-y-7"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.8744990646766!2d5.982844776632538!3d47.23297957166657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d63c7c1b4f01d%3A0x7db6b2f56643e647!2s32%20Rue%20Denis%20Papin%2C%2025000%20Besan%C3%A7on!5e0!3m2!1sfr!2sfr!4v1689151585786!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}