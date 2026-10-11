import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollNavContext } from '../../hooks/ScrollNavContext';

/* Maps nav link hrefs to section IDs (without the #) */
const navLinks = [
  { href: 'about',       label: 'ABOUT' },
  { href: 'work',        label: 'WORK' },
  { href: 'projects',    label: 'PROJECTS' },
  { href: 'experiments', label: 'EXPERIMENTS' },
  { href: 'dump',        label: 'DUMP' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { activeIndex, navigateTo, sectionIds } = useScrollNavContext();

  // On desktop, use context; on mobile (normal scroll), fall back to anchor
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const idx = sectionIds.indexOf(sectionId);
    if (idx !== -1) {
      navigateTo(idx);
    } else {
      // Mobile fallback — scroll into view
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const scrolled = activeIndex > 0;

  return (
    <>
      {/* Desktop nav */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-500 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div
          className={`mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'max-w-6xl backdrop-blur-md bg-[#0a0a0a]/80 rounded-full border border-[#1a1a1a] px-6 py-3'
              : 'max-w-7xl'
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="font-display font-semibold text-[#f0ede8] text-sm tracking-[0.2em] hover:text-[#c8a96e] transition-colors duration-300"
            aria-label="Vivek K Saklathi - Home"
          >
            VIVEK
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const idx = sectionIds.indexOf(link.href);
              const isActive = idx !== -1 && idx === activeIndex;
              return (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-mono text-xs tracking-[0.15em] transition-colors duration-300"
                  style={{
                    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Resume button */}
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-[#c8a96e] border border-[#c8a96e]/30 px-4 py-2 rounded hover:bg-[#c8a96e]/10 transition-all duration-300"
            >
              RESUME
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={`block w-5 h-px bg-[#f0ede8] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-px bg-[#f0ede8] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-[#f0ede8] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[140] bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-display text-3xl font-light tracking-[0.1em] text-[#8a8580] hover:text-[#f0ede8] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm tracking-[0.15em] text-[#c8a96e] border border-[#c8a96e]/30 px-6 py-3 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              RESUME
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
