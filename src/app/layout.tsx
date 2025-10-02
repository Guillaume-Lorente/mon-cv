import './globals.css';
import { Inter } from 'next/font/google';
import { siteConfig } from '@/lib/seo';
import { SiteHeader } from '../components/site-header';
import { SiteFooter } from '../components/site-footer';
import type { Metadata } from 'next'
import { PageArrows } from "@/components/page-arrows";
import { SwipeNavigationListener } from "@/components/swipe-nav";
import { SwipeOnboarding } from '@/components/swipe-onboarding';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guillaume Lorente — CV & Portfolio',
  description: 'Développeur web full-stack — Portfolio, expériences, compétences et projets.',
  metadataBase: new URL('https://votre-domaine.dev'),
  openGraph: {
    type: 'website',
    url: 'https://votre-domaine.dev',
    siteName: 'Guillaume Lorente',
    title: 'Guillaume Lorente — CV & Portfolio',
    description: 'Développeur web full-stack — Portfolio, expériences, compétences et projets.',
  },
  twitter: {
    card: 'summary_large_image',
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="fr" suppressHydrationWarning>
<head />
<body className={`${inter.className} bg-background text-foreground min-h-dvh flex flex-col`}>
<SiteHeader />
<PageArrows />                {/* flèches desktop */}
<SwipeNavigationListener />   {/* swipe mobile */}
<SwipeOnboarding />
<main className="flex-1 container mx-auto px-4 py-8">{children}</main>
<SiteFooter />
</body>
</html>
);
}
