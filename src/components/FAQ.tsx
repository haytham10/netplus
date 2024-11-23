import React from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const questions = [
    "Combien de temps dure une réparation ?",
    "Est-ce que mon assurance couvre la réparation ?",
    "Puis-je conduire avec un pare-brise fissuré ?",
    "Quelle est la différence entre réparation et remplacement ?"
  ];

  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Questions fréquemment posées</h2>
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div key={index} className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <span className="font-medium">{question}</span>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}