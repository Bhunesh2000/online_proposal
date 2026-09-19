"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PopupModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export default function PopupModal({
  isOpen,
  message,
  onClose,
}: PopupModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Card — white with pink accents */}
          <motion.div
            className="relative z-10 bg-white border border-pink-200 rounded-2xl p-6 sm:p-8 max-w-sm w-full mx-4 shadow-2xl"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Emoji decoration */}
            <div className="text-4xl text-center mb-4">😏</div>

            {/* Message — dark text for readability */}
            <p className="text-center text-gray-800 text-lg sm:text-xl font-medium leading-relaxed font-serif">
              {message}
            </p>

            {/* Close button — pink */}
            <motion.button
              className="mt-6 w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl shadow-lg btn-glow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onClose}
            >
              Okay, got it! 😊
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
