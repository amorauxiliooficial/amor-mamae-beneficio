import React from "react";
import { Button } from "./Button"; // Certifique-se que este botão aceita className
import { Search, FileCheck, HeartHandshake } from "lucide-react";

const MobileStepCard = ({
  number,
  title,
  description,
  icon: Icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}) => (
  <div className="relative mb-6 last:mb-0 group">
    {/* Linha conectora vertical (Agora passa por trás dos cards) */}
    {number !== "3" && (
      <div className="absolute left-[26px] top-12 bottom-[-30px] w-0.5 bg-gradient-to-b from-brand-pink via-brand-pink/50 to-transparent z-0"></div>
    )}

    <div className="relative z-10 flex items-start">
      {/* O Card Branco "Wow" */}
      <div className="flex-1 ml-2 bg-white rounded-2xl p-5 shadow-[0_10px_40px_-10px_rgba(233,30,99,0.15)] border border-brand-pink/10 flex gap-4 items-start transition-transform duration-300 active:scale-[0.98]">
        {/* Ícone circular */}
        <div className="relative shrink-0 mt-1">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-pink to-brand-pink-dark flex items-center justify-center shadow-lg shadow-brand-pink/30">
            <Icon size={20} className="text-white" />
          </div>
          {/* Badge do número */}
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-cyan text-white text-[10px] font-bold flex items-center justify-center shadow-sm ring-2 ring-white">
            {number}
          </div>
        </div>

        {/* Conteúdo */}
        <div>
          <h4 className="text-brand-pink-dark font-bold text-base leading-tight mb-1">{title}</h4>
          <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const DesktopStepCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex flex-col items-center text-center relative group">
    <div className="absolute inset-0 bg-white rounded-full border-4 border-muted shadow-xl w-64 h-64 mx-auto -z-10 transform group-hover:scale-110 transition-transform duration-500 ease-out"></div>
    <div className="w-64 h-64 flex flex-col items-center justify-center p-6 rounded-full transition-transform duration-300 group-hover:-translate-y-2">
      <span className="text-5xl font-bold text-brand-pink mb-2 drop-shadow-sm">{number}º</span>
      <h4 className="text-brand-pink-dark font-bold text-sm uppercase mb-2 leading-tight px-4">{title}</h4>
      <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
    </div>
  </div>
);

export const Steps: React.FC = () => {
  return (
    <section id="steps" className="py-12 md:py-20 bg-[#FDFBFD] overflow-hidden">
      {/* Adicionando estilo de animação inline para o botão */}
      <style>{`
        @keyframes pulse-custom {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(233, 30, 99, 0.7); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(233, 30, 99, 0); }
        }
        .animate-pulse-wow {
          animation: pulse-custom 2s infinite;
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Header Mobile */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-pink-dark mb-3">
            Como Funciona?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-medium">
            Garantimos um processo simples e rápido!
          </p>
        </div>

        {/* Mobile: Timeline Cards "Wow" */}
        <div className="md:hidden max-w-sm mx-auto relative pl-2 pr-2">
          <MobileStepCard
            number="1"
            icon={Search}
            title="Análise gratuita"
            description="Você descobre se tem direito antes de pagar qualquer valor. Sem pegadinhas e sem risco."
          />
          <MobileStepCard
            number="2"
            icon={FileCheck}
            title="Sem Burocracia"
            description="Cuidamos do preenchimento e envio para evitar erros que negam o benefício."
          />
          <MobileStepCard
            number="3"
            icon={HeartHandshake}
            title="Suporte Humano"
            description="Fale com uma consultora real que acompanha seu caso até a conclusão."
          />
        </div>

        {/* Desktop: layout circular */}
        <div className="hidden md:flex flex-row items-center justify-center gap-8 relative mt-10">
          <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 -z-10 pointer-events-none opacity-40">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <path
                d="M200 60 Q 400 10, 600 60 T 1000 60"
                fill="none"
                stroke="hsl(var(--brand-pink))"
                strokeWidth="2"
                strokeDasharray="8,8"
              />
            </svg>
          </div>
          <DesktopStepCard
            number="1"
            title="Análise gratuita e sem risco:"
            description="Você descobre se tem direito antes de pagar qualquer valor. Sem pegadinhas. Sem obrigação de continuar."
          />
          <DesktopStepCard
            number="2"
            title="Cuidamos de toda a burocracia por você:"
            description="Preenchimento, conferência e envio corretos para evitar erros que fazem milhares de mães perderem o benefício."
          />
          <DesktopStepCard
            number="3"
            title="Acompanhamento humano do início ao fim:"
            description="Você fala com uma consultora real, que acompanha seu caso até a conclusão do processo."
          />
        </div>

        <div className="text-center mt-10 md:mt-20 sticky bottom-6 z-50 md:static">
          <Button
            variant="primary"
            onClick={() => window.open('https://wa.me/5511940372990?text=Quero%20falar%20com%20atendente', '_blank')}
            className="animate-pulse-wow shadow-xl shadow-brand-pink/40 text-sm md:text-lg px-8 py-6 rounded-full w-full md:w-auto max-w-xs md:max-w-none font-bold uppercase tracking-wider"
          >
            Consulta gratuita agora!
          </Button>
        </div>
      </div>
    </section>
  );
};
