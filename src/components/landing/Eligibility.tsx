import React from 'react';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';
import { Logo } from '../Logo';

export const Eligibility: React.FC = () => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 transform scale-105" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")', backgroundSize: 'cover', backgroundPosition: 'center'}} />
      <div className="absolute inset-0 z-0 bg-white/90 md:bg-white/85 backdrop-blur-[2px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/60 border border-white shadow-2xl rounded-[2rem] p-8 md:p-12 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-5/12 flex flex-col items-center justify-center">
               <div className="bg-white p-8 rounded-full shadow-xl mb-6 ring-4 ring-brand-pink/20">
                  <Logo layout="vertical" iconClassName="h-32 md:h-40" />
               </div>
               <div className="text-center">
                 <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs mb-1">Escritório Central</p>
                 <p className="text-foreground font-bold text-lg">Assessoria Especializada</p>
               </div>
            </div>
            <div className="w-full md:w-7/12 space-y-8 text-center md:text-left border-t md:border-t-0 md:border-l border-muted pt-8 md:pt-0 md:pl-12">
              <div>
                <h3 className="text-brand-pink-dark font-extrabold text-3xl md:text-4xl mb-3">Oportunidade Única!</h3>
                <p className="text-foreground font-semibold text-xl">Quem pode receber o benefício?</p>
              </div>
              <ul className="space-y-4 inline-block text-left bg-white/50 p-6 rounded-2xl w-full shadow-inner">
                {["Mães que trabalharam de carteira assinada;", "Estavam desempregadas no momento do parto;", "Contribuíram com o INSS por pelo menos 10 meses;"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground text-lg font-medium leading-snug">
                    <CheckCircle2 className="text-brand-green min-w-[24px] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 flex justify-center md:justify-start">
                <Button onClick={() => window.open('https://wa.me/', '_blank')} variant="primary" pulse className="shadow-xl shadow-brand-green/20 w-full md:w-auto text-lg">Quero meu benefício agora!</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
