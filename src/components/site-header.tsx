'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/parcours', label: 'Parcours' },
  { href: '/competences', label: 'Compétences' },
  { href: '/projets', label: 'Réalisations' },
  { href: '/centres-interets', label: 'Centres d’intérêts' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
  cn(
    "px-3 py-2 rounded-md text-sm transition-colors",
    "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-600/60",
    pathname === href && "bg-primary-600 text-primary-foreground" // ← actif (desktop)
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-800 bg-primary-700/95 text-primary-foreground backdrop-blur">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-white">
          Guillaume Lorente
        </Link>

        {/* Desktop */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((l) => (
                <NavigationMenuItem key={l.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={l.href}
                      className={linkClasses(l.href)}
                      aria-current={pathname === l.href ? 'page' : undefined}
                    >
                      {l.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden text-primary-foreground hover:bg-primary-600/60"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
  <nav className="grid gap-2 mt-6">
    {links.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          "px-3 py-2 rounded-md text-base transition-colors",
          "hover:bg-primary-50",
          pathname === link.href && "bg-primary-100 text-primary-900"
        )}
        aria-current={pathname === link.href ? "page" : undefined}
      >
        {link.label}
      </Link>
    ))}
  </nav>
</SheetContent>

        </Sheet>
      </div>
    </header>
  );
}
