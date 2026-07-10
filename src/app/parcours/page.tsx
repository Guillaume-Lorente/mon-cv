import { Timeline, TimelineItem } from '@/components/timeline';


const items: TimelineItem[] = [
{ date: '2024 – 2025', title: 'Développeur web & web mobile', org: 'EPSI - École d\'ingénierie informatique', description: 'Développement Frontend (interface responsives), Développement Backend & APIs, Conception & gestion de bases de données, Intégration web & optimisation des performances' },
{ date: '2023 - 2024', title: 'Responsable de magasin de ski', org: 'Intersport Valfréjus', description: 'Management d\'équipe, Gestion des ventes, stocks & merchandising, Conseil client & optimisation de l\'expérience en magasin, Pilotage des objectifs commerciaux & reporting, Gestion des opérations commerciales digitales' },
{ date: '2020 – 2022', title: 'Assistant communication digitale', org: 'Rémi Perrier Organisation Grenoble - Festival Musilac', description: 'Gestion de projets de communication, Rédaction & diffusion de contenus, SEA' },
{ date: '2020 – 2022', title: 'MSc 2 Marketing Digital & E-business - Manager de la Communication et du Marketing Digital', org: 'INSEEC Groupe OMNES Education Chambéry', description: 'Stratégies digitales & E-business, Community management, Analyse de performance, Création & pilotage de contenu' },
{ date: '2019', title: 'Groupe Mission Relation Presse | Développement des retombées médiatiques de Saint Sorlin d\'Arves', org: 'Partenariat INSEEC/Domaine des Sybelles', description: '1er prix du concours, Rédiger un communiqué et un dossier de presse, Utiliser une valise média' },
{ date: '2019 – 2020', title: 'Bachelor Responsable International en Marketing Développement, Spécialité : Marketing Digital', org: 'INSEEC Groupe OMNES Education Chambéry', description: 'Communication interne/externe, Comportement de l\'omniconsommateur, Expérience utilisateur (UX/UI), Plan de communication, Stratégie et communication digitale' },
{ date: '2015 – 2018', title: 'DUT Gestion Administrative et Commerciale des Organisations option *Musique', org: 'Université Savoie Mont Blanc', description: 'Gestion Commerciale et négociation, E-commerce & E-Marketing, Management des activités artistiques, Droit des relations professionnelles, Stratégie des organisations' },
{ date: '2018', title: 'Assistant de Direction', org: 'Buddies Re-chords', description: 'Prospecter des lieux de diffusion, Gérer des plannings, Gérer des paiements d’Artistes Intermittents' },
{ date: '2018', title: 'Bénévole', org: 'Tour du Monde au Manège | Palais des Congrès', description: 'Accueillir & orienter les visiteurs' },
];


export default function ParcoursPage() {
return (
<div className="space-y-6">
<h1 className="text-3xl font-bold">Mon parcours</h1>
<Timeline items={items} />
</div>
);
}