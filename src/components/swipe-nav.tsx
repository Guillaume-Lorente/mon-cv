'use client';

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getNeighbors } from "@/lib/routes";

export function SwipeNavigationListener() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const { prev, next } = getNeighbors(pathname);
  const startX = useRef(0);
  const startY = useRef(0);
  const startT = useRef(0);

  useEffect(() => {
    function onStart(e: TouchEvent) {
      if (e.touches.length !== 1) return;
      const t = e.touches[0];
      startX.current = t.clientX;
      startY.current = t.clientY;
      startT.current = Date.now();
    }
    function onEnd(e: TouchEvent) {
      const t = Date.now() - startT.current;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - startX.current;
      const dy = touch.clientY - startY.current;

      // conditions: geste rapide-ish, horizontal dominant, seuil distance
      if (t < 600 && Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0) router.push(next); // swipe gauche → page suivante
        else router.push(prev);        // swipe droite → page précédente
      }
    }

    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [next, prev, router]);

  return null;
}