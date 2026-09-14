import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <AnimatePresence>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="bg-[hsl(var(--primary))] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-white/20 flex items-center gap-3 max-w-md"
        >
          <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent))] shrink-0" />
          <span className="text-xs font-semibold leading-snug">{message}</span>
          <button
            onClick={onClose}
            className="w-5 h-5 rounded-full hover:bg-white/20 flex items-center justify-center shrink-0 ml-2 text-white/80 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
