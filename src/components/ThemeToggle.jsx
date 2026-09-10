import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ className = '', style = {} }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('sibermu_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('theme-dark');
      document.documentElement.classList.remove('theme-light');
    } else {
      document.documentElement.classList.add('theme-light');
      document.documentElement.classList.remove('theme-dark');
    }
  }, []);

  const toggleTheme = (event) => {
    const doToggle = () => {
      const nextDark = !isDark;
      setIsDark(nextDark);

      if (nextDark) {
        document.documentElement.classList.add('theme-dark');
        document.documentElement.classList.remove('theme-light');
        localStorage.setItem('sibermu_theme', 'dark');
      } else {
        document.documentElement.classList.add('theme-light');
        document.documentElement.classList.remove('theme-dark');
        localStorage.setItem('sibermu_theme', 'light');
      }
    };

    // Circular reveal transition API check (DonasiTrust mechanism)
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      doToggle();
      return;
    }

    const rect = event && event.currentTarget ? event.currentTarget.getBoundingClientRect() : null;
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.classList.add('is-theme-switching');

    const transition = document.startViewTransition(() => {
      doToggle();
    });

    transition.ready.then(() => {
      const animation = document.documentElement.animate(
        [
          { clipPath: `circle(0px at ${x}px ${y}px)` },
          { clipPath: `circle(${endRadius}px at ${x}px ${y}px)` }
        ],
        {
          duration: 450,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      );

      animation.finished.finally(() => {
        document.documentElement.classList.remove('is-theme-switching');
      });
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
      aria-label={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
      style={style}
      className={`bubble theme-toggle-bubble cursor-pointer pointer-events-auto flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md ${className}`}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-[#D4A017] animate-pulse stroke-[2.2]" />
      ) : (
        <Moon className="h-5 w-5 text-[#0091CF] stroke-[2.2]" />
      )}
    </button>
  );
}
