import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { auth } from '@/auth';

import styles from './styles.module.scss';

export interface UserProps {
  className?: string;
}
export const User: FC<UserProps> = async ({ className }) => {
  const session = await auth();
  return (
    <div className={cn(styles.user, className)}>
      <div className={styles.username}>
        {session?.user?.name || session?.user?.email}
      </div>
      <Image
        src={session?.user?.image || '/icons/avatar.svg'}
        alt="avatar"
        width={20}
        height={20}
        className={styles.avatar}
      />
    </div>
  );
};
