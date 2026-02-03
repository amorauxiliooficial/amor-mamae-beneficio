import React from 'react';
import { Button } from './Button';
import { Search, FileCheck, HeartHandshake } from 'lucide-react';

const MobileStepCard = ({ 
  number, 
  title, 
  description, 
  icon: Icon 
}: { 
  number: string; 
  title: string; 
  description: string;
  icon: React.ElementType;
}) => (
  <div className="relative">
    {/* Linha conectora vertical */}
    {number !== "3" && (
      <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-brand-pink to-brand-pink/20"></div>
    )}
    
    <div className="flex gap-4 items-start">
      {/* Ícone circular */}
      <div className="relative shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-pink to-brand-pink-dark flex items-center justify-center shadow-lg">
          <Icon size={22} className="text-white" />
        </div>
        {/* Badge do número */}
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-cyan text-white text-xs font-bold flex items-center justify-center shadow-md">
          {number}
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="flex-1 pb-6">
        <h4 className="text-brand-pink-dark font-bold text-base leading-tight mb-2">
          {title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const DesktopStepCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center relative group">
    <div className="absolute inset-0 bg-white rounded-full border-4 border-muted shadow-xl w-64 h-64 mx-auto -z-10 transform group-hover:scale-105 transition-transform duration-300"></div>
    <div className="w-64 h-64 flex flex-col items-center justify-center p-6 rounded-full">
      <span className="text-5xl font-bold text-brand-pink mb-2">{number}º</span>
      <h4 className="text-brand-pink-dark font-bold text-sm uppercase mb-2 leading-tight px-4">{title}</h4>
      <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
    </div>
  </div>
);

export const Steps: React.FC = () => {
  return (
    <section id="steps" className="py-10 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Mobile */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-pink mb-2">Como Funciona?</h2>
          <p className="text-muted-foreground text-sm md:text-base">Garantimos um processo simples e rápido!</p>
        </div>
        
        {/* Mobile: Timeline vertical elegante */}
        <div className="md:hidden max-w-sm mx-auto">
          <MobileStepCard 
            number="1" 
            icon={Search}
            title="Análise gratuita e sem risco" 
            description="Você descobre se tem direito antes de pagar qualquer valor. Sem pegadinhas. Sem obrigação de continuar." 
          />
          <MobileStepCard 
            number="2" 
            icon={FileCheck}
            title="Cuidamos de toda a burocracia" 
            description="Preenchimento, conferência e envio corretos para evitar erros que fazem milhares de mães perderem o benefício." 
          />
          <MobileStepCard 
            number="3" 
            icon={HeartHandshake}
            title="Acompanhamento humano" 
            description="Você fala com uma consultora real, que acompanha seu caso até a conclusão do processo." 
          />
        </div>
        
        {/* Desktop: layout circular */}
        <div className="hidden md:flex flex-row items-center justify-center gap-4 relative">
          <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 -z-10 pointer-events-none">
             <svg className="w-full h-full" preserveAspectRatio="none">
               <path d="M200 60 Q 400 10, 600 60 T 1000 60" fill="none" stroke="hsl(var(--brand-pink))" strokeWidth="2" strokeDasharray="5,5" className="opacity-30" />
             </svg>
          </div>
          <DesktopStepCard number="1" title="Análise gratuita e sem risco:" description="Você descobre se tem direito antes de pagar qualquer valor. Sem pegadinhas. Sem obrigação de continuar." />
          <DesktopStepCard number="2" title="Cuidamos de toda a burocracia por você:" description="Preenchimento, conferência e envio corretos para evitar erros que fazem milhares de mães perderem o benefício." />
          <DesktopStepCard number="3" title="Acompanhamento humano do início ao fim:" description="Você fala com uma consultora real, que acompanha seu caso até a conclusão do processo." />
        </div>
        
        <div className="text-center mt-8 md:mt-16">
          <Button variant="primary" className="text-sm md:text-lg px-6 md:px-8 w-full md:w-auto max-w-xs md:max-w-none">Consulta gratuita agora!</Button>
        </div>
      </div>
    </section>
  );
};
