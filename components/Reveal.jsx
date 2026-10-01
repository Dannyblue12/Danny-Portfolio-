"use client";

import { useReveal } from "./useSiteMotion";

/**
 * Client boundary for the scroll-reveal observer only. Children are passed
 * in from the server component, so every section below stays server-rendered
 * and ships no JavaScript of its own.
 */
export default function Reveal({ children }) {
  const ref = useReveal();
  return <main ref={ref}>{children}</main>;
}
