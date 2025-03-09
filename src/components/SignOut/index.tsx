'use client';

import { signOut } from 'next-auth/react';
import React, { useCallback } from 'react';

import { Button } from '@/components/Button';

export const SignOut: React.FC = () => {
  const handleClick = useCallback(() => signOut(), []);

  return (
    <Button onClick={handleClick} variant="text">
      Выйти
    </Button>
  );
};
