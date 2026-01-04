'use client';

import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Media } from "@/components/ImageGalleryCard";


const ImageGalleryCard = dynamic(
  () => import('@/components/ImageGalleryCard').then(m => m.ImageGalleryCard),
  {
    ssr: false,
    loading: () => (
      <div className="h-[260px] sm:h-[300px] lg:h-[340px] rounded-2xl border bg-muted animate-pulse" />
    ),
  }
);

type Video = { title: string; url: string; description?: string };

const musicVideos: Video[] = [
  { title: "Funky Monks — Live 2020", url: "https://www.youtube.com/embed/a2uJde_XWzU", description: "Extrait live." },
  { title: "The Creeps — Live 2018", url: "https://www.youtube.com/embed/gejZ1Rhseqw", description: "Extrait live." },
];

/** ===== Montagne ===== */
const mountain: {
  title: string;
  coverSrc: string;
  caption?: string;
  media: Media[];
}[] = [
  {
    
    title: "Ski & Snowboard",
    coverSrc: "/interets/montagne/ski-1.jpg",
    caption: "Quelques souvenirs de ski & snowboard.",
    media: [
      { type: "image", src: "/interets/montagne/ski-1.jpg", alt: "Hors piste de Pradieux" },
      { type: "image", src: "/interets/montagne/ski-2.jpg", alt: "Descente dans la poudreuse" },
    ],
  },
  {
    title: "Randonnée",
    coverSrc: "/interets/montagne/rando-2.jpg",
    caption: "Randos en altitude.",
    media: [
      { type: "image", src: "/interets/montagne/rando-2.jpg", alt: "Chemin du lac de la partie" },
      { type: "image", src: "/interets/montagne/rando-1.jpg", alt: "Arrivée au plateau du lac de la partie" },
      { type: "image", src: "/interets/montagne/rando-3.jpg", alt: "Panorama vallonné" },
      { type: "image", src: "/interets/montagne/rando-4.jpg", alt: "Chalet d'Arplane en été" },
      { type: "image", src: "/interets/montagne/rando-5.jpg", alt: "Mont enneigé" },
    ],
  },
];

/** ===== Voyages ===== */
const trips: {
  title: string;
  coverSrc: string;
  caption?: string;
  media: Media[];
}[] = [
  {
    title: "Dublin 2025",
    coverSrc: "/interets/voyages/dublin-2025/1.jpg",
    caption: "Escapade en Irlande — pubs, musique & bords de mer.",
    media: [
      { type: "image", src: "/interets/voyages/dublin-2025/1.jpg" },
      { type: "image", src: "/interets/voyages/dublin-2025/2.jpg" },
      { type: "image", src: "/interets/voyages/dublin-2025/3.jpg" },
      { type: "image", src: "/interets/voyages/dublin-2025/4.jpg" },
      { type: "image", src: "/interets/voyages/dublin-2025/5.jpg" },
    ],
  },
  {
    title: "San Sébastien 2024",
    coverSrc: "/interets/voyages/san-sebastien-2024/1.jpg",
    caption: "Visite de la côte basque.",
    media: [
      { type: "image", src: "/interets/voyages/san-sebastien-2024/1.jpg" },
      { type: "image", src: "/interets/voyages/san-sebastien-2024/2.jpg" },
      { type: "image", src: "/interets/voyages/san-sebastien-2024/3.jpg" },
    ],
  },
  {
    title: "Londres 2022",
    coverSrc: "/interets/voyages/londres-2022/1.jpg",
    caption: "Balades urbaines, pubs, musées et football.",
    media: [
      { type: "image", src: "/interets/voyages/londres-2022/1.jpg" },
      { type: "image", src: "/interets/voyages/londres-2022/2.jpg" },
      { type: "image", src: "/interets/voyages/londres-2022/3.jpg" },
      { type: "image", src: "/interets/voyages/londres-2022/4.jpg" },
      { type: "image", src: "/interets/voyages/londres-2022/5.jpg" },
      { type: "image", src: "/interets/voyages/londres-2022/6.jpg" },
      { type: "image", src: "/interets/voyages/londres-2022/7.jpg" },
    ],
  },
  {
    title: "Guadeloupe 2022",
    coverSrc: "/interets/voyages/guadeloupe-2022/1.jpg",
    caption: "Plages, cascades & forêts tropicales.",
    media: [
      { type: "image", src: "/interets/voyages/guadeloupe-2022/1.jpg" },
      { type: "image", src: "/interets/voyages/guadeloupe-2022/2.jpg" },
      { type: "image", src: "/interets/voyages/guadeloupe-2022/3.jpg" },
      { type: "image", src: "/interets/voyages/guadeloupe-2022/4.jpg" },
      { type: "image", src: "/interets/voyages/guadeloupe-2022/5.jpg" },
      { type: "image", src: "/interets/voyages/guadeloupe-2022/6.jpg" },
    ],
  },
];

function ResponsiveVideo({ src, title }: { src: string; title: string }) {
  return (
    <div className="group relative w-full rounded-xl border overflow-hidden transition hover:border-primary-300 hover:shadow-md">
      <iframe
        src={src}
        title={title}
        className="block w-full aspect-video transition duration-300 ease-out group-hover:scale-[1.015] group-hover:brightness-105"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

export default function CentresInteretsPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold">Centres d’intérêts</h1>

      {/* Musique */}
      <section className="space-y-4" style={{ contentVisibility: 'auto', containIntrinsicSize: '800px' }}>
        <h2 className="text-2xl font-semibold">🎸 Musique</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {musicVideos.map((v) => (
            <Card key={v.title} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{v.title}</CardTitle>
                {v.description && <CardDescription>{v.description}</CardDescription>}
              </CardHeader>
              <CardContent className="space-y-3">
                <ResponsiveVideo src={v.url} title={v.title} />
                <Link
                  href={v.url.replace("/embed/", "/watch?v=")}
                  className="text-sm underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir sur YouTube →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Montagne */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🏔️ Montagne</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {mountain.map((m) => (
            <ImageGalleryCard
              key={m.title}
              title={m.title}
              coverSrc={m.coverSrc}
              caption={m.caption}
              media={m.media}
            />
          ))}
        </div>
      </section>

      {/* Voyages */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">✈️ Voyages</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((t) => (
            <ImageGalleryCard
              key={t.title}
              title={t.title}
              coverSrc={t.coverSrc}
              caption={t.caption}
              media={t.media}
            />
          ))}
        </div>
      </section>



      {/* Photographie */}
      {/* <section className="space-y-2">
        <h2 className="text-2xl font-semibold">📷 Photographie</h2>
        <p className="text-sm text-muted-foreground">Je commence mais je m’y intéresse de plus en plus. Matériel = boîtier Nikon D300S.</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {photoAlbums.map((a) => (
            <Card key={a.title}>
              <CardHeader>
                <CardTitle>{a.title}</CardTitle>
                {a.description && <CardDescription>{a.description}</CardDescription>}
              </CardHeader>
              <CardContent>
                <a href={a.href} target="_blank" rel="noreferrer" className="group block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border">
                    <Image
                      src={a.href}
                      alt={a.title}
                      fill
                      className="object-cover transition group-hover:scale-[1.02]"
                      sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    />
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}
    </div>
  );
}
