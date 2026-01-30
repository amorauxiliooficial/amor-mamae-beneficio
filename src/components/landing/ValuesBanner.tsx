import React from 'react';
import { DollarSign } from 'lucide-react';

export const ValuesBanner: React.FC = () => {
  return (
    <div className="bg-brand-pink py-4 text-center shadow-md relative z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 text-white font-bold">
        {/* Desktop: texto original */}
        <div className="hidden md:flex items-center gap-2 text-lg md:text-xl">
          <DollarSign className="w-6 h-6 bg-brand-green rounded-full p-1 box-content shadow-sm" />
          <span>Valores de R$ 5.612,00 à R$ 14.900,00</span>
        </div>
        {/* Mobile: texto alternativo */}
        <div className="flex md:hidden flex-col items-center text-center px-2">
          <p className="text-base font-bold">Escritório Especializado em Auxílio-Maternidade</p>
          <p className="text-xs font-normal opacity-90 mt-1">Nosso trabalho é garantir que você não perca seu benefício por erros ou falta de informação.</p>
        </div>
      </div>
    </div>
  );
};
