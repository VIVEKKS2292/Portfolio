/**
 * SectionScrollController
 *
 * Architecture:
 * ─────────────────────────────────────────────────────────────────────────
 *  • One outer "viewport container" is position:fixed, covers the full
 *    screen, and has overflow:hidden.
 *
 *  • Inside it is a "track" containing all sections stacked vertically.
 *    GSAP animates the track's `y` offset upward as activeIndex increases.
 *
 *  • Each section occupies exactly 100dvh × 100vw.
 *    Sections with content that might overflow get `overflow-y:auto` and
 *    the [data-scroll-panel] attribute so the useScrollNav hook can detect
 *    inner scrollability before advancing to the next slide.
 *
 *  • On mobile (≤ 768 px) the pinned experience is disabled; the page
 *    falls back to normal scrolling so content stays accessible.
 *
 *  • prefers-reduced-motion: transitions are instant (duration 0).
 *
 * Cleanup:
 *  GSAP kills its tweens on unmount / resize so there are no leaks.
 * ─────────────────────────────────────────────────────────────────────────
 */

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import gsap from 'gsap';
import { useScrollNav } from '../../hooks/useScrollNav';
import SectionDots from '../SectionDots/SectionDots';
import { ScrollNavContext } from '../../hooks/ScrollNavContext';

/* ── Section registry ────────────────────────────────────────────────────── */
export interface SectionDef {
  id: string;
  label: string;
  /** If true, the section content is taller than the viewport and needs inner scroll */
  allowInnerScroll?: boolean;
  element: React.ReactNode;
}

interface Props {
  sections: SectionDef[];
  /** Extra content to render outside the section track (e.g. Footer) */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

/* ── Mobile breakpoint ───────────────────────────────────────────────────── */
const MOBILE_BP = 768;

function checkIsMobile() {
  return typeof window !== 'undefined' ? window.innerWidth < MOBILE_BP : false;
}

export default function SectionScrollController({ sections, footer, children }: Props) {
  const [isMobileView, setIsMobileView] = useState(checkIsMobile);
  const total = sections.length + (footer ? 1 : 0);

  const { activeIndex, navigateTo, reducedMotion } = useScrollNav({
    total,
    threshold: 30,
    cooldown: 1100,
  });

  /* refs */
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  /* ── Section label counter for progress display ───────────────────────── */
  const isFooterActive = footer && activeIndex === sections.length;
  const currentLabel = isFooterActive ? 'CREDITS' : sections[activeIndex]?.label ?? '';

  /* ── GSAP slide transition ────────────────────────────────────────────── */
  const slide = useCallback(
    (index: number) => {
      if (!trackRef.current || isMobileView) return;

      const targetY = -(index * window.innerHeight);
      const duration = reducedMotion ? 0 : 0.85;
      const ease = reducedMotion ? 'none' : 'power3.inOut';

      tweenRef.current?.kill();
      tweenRef.current = gsap.to(trackRef.current, {
        y: targetY,
        duration,
        ease,
        overwrite: true,
      });
    },
    [isMobileView, reducedMotion]
  );

  /* Slide whenever activeIndex changes */
  useEffect(() => {
    slide(activeIndex);
  }, [activeIndex, slide]);

  /* ── Resize handler ───────────────────────────────────────────────────── */
  useEffect(() => {
    let raf: number;
    const handleResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const mobileNow = checkIsMobile();
        setIsMobileView(mobileNow);

        if (mobileNow) {
          if (trackRef.current) {
            gsap.set(trackRef.current, { y: 0 });
          }
        } else {
          if (trackRef.current) {
            const targetY = -(activeIndex * window.innerHeight);
            gsap.set(trackRef.current, { y: targetY });
          }
        }
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(raf);
    };
  }, [activeIndex]);

  /* ── Kill GSAP tween on unmount ─────────────────────────────────────────*/
  useEffect(() => {
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  const isDesktop = !isMobileView;
  const sectionIds = sections.map((s) => s.id);
  if (footer) {
    sectionIds.push('footer');
  }

  const ariaLabel = `Section ${activeIndex + 1} of ${total}: ${currentLabel}`;

  return (
    <ScrollNavContext.Provider value={{ activeIndex, navigateTo, sectionIds }}>
      {/* Global overlays like ScrollProgress & Navbar */}
      {children}

      {/* ── Fixed viewport container ─────────────────────────────────────*/}
      <div
        ref={viewportRef}
        style={{
          position: isDesktop ? 'fixed' : 'relative',
          inset: isDesktop ? 0 : undefined,
          overflow: isDesktop ? 'hidden' : undefined,
          height: isDesktop ? '100dvh' : 'auto',
          width: '100vw',
          zIndex: 10,
        }}
        aria-live="polite"
        aria-atomic="true"
        aria-label={ariaLabel}
      >
        {/* ── Section track (moves upward) ───────────────────────────────*/}
        <div
          ref={trackRef}
          style={{
            willChange: isDesktop ? 'transform' : undefined,
          }}
        >
          {sections.map((section, i) => (
            <div
              key={section.id}
              id={section.id}
              data-section-index={i}
              style={{
                height: isDesktop ? '100dvh' : 'auto',
                width: '100vw',
                overflow: isDesktop && section.allowInnerScroll ? 'hidden' : undefined,
                position: 'relative',
              }}
            >
              {/* Inner scroll panel — only created when content may overflow */}
              {isDesktop && section.allowInnerScroll ? (
                <div
                  data-scroll-panel
                  style={{
                    height: '100%',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  {section.element}
                </div>
              ) : (
                section.element
              )}
            </div>
          ))}

          {/* Footer as final full section */}
          {footer && (
            <div
              id="footer"
              data-section-index={sections.length}
              style={{
                height: isDesktop ? '100dvh' : 'auto',
                width: '100vw',
                overflow: isDesktop ? 'hidden' : undefined,
                position: 'relative',
              }}
            >
              {isDesktop ? (
                <div
                  data-scroll-panel
                  style={{
                    height: '100%',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  {footer}
                </div>
              ) : (
                footer
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Section dot nav (desktop only) ──────────────────────────────*/}
      {isDesktop && (
        <SectionDots
          sections={
            footer
              ? [...sections, { id: 'footer', label: 'CREDITS' }]
              : sections
          }
          activeIndex={activeIndex}
          onNavigate={navigateTo}
        />
      )}

      {/* ── Section counter HUD ─────────────────────────────────────────*/}
      {isDesktop && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            bottom: 28,
            left: 28,
            zIndex: 200,
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 10,
            letterSpacing: '0.2em',
            color: 'var(--text-muted)',
            pointerEvents: 'none',
            transition: 'opacity 0.3s ease',
          }}
        >
          {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      )}
    </ScrollNavContext.Provider>
  );
}
