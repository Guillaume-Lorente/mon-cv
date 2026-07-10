import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { ProjectCard } from '@/components/project-card';
import { QuickFacts } from '@/components/quick-facts';

const featured = [
  { title: 'Villas Grande Anse', description: 'Site web de location de villas en Guadeloupe.', tags: ['Next.js', 'Express.js', 'Tailwind', 'PostgreSQL', 'SEO'], href: 'https://www.villas-grande-anse.com/', imageSrc: '/images/villas-grande-anse.png', imageAlt: 'Accueil du site web Villas Grande Anse' },
  { title: 'Moniteur de ski Tignes / Val d\'Isère', description: 'Site web de promotion pour moniteur de ski.', tags: ['Next.js', 'Tailwind', 'SEO', 'i18n'], href: 'https://alexandre-lorente.vercel.app/fr', imageSrc: '/images/alex.png', imageAlt: 'Accueil du site web Alexandre Lorente' },
  { title: 'Wedding & Event Planner', description: 'Site web d\'organisation d\'événements.', tags: ['Next.js', 'Tailwind', 'SEO'], href: 'https://www.evenementiels-en-lumieres.fr/', imageSrc: '/images/evenementiels.png', imageAlt: 'Accueil du site web Événementiels en Lumieres' },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <QuickFacts />

      <section aria-labelledby="featured-projects">
        <h2 id="featured-projects" className="text-2xl font-bold mb-4 text-foreground">
          Projets en avant
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Guillaume Lorente — Marketing digital, Communication, Développement web',
  description: 'Portfolio, compétences et projets.',
};