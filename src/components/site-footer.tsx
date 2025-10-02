import Link from "next/link";
import { siteConfig } from "@/lib/seo";

export function SiteFooter() {
  return (
    <footer className="border-t border-primary-800 bg-primary-700 text-primary-foreground">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>

        <nav className="flex items-center gap-4">
          <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" prefetch={false} className="transition-colors text-white hover:text-primary-400">GitHub</Link>
          <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" prefetch={false} className="transition-colors text-white hover:text-primary-400">LinkedIn</Link>
          <Link href={siteConfig.links.email} className="transition-colors text-white hover:text-primary-400">Email</Link>
        </nav>
      </div>
    </footer>
  );
}
