import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { ProjectCard } from '@/components/project-card';
import { QuickFacts } from '@/components/quick-facts';

const featured = [
  { title: 'Villas Grande Anse', description: 'Site web de location de villas en Guadeloupe.', tags: ['Next.js', 'Express.js', 'Tailwind', 'PostgreSQL', 'SEO'], href: 'https://www.villas-grande-anse.com/', imageSrc: '/villas-grande-anse.png', imageAlt: 'Accueil du site web Villas Grande Anse' },
  { title: 'Nation Sounds Festival', description: 'Site web mobile-first d\'un festival de musique.', tags: ['React', 'Node.js', 'PostgreSQL', 'i18n'], href: 'https://nation-sounds.alwaysdata.net/', imageSrc: '/nation-sounds.png', imageAlt: 'Accueil du site web Nation Sounds Festival' },
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