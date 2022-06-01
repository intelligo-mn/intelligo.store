import React, { FC, useRef, useEffect } from "react";
import Portal from "@reach/portal";
import { motion, AnimatePresence } from "framer-motion";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import cn from "classnames";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { fadeInOut } from "@utils/motion/fade-in-out";
import { zoomOutIn } from "@utils/motion/zoom-out-in";
import { useUI } from "@contexts/ui.context";
import useOnClickOutside from "@utils/use-click-outside";

type ModalProps = {
  open?: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  rootClassName?: string;
  useBlurBackdrop?: boolean;
  containerClassName?: string;
  variant?: "default" | "center" | "bottom";
};
type DivElementRef = React.MutableRefObject<HTMLDivElement>;

// variant based classes for modal root, container & close btn
const rootClasses = {
  center: "p-4 md:p-5",
  default: "p-4 md:p-5",
  bottom: "p-5 pb-0",
};
const containerClasses = {
  center: "h-auto max-h-full top-1/2 -translate-y-1/2 rounded-lg",
  default: "h-auto max-h-full top-1/2 -translate-y-1/2 rounded-lg",
  bottom: "h-full max-h-70vh bottom-0 ltr:rounded-tl-2xl rtl:rounded-tr-2xl ltr:rounded-tr-2xl rtl:rounded-tl-2xl",
};
const closeBtnClasses = {
  center: "-top-3.5 md:-top-4 ltr:-right-3.5 ltr:md:-right-4 rtl:-left-3.5 rtl:md:-left-4",
  default: "-top-3.5 md:-top-4 ltr:-right-3.5 ltr:md:-right-4 rtl:-left-3.5 rtl:md:-left-4",
  bottom: "top-1/4 ltr:left-1/2 rtl:right-1/2 transform -translate-y-1/2 -translate-x-1/2",
};

const Modal: FC<ModalProps> = ({
  children,
  open,
  onClose,
  rootClassName,
  useBlurBackdrop,
  containerClassName,
  variant = "center",
}) => {
  const { closeModal } = useUI();
  const modalRootRef = useRef() as DivElementRef;
  const modalInnerRef = useRef() as DivElementRef;
  useOnClickOutside(modalInnerRef, () => closeModal());

  useEffect(() => {
    if (modalInnerRef.current) {
      if (open) {
        disableBodyScroll(modalInnerRef.current);
      } else {
        enableBodyScroll(modalInnerRef.current);
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
          <motion.div
            ref={modalRootRef}
            key="modal"
            initial="from"
            animate="to"
            exit="from"
            variants={fadeInOut(0.25)}
            className={cn(
              "modal-root fixed bg-black bg-opacity-70 inset-0 z-50",
              useBlurBackdrop && "backdrop-filter backdrop-blur-sm",
              rootClasses[variant],
              rootClassName
            )}
          >
            <motion.div
              initial="from"
              animate="to"
              exit="from"
              variants={zoomOutIn()}
              className="relative h-full mx-auto w-full"
            >
              <div
                className={cn(
                  "w-full sm:w-auto absolute left-1/2 transform -translate-x-1/2 shadow-xl",
                  containerClasses[variant],
                  containerClassName
                )}
              >
                <button
                  onClick={onClose}
                  aria-label="Close panel"
                  className={cn(
                    "fixed z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md",
                    closeBtnClasses[variant]
                  )}
                >
                  <IoClose className="text-xl" />
                </button>
                <div
                  ref={modalInnerRef}
                  className={`h-full rounded-lg ${
                    variant !== "default" ? "overflow-y-auto" : " "
                  }`}
                  style={{ maxHeight: "calc(100vh - 140px)" }}
                >
                  {children}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default Modal;
