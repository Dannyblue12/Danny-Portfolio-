"use client";

import { useEffect, useRef, useState } from "react";

const HEADER_GAP = 12;

/**
 * Scrolls using offsetTop rather than getBoundingClientRect, because the
 * reveal animations apply a transform that would otherwise skew the target.
 */
export function scrollToHash(hash) {
  const target = document.querySelector(hash);
  if (!target) return;
  const header = document.querySelector(".main-header");
  let top = 0;
  for (let node = target; node; node = node.offsetParent) top += node.offsetTop;
  top -= (header?.offsetHeight || 0) + HEADER_GAP;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
}

/** Highlights the nav link for whichever section is in view. */
export function useActiveSection(hashes) {
  const [active, setActive] = useState(hashes[0]);

  useEffect(() => {
    const sections = hashes
      .map((h) => document.querySelector(h))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [hashes.join(",")]); // eslint-disable-line react-hooks/exhaustive-deps

  return active;
}

/** Adds `visible` / `in` once an element scrolls into view, then stops watching. */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const targets = [
      ...node.querySelectorAll(".scroll-animate, [data-reveal]"),
    ];
    if (node.matches?.(".scroll-animate, [data-reveal]")) targets.push(node);

    targets.forEach((group) => {
      if (group.hasAttribute("data-reveal")) {
        Array.from(group.children).forEach((child, i) => {
          child.style.transitionDelay = `${i * 80}ms`;
        });
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(
            entry.target.hasAttribute("data-reveal") ? "in" : "visible"
          );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}
