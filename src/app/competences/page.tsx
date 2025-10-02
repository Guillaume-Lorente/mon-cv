import type { Metadata } from "next";
import { SkillsExplorer } from "@/components/skills-explorer";

export const metadata: Metadata = {
  title: "Compétences — Guillaume Lorente",
  description:
    "Développement web, marketing digital, création visuelle & audio, outils et workflow.",
};

type Category = { title: string; groups: { title: string; items: string[] }[] };

const categories: Category[] = [
  {
    title: "Développement web",
    groups: [
      {
        title: "Frontend",
        items: [
          "HTML • CSS",
          "TypeScript • JavaScript",
          "React • Next.js",
          "Tailwind CSS",
          "Framer Motion",
          "Accessibilité (ARIA) • SEO technique",
        ],
      },
      {
        title: "Backend",
        items: [
          "Node.js",
          "Express • APIs",
          "PostgreSQL • REST",
          "Auth (JWT / NextAuth)",
          "Tests (Jest / Thunder Client)",
        ],
      },
      {
        title: "Déploiement & hébergement",
        items: ["Vercel • IONOS VPS", "Docker (basics)", "CI/CD (GitHub Actions)"],
      },
    ],
  },
  {
    title: "Marketing digital",
    groups: [
      {
        title: "Community Management",
        items: ["Stratégie éditoriale", "Calendrier & planification", "Instagram • LinkedIn • X • META", "Modération & reporting"],
      },
      {
        title: "SEO",
        items: ["Technique (perf, maillage, balisage)", "On-page (contenu, méta)", "Search Console", "PageSpeed / Core Web Vitals"],
      },
      { title: "SEA / Ads", items: ["Google Ads (Search/Display)", "Meta Ads (bases)", "UTM & tracking"] },
      { title: "Analytics", items: ["GA4", "Pixels (Meta, LinkedIn)", "Tableaux de bord"] },
    ],
  },
  {
    title: "Logiciels de création visuelle",
    groups: [
      { title: "Suite Adobe", items: ["Photoshop", "Illustrator", "Lightroom", "Premiere Pro", "After Effects"] },
      { title: "Design produit", items: ["Figma", "Prototypage rapide", "Design system (bases)"] },
      { title: "Autres", items: ["Canva (rapide)"] },
    ],
  },
  {
    title: "Logiciels de création audio",
    groups: [
      { title: "Production", items: ["Ableton Live"] },
      { title: "Guitare & FX", items: ["BIAS FX"] },
      { title: "Mix / Enregistrement", items: ["Interfaces audio", "Micro / prise de son"] },
    ],
  },
  {
    title: "Outils & workflow",
    groups: [
      { title: "Code & versioning", items: ["Git • GitHub", "Conventions & PRs"] },
      { title: "Organisation", items: ["Trello/Jira (agile)"] },
      { title: "Qualité", items: ["ESLint • Prettier"] },
    ],
  },
  {
    title: "Collaboration",
    groups: [
      { title: "Méthodes", items: ["Agile (Scrum)"] },
      { title: "Communication", items: ["Rédaction technique", "Docs & handoff"] },
    ],
  },
];

export default function CompetencesPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Compétences</h1>
        <p className="mt-2 text-muted-foreground">
          Filtrez par catégorie, cherchez une compétence précise, et triez A→Z si besoin.
        </p>
      </header>

      <SkillsExplorer categories={categories} />
    </div>
  );
}
