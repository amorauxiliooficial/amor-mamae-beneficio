import React from 'react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-pink text-white py-16">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Conheça a AMOR - Auxílio Maternidade Oficial</h2>
        <p className="text-white/80 text-lg leading-relaxed mb-8">
          A AMOR é referência em Auxílio Maternidade, oferecendo assessoria completa e humanizada para mães de todo o Brasil. Nossa equipe especializada cuida de todo o processo, garantindo que você receba o benefício que é seu por direito.
        </p>
        <Button className="bg-brand-green hover:bg-brand-green-dark text-white px-10 py-4 text-xl shadow-xl hover:shadow-2xl">
          Descubra se tem direito!
        </Button>
      </div>
      <div className="mt-16 border-t border-white/30 pt-8 text-center text-white/80 text-sm">
        <p>&copy; {new Date().getFullYear()} Amor Auxílio Maternidade. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
