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
        <path d="M100 185 C 60 160 20 120 20 75 C 20 40 50 25 85 35" stroke="hsl(var(--brand-blue))" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M85 35 C 130 10 180 35 180 90 C 180 140 140 170 100 185" stroke="hsl(var(--brand-pink))" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M110 55 C 110 55 130 60 125 80 C 122 90 115 90 115 95 C 115 95 135 105 135 130 C 135 150 115 165 105 175" stroke="hsl(var(--brand-pink))" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
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
