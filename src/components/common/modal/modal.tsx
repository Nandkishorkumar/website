// import React, { FC, useRef, useEffect } from "react";
// import Portal from "@reach/portal";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   disableBodyScroll,
//   enableBodyScroll,
//   clearAllBodyScrollLocks,
// } from "body-scroll-lock";
// import cn from "classnames";
// import { CloseIcon } from "@components/icons/close-icon";
// import { fadeInOut } from "@utils/motion/fade-in-out";
// import { zoomOutIn } from "@utils/motion/zoom-out-in";
// import { useUI } from "@contexts/ui.context";
// import useOnClickOutside from "@utils/use-click-outside";

// type ModalProps = {
//   open?: boolean;
//   children?: React.ReactNode;
//   onClose: () => void;
//   rootClassName?: string;
//   useBlurBackdrop?: boolean;
//   containerClassName?: string;
//   variant?: "center" | "bottom";
// };
// type DivElementRef = React.MutableRefObject<HTMLDivElement>;

// // variant based classes for modal root, container & close btn
// const rootClasses = {
//   center: "p-5",
//   bottom: "p-5 pb-0",
// };
// const containerClasses = {
//   center: "h-auto max-h-full top-1/2 -translate-y-1/2 rounded-lg",
//   bottom: "h-full max-h-70vh bottom-0 rounded-tl-2xl rounded-tr-2xl",
// };
// const closeBtnClasses = {
//   center: "top-4 right-4",
//   bottom: "top-1/4 left-1/2 transform -translate-y-1/2 -translate-x-1/2",
// };

// const Modal: FC<ModalProps> = ({
//   children,
//   open,
//   onClose,
//   rootClassName,
//   useBlurBackdrop,
//   containerClassName,
//   variant = "center",
// }) => {
//   const { closeModal } = useUI();
//   const modalRootRef = useRef() as DivElementRef;
//   const modalInnerRef = useRef() as DivElementRef;
//   useOnClickOutside(modalInnerRef, () => closeModal());

//   useEffect(() => {
//     if (modalInnerRef.current) {
//       if (open) {
//         disableBodyScroll(modalInnerRef.current);
//       } else {
//         enableBodyScroll(modalInnerRef.current);
//       }
//     }
//     return () => {
//       clearAllBodyScrollLocks();
//     };
//   }, [open]);

//   return (
//     <Portal>
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             ref={modalRootRef}
//             key="modal"
//             initial="from"
//             animate="to"
//             exit="from"
//             variants={fadeInOut(0.25)}
//             className={cn(
//               "modal-root fixed bg-black bg-opacity-40 inset-0 z-50",
//               useBlurBackdrop && "use-blur-backdrop",
//               rootClasses[variant],
//               rootClassName
//             )}
//           >
//             <button
//               onClick={onClose}
//               aria-label="Close panel"
//               className={cn(
//                 "fixed z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md",
//                 closeBtnClasses[variant]
//               )}
//             >
//               <CloseIcon className="w-2.5 h-2.5" />
//             </button>
//             <motion.div
//               initial="from"
//               animate="to"
//               exit="from"
//               variants={zoomOutIn()}
//               className="relative w-full h-full"
//             >
//               <div
//                 className={cn(
//                   "w-full absolute left-1/2 transform  -translate-x-1/2 bg-white shadow-xl",
//                   containerClasses[variant],
//                   containerClassName
//                 )}
//               >
//                 <div
//                   ref={modalInnerRef}
//                   className="h-full overflow-y-auto"
//                   style={{ maxHeight: "calc(100vh - 40px)" }}
//                 >
//                   {children}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </Portal>
//   );
// };

// export default Modal;

import { CloseIcon } from "@components/icons/close-icon";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";

export default function Modal({ open, onClose, children }: any) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={cancelButtonRef}
        static
        open={open}
        onClose={onClose}
      >
        <div className="min-h-full md:p-5 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-50 w-full h-full" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block min-w-content max-w-full overflow-hidden text-left align-middle transition-all  md:rounded-xl relative">
              <button
                onClick={onClose}
                aria-label="Close panel"
                ref={cancelButtonRef}
                className="inline-block md:hidden outline-none focus:outline-none absolute right-4 top-4 z-[60]"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
