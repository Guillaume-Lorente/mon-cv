import { Briefcase, Code2, MapPin, Languages, CalendarCheck, type LucideIcon } from "lucide-react";

type Fact = { icon: LucideIcon; label: string; value: string };

const facts: Fact[] = [
  { icon: Code2, label: "Spécialités", value: "Marketing Digital • Développement Web & Web Mobile" },
  { icon: MapPin, label: "Localisation", value: "Région Auvergne-Rhône-Alpes" },
  { icon: Languages, label: "Langues", value: "Français, Anglais" },
  { icon: CalendarCheck, label: "Disponibilité", value: "Recherche CDI/CDD/Free" },
];

export function QuickFacts() {
  return (
    <section aria-labelledby="en-bref" className="space-y-4">
      <h2 id="en-bref" className="text-2xl font-bold">En bref</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {facts.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-start gap-3 rounded-xl border bg-card p-4"
          >
            <div className="shrink-0 rounded-lg bg-primary-50 text-primary-800 p-2">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">{label}</div>
              <div className="font-medium text-foreground">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
