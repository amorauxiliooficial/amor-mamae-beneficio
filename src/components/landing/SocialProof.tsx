import React from 'react';
import { Star, BadgeCheck, Search } from 'lucide-react';
import { Button } from './Button';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-pink/10 rounded-full z-0 blur-3xl opacity-50"></div>
             <div className="relative z-10 bg-white border-8 border-muted rounded-[3rem] shadow-2xl overflow-hidden max-w-xs w-full">
                <div className="h-6 bg-muted w-full mb-2"></div>
                <div className="px-4 pb-8 space-y-4">
                  <div className="flex items-center gap-2 bg-white shadow-md rounded-full px-4 py-2 text-muted-foreground text-sm border border-muted">
                     <Search size={14} />
                     <span className="truncate">avaliações Amor Auxílio Maternidade</span>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm border border-muted p-4">
                    <h3 className="font-bold text-foreground">Amor Auxílio Maternidade</h3>
                    <div className="flex items-center gap-1 text-sm text-yellow-500">
                      <span className="font-bold text-foreground">4,9</span>
                      {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                      <span className="text-muted-foreground text-xs">(35 mil)</span>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-muted text-sm">
                     <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">L</div>
                        <div><p className="font-bold text-xs text-foreground">Lorena Almeida</p></div>
                     </div>
                     <p className="text-xs text-muted-foreground">"Tive todo o suporte deles do começo ao fim. Muito atenciosos."</p>
                  </div>
                </div>
             </div>
             <div className="absolute -bottom-6 left-0 lg:left-20 bg-brand-green p-1 rounded-full shadow-lg z-20 animate-bounce">
                <BadgeCheck size={64} className="text-white fill-brand-green" />
             </div>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-pink leading-tight">
              EMPRESA AVALIADA EM MAIS DE <br/><span className="text-brand-pink-dark">30 MIL COMENTÁRIOS POSITIVOS</span> <br/>NO GOOGLE!
            </h2>
            <div className="flex justify-center lg:justify-start">
               <Button variant="primary" pulse>Quero meu benefício!</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
