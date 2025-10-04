import { Timeline, TimelineItem } from '@/components/timeline';


const items: TimelineItem[] = [
{ date: '2024 – 2025', title: 'Développeur web & web mobile', org: 'EPSI - Ecole d\'ingénierie informatique', description: 'Développement Frontend (interface responsives), Développement Backend & APIs, Conception & gestion de bases de données, Intégration web & optimisation des performances' },
{ date: '2024', title: 'Responsable de magasin de ski', org: 'Intersport Valfréjus', description: 'Management d\'équipe, Gestion des ventes, stocks & merchandising, Conseil client & optimisation de l\'expérience en magasin, Pilotage des objectifs commerciaux & reporting, Gestion des opérations commerciales digitales' },
{ date: '2023', title: 'Responsable de bar', org: 'Globe Trotter Valfréjus', description: 'Accueil & service client, Gestion du bar, Travail en équipe, Adaptation, Rapidité d\'exécution' },
{ date: '2020 – 2022', title: 'Assistant communication digitale', org: 'Rémi Perrier Organisation Grenoble', description: 'Gestion de projets de communication, Rédaction & diffusion de contenus, SEA' },
{ date: '2020 – 2022', title: 'MSc 2 Marketing Digital & E-business - Manager de la Communication et du Marketing Digital', org: 'INSEEC Groupe OMNES Education Chambéry', description: 'Stratégies digitales & E-business, Community management, Analyse de performance, Création & pilotage de contenu' },
];


export default function ParcoursPage() {
return (
<div className="space-y-6">
<h1 className="text-3xl font-bold">Mon parcours</h1>
<Timeline items={items} />
</div>
);
}