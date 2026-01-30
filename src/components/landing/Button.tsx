import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  pulse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  className = '',
  ...props 
}) => {
  return (
    <button 
      className={cn(
        "font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg",
        variant === 'primary' && "bg-brand-green hover:bg-brand-green-dark text-white",
        variant === 'secondary' && "bg-brand-pink hover:bg-brand-pink-dark text-white",
        fullWidth && "w-full",
        className
      )} 
      {...props}
    >
      {children}
    </button>
  );
};
