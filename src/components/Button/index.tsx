'use client';

import cn from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'text';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  variant = 'primary',
  disabled,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        styles.button,
        styles[variant],
        { [styles.disabled]: disabled },
        className
      )}
    >
      {children}
    </button>
  );
};
