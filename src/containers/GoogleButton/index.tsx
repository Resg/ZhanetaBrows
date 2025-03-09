'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';
import React, { useCallback } from 'react';

import { Button } from '@/components/Button';

export interface GoogleButtonProps {
  className?: string;
}

export const GoogleButton: React.FC<GoogleButtonProps> = ({ className }) => {
  const handleClick = useCallback(async () => {
    const authWindow = window.open(
      '',
      'GoogleAuthWindow',
      'width=800,height=600'
    );
    const response = await signIn('google', { redirect: false });
    console.log(response);
    if (response?.error) {
      authWindow?.close();
    } else {
      // authWindow.location = response?.url;
    }
    // await signIn('google');
  }, []);

  return (
    <Button variant={'text'} className={className} onClick={handleClick}>
      <Image src="/providers/google.svg" alt="yandex" width="40" height="40" />
    </Button>
  );
};
