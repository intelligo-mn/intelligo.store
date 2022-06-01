import { FC, useEffect, useRef } from "react";
import Portal from "@reach/portal";
import { motion, AnimatePresence } from "framer-motion";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import cn from "classnames";
import { fadeInRight } from "@utils/motion/fade-in-right";
import { fadeInLeft } from "@utils/motion/fade-in-left";
import { fadeInOut } from "@utils/motion/fade-in-out";

interface SidebarProps {
  children: any;
  open: boolean;
  variant?: "left" | "right";
  useBlurBackdrop?: boolean;
  onClose: () => void;
}
type DivElementRef = React.MutableRefObject<HTMLDivElement>;

const Drawer: FC<SidebarProps> = ({
  children,
  open = false,
  variant = "right",
  useBlurBackdrop,
  onClose,
}) => {
  const ref = useRef() as DivElementRef;
  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open]);

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
            variants={variant === "right" ? fadeInRight() : fadeInLeft()}
            className="fixed inset-0 overflow-hidden h-full z-50"
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                initial="from"
                animate="to"
                exit="from"
                variants={fadeInOut(0.35)}
                onClick={onClose}
                className={cn(
                  "absolute inset-0 bg-dark bg-opacity-40",
                  useBlurBackdrop && "use-blur-backdrop"
                )}
              />
              <div
                className={cn(
                  "absolute inset-y-0 max-w-full flex outline-none",
                  variant === "right" ? "end-0" : "start-0"
                )}
              >
                <div className="h-full w-screen max-w-md">
                  <div className="h-full flex flex-col text-body bg-light shadow-xl">
                    {children}
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
