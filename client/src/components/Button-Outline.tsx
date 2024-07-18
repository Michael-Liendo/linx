import cn from 'classnames';
import type { ReactNode } from 'react';

export default function Button({
  children,
  type = 'button',
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors',
        className,
      )}
    >
      {children}
    </button>
  );
}

interface ButtonProps {
  children: ReactNode;
  type?: 'submit' | 'button';
  className?: string;
  onClick?: () => void;
}
