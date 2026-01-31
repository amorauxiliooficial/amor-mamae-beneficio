import React from "react";
import { Logo } from "../Logo";
import { Button } from "./Button";
import teamPhoto from "@/assets/team-photo.webp";
import teamHeroMobile from "@/assets/team-hero-mobile.png";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-brand-pink/10 overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden relative h-[70vh]">
        {/* Imagem de fundo */}
        <div className="absolute inset-0">
          <img
            src={teamHeroMobile}
            alt="Equipe Amor Auxílio Maternidade"
            className="w-full h-full object-cover object-top"
          />
          {/* Overlay gradiente para legibilidade - mais escuro */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>
        
        {/* Conteúdo sobreposto */}
        <div className="relative z-10 flex flex-col h-full px-4 py-4">
          {/* Logo no topo */}
          <div className="flex justify-center mb-3">
            <Logo layout="vertical" iconClassName="h-12" />
          </div>
          
          {/* Headline */}
          <h1 className="text-brand-pink-light text-lg font-bold leading-snug drop-shadow-lg text-left">
            30 mil mamães já receberam entre{" "}
            <span className="text-white font-extrabold">R$ 5.612</span> e{" "}
            <span className="text-white font-extrabold">R$ 14.900</span> com um processo seguro e acompanhado por especialistas.
          </h1>
          
          {/* Spacer */}
          <div className="flex-1"></div>
          
          {/* CTA */}
          <Button
            onClick={() =>
              document.getElementById("steps")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="text-base py-3 w-full"
          >
            Fazer Análise Gratuita!
          </Button>
        </div>
      </div>

      {/* Desktop Layout - mantém o original */}
      <div className="hidden md:block container mx-auto px-4 py-6 md:py-12">
        {/* Header */}
        <header className="flex flex-col items-center justify-center w-full mb-6 md:mb-14">
          <Logo layout="vertical" iconClassName="h-16 md:h-24" />
        </header>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          {/* Texto */}
          <div className="w-full md:w-5/12 space-y-4 md:space-y-6 z-10 text-center md:text-left">
            <h1 className="text-foreground text-2xl md:text-5xl font-bold leading-tight">
              30 mil mamães já receberam entre{" "}
              <span className="text-brand-pink">R$ 5.612</span> e{" "}
              <span className="text-brand-pink">R$ 14.900</span> com um processo seguro e acompanhado por especialistas.
            </h1>

            <div className="flex pt-4 justify-start">
              <Button
                onClick={() =>
                  document.getElementById("steps")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-lg px-8 py-3"
              >
                Fazer Análise Gratuita!
              </Button>
            </div>
          </div>

          {/* Imagem */}
          <div className="w-full md:w-7/12 relative flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-pink/20 w-[110%] h-[110%] rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue/20 w-[110%] h-[110%] rounded-full blur-3xl opacity-30 -z-10 ml-10 mt-10"></div>
            <div className="relative z-10 w-full transform transition-transform hover:scale-[1.01] duration-500">
              <div className="bg-white p-1.5 md:p-2 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl">
                <img
                  src={teamPhoto}
                  alt="Equipe Amor Auxílio Maternidade"
                  className="w-full rounded-lg md:rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
