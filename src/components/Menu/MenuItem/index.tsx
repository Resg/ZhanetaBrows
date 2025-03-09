'use client';
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import styles from './styles.module.scss';

export interface MenuItemProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}
export const MenuItem: React.FC<MenuItemProps> = ({
  className,
  children,
  href,
  onClick,
}) => {
  const router = useRouter();
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      onClick?.(e);
      if (href) {
        router.push(href);
      }
    },
    [href, onClick, router]
  );

  return (
    <li onClick={handleClick} className={cn(styles.menuItem, className)}>
      {children}
    </li>
  );
};
