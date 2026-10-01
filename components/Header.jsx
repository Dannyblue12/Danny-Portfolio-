"use client";

import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { NAV } from "@/lib/content";
import { PERSON } from "@/lib/seo";
import { useActiveSection, scrollToHash } from "./useSiteMotion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV.map((n) => n.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollToHash(href);
  };

  return (
    <>
      <header className={`main-header${scrolled ? " scrolled" : ""}`}>
        <div className="header-container">
          <a href="#home" className="logo" onClick={(e) => go(e, "#home")}>
            <span className="logo-mark">D</span>
            <span className="logo-word">{PERSON.shortName}</span>
          </a>

          <nav className="main-nav" aria-label="Primary">
            <ul>
              {NAV.filter((n) => n.desktop !== false).map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className={active === n.href ? "active" : undefined}
                    onClick={(e) => go(e, n.href)}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <a href={PERSON.whatsapp} className="header-cta">
              Let&apos;s Talk
            </a>
            <button
              className="hamburger-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-nav" className={`mobile-nav${open ? " open" : ""}`}>
        <ul>
          {NAV.map((n, i) => (
            <li key={n.href}>
              <a
                href={n.href}
                className={active === n.href ? "active" : undefined}
                onClick={(e) => go(e, n.href)}
              >
                {n.mobileLabel || n.label}
                <span>{String(i + 1).padStart(2, "0")}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href={PERSON.whatsapp} className="mobile-cta">
          Let&apos;s Talk
        </a>
      </div>
    </>
  );
}
