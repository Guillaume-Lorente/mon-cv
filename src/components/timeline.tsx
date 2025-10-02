export type TimelineItem = { date: string; title: string; org?: string; description?: string };


export function Timeline({ items }: { items: TimelineItem[] }) {
return (
<ol className="relative border-l pl-6">
{items.map((item, i) => (
<li key={i} className="mb-10 ml-4">
<div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 mt-1.5" />
<time className="text-xs text-muted-foreground">{item.date}</time>
<h3 className="text-lg font-semibold">{item.title}{item.org ? ` — ${item.org}` : ''}</h3>
{item.description && <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>}
</li>
))}
</ol>
);
}