import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Contactez-nous</h2>
            <p className="text-xl text-gray-600 mb-8">
              Notre équipe est à votre disposition pour toute question ou demande de devis.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-medium">Téléphone</p>
                  <a href="tel:0381504747" className="text-blue-700 hover:text-blue-800">03 81 50 47 47</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-gray-600">Besançon, France</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-medium">Horaires</p>
                  <p className="text-gray-600">Lun-Ven: 8h-18h<br />Sam: 9h-12h</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-medium"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}