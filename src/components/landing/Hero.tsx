import React from "react";
import { Logo } from "../Logo";
import { Button } from "./Button";
import teamPhoto from "@/assets/team-photo.webp";
import teamBackgroundMobile from "@/assets/team-background-mobile.png";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-brand-pink/10 overflow-hidden">
      {/* Mobile Layout - Imagem de fundo com headline sobreposta */}
      <div className="md:hidden relative min-h-[85vh]">
        {/* Header mobile */}
        <div className="relative z-20 pt-4 pb-2 flex justify-center">
          <Logo layout="vertical" iconClassName="h-14" />
        </div>
        
        {/* Imagem de fundo */}
        <div className="absolute inset-0 top-20">
          <img
            src={teamBackgroundMobile}
            alt="Equipe Amor Auxílio Maternidade"
            className="w-full h-full object-cover object-top"
          />
          {/* Overlay gradiente para legibilidade do texto */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
        </div>
        
        {/* Headline no canto superior esquerdo */}
        <div className="relative z-10 px-4 pt-4">
          <h1 className="text-white text-xl font-bold leading-tight drop-shadow-lg">
            30 mil mamães já receberam entre{" "}
            <span className="text-brand-pink-light">R$ 5.612</span> e{" "}
            <span className="text-brand-pink-light">R$ 14.900</span> com um processo seguro e acompanhado por especialistas.
          </h1>
        </div>
        
        {/* CTA no rodapé da seção */}
        <div className="absolute bottom-6 left-0 right-0 z-20 px-4">
          <Button
            onClick={() =>
              document.getElementById("steps")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="text-base px-6 py-3 w-full"
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
