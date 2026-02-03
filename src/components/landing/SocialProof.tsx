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
             
             {/* iPhone Frame */}
             <div className="relative z-10 max-w-[280px] w-full">
               {/* iPhone outer frame */}
               <div className="bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl">
                 {/* iPhone inner bezel */}
                 <div className="bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden relative">
                   {/* Dynamic Island */}
                   <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20"></div>
                   
                   {/* Screen content */}
                   <div className="bg-white pt-12 pb-6 px-4 min-h-[480px]">
                     {/* Search bar */}
                     <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5 text-muted-foreground text-sm border border-gray-200 mb-4">
                       <Search size={16} className="text-gray-400" />
                       <span className="truncate text-gray-500 text-xs">avaliações Amor Auxílio Maternidade</span>
                     </div>
                     
                     {/* Business card */}
                     <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 mb-4">
                       <h3 className="font-bold text-foreground text-sm">Amor Auxílio Maternidade</h3>
                       <div className="flex items-center gap-1 text-sm mt-1">
                         <span className="font-bold text-foreground">4,9</span>
                         <div className="flex text-yellow-400">
                           {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                         </div>
                         <span className="text-muted-foreground text-xs">(35 mil)</span>
                       </div>
                     </div>
                     
                     {/* Review 1 */}
                     <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 mb-3">
                       <div className="flex items-center gap-2 mb-2">
                         <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">L</div>
                         <div>
                           <p className="font-semibold text-xs text-foreground">Lorena Almeida</p>
                           <div className="flex text-yellow-400">
                             {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                           </div>
                         </div>
                       </div>
                       <p className="text-xs text-muted-foreground leading-relaxed">"Tive todo o suporte deles do começo ao fim. Muito atenciosos."</p>
                     </div>
                     
                     {/* Review 2 */}
                     <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                       <div className="flex items-center gap-2 mb-2">
                         <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs">M</div>
                         <div>
                           <p className="font-semibold text-xs text-foreground">Maria Silva</p>
                           <div className="flex text-yellow-400">
                             {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                           </div>
                         </div>
                       </div>
                       <p className="text-xs text-muted-foreground leading-relaxed">"Recebi meu benefício em menos de 30 dias! Super recomendo."</p>
                     </div>
                   </div>
                   
                   {/* Home indicator */}
                   <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
                 </div>
               </div>
               
               {/* Side buttons - volume */}
               <div className="absolute left-0 top-28 w-1 h-8 bg-[#2a2a2a] rounded-l-sm"></div>
               <div className="absolute left-0 top-40 w-1 h-12 bg-[#2a2a2a] rounded-l-sm"></div>
               <div className="absolute left-0 top-56 w-1 h-12 bg-[#2a2a2a] rounded-l-sm"></div>
               {/* Side button - power */}
               <div className="absolute right-0 top-36 w-1 h-16 bg-[#2a2a2a] rounded-r-sm"></div>
             </div>
             
             <div className="absolute -bottom-6 left-0 lg:left-10 bg-brand-green p-1 rounded-full shadow-lg z-20 animate-bounce">
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
