import cn from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

export interface MenuContainerProps extends React.HTMLProps<HTMLUListElement> {
  children?: React.ReactNode;
  className?: string;
}
export const MenuContainer: React.FC<MenuContainerProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <ul className={cn(styles.container, className)} {...rest}>
      {children}
    </ul>
  );
};
