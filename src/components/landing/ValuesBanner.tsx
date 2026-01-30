import React from 'react';
import { DollarSign, ShieldCheck, Award, Lock } from 'lucide-react';

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
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-7 h-7 text-brand-green drop-shadow-md" />
            <p className="text-white text-lg font-bold leading-tight">
              Escritório Especializado em<br />Auxílio-Maternidade
            </p>
            <ShieldCheck className="w-7 h-7 text-brand-green drop-shadow-md" />
          </div>
          
          <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
            <p className="text-white/95 text-sm font-medium leading-relaxed">
              Nosso trabalho é garantir que você <span className="font-bold text-white">não perca seu benefício</span> por erros ou falta de informação.
            </p>
          </div>
          
          {/* Selos de confiança */}
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="flex items-center gap-1.5 text-white/90">
              <Lock className="w-4 h-4" />
              <span className="text-xs font-medium">Dados Seguros</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-1.5 text-white/90">
              <Award className="w-4 h-4" />
              <span className="text-xs font-medium">Atendimento Humanizado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
