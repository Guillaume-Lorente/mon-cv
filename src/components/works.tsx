'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

/* ========= TYPES ========= */

export type WorkMedia =
  | {
      type: "image";
      src: string;
      alt?: string;
      caption?: string;
    }
  | {
      type: "video";
      youtubeUrl: string;
      caption?: string;
    }
    | {
      type: "video-local";
      src: string;
      caption?: string;
      poster?: string;
    };

export type Work = {
  title: string;
  coverSrc: string;
  coverAlt?: string;
  description?: string;
  tags?: string[];
  aspect?: "16/10" | "4/3" | "1/1";

  /** MODE GALERIE */
  media?: WorkMedia[];

  /** MODE LIEN SIMPLE */
  websiteUrl?: string;
};

const aspectClass: Record<NonNullable<Work["aspect"]>, string> = {
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

/* ========= COMPONENT ========= */

type WorksGridProps = {
  works: Work[];
};

export default function WorksGrid({ works }: WorksGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {works.map((work) => (
        <WorkCard key={work.title} work={work} />
      ))}
    </div>
  );
}

/* ========= WORK CARD ========= */

function WorkCard({ work }: { work: Work }) {
  const isGallery = Boolean(work.media && work.media.length > 0);
  const isLink = Boolean(work.websiteUrl);

  /* ===== MODE : LIEN SIMPLE ===== */
  if (isLink && !isGallery) {
    return (
      <Link
        href={work.websiteUrl!}
        target="_blank"
        rel="noreferrer"
        aria-label={`Ouvrir « ${work.title} » (nouvel onglet)`}
        className="group block rounded-2xl border bg-card overflow-hidden transition
                   hover:border-primary-300 hover:shadow-lg
                   focus:outline-none focus-visible:ring-2
                   focus-visible:ring-primary-500/45
                   focus-visible:ring-offset-2 ring-offset-background"
      >
        <Cover work={work} showExternalIcon />
      </Link>
    );
  }

  /* ===== MODE : GALERIE ===== */
  return <Gallery work={work} />;
}

/* ========= COVER ========= */

function Cover({
  work,
  showExternalIcon,
}: {
  work: Work;
  showExternalIcon?: boolean;
}) {
  return (
    <div className={`relative ${aspectClass[work.aspect ?? "16/10"]}`}>
      <Image
        src={work.coverSrc}
        alt={work.coverAlt || work.title}
        fill
        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
        className="object-cover transition duration-500 ease-out
                   group-hover:scale-[1.02]
                   group-hover:brightness-105"
      />

      {/* Badge vidéo */}
      {work.media?.some((m) => m.type === "video") && (
        <span className="absolute top-3 right-3 z-10 rounded-full
                         bg-red-600 px-2 py-1 text-xs font-medium text-white">
          VIDÉO
        </span>
      )}

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]
                      bg-gradient-to-t from-primary-950/70
                      via-primary-900/30 to-transparent" />

      {/* Contenu */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 space-y-2
                      bg-primary-950/40 backdrop-blur-[2px]
                      max-h-[60%] overflow-hidden">
        <h3 className="text-lg font-semibold text-primary-foreground">
          {work.title}
          {showExternalIcon && (
            <ExternalLink className="ml-2 inline-block h-4 w-4 align-[-2px]" />
          )}
        </h3>

        {work.description && (
          <p className="text-primary-foreground/90 text-sm line-clamp-2">
            {work.description}
          </p>
        )}

        {work.tags && work.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 sm:hidden lg:flex">
            {work.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-md
                           bg-primary-100 text-primary-900"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ========= GALLERY ========= */

function Gallery({ work }: { work: Work }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const media = work.media!;
  const current = media[idx];

  const close = () => setOpen(false);
  const prev = () => setIdx((i) => (i - 1 + media.length) % media.length);
  const next = () => setIdx((i) => (i + 1) % media.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ouvrir la galerie « ${work.title} »`}
        className="group block w-full text-left rounded-2xl border bg-card
                   overflow-hidden transition hover:border-primary-300 hover:shadow-lg
                   focus:outline-none focus-visible:ring-2
                   focus-visible:ring-primary-500/45
                   focus-visible:ring-offset-2 ring-offset-background"
      >
        <Cover work={work} />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.currentTarget === e.target && close()}
          className="fixed inset-0 z-[100] flex items-center justify-center
                     bg-primary-950/80 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[min(96vw,1100px)] h-[min(86vh,900px)]
                       rounded-2xl border border-primary-300/30
                       bg-primary-900/20 shadow-2xl overflow-hidden"
          >
            {/* Fermer */}
            <button
              onClick={close}
              aria-label="Fermer"
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
  {current.type === "image" && (
    <Image
      src={current.src}
      alt={current.alt || work.title}
      fill
      sizes="100vw"
      className="object-contain"
    />
  )}

  {current.type === "video" && (
    <iframe
      src={current.youtubeUrl.replace("watch?v=", "embed/")}
      title={work.title}
      allow="autoplay; encrypted-media"
      allowFullScreen
      className="w-full h-full"
    />
  )}

  {current.type === "video-local" && (
    <video
      key={current.src}
      src={current.src}
      controls
      muted
      playsInline
      preload="metadata"
      className="w-full h-full object-contain"
    />
  )}
</div>


            {/* Navigation */}
            <button
              onClick={prev}
              aria-label="Précédent"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                         h-10 w-10 rounded-full border border-primary-300/30
                         bg-primary-700/80 text-primary-foreground
                         hover:bg-primary-600/80 transition"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Suivant"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                         h-10 w-10 rounded-full border border-primary-300/30
                         bg-primary-700/80 text-primary-foreground
                         hover:bg-primary-600/80 transition"
            >
              ›
            </button>

            {/* Légende */}
            {(current.caption || work.description) && (
              <div className="absolute inset-x-0 bottom-0 px-4 py-3 text-sm
                              bg-primary-950/50 backdrop-blur-sm
                              text-primary-foreground/95">
                {current.caption ?? work.description}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
