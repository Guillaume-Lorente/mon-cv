'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
          Bonjour et bienvenue sur mon espace professionnel
        </h1>
        <Badge className="mt-3 bg-primary-100 text-primary-900 border border-primary-200">
  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary-700 animate-pulse" />
  Ouvert aux opportunités
</Badge>
        <p className="mt-4 text-muted-foreground">
          Une approche 360° du numérique : développement web & web mobile, communication et marketing digital.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/projets">Voir mes projets</Link>
          </Button>
          <Button
            asChild
          >
            <Link href="/contact">Me contacter</Link>
          </Button>
          <Button asChild>
  <a href="/cvGuillaumeLorente.pdf" download>
    Télécharger mon CV
  </a>
</Button>

        </div>
      </motion.div>

      <motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
  className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl border overflow-hidden bg-card max-h-[50vh] w-full"
>
  <Image
    src="/images/photo-pro.png"
    alt="Photo de présentation"
    fill
    priority
    sizes="(min-width:768px) 50vw, 100vw"
    className="object-cover"
    style={{ objectPosition: 'center 20%' }}
  />
</motion.div>

    </section>
  );
}
