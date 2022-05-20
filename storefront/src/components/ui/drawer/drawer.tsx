import { useEffect, useRef } from 'react';
import Portal from '@reach/portal';
import { motion, AnimatePresence } from 'framer-motion';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import cn from 'classnames';
import Scrollbar from '@/components/ui/scrollbar';
import { fadeInRight } from '@/lib/motion/fade-in-right';
import { fadeInLeft } from '@/lib/motion/fade-in-left';
import { fadeInOut } from '@/lib/motion/fade-in-out';

interface DrawerProps {
  children: any;
  open: boolean;
  variant?: 'left' | 'right';
  useBlurBackdrop?: boolean;
  onClose: () => void;
}
type DivElementRef = React.MutableRefObject<HTMLDivElement>;

const Drawer: React.FC<DrawerProps> = ({
  children,
  open = false,
  variant = 'right',
  useBlurBackdrop,
  onClose,
}) => {
  const ref = useRef() as DivElementRef;

  useEffect(() => {
    if (ref.current) {
      const target =
        typeof window !== 'undefined' &&
        document.querySelector('.drawer .os-viewport');
      if (open) {
        disableBodyScroll(target);
      } else {
        enableBodyScroll(target);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open]);

  // useEffect(() => {
  //   if (ref.current) {
  //     if (open) {
  //       disableBodyScroll(ref.current);
  //     } else {
  //       enableBodyScroll(ref.current);
  //     }
  //   }
  //   return () => {
  //     clearAllBodyScrollLocks();
  //   };
  // }, [open]);

  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <motion.aside
            ref={ref}
            key="drawer"
            initial="from"
            animate="to"
            exit="from"
            variants={variant === 'right' ? fadeInRight() : fadeInLeft()}
            className="fixed inset-0 z-50 h-full overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                initial="from"
                animate="to"
                exit="from"
                variants={fadeInOut(0.35)}
                onClick={onClose}
                className={cn(
                  'absolute inset-0 bg-dark bg-opacity-40',
                  useBlurBackdrop && 'use-blur-backdrop'
                )}
              />
              <div
                className={cn(
                  'absolute inset-y-0 flex max-w-full outline-none',
                  variant === 'right'
                    ? 'ltr:right-0 rtl:left-0'
                    : 'ltr:left-0 rtl:right-0'
                )}
              >
                <div className="h-full w-screen max-w-md">
                  <div className="drawer flex h-full flex-col bg-light text-base shadow-xl">
                    <Scrollbar className="h-full w-full">{children}</Scrollbar>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default Drawer;
