import React from 'react';
import logoIcon from '@/assets/logo-icon.png';

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

  const imgClasses = layout === 'vertical'
    ? `w-auto ${iconClassName}`
    : `h-full w-auto ${iconClassName}`;

  return (
    <div className={containerClasses}>
      <img src={logoIcon} alt="Amor Auxílio Maternidade" className={imgClasses} />
      {showText && (
        <div className={`flex flex-col leading-tight ${layout === 'vertical' ? 'items-center mt-1' : ''}`}>
          <span className="font-bold text-brand-pink text-xl tracking-wide font-sans">Amor</span>
          <span className="text-brand-blue text-xs font-bold uppercase tracking-widest">Auxílio Maternidade</span>
        </div>
      )}
    </div>
  );
};