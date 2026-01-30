import React from "react";
import { Logo } from "../Logo";
import { Button } from "./Button";
import teamPhoto from "@/assets/team-photo.webp";
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
            <h1 className="text-foreground text-2xl md:text-5xl font-bold leading-tight">
              30 mil mães já receberam de <span className="text-brand-pink">R$ 5.612,00</span> a{" "}
              <span className="text-brand-pink">R$ 14.900,00</span> com a nossa assessoria oficial
            </h1>

            {/* CTA só aparece aqui no desktop */}
            <div className="hidden md:flex pt-4 justify-start">
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

          {/* CTA só aparece aqui no mobile - depois da imagem */}
          <div className="md:hidden w-full flex justify-center mt-4">
            <Button
              onClick={() =>
                document.getElementById("steps")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
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
