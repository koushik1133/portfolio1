"use client";

import { useEffect } from "react";

export default function ClientLogic() {
  useEffect(() => {
    // Intersection Observer for animations
    const setupIntersectionObserver = () => {
      setTimeout(() => {
        const options = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        }, options);
        
        document.querySelectorAll('section, .timeline-item, .project-card, .skill-category').forEach(el => observer.observe(el));
      }, 100);
    };

    // Theme Switcher
    const initTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const body = document.querySelector('body');
      if (!body) return;

      body.classList.remove('dark-theme', 'light-theme');

      if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
      } else if (savedTheme === 'light') {
        body.classList.add('light-theme');
      } else if (prefersDarkScheme) {
        body.classList.add('dark-theme');
      } else {
        body.classList.add('light-theme');
      }
    };

    const handleThemeToggle = () => {
      const body = document.querySelector('body');
      if (!body) return;
      
      const isCurrentlyDark = body.classList.contains('dark-theme');
      if (isCurrentlyDark) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
      } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      }
    };

    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', handleThemeToggle);
    }

    const setActiveLink = () => {
      const sections = document.querySelectorAll('section[id]') as NodeListOf<HTMLElement>;
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (section.id && link.getAttribute('href') === `#${section.id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    setupIntersectionObserver();
    initTheme();
    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Initialize on load

    return () => {
      if (themeToggleBtn) {
        themeToggleBtn.removeEventListener('click', handleThemeToggle);
      }
      window.removeEventListener('scroll', setActiveLink);
    };
  }, []);

  return null;
}
