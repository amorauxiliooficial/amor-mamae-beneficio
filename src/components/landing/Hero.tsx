import React from 'react';
import { Logo } from '../Logo';
import { Button } from './Button';
import teamPhoto from '@/assets/team-photo.webp';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-brand-pink/10 overflow-hidden">
      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Header */}
        <header className="flex flex-col items-center justify-center w-full mb-6 md:mb-14">
          <Logo layout="vertical" iconClassName="h-16 md:h-24" />
        </header>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          {/* Texto - sempre primeiro */}
          <div className="w-full md:w-5/12 space-y-4 md:space-y-6 z-10 text-center md:text-left">
            <h2 className="text-brand-pink font-semibold text-sm md:text-lg uppercase tracking-wide">
              Auxílio Maternidade!
            </h2>
            <h1 className="text-foreground text-2xl md:text-5xl font-bold leading-tight">
              30 mil mães já receberam de{' '}
              <span className="text-brand-pink">R$ 5.612,00</span> a{' '}
              <span className="text-brand-pink">R$ 14.900,00</span>{' '}
              com a segurança de nossa assessoria oficial
            </h1>
            
            {/* CTA só aparece aqui no desktop */}
            <div className="hidden md:flex pt-4 justify-start">
              <Button 
                pulse 
                onClick={() => document.getElementById('steps')?.scrollIntoView({behavior: 'smooth'})}
                className="text-lg px-8 py-3"
              >
                Fazer Análise Gratuita!
              </Button>
            </div>
          </div>

          {/* Imagem */}
          <div className="w-full md:w-7/12 relative flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-pink/20 w-[110%] h-[110%] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue/20 w-[110%] h-[110%] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000 ml-10 mt-10"></div>
            <div className="relative z-10 w-full transform transition-transform hover:scale-[1.01] duration-500">
              <div className="bg-white p-1.5 md:p-2 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl">
                <img 
                  src={teamPhoto} 
                  alt="Equipe Amor Auxílio Maternidade" 
                  className="w-full rounded-lg md:rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-4 md:-bottom-6 right-2 md:-right-8 bg-white p-2.5 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl flex items-center gap-2 md:gap-3 animate-bounce">
                <div className="bg-brand-green/20 p-1.5 md:p-2 rounded-full">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase">Atendimento</p>
                  <p className="text-xs md:text-sm font-bold text-foreground">100% Humanizado</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA só aparece aqui no mobile - depois da imagem */}
          <div className="md:hidden w-full flex justify-center mt-4">
            <Button 
              pulse 
              onClick={() => document.getElementById('steps')?.scrollIntoView({behavior: 'smooth'})}
              className="text-base px-6 py-2.5 w-full max-w-xs"
            >
              Fazer Análise Gratuita!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
