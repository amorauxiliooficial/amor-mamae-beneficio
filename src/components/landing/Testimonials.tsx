import React, { useState, useRef } from 'react';
import { Button } from './Button';

interface VideoTestimonial {
  id: number;
  name: string;
  videoUrl: string;
}

const testimonials: VideoTestimonial[] = [
  { id: 1, name: "Depoimento 1", videoUrl: "/videos/depoimento-1.mp4" },
  { id: 2, name: "Depoimento 2", videoUrl: "/videos/depoimento-2.mp4" },
  { id: 3, name: "Depoimento 3", videoUrl: "/videos/depoimento-3.mp4" },
  { id: 4, name: "Depoimento 4", videoUrl: "/videos/depoimento-4.mp4" },
  { id: 5, name: "Depoimento 5", videoUrl: "/videos/depoimento-5.mp4" },
];

const VideoCard = ({ testimonial }: { testimonial: VideoTestimonial }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col shadow-md md:shadow-lg bg-white rounded-lg overflow-hidden">
      <div className="bg-brand-cyan text-white text-center py-1 md:py-2 text-[7px] md:text-xs font-bold tracking-wider md:tracking-widest uppercase">
        PEÇA JÁ SEU AUXÍLIO
      </div>
      <div 
        className="relative aspect-[9/16] w-full group cursor-pointer bg-black"
        onClick={handlePlay}
      >
        <video
          ref={videoRef}
          src={testimonial.videoUrl}
          className="w-full h-full object-cover"
          playsInline
          onEnded={() => setIsPlaying(false)}
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="bg-red-600 w-10 h-7 md:w-16 md:h-11 rounded-md md:rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <div className="w-0 h-0 border-t-[5px] md:border-t-[6px] border-t-transparent border-l-[10px] md:border-l-[12px] border-l-white border-b-[5px] md:border-b-[6px] border-b-transparent ml-0.5 md:ml-1"></div>
            </div>
          </div>
        )}
        <div className="absolute top-1 right-1 md:top-2 md:right-2 w-5 h-5 md:w-10 md:h-10 opacity-90 drop-shadow-md">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 185 C 60 160 20 120 20 75 C 20 40 50 25 85 35" stroke="hsl(var(--brand-blue))" strokeWidth="15" strokeLinecap="round"/>
            <path d="M85 35 C 130 10 180 35 180 90 C 180 140 140 170 100 185" stroke="hsl(var(--brand-pink))" strokeWidth="15" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <h2 className="text-xl md:text-4xl font-bold text-brand-pink mb-3 md:mb-4 leading-tight">
            Por trás de cada benefício recebido, tem uma mãe que estava insegura, com medo de errar, e decidiu não enfrentar isso sozinha.
          </h2>
          <p className="text-muted-foreground text-base md:text-xl font-medium">
            Veja histórias reais de mulheres que garantiram o Auxílio-Maternidade com orientação certa.
          </p>
        </div>
        
        {/* Mobile: 4 vídeos (esconde o segundo) */}
        <div className="grid grid-cols-2 gap-3 md:hidden max-w-6xl mx-auto">
          {testimonials.filter(t => t.id !== 2).map((t) => (
            <VideoCard key={t.id} testimonial={t} />
          ))}
        </div>
        
        {/* Desktop: todos os 5 vídeos */}
        <div className="hidden md:grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <VideoCard key={t.id} testimonial={t} />
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Button variant="primary" className="text-sm md:text-lg px-6 md:px-8">Consulta gratuita agora!</Button>
        </div>
      </div>
    </section>
  );
};
