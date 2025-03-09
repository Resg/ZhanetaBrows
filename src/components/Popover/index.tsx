import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset as offsetMiddleware,
  OffsetOptions,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
  useTransitionStyles,
} from '@floating-ui/react';
import cn from 'classnames';
import React, { useCallback, useEffect } from 'react';

import styles from './styles.module.scss';

export interface PopperProps {
  className?: string;
  anchor?: HTMLElement | null;
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  offset?: OffsetOptions;
}
export const Popover: React.FC<PopperProps> = ({
  anchor,
  className,
  open,
  onClose,
  children,
  offset,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenChange = useCallback(
    (value: boolean) => {
      setIsOpen(value);
      if (!value) {
        onClose?.();
      }
    },
    [onClose]
  );

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: handleOpenChange,
    middleware: [offsetMiddleware(offset), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });
  const { styles: transitionStyles } = useTransitionStyles(context);

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getFloatingProps } = useInteractions([click, dismiss, role]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    refs.setReference(anchor || null);
  }, [anchor, refs]);

  if (!isOpen) {
    return null;
  }

  return (
    <FloatingFocusManager context={context} modal={false}>
      <div
        ref={refs.setFloating}
        style={floatingStyles}
        {...getFloatingProps()}
        className={cn(styles.container, className)}
      >
        <div style={transitionStyles} className={styles.content}>
          {children}
        </div>
      </div>
    </FloatingFocusManager>
  );
};
