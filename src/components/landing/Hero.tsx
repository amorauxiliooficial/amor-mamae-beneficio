import React from 'react';
import { Logo } from '../Logo';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-brand-pink/10 overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="flex flex-col items-center justify-center w-full mb-10 md:mb-14">
           <Logo layout="vertical" iconClassName="h-20 md:h-24" />
        </header>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-5/12 space-y-6 z-10 text-center md:text-left">
            <h2 className="text-brand-pink font-semibold text-lg uppercase tracking-wide">Auxílio Maternidade!</h2>
            <h1 className="text-foreground text-3xl md:text-5xl font-bold leading-tight">
              30 mil mães já receberam de <span className="text-brand-pink">R$ 5.612,00</span> a <span className="text-brand-pink">R$ 14.900,00</span> com a segurança de nossa assessoria oficial
            </h1>
            <div className="pt-4 flex justify-center md:justify-start">
              <Button pulse onClick={() => document.getElementById('steps')?.scrollIntoView({behavior: 'smooth'})}>
                Fazer Análise Gratuita!
              </Button>
            </div>
          </div>
          <div className="w-full md:w-7/12 relative flex justify-center">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-pink/20 w-[110%] h-[110%] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue/20 w-[110%] h-[110%] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000 ml-10 mt-10"></div>
            <div className="relative z-10 w-full transform transition-transform hover:scale-[1.01] duration-500">
              <div className="bg-white p-2 rounded-2xl shadow-2xl">
                <div className="w-full aspect-[4/3] bg-muted rounded-xl border-2 border-dashed border-muted-foreground/30 flex flex-col items-center justify-center text-muted-foreground gap-2">
                   <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                   <span className="text-sm font-medium text-center px-4">Espaço reservado para a Foto da Equipe</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
                <div className="bg-brand-green/20 p-2 rounded-full">
                  <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-bold uppercase">Atendimento</p>
                  <p className="text-sm font-bold text-foreground">100% Humanizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
