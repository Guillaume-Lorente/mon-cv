export const ROUTE_ORDER = [
  "/", "/parcours", "/competences", "/projets", "/centres-interets", "/contact",
] as const;

export type RoutePath = typeof ROUTE_ORDER[number];

export function getNeighbors(pathname: string) {
  const i = ROUTE_ORDER.indexOf(pathname as RoutePath);
  if (i === -1) return { prev: "/", next: "/parcours" }; // fallback
  const prev = ROUTE_ORDER[(i - 1 + ROUTE_ORDER.length) % ROUTE_ORDER.length];
  const next = ROUTE_ORDER[(i + 1) % ROUTE_ORDER.length];
  return { prev, next };
}