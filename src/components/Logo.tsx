import React from 'react';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  showText?: boolean;
  layout?: 'horizontal' | 'vertical';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  iconClassName = "h-24", 
  showText = true, 
  layout = 'horizontal' 
}) => {
  const containerClasses = layout === 'vertical'
    ? `flex flex-col items-center justify-center text-center gap-2 ${className}`
    : `flex items-center gap-3 h-16 ${className}`;

  const svgClasses = layout === 'vertical'
    ? `w-auto ${iconClassName}`
    : `h-full w-auto ${iconClassName}`;

  return (
    <div className={containerClasses}>
      <svg viewBox="0 0 200 200" className={svgClasses} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Lado esquerdo do coração - azul */}
        <path 
          d="M100 185 C 55 155 15 115 15 70 C 15 35 45 15 80 30" 
          stroke="hsl(var(--brand-blue))" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        {/* Lado direito do coração + silhueta da mulher grávida - rosa */}
        <path 
          d="M80 30 
             C 95 22 110 20 125 25
             C 145 32 155 50 155 70
             C 155 75 154 80 152 85
             C 148 95 140 100 135 95
             C 130 90 128 82 130 75
             C 132 68 128 60 120 58
             C 112 56 105 62 105 72
             L 105 72
             C 105 72 108 78 106 82
             C 104 86 100 88 100 88
             C 100 88 102 90 102 94
             C 102 98 100 100 100 100
             C 100 100 115 108 120 125
             C 125 142 118 160 108 172
             C 104 177 100 185 100 185" 
          stroke="hsl(var(--brand-pink))" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        {/* Cabelo da mulher */}
        <path 
          d="M120 58 C 115 45 125 35 140 40 C 150 43 152 55 148 65" 
          stroke="hsl(var(--brand-pink))" 
          strokeWidth="6" 
          strokeLinecap="round" 
          fill="none"
        />
        {/* Mecha do cabelo */}
        <path 
          d="M130 50 C 135 55 138 65 135 75" 
          stroke="hsl(var(--brand-pink))" 
          strokeWidth="5" 
          strokeLinecap="round" 
          fill="none"
        />
      </svg>
      {showText && (
        <div className={`flex flex-col leading-tight ${layout === 'vertical' ? 'items-center mt-1' : ''}`}>
          <span className="font-bold text-brand-pink text-xl tracking-wide font-sans">Amor</span>
          <span className="text-brand-blue text-xs font-bold uppercase tracking-widest">Auxílio Maternidade</span>
        </div>
      )}
    </div>
  );
};
