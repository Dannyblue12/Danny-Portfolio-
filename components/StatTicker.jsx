"use client";

import { useCallback, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { STATS } from "@/lib/content";

const INTERVAL = 4200;

export default function StatTicker() {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);

  const step = useCallback((delta) => {
    setIndex((i) => (i + delta + STATS.length) % STATS.length);
    setTick((t) => t + 1); // restarts the autoplay timer
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % STATS.length),
      INTERVAL
    );
    return () => clearInterval(timer);
  }, [tick]);

  return (
    <div className="hero-bar animate-on-load fade-up-delay-5">
      <div className="ticker-nav">
        <button
          className="circle-btn"
          aria-label="Previous stat"
          onClick={() => step(-1)}
        >
          <FaArrowLeft />
        </button>
        <button
          className="circle-btn"
          aria-label="Next stat"
          onClick={() => step(1)}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="ticker">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`ticker-item${i === index ? " is-on" : ""}`}
            aria-hidden={i !== index}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
