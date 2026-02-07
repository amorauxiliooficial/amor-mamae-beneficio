import React from 'react';
import { Button } from './Button';
import teamPhoto from '@/assets/team-office.png';

export const SocialProof: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Container com proporção 9:16 no mobile, menor no desktop */}
      <div className="relative w-full min-h-[75svh] md:min-h-[80vh] flex flex-col">
        
        {/* Imagem de fundo */}
        <img
          src={teamPhoto}
          alt="Equipe Amor Auxílio Maternidade"
          className="absolute inset-0 w-full h-full object-cover object-[center_15%] md:object-[center_30%] brightness-105 contrast-[1.03]"
        />

        {/* Overlay gradiente de baixo para cima */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/35" />

        {/* Conteúdo com texto */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 md:px-8 pt-16 pb-24 md:pt-12 md:pb-16">
          
          <div className="max-w-lg md:max-w-2xl text-center space-y-5 md:space-y-6">
            {/* Título principal */}
            <h2 className="text-[1.75rem] md:text-5xl font-bold text-white leading-tight tracking-tight">
              Você não está falando com robô.
            </h2>

            {/* Subtítulo */}
            <p className="text-xl md:text-3xl font-semibold text-white/90 leading-snug">
              Nem com promessa vazia.
            </p>

            {/* Texto de apoio */}
            <p
              className="text-sm md:text-lg text-white/85 max-w-sm md:max-w-xl mx-auto"
              style={{ lineHeight: '1.6' }}
            >
              Você está falando com uma equipe real,
              especializada em Auxílio-Maternidade,
              que acompanha mães de verdade até o dinheiro cair na conta.
            </p>

            {/* Frase emocional final */}
            <p className="text-sm md:text-base font-semibold text-brand-pink italic pt-2">
              Quando o assunto é seu direito,
              <br />
              errar não é uma opção.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-12 flex flex-col items-center gap-3">
            <Button
              variant="primary"
              className="h-[56px] md:h-14 px-10 md:px-12 rounded-full text-base md:text-lg shadow-[0_8px_30px_-6px_rgba(0,0,0,0.4)]"
            >
              Quero meu benefício!
            </Button>

            <p className="text-xs text-white/60">
              Análise gratuita • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
