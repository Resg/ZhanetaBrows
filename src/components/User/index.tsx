'use client';

import cn from 'classnames';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { FC, useCallback, useRef, useState } from 'react';

import { Menu, MenuItem } from '@/components/Menu';
import { Popover } from '@/components/Popover';

import styles from './styles.module.scss';

export interface UserProps {
  className?: string;
}
export const User: FC<UserProps> = ({ className }) => {
  const { data: session } = useSession();
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleSignOut = useCallback(() => signOut(), []);

  return (
    <>
      <div
        ref={ref}
        className={cn(styles.user, className)}
        onClick={handleToggle}
      >
        <Image
          src={session?.user?.image || '/icons/avatar.svg'}
          alt="avatar"
          width={50}
          height={50}
          className={styles.avatar}
        />
      </div>
      <Popover
        open={open}
        onClose={handleClose}
        anchor={ref.current}
        offset={{ mainAxis: 4, crossAxis: -40 }}
      >
        <Menu onClick={handleClose} className={styles.popoverContent}>
          <MenuItem href="/cabinet">Личный кабинет</MenuItem>
          <MenuItem onClick={handleSignOut}>Выход</MenuItem>
        </Menu>
      </Popover>
    </>
  );
};
