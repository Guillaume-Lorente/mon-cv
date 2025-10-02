'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

type Img = { src: string; alt?: string };
type Props = {
  title: string;
  coverSrc: string;
  coverAlt?: string;
  caption?: string;
  images: Img[];
};

export function ImageGalleryCard({ title, coverSrc, coverAlt, caption, images }: Props) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i: number) => { setIdx(i); setOpen(true); };
  const close = () => setOpen(false);
  const prev  = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next  = () => setIdx((i) => (i + 1) % images.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      {/* Carte cliquable */}
      <button
        type="button"
        onClick={() => openAt(0)}
        aria-label={`Ouvrir la galerie « ${title} »`}
        className="group block w-full text-left focus:outline-none
                   focus-visible:ring-2 focus-visible:ring-primary-500/45
                   focus-visible:ring-offset-2 ring-offset-background rounded-2xl"
      >
        <Card className="overflow-hidden rounded-2xl border bg-card transition hover:border-primary-300 hover:shadow-lg p-0">
          <div className="relative aspect-[16/9]">
            <Image
  src={coverSrc}
  alt={coverAlt || title}
  fill
  quality={60}
  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
  className="object-cover transition duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-105"
/>

            {/* Dégradé limité en hauteur */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0
                            h-[60%] sm:h-[50%] bg-gradient-to-t
                            from-primary-950/70 via-primary-900/30 to-transparent
                            opacity-80 group-hover:opacity-90 transition" />

            {/* Zone texte avec fond translucide + blur */}
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 space-y-1
                            bg-primary-950/40 backdrop-blur-[2px]
                            max-h-[60%] sm:max-h-[50%] overflow-hidden">
              <h3 className="text-lg font-semibold text-primary-foreground drop-shadow">
                {title}
              </h3>
              {caption && (
                <p className="text-primary-foreground/90 text-sm line-clamp-2">
                  {caption}
                </p>
              )}
            </div>
          </div>
        </Card>
      </button>

      {/* Lightbox */}
      {open && (
  <div
    role="dialog"
    aria-modal="true"
    onClick={(e) => { if (e.currentTarget === e.target) close(); }} // clic en dehors = fermer
    className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-950/80 backdrop-blur-md animate-[fade-in_280ms_ease-out]"

  >
    <div
      onClick={(e) => e.stopPropagation()} // évite de fermer quand on clique sur le panneau
      className="relative w-[min(96vw,1100px)] h-[min(86vh,900px)] rounded-2xl border border-primary-300/30 ring-1 ring-primary-300/20 bg-primary-900/20 shadow-2xl overflow-hidden animate-[zoom-in_320ms_cubic-bezier(.16,1,.3,1)]"

    >
      {/* Bouton fermer */}
      <button
        aria-label="Fermer"
        onClick={close}
        className="absolute top-3 right-3 z-10 inline-flex items-center justify-center
                   h-9 w-9 rounded-full border border-primary-300/30
                   bg-primary-700/80 text-primary-foreground
                   hover:bg-primary-600/80 transition"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>

      {/* Compteur */}
      <div
        aria-live="polite"
        className="absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 text-xs
                   bg-primary-800/70 text-primary-foreground/90 border border-primary-300/30"
      >
        {idx + 1} / {images.length}
      </div>

      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={images[idx].src}
          alt={images[idx].alt || title}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      {/* Navigation */}
      <button
        aria-label="Précédent"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                   inline-flex items-center justify-center h-10 w-10 rounded-full
                   border border-primary-300/30 bg-primary-700/80 text-primary-foreground
                   hover:bg-primary-600/80 transition"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button
        aria-label="Suivant"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                   inline-flex items-center justify-center h-10 w-10 rounded-full
                   border border-primary-300/30 bg-primary-700/80 text-primary-foreground
                   hover:bg-primary-600/80 transition"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      {/* Légende (couleurs brand + blur) */}
      {caption && (
        <div className="absolute inset-x-0 bottom-0 px-4 py-3 text-sm
                        bg-primary-950/50 backdrop-blur-sm
                        text-primary-foreground/95">
          {caption}
        </div>
      )}
    </div>
  </div>
)}

    </>
  );
}
