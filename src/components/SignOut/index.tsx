'use client';

import { signOut } from 'next-auth/react';
import React from 'react';

export const SignOut: React.FC = () => {
  return <button onClick={() => signOut()}>sign out</button>;
};
