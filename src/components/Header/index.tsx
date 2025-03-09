import cn from 'classnames';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { auth } from '@/auth';
import { SignIn } from '@/components/SignIn';
import { User } from '@/components/User';

import styles from './styles.module.scss';

export interface HeaderProps {
  className?: string;
}
export const Header: React.FC<HeaderProps> = async ({ className }) => {
  const session = await auth();
  const headersList = await headers();
  const pathname = headersList.get('x-current-path');

  return (
    <header className={cn(styles.header, className)}>
      <Link href="/" className={styles.logoContainer}>
        <Image src="/icons/logo.svg" alt="logo" width={80} height={80} />
        <div>ZhanetaBrows</div>
      </Link>
      <div className={styles.rightBlock}>
        <div className={styles.links}>
          <Link href="/">О мастере</Link>
          <Link href="/">Услуги</Link>
          <Link href="/">Портфолио</Link>
          <Link href="/">Записаться</Link>
        </div>
        {pathname !== '/auth/signIn' && (
          <div className={styles.userContainer}>
            {session ? <User /> : <SignIn />}
          </div>
        )}
      </div>
    </header>
  );
};
