import React from 'react';
import { DollarSign, ShieldCheck } from 'lucide-react';

export const ValuesBanner: React.FC = () => {
  return (
    <div className="bg-brand-pink py-4 text-center shadow-md relative z-10">
      <div className="container mx-auto px-4">
        {/* Desktop: texto original */}
        <div className="hidden md:flex items-center justify-center gap-2 text-white font-bold text-lg md:text-xl">
          <DollarSign className="w-6 h-6 bg-brand-green rounded-full p-1 box-content shadow-sm" />
          <span>Valores de R$ 5.612,00 à R$ 14.900,00</span>
        </div>
        
        {/* Mobile: texto minimalista */}
        <div className="flex md:hidden flex-col items-center text-center gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-green" />
            <p className="text-white font-bold">Escritório Especializado em Auxílio-Maternidade</p>
          </div>
          <p className="text-white/90 text-sm">
            Garantimos que você não perca seu benefício.
          </p>
        </div>
      </div>
    </div>
  );
};
