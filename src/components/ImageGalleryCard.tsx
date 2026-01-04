'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

/* ========= TYPES ========= */

export type Media =
  | {
      type: 'image';
      src: string;
      alt?: string;
      caption?: string;
    }
  | {
      type: 'video-local';
      src: string; // ex: /videos/demo.mp4
      poster?: string;
      caption?: string;
    }
  | {
      type: 'video-youtube';
      youtubeUrl: string;
      caption?: string;
    };

type Props = {
  title: string;
  coverSrc: string;
  coverAlt?: string;
  caption?: string; // fallback
  media: Media[];
};

/* ========= COMPONENT ========= */

export function ImageGalleryCard({
  title,
  coverSrc,
  coverAlt,
  caption,
  media,
}: Props) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i: number) => {
    setIdx(i);
    setOpen(true);
  };
  const close = () => setOpen(false);
  const prev = () => setIdx((i) => (i - 1 + media.length) % media.length);
  const next = () => setIdx((i) => (i + 1) % media.length);

  const current = media[idx];

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
      {/* ===== Carte cliquable ===== */}
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
              className="object-cover transition duration-500 ease-out
                         group-hover:scale-[1.02] group-hover:brightness-105"
            />

            {/* Badge vidéo */}
            {media.some((m) => m.type !== 'image') && (
              <span className="absolute top-3 right-3 z-10 rounded-full
                               bg-red-600 px-2 py-1 text-xs font-medium text-white">
                VIDÉO
              </span>
            )}

            {/* Dégradé */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0
                            h-[60%] sm:h-[50%] bg-gradient-to-t
                            from-primary-950/70 via-primary-900/30 to-transparent
                            opacity-80 group-hover:opacity-90 transition" />

            {/* Texte */}
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

      {/* ===== Lightbox ===== */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.currentTarget === e.target && close()}
          className="fixed inset-0 z-[100] flex items-center justify-center
                     bg-primary-950/80 backdrop-blur-md
                     animate-[fade-in_280ms_ease-out]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[min(96vw,1100px)] h-[min(86vh,900px)]
                       rounded-2xl border border-primary-300/30
                       bg-primary-900/20 shadow-2xl overflow-hidden
                       animate-[zoom-in_320ms_cubic-bezier(.16,1,.3,1)]"
          >
            {/* Fermer */}
            <button
              aria-label="Fermer"
              onClick={close}
              className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full
                         border border-primary-300/30 bg-primary-700/80
                         text-primary-foreground hover:bg-primary-600/80 transition"
            >
              ✕
            </button>

            {/* Compteur */}
            <div className="absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 text-xs
                            bg-primary-800/70 text-primary-foreground/90
                            border border-primary-300/30">
              {idx + 1} / {media.length}
            </div>

            {/* Media */}
            <div className="absolute inset-0 flex items-center justify-center">
              {current.type === 'image' && (
                <Image
                  src={current.src}
                  alt={current.alt || title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              )}

              {current.type === 'video-local' && (
                <video
                  src={current.src}
                  poster={current.poster}
                  controls
                  autoPlay
                  className="max-h-full max-w-full"
                />
              )}

              {current.type === 'video-youtube' && (
                <iframe
                  src={current.youtubeUrl.replace('watch?v=', 'embed/')}
                  title={title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>

            {/* Navigation */}
            <button
              aria-label="Précédent"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                         h-10 w-10 rounded-full border border-primary-300/30
                         bg-primary-700/80 text-primary-foreground
                         hover:bg-primary-600/80 transition"
            >
              ‹
            </button>
            <button
              aria-label="Suivant"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                         h-10 w-10 rounded-full border border-primary-300/30
                         bg-primary-700/80 text-primary-foreground
                         hover:bg-primary-600/80 transition"
            >
              ›
            </button>

            {/* Légende */}
            {(current.caption || caption) && (
              <div className="absolute inset-x-0 bottom-0 px-4 py-3 text-sm
                              bg-primary-950/50 backdrop-blur-sm
                              text-primary-foreground/95">
                {current.caption ?? caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
