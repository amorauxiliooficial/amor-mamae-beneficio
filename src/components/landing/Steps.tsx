import React from 'react';
import { Button } from './Button';

const StepCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center max-w-sm relative group">
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
    <section id="steps" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-pink mb-2">Como Funciona?</h2>
          <p className="text-muted-foreground">Garantimos um processo simples e rápido!</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 -z-10 pointer-events-none">
             <svg className="w-full h-full" preserveAspectRatio="none">
               <path d="M200 60 Q 400 10, 600 60 T 1000 60" fill="none" stroke="hsl(var(--brand-pink))" strokeWidth="2" strokeDasharray="5,5" className="opacity-30" />
             </svg>
          </div>
          <StepCard number="1" title="Faça sua análise gratuita:" description="Responda algumas perguntas rápidas no nosso chat e saiba na hora se tem o direito." />
          <StepCard number="2" title="Nossa equipe cuida de tudo:" description="Tendo direito, você será encaminhada ao nosso atendimento para darmos a entrada no benefício." />
          <StepCard number="3" title="Você recebe seu dinheiro:" description="Receberá o valor diretamente por ordem de pagamento, sem burocracia!" />
        </div>
        <div className="text-center mt-16">
          <Button variant="primary" pulse>Consulta gratuita agora!</Button>
        </div>
      </div>
    </section>
  );
};
