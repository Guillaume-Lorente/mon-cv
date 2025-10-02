import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Projets — Guillaume Lorente",
  description: "Sélection de sites réalisés — captures cliquables, ouverture en nouvel onglet.",
};

type Project = {
  title: string;
  href: string;
  imageSrc: string
  imageAlt?: string;
  description?: string;
  tags?: string[];
  aspect?: "16/10" | "4/3" | "1/1";
};

const projects: Project[] = [
  {
    title: "Villas Grande Anse",
    href: "https://villas-grande-anse.com",
    imageSrc: "/villas-grande-anse.png",
    imageAlt: "Capture du site Villas Grande Anse",
    description: "Site de location de villas en Guadeloupe, moderne avec blog et SEO soigné.",
    tags: ["Next.js", "Tailwind", "SEO", "Express", "PostgreSQL"],
    aspect: "4/3",
  },
  {
    title: "Nation Sounds",
    href: "https://nation-sounds.alwaysdata.net/",
    imageSrc: "/nation-sounds.png",
    imageAlt: "Capture du site Nation Sounds Festival",
    description: "Site web de festival de musique, moderne et performant.",
    tags: ["React", "Tailwind", "Node.js", "PostgreSQL", "i18n"],
    aspect: "4/3",
  },
];

const aspectClass: Record<NonNullable<Project["aspect"]>, string> = {
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

export default function ProjetsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Projets</h1>
        <p className="text-muted-foreground">
          Une sélection de réalisations. Cliquez sur une carte pour ouvrir le site dans un nouvel onglet.
        </p>
      </header>

      <section aria-labelledby="grid-projets">
        <h2 id="grid-projets" className="sr-only">Grille de projets</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ouvrir « ${p.title} » (nouvel onglet)`}
              className="group rounded-2xl border bg-card overflow-hidden transition
                         hover:border-primary-300 hover:shadow-lg focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-primary-500/45 focus-visible:ring-offset-2 ring-offset-background"
            >
              <div className={`relative ${aspectClass[p.aspect ?? "16/10"]}`}>
                <Image
                  src={p.imageSrc}
                  alt={p.imageAlt || p.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-105"
                />

                {/* Overlay dégradé brand */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] sm:h-[50%] bg-gradient-to-t from-primary-950/70 via-primary-900/30 to-transparent opacity-80 group-hover:opacity-90 transition" />

                {/* Contenu (titre, desc, tags) */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5 space-y-2 bg-primary-950/40 backdrop-blur-[2px] max-h-[60%] sm:max-h-[50%] overflow-hidden">
                  <h3 className="text-lg font-semibold text-primary-foreground drop-shadow">
                    {p.title}
                    <ExternalLink className="ml-2 inline-block h-4 w-4 align-[-2px]" />
                  </h3>
                  {p.description && (
                    <p className="text-primary-foreground/90 text-sm line-clamp-2">
                      {p.description}
                    </p>
                  )}
                  {p.tags && p.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 sm:hidden lg:flex">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded-md bg-primary-100 text-primary-900 backdrop-blur"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
