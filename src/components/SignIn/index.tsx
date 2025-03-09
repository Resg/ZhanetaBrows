'use client';

import { signIn } from 'next-auth/react';
import React, { useCallback } from 'react';

import { Button } from '@/components/Button';

export const SignIn: React.FC = () => {
  const handleClick = useCallback(() => signIn(), []);
  return (
    <Button variant="secondary" onClick={handleClick}>
      Войти
    </Button>
  );
};
