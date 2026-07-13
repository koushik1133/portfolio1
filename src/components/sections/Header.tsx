"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="header" id="header">
        <nav className="navbar">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <span className="logo-gradient">Koushik</span>
            </Link>
          </div>

          {/* Desktop nav — lives INSIDE the pill header, hidden on mobile via CSS */}
          <ul className="nav-menu nav-menu-desktop">
            {NAV_LINKS.map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  className={`nav-link ${isActive(href) ? "active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <div className="theme-toggle">
            <button id="themeToggle" aria-label="Toggle dark/light theme">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
            </button>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
            id="navToggle"
            aria-label="Toggle navigation menu"
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>
      </header>

      {/*
        Mobile drawer — rendered OUTSIDE the fixed header to avoid Safari
        backdrop-filter stacking context bugs (position:fixed children of
        backdrop-filter parents can misbehave in older Safari).
      */}
      <ul className={`nav-menu nav-menu-mobile ${isMenuOpen ? "active" : ""}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <li className="nav-item" key={href}>
            <Link
              href={href}
              className={`nav-link ${isActive(href) ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {isMenuOpen && (
        <div className="nav-menu-overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </>
  );
}
