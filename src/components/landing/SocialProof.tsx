import React from 'react';
import { Button } from './Button';
import teamPhoto from '@/assets/team-office.png';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Texto principal */}
          <div className="text-center space-y-6 max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-bold text-brand-pink leading-tight">
              Você não está falando com robô.
              <br />
              <span className="text-brand-pink-dark">Nem com promessa vazia.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Você está falando com uma equipe real, especializada em Auxílio-Maternidade,
              que acompanha mães de verdade até o dinheiro cair na conta.
            </p>
            <p className="text-base md:text-lg font-semibold text-brand-pink-dark leading-relaxed">
              Porque quando o assunto é seu direito,
              <br />
              errar não é uma opção.
            </p>
          </div>

          {/* iPhone com foto da equipe */}
          <div className="relative" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-pink/10 rounded-full z-0 blur-3xl opacity-50"></div>

            <div
              className="relative z-10 max-w-[340px] w-full animate-fade-in"
              style={{
                transform: 'rotateY(-8deg) rotateX(3deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="bg-[#1a1a1a] rounded-[3rem] p-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4),_-10px_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <div className="bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20"></div>

                  {/* Screen content - foto da equipe */}
                  <div className="pt-10 pb-6">
                    <img
                      src={teamPhoto}
                      alt="Equipe Amor Auxílio Maternidade"
                      className="w-full h-[420px] object-cover object-top"
                    />
                  </div>

                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
                </div>
              </div>

              {/* Side buttons */}
              <div className="absolute left-0 top-28 w-1 h-8 bg-[#2a2a2a] rounded-l-sm"></div>
              <div className="absolute left-0 top-40 w-1 h-12 bg-[#2a2a2a] rounded-l-sm"></div>
              <div className="absolute left-0 top-56 w-1 h-12 bg-[#2a2a2a] rounded-l-sm"></div>
              <div className="absolute right-0 top-36 w-1 h-16 bg-[#2a2a2a] rounded-r-sm"></div>
            </div>
          </div>

          {/* Botão */}
          <div className="text-center mt-4">
            <Button variant="primary" pulse>Quero meu benefício!</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
