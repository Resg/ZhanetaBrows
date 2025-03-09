import cn from 'classnames';
import React from 'react';

import styles from './styles.module.scss';
export interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={cn(styles.divider, className)} />;
};
