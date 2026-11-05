"use client";

import { useEffect, useRef } from "react";

/**
 * A pool of green light that trails the cursor across the hero.
 *
 * The pointer position is eased toward on every frame rather than set
 * directly, so the light drifts after the cursor instead of snapping to
 * it. Skipped entirely for coarse pointers and for anyone who has asked
 * for reduced motion.
 */
export default function HeroAmbience() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const stage = node?.parentElement;
    if (!stage) return;

    const fine = window.matchMedia("(pointer: fine)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || still.matches) return;

    // start centred so the first move eases out from the middle
    let targetX = 0.5;
    let targetY = 0.45;
    let x = targetX;
    let y = targetY;
    let frame = 0;

    const onMove = (e) => {
      const r = stage.getBoundingClientRect();
      targetX = (e.clientX - r.left) / r.width;
      targetY = (e.clientY - r.top) / r.height;
    };

    const onEnter = () => stage.classList.add("is-pointing");
    const onLeave = () => stage.classList.remove("is-pointing");

    const tick = () => {
      x += (targetX - x) * 0.075;
      y += (targetY - y) * 0.075;
      node.style.setProperty("--mx", (x * 100).toFixed(2) + "%");
      node.style.setProperty("--my", (y * 100).toFixed(2) + "%");
      frame = requestAnimationFrame(tick);
    };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerenter", onEnter);
    stage.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerenter", onEnter);
      stage.removeEventListener("pointerleave", onLeave);
      stage.classList.remove("is-pointing");
    };
  }, []);

  return <span className="hero-cursor-glow" ref={ref} aria-hidden="true" />;
}
