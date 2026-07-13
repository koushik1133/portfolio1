"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="header" id="header">
      <nav className="navbar">
        <div className="logo">
          <Link href="/">
            <span className="logo-gradient">Koushik</span>
          </Link>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link 
              href="/" 
              className={`nav-link ${isActive("/") ? "active" : ""}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              href="/about" 
              className={`nav-link ${isActive("/about") ? "active" : ""}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              href="/experience" 
              className={`nav-link ${isActive("/experience") ? "active" : ""}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              href="/projects" 
              className={`nav-link ${isActive("/projects") ? "active" : ""}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              href="/education" 
              className={`nav-link ${isActive("/education") ? "active" : ""}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              href="/skills" 
              className={`nav-link ${isActive("/skills") ? "active" : ""}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              href="/contact" 
              className={`nav-link ${isActive("/contact") ? "active" : ""}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        
        <div className="theme-toggle">
          <button id="themeToggle" aria-label="Toggle dark/light theme">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
          </button>
        </div>
        
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
  );
}
