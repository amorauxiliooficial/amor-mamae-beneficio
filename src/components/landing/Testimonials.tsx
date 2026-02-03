import React from 'react';
import { Button } from './Button';

interface VideoTestimonial {
  id: number;
  name: string;
  youtubeId: string; // ID do vídeo do YouTube
}

const testimonials: VideoTestimonial[] = [
  { id: 1, name: "ANA LUISA | SANTOS", youtubeId: "dQw4w9WgXcQ" }, // Substitua pelo ID real
  { id: 2, name: "CONCILEIA | RIO DE JANEIRO", youtubeId: "dQw4w9WgXcQ" }, // Substitua pelo ID real
  { id: 3, name: "IEDA | OURINHOS", youtubeId: "dQw4w9WgXcQ" }, // Substitua pelo ID real
  { id: 4, name: "JAQUELINE | RIO GRANDE DO SUL", youtubeId: "dQw4w9WgXcQ" }, // Substitua pelo ID real
  { id: 5, name: "NATÁLIA | RIO DE JANEIRO", youtubeId: "dQw4w9WgXcQ" }, // Substitua pelo ID real
  { id: 6, name: "TATIANE | GOIÂNIA", youtubeId: "dQw4w9WgXcQ" }, // Substitua pelo ID real
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <h2 className="text-xl md:text-4xl font-bold text-brand-pink mb-3 md:mb-4 leading-tight">
            A Amor Auxílio Maternidade já ajudou milhares de
            mães a receberem o que é delas por direito!
          </h2>
          <p className="text-muted-foreground text-base md:text-xl font-medium">
            Veja algumas histórias reais de mulheres que garantiram o Auxílio Maternidade.
          </p>
        </div>
        
        {/* Grid: 3 colunas em mobile (2 linhas), 3 colunas em desktop */}
        <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col shadow-md md:shadow-lg bg-white rounded-lg overflow-hidden">
              <div className="bg-brand-cyan text-white text-center py-1 md:py-2 text-[7px] md:text-xs font-bold tracking-wider md:tracking-widest uppercase">
                PEÇA JÁ SEU AUXÍLIO
              </div>
              <div className="relative aspect-square w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${t.youtubeId}?rel=0&modestbranding=1`}
                  title={t.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute bottom-1 md:bottom-4 left-0 bg-brand-pink text-white px-1.5 md:px-3 py-0.5 md:py-1 text-[6px] md:text-xs font-bold uppercase tracking-wide shadow-sm line-clamp-1 pointer-events-none">
                  {t.name.split('|')[0]}
                </div>
              </div>
              <div className="bg-brand-cyan text-white text-center py-1 md:py-2 text-[8px] md:text-sm font-bold flex items-center justify-center gap-1 md:gap-2">
                <span className="hidden md:inline">(11) 3956-1714</span>
                <span className="md:hidden">Saiba +</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Button variant="primary" className="text-sm md:text-lg px-6 md:px-8">Consulta gratuita agora!</Button>
        </div>
      </div>
    </section>
  );
};
