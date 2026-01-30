import React from 'react';
import { DollarSign } from 'lucide-react';

export const ValuesBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-brand-pink via-brand-pink-dark to-brand-pink py-4 md:py-4 text-center shadow-lg relative z-10">
      <div className="container mx-auto px-4">
        {/* Desktop: texto original */}
        <div className="hidden md:flex items-center justify-center gap-2 text-white font-bold text-lg md:text-xl">
          <DollarSign className="w-6 h-6 bg-brand-green rounded-full p-1 box-content shadow-sm" />
          <span>Valores de R$ 5.612,00 à R$ 14.900,00</span>
        </div>
        
        {/* Mobile: texto alternativo com elementos de segurança */}
        <div className="flex md:hidden flex-col items-center text-center px-4 py-2">
          <p className="text-white text-lg font-bold leading-tight mb-3">
            Escritório Especializado em<br />Auxílio-Maternidade
          </p>
          
          <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
            <p className="text-white/95 text-sm font-medium leading-relaxed">
              Nosso trabalho é garantir que você <span className="font-bold text-white">não perca seu benefício</span> por erros ou falta de informação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
