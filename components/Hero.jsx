"use client";

import Image from "next/image";
import { useEffect } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { PERSON } from "@/lib/seo";
import StatTicker from "./StatTicker";
import { scrollToHash } from "./useSiteMotion";
import portrait from "@/public/daniel-victor-udo.png";

export default function Hero() {
  // Kicks off the load choreography; the timeout is a safety net so a
  // stalled asset can never leave the hero invisible.
  useEffect(() => {
    const start = () => document.body.classList.add("loaded");
    const raf = requestAnimationFrame(start);
    const safety = setTimeout(start, 1600);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
    };
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    scrollToHash(href);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-stage">
        <span className="hero-glow" aria-hidden="true" />
        <span className="hero-glow hero-glow--b" aria-hidden="true" />

        <span className="hero-tag animate-on-load fade-up-delay-1">
          <em />
          {PERSON.role}
        </span>
        <span className="hero-rail animate-on-load fade-up-delay-1">
          {PERSON.name}
        </span>

        <div className="hero-lead">
          <h1>
            <span className="reveal-line">
              <span>Fullstack</span>
            </span>{" "}
            <span className="reveal-line">
              <span>
                Developer<i className="dot">.</i>
              </span>
            </span>
          </h1>
          <a
            href="#contact"
            className="hero-badge animate-on-load fade-up-delay-2"
            onClick={(e) => go(e, "#contact")}
          >
            <span className="badge-icon">
              <FaArrowRight />
            </span>
            <span className="badge-text">
              Available for<strong>New Projects</strong>
            </span>
          </a>
        </div>

        <div className="hero-figure">
          <span className="hero-halo" aria-hidden="true" />
          <Image
            className="hero-portrait"
            src={portrait}
            alt={`${PERSON.name}, ${PERSON.jobTitle}`}
            priority
            sizes="(max-width: 640px) 310px, (max-width: 1024px) 340px, 620px"
            placeholder="blur"
          />
        </div>

        <div className="hero-aside">
          <div className="hero-chip animate-on-load fade-up-delay-2">
            <span>Experience</span>
            <strong>5+ Yrs</strong>
          </div>
          <div className="hero-pitch animate-on-load fade-up-delay-4">
            <h2>Web, mobile, backend and AI products, built end to end</h2>
            <p>
              I help businesses and founders turn ideas into websites, mobile
              apps, backend systems and AI-powered products that solve real
              problems and create better experiences for their users.
            </p>
            <div className="hero-actions">
              <a href={PERSON.whatsapp} className="btn btn-primary">
                Let&apos;s Connect
              </a>
              <a
                href="#projects"
                className="btn-link"
                onClick={(e) => go(e, "#projects")}
              >
                View Work <FaArrowRight />
              </a>
            </div>
          </div>
        </div>

        <StatTicker />

        <a
          href="#about"
          className="hero-cue animate-on-load fade-up-delay-5"
          onClick={(e) => go(e, "#about")}
        >
          Scroll <FaArrowDown />
        </a>
      </div>
    </section>
  );
}
