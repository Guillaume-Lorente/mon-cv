import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  description: string;
  tags: string[];
  href?: string;       // lien externe
  imageSrc?: string;   // /public/...
  imageAlt?: string;
};

export function ProjectCard({ title, description, tags, href, imageSrc, imageAlt }: Props) {
  const Inner = (
    <Card className="group overflow-hidden rounded-xl border bg-card text-card-foreground p-0 pb-px transition hover:border-primary-300 hover:shadow-sm active:border-primary-400">

      {imageSrc && (
        <div className="relative aspect-[16/9] -mt-px">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            className="object-cover transition duration-300 ease-out
                       group-hover:scale-[1.02] group-hover:brightness-105"
          />
        </div>
      )}

      <CardHeader>
        <CardTitle className="transition group-hover:text-primary-800">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-primary-50 text-primary-900">
              {t}
            </span>
          ))}
        </div>
        {href && (
          <div className="mt-4 text-sm opacity-0 transition group-hover:opacity-100">
            Voir le projet
          </div>
        )}
      </CardContent>
    </Card>
  );

  return href ? (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Ouvrir « ${title} » (nouvel onglet)`}
      className="block focus:outline-none"
    >
      {Inner}
    </Link>
  ) : (
    Inner
  );
}
