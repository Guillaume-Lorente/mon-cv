'use client';
import { useMemo, useState } from 'react';
import { Code2, Megaphone, ImageIcon, Music2, Wrench, Users } from 'lucide-react';
import { SkillTag } from '@/components/skill';

type Category = { title: string; groups: { title: string; items: string[] }[] };

export function SkillsExplorer({ categories }: { categories: Category[] }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [alpha, setAlpha] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const sel = new Set(selected);

    const cats = categories
      .filter((c) => !sel.size || sel.has(c.title))
      .map((c) => {
        let groups = c.groups
          .map((g) => {
            const items = g.items.filter(
              (it) =>
                !q ||
                it.toLowerCase().includes(q) ||
                g.title.toLowerCase().includes(q) ||
                c.title.toLowerCase().includes(q)
            );
            return { ...g, items };
          })
          .filter((g) => g.items.length > 0 || !q);

        if (alpha) {
          groups = groups
            .map((g) => ({ ...g, items: [...g.items].sort((a, b) => a.localeCompare(b)) }))
            .sort((a, b) => a.title.localeCompare(b.title));
        }
        return { ...c, groups };
      })
      .filter((c) => c.groups.length > 0 || !q);

    return cats;
  }, [categories, query, selected, alpha]);

  const allTitles = categories.map((c) => c.title);

  const iconByTitle = {
    'Développement web': Code2,
    'Marketing digital': Megaphone,
    'Logiciels de création visuelle': ImageIcon,
    'Logiciels de création audio': Music2,
    'Outils & workflow': Wrench,
    Collaboration: Users,
  } as const;

  return (
    <section className="space-y-4" aria-labelledby="skills-filter">
      <div className="grid gap-3 md:grid-cols-[1fr,auto,auto] items-center">
        <input
          type="search"
          placeholder="Rechercher une compétence…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          aria-label="Rechercher une compétence"
        />

        <div className="flex flex-wrap gap-2 md:justify-end">
          {allTitles.map((title) => {
            const active = selected.includes(title);
            return (
              <button
                key={title}
                onClick={() =>
                  setSelected((prev) => (active ? prev.filter((t) => t !== title) : [...prev, title]))
                }
                className={
                  active
                    ? 'rounded-md px-2 py-1 text-sm bg-primary-700 text-primary-foreground'
                    : 'rounded-md px-2 py-1 text-sm bg-primary-50 text-primary-900 hover:bg-primary-100'
                }
                aria-pressed={active}
              >
                {title}
              </button>
            );
          })}
        </div>

        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" checked={alpha} onChange={(e) => setAlpha(e.target.checked)} />
          Trier A→Z
        </label>
      </div>

      <div className="space-y-10">
        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground">Aucun résultat.</p>
        ) : (
          filtered.map((c) => {
            const Icon = (iconByTitle as any)[c.title] ?? null;
            return (
              <section key={c.title} className="space-y-4">
                <h2 className="flex items-center gap-2 text-xl font-semibold">
                  {Icon && (
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary-50 text-primary-800">
                      <Icon className="h-4 w-4" />
                    </span>
                  )}
                  {c.title}
                </h2>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {c.groups.map((g) => (
                    <div key={g.title} className="rounded-xl border bg-card p-4">
                      <h3 className="mb-2 font-medium">{g.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {g.items.map((item) => (
                          <SkillTag key={item}>{item}</SkillTag>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })
        )}
      </div>
    </section>
  );
}
