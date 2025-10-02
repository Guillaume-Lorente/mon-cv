'use client';

import { useEffect, useState } from 'react';
import { ChevronsLeftRight, Hand } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const KEY = 'swipeHintDismissed';

export function SwipeOnboarding() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Afficher uniquement sur écrans tactiles ET si jamais vu
    const isTouch =
      typeof window !== 'undefined' &&
      (navigator.maxTouchPoints > 0 || window.matchMedia?.('(pointer: coarse)').matches);

    const alreadyDismissed = typeof window !== 'undefined' && localStorage.getItem(KEY) === '1';

    if (isTouch && !alreadyDismissed) setShow(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem(KEY, '1');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-primary-950/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="mx-4 w-full max-w-md rounded-2xl border border-primary-300/30 bg-primary-900/20 p-6 text-primary-foreground shadow-2xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-300/30 bg-primary-700/80">
                <Hand className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-semibold">Astuce navigation</h2>
            </div>

            <p className="mt-3 text-sm/6 text-primary-foreground/90">
              Sur mobile et tablette, <strong>swipe gauche/droite</strong> pour changer de page.
              Sur ordinateur, utilise les <strong>flèches latérales</strong>.
            </p>

            <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-primary-300/30 bg-primary-800/40 p-3">
              <ChevronsLeftRight className="h-5 w-5" />
              <span className="text-sm">Swipe pour naviguer</span>
            </div>

            <div className="mt-6 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={dismiss}
                className="rounded-md px-3 py-1.5 text-sm bg-primary-50 text-primary-900 hover:bg-primary-100"
              >
                J’ai compris
              </button>
            </div>
          </motion.div>

          {/* fermer en tapant le fond */}
          <button
            aria-label="Fermer"
            className="absolute inset-0"
            onClick={dismiss}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
