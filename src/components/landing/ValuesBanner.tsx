import React from 'react';
import { DollarSign } from 'lucide-react';

export const ValuesBanner: React.FC = () => {
  return (
    <div className="bg-brand-pink py-4 text-center shadow-md relative z-10">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-white font-bold text-lg md:text-xl">
        <DollarSign className="w-6 h-6 bg-brand-green rounded-full p-1 box-content shadow-sm" />
        <span>Valores de R$ 5.612,00 à R$ 14.900,00</span>
      </div>
    </div>
  );
};
