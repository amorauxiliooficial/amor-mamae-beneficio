import React from 'react';
import { Button } from './Button';
import teamPhoto from '@/assets/team-office.png';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-8 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-4">
        <div className="flex flex-col items-center">
          
          {/* 1. Título forte (anti-golpe) */}
          <h2 className="text-2xl md:text-4xl font-bold text-brand-pink leading-tight text-center">
            Você não está falando com robô.
          </h2>
          
          {/* 2. Subtítulo */}
          <p className="text-xl md:text-3xl font-bold text-brand-pink-dark leading-tight text-center mt-2">
            Nem com promessa vazia.
          </p>

          {/* 3. Texto explicativo — line-height 1.6, opacidade 85% */}
          <p className="text-sm md:text-lg text-foreground/85 text-center max-w-md md:max-w-2xl mx-auto mt-5 md:mt-6" style={{ lineHeight: '1.6' }}>
            Você está falando com uma equipe real,
            <br className="md:hidden" /> especializada em Auxílio-Maternidade,
            <br className="md:hidden" /> que acompanha mães de verdade até o dinheiro cair na conta.
          </p>

          {/* 4. Frase emocional isolada */}
          <p className="text-sm md:text-base font-semibold text-brand-pink text-center mt-6 mb-6 md:mt-8 md:mb-8 italic">
            Quando o assunto é seu direito,
            <br />
            errar não é uma opção.
          </p>

          {/* 5. iPhone com foto da equipe */}
          <div className="relative mt-2" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-pink/8 rounded-full z-0 blur-3xl"></div>

            <div
              className="relative z-10 max-w-[300px] md:max-w-[340px] w-full animate-fade-in"
              style={{
                transform: 'rotateY(-6deg) rotateX(2deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Moldura mais fina */}
              <div className="bg-[#1a1a1a] rounded-[2.5rem] p-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">
                <div className="bg-[#0a0a0a] rounded-[2.2rem] overflow-hidden relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20"></div>

                  {/* Screen content — crop fechado, centralizado */}
                  <div className="pt-8 pb-4">
                    <img
                      src={teamPhoto}
                      alt="Equipe Amor Auxílio Maternidade"
                      className="w-full h-[480px] object-cover object-[center_15%] brightness-105 contrast-[1.03]"
                    />
                  </div>

                  {/* Home indicator */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-700 rounded-full"></div>
                </div>
              </div>

              {/* Side buttons - mais sutis */}
              <div className="absolute left-0 top-24 w-0.5 h-7 bg-[#2a2a2a] rounded-l-sm"></div>
              <div className="absolute left-0 top-36 w-0.5 h-10 bg-[#2a2a2a] rounded-l-sm"></div>
              <div className="absolute left-0 top-50 w-0.5 h-10 bg-[#2a2a2a] rounded-l-sm"></div>
              <div className="absolute right-0 top-32 w-0.5 h-14 bg-[#2a2a2a] rounded-r-sm"></div>
            </div>
          </div>

          {/* 6. Botão verde — respira mais */}
          <div className="text-center mt-8 md:mt-10">
            <Button 
              variant="primary" 
              className="h-[52px] md:h-14 px-8 md:px-10 rounded-full text-base md:text-lg"
            >
              Quero meu benefício!
            </Button>
          </div>

          {/* 7. Microcopy de segurança */}
          <p className="text-xs text-muted-foreground text-center mt-3">
            Análise gratuita • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};
