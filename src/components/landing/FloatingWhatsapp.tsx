import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsapp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5511940372990?text=Quero%20falar%20com%20atendente" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-50 bg-brand-green hover:bg-brand-green-dark text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
    >
      <MessageCircle size={32} fill="white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">Fale Conosco</span>
    </a>
  );
};
