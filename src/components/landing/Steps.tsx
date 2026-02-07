import React from "react";
import { Button } from "./Button";
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
  <div className="relative">
    {/* Linha conectora vertical */}
    {number !== "3" && (
      <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-brand-pink to-brand-pink/20"></div>
    )}

    <div className="flex gap-4 items-start">
      {/* Ícone circular */}
      <div className="relative shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-pink to-brand-pink-dark flex items-center justify-center shadow-lg">
          <Icon size={22} className="text-white" />
        </div>
        {/* Badge do número */}
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-cyan text-white text-xs font-bold flex items-center justify-center shadow-md">
          {number}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 pb-6">
        <h4 className="text-brand-pink-dark font-bold text-base leading-tight mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const DesktopStepCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex flex-col items-center text-center relative group">
    <div className="absolute inset-0 bg-white rounded-full border-4 border-muted shadow-xl w-64 h-64 mx-auto -z-10 transform group-hover:scale-105 transition-all"></div>
    <div className="w-64 h-64 flex flex-col items-center justify-center p-6 rounded-full">
      <span className="text-5xl font-bold text-brand-pink mb-2">{number}</span>
      <h4 className="text-brand-pink-dark font-bold text-sm uppercase mb-2 leading-tight px-4">{title}</h4>
      <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
    </div>
  </div>
);
