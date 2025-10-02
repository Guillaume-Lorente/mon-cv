'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getNeighbors } from "@/lib/routes";

export function PageArrows() {
  const pathname = usePathname();
  const { prev, next } = getNeighbors(pathname || "/");

  const base =
    "hidden md:flex items-center justify-center h-10 w-10 rounded-full border transition" +
    " bg-primary-700/90 text-primary-foreground border-primary-800 hover:bg-primary-600/90 shadow";

  return (
    <>
      <Link
        href={prev}
        aria-label="Page précédente"
        className={`${base} fixed left-3 top-1/2 -translate-y-1/2 z-40`}
      >
        <ChevronLeft className="h-5 w-5" />
      </Link>
      <Link
        href={next}
        aria-label="Page suivante"
        className={`${base} fixed right-3 top-1/2 -translate-y-1/2 z-40`}
      >
        <ChevronRight className="h-5 w-5" />
      </Link>
    </>
  );
}