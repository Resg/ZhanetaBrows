'use client';
import React from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;
  container: HTMLElement | null;
}
export const Portal: React.FC<PortalProps> = ({ container, children }) => {
  if (!container) {
    return null;
  }
  return createPortal(children, container);
};
