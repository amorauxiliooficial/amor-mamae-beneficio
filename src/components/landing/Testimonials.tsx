import React from 'react';
import { Testimonial } from '@/types';
import { Button } from './Button';

const testimonials: Testimonial[] = [
  { id: 1, name: "ANA LUISA | SANTOS", location: "", imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "CONCILEIA | RIO DE JANEIRO", location: "", imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "IEDA | OURINHOS", location: "", imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "JAQUELINE | RIO GRANDE DO SUL", location: "", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "NATÁLIA | RIO DE JANEIRO", location: "", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "TATIANE | GOIÂNIA", location: "", imageUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-pink mb-4 leading-tight">
            A Amor Auxílio Maternidade já ajudou milhares de<br className="hidden md:block" />
            mães a receberem o que é<br className="hidden md:block" />
            delas por direito!
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-medium">Veja algumas histórias reais de mulheres<br className="hidden md:block"/>que garantiram o Auxílio Maternidade.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col shadow-lg bg-white rounded-lg overflow-hidden">
              <div className="bg-brand-cyan text-white text-center py-2 text-[10px] md:text-xs font-bold tracking-widest uppercase">PEÇA JÁ SEU AUXÍLIO</div>
              <div className="relative aspect-square w-full group cursor-pointer bg-muted">
                <img src={t.imageUrl} alt={t.name} className="w-full h-full object-cover"/>
                <div className="absolute top-2 right-2 w-10 h-10 opacity-90 drop-shadow-md">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 185 C 60 160 20 120 20 75 C 20 40 50 25 85 35" stroke="hsl(var(--brand-blue))" strokeWidth="15" strokeLinecap="round"/>
                        <path d="M85 35 C 130 10 180 35 180 90 C 180 140 140 170 100 185" stroke="hsl(var(--brand-pink))" strokeWidth="15" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 w-16 h-11 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-0 bg-brand-pink text-white px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wide shadow-sm">{t.name}</div>
              </div>
              <div className="bg-brand-cyan text-white text-center py-2 text-sm font-bold flex items-center justify-center gap-2">
                (11) 3956-1714
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="primary" pulse>Consulta gratuita agora!</Button>
        </div>
      </div>
    </section>
  );
};
