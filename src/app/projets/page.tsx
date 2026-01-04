import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import WorksGrid, { Work } from "@/components/works";

export const metadata: Metadata = {
  title: "Projets — Guillaume Lorente",
  description: "Sélection de sites réalisés — captures cliquables, ouverture en nouvel onglet.",
};

/* ========= PROJETS WEB ========= */

type Project = {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  description?: string;
  tags?: string[];
  aspect?: "16/10" | "4/3" | "1/1";
};

const projects: Project[] = [
  {
    title: "Nation Sounds",
    href: "https://nation-sounds.alwaysdata.net/",
    imageSrc: "/images/nation-sounds.png",
    imageAlt: "Capture du site Nation Sounds Festival",
    description: "Site web de festival de musique, moderne et performant.",
    tags: ["React", "Tailwind", "Node.js", "PostgreSQL", "i18n"],
    aspect: "4/3",
  },
];

/* ========= RÉALISATIONS PRO ========= */

const proWorks: Work[] = [
  {
  title: "Villas Grande Anse",
  coverSrc: "/images/villas-grande-anse.png",
  description:
    "Site de location de villas en Guadeloupe, moderne avec blog et SEO soigné.",
  tags: ["Next.js", "Tailwind", "SEO", "Express", "PostgreSQL"],
  aspect: "16/10",

  // 👇 mode lien simple (PAS de galerie)
  websiteUrl: "https://villas-grande-anse.com",
},

  {
    title: "Festival Musilac 2022",
    coverSrc: "/images/cartoucheMusilac.jpg",
    description: "Extraits de mon travail lors de l'édition 2022 du festival Musilac",
    tags: [
      "Community Management",
      "Création de contenu",
      "Stratégies digitales",
      "Analyse de performance",
      "Modération",
    ],
    aspect: "16/10",

    media: [
      { type: "image", src: "/images/cartoucheMusilac.jpg", caption: "Logo de l'édition 2022" },
      { type: "image", src: "/images/vignetteMusilacGuillaume.jpg", caption: "Gestion des événements" },
      { type: "image", src: "/images/siteInternet.png", caption: "Page d'accueil du site internet" },
      { type: "image", src: "/images/visuels.png", caption: "Création de visuels pour les artistes du tremplin" },
      { type: "image", src: "/images/tremplin.png", caption: "Retour sur les artistes du tremplin 2022" },
      { type: "image", src: "/images/mezerg.png", caption: "Annonce et descriptions des artistes" },
      { type: "image", src: "/images/contenu.PNG", caption: "Création de concept et de contenu" },
      { type: "image", src: "/images/moderation.jpg", caption: "Modération des messages et commentaires" },
      { type: "image", src: "/images/newsletter.PNG", caption: "Création et diffusion de newsletters (RGPD)" },
      { type: "image", src: "/images/newsletter2.PNG", caption: "Création et diffusion de newsletters (RGPD)" },
      { type: "image", src: "/images/interaction.png", caption: "Interaction avec les fans de Musilac" },
      { type: "image", src: "/images/hyppo.png", caption: "Mascotte Hyppolite sur site" },
      { type: "image", src: "/images/mika.png", caption: "Création de contenu pendant le festival" },
      { type: "image", src: "/images/orelsan.png", caption: "Création de contenu pendant le festival" },
      { type: "image", src: "/images/sum41.png", caption: "Création de contenu pendant le festival" },
      { type: "image", src: "/images/public.png", caption: "Création de contenu pendant le festival" },
      { type: "video-local", src: "/videos/story1.mp4", caption: "Stories Instagram" },
      { type: "video-local", src: "/videos/story2.mp4", caption: "Stories Instagram" },
      { type: "video-local", src: "/videos/story3.mp4", caption: "Stories Instagram" },
      { type: "video-local", src: "/videos/story4.mp4", caption: "Stories Instagram" },
      { type: "video-local", src: "/videos/story5.mp4", caption: "Stories Instagram" },
      { type: "video-local", src: "/videos/story6.mp4", caption: "Stories Instagram" },
      { type: "video-local", src: "/videos/story7.mp4", caption: "Stories Instagram" },
      { type: "image", src: "/images/tiktok.png", caption: "Création de contenu TikTok" },
      { type: "image", src: "/images/tiktok2.png", caption: "Création de contenu TikTok" },
      { type: "video", youtubeUrl: "https://www.youtube.com/embed/FSCwx1Qt7LA", caption: "Aftermovie Musilac 2022",},
    ],
  },

  {
    title: "Rémi Perrier Organisation",
    coverSrc: "/images/logoRPO.png",
    description:
      "Extrait de mon travail chez Rémi Perrier Organisation (producteur et diffuseur de spectacles)",
    tags: [
      "Community Management",
      "Création de contenu",
      "Stratégies digitales",
      "Analyse de performance",
      "Modération",
    ],
    aspect: "16/10",

    media: [
      { type: "image", src: "/images/logoRPO.png", caption: "Logo de l'entreprise" },
      { type: "image", src: "/images/rayonAction.PNG", caption: "Zone géographique du rayon d'action de RPO" },
      { type: "image", src: "/images/accueilRPO.png", caption: "Page d'accueil du site internet" },
      { type: "image", src: "/images/visuelSoprano1.jpg", caption: "Création de visuels pour les dates des artistes" },
      { type: "image", src: "/images/visuelSoprano2.jpg", caption: "Création de posts et suivis de l'actualité des artistes pour augmenter les ventes en ligne" },
      { type: "image", src: "/images/visuelSoprano3.png", caption: "Création de contenu" },
      { type: "image", src: "/images/sea.PNG", caption: "Pilotage de campagnes Social Ads et Search Ads" },
      { type: "image", src: "/images/sea2.PNG", caption: "Activation de leviers d’acquisition payants sur les plateformes sociales" },
      { type: "image", src: "/images/reporting.PNG", caption: "Production de reportings de performance post-campagne" },
      { type: "image", src: "/images/reporting2.PNG", caption: "Analyse et reporting des performances des campagnes d’acquisition payantes" },
      { type: "image", src: "/images/bdd.PNG", caption: "Gestion et structuration de bases de données pour campagnes e-mailing" },
      { type: "image", src: "/images/bdd2.PNG", caption: "Exploitation des données clients pour personnalisation des campagnes e-mailing" },
      { type: "image", src: "/images/newsletterRPO.PNG", caption: "Conception et production de newsletters" },
      { type: "image", src: "/images/newsletterRPO2.PNG", caption: "Création de newsletters optimisées pour la conversion" },
    ],
  },
];

/* ========= ASPECT ========= */

const aspectClass: Record<NonNullable<Project["aspect"]>, string> = {
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

/* ========= PAGE ========= */

export default function ProjetsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Projet web</h1>
        <p className="text-muted-foreground">
          Projet web que j'ai pu réaliser pour l'obtention de ma certification en tant que développeur web & web mobile. Cliquez sur la carte pour ouvrir le site dans un nouvel onglet.
        </p>
      </header>

      <section aria-labelledby="grid-projets">
        <h2 id="grid-projets" className="sr-only">
          Grille de projets
        </h2>

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
                         focus-visible:ring-2 focus-visible:ring-primary-500/45
                         focus-visible:ring-offset-2 ring-offset-background"
            >
              <div className={`relative ${aspectClass[p.aspect ?? "16/10"]}`}>
                <Image
                  src={p.imageSrc}
                  alt={p.imageAlt || p.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-500 ease-out
                             group-hover:scale-[1.02] group-hover:brightness-105"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]
                                bg-gradient-to-t from-primary-950/70 via-primary-900/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 space-y-2
                                bg-primary-950/40 backdrop-blur-[2px]">
                  <h3 className="text-lg font-semibold text-primary-foreground drop-shadow">
                    {p.title}
                    <ExternalLink className="ml-2 inline-block h-4 w-4 align-[-2px]" />
                  </h3>
                  {p.description && (
                    <p className="text-primary-foreground/90 text-sm line-clamp-2">
                      {p.description}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Réalisations professionnelles</h2>
        <p className="text-muted-foreground">
          Travaux réalisés dans le cadre de mes expériences professionnelles.
        </p>
        <WorksGrid works={proWorks} />
      </section>
    </div>
  );
}
