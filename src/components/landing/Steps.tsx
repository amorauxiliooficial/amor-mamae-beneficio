import React from 'react';
import { Button } from './Button';

const StepCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center relative group">
    {/* Mobile: card estilo */}
    <div className="md:hidden bg-white rounded-2xl p-5 shadow-lg border border-muted w-full">
      <div className="flex items-center gap-4 mb-3">
        <span className="text-3xl font-bold text-brand-pink bg-brand-pink/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
          {number}º
        </span>
        <h4 className="text-brand-pink-dark font-bold text-sm uppercase leading-tight text-left">{title}</h4>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed text-left">{description}</p>
    </div>
    
    {/* Desktop: círculo estilo */}
    <div className="hidden md:block">
      <div className="absolute inset-0 bg-white rounded-full border-4 border-muted shadow-xl w-64 h-64 mx-auto -z-10 transform group-hover:scale-105 transition-transform duration-300"></div>
      <div className="w-64 h-64 flex flex-col items-center justify-center p-6 rounded-full">
        <span className="text-5xl font-bold text-brand-pink mb-2">{number}º</span>
        <h4 className="text-brand-pink-dark font-bold text-sm uppercase mb-2 leading-tight px-4">{title}</h4>
        <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export const Steps: React.FC = () => {
  return (
    <section id="steps" className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-pink mb-2">Como Funciona?</h2>
          <p className="text-muted-foreground text-sm md:text-base">Garantimos um processo simples e rápido!</p>
        </div>
        
        {/* Mobile: cards empilhados */}
        <div className="flex flex-col gap-4 md:hidden">
          <StepCard number="1" title="Análise gratuita e sem risco:" description="Você descobre se tem direito antes de pagar qualquer valor. Sem pegadinhas. Sem obrigação de continuar." />
          <StepCard number="2" title="Cuidamos de toda a burocracia por você:" description="Preenchimento, conferência e envio corretos para evitar erros que fazem milhares de mães perderem o benefício." />
          <StepCard number="3" title="Acompanhamento humano do início ao fim:" description="Você fala com uma consultora real, que acompanha seu caso até a conclusão do processo." />
        </div>
        
        {/* Desktop: layout circular */}
        <div className="hidden md:flex flex-row items-center justify-center gap-4 relative">
          <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 -z-10 pointer-events-none">
             <svg className="w-full h-full" preserveAspectRatio="none">
               <path d="M200 60 Q 400 10, 600 60 T 1000 60" fill="none" stroke="hsl(var(--brand-pink))" strokeWidth="2" strokeDasharray="5,5" className="opacity-30" />
             </svg>
          </div>
          <StepCard number="1" title="Análise gratuita e sem risco:" description="Você descobre se tem direito antes de pagar qualquer valor. Sem pegadinhas. Sem obrigação de continuar." />
          <StepCard number="2" title="Cuidamos de toda a burocracia por você:" description="Preenchimento, conferência e envio corretos para evitar erros que fazem milhares de mães perderem o benefício." />
          <StepCard number="3" title="Acompanhamento humano do início ao fim:" description="Você fala com uma consultora real, que acompanha seu caso até a conclusão do processo." />
        </div>
        
        <div className="text-center mt-10 md:mt-16">
          <Button variant="primary" className="text-sm md:text-lg px-6 md:px-8 w-full md:w-auto max-w-xs md:max-w-none">Consulta gratuita agora!</Button>
        </div>
      </div>
    </section>
  );
};
