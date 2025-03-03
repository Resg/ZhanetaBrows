import cn from 'classnames';
import React from 'react';

import styles from './styles.module.scss';
export interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={cn(styles.card, className)}>{children}</div>;
};
