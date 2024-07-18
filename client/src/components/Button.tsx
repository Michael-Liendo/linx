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
        'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
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
