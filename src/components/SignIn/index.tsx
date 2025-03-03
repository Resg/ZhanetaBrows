'use client';

import { signIn } from 'next-auth/react';
import React from 'react';

export const SignIn: React.FC = () => {
  return <button onClick={() => signIn()}>sign in</button>;
};
