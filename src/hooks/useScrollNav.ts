/**
 * useScrollNav
 *
 * Manages the active section index for the fixed-viewport scroll experience.
 * Handles:
 *   - Wheel / trackpad gesture detection with inertia filtering:
 *     Only triggers when an intentional gesture starts, then ignores continuous momentum
 *     events until scrolling ceases or the transition completes.
 *   - Touch gesture detection (swipe up → next, swipe down → prev)
 *   - Keyboard navigation (ArrowDown, ArrowUp, PageDown, PageUp, End, Home)
 *   - Direct jump via navigateTo()
 *   - prefers-reduced-motion awareness (returns reducedMotion flag)
 */

import { useCallback, useEffect, useRef, useState } from 'react';

interface UseScrollNavOptions {
  total: number;
  /** Minimum initial wheel delta required to trigger a slide (px) */
  threshold?: number;
  /** Cooldown in ms after a transition begins before another can fire */
  cooldown?: number;
}

interface UseScrollNavReturn {
  activeIndex: number;
  navigateTo: (index: number) => void;
  reducedMotion: boolean;
}

export function useScrollNav({
  total,
  threshold = 30,
  cooldown = 1100,
}: UseScrollNavOptions): UseScrollNavReturn {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Synchronous ref to prevent double triggers during state updates
  const activeIndexRef = useRef(0);
  // Timestamp when the last transition was triggered
  const lastTransitionTime = useRef(0);
  // Timestamp of the most recent wheel event (for momentum/inertia tracking)
  const lastWheelEventTime = useRef(0);
  // For touch: start Y position
  const touchStartY = useRef<number | null>(null);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const go = useCallback(
    (delta: number) => {
      const now = Date.now();
      if (now - lastTransitionTime.current < cooldown) return;

      const current = activeIndexRef.current;
      const next = Math.min(total - 1, Math.max(0, current + delta));
      if (next === current) return;

      lastTransitionTime.current = now;
      activeIndexRef.current = next;
      setActiveIndex(next);
    },
    [total, cooldown]
  );

  const navigateTo = useCallback(
    (index: number) => {
      const now = Date.now();
      const clamped = Math.min(total - 1, Math.max(0, index));
      if (clamped === activeIndexRef.current) return;

      lastTransitionTime.current = now;
      activeIndexRef.current = clamped;
      setActiveIndex(clamped);
    },
    [total]
  );

  // ── Wheel / trackpad ─────────────────────────────────────────────────────
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null;
      const panelContent = target?.closest('[data-scroll-panel]');

      if (panelContent) {
        const el = panelContent as HTMLElement;
        const atTop = el.scrollTop <= 0;
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
        const goingDown = e.deltaY > 0;
        const goingUp = e.deltaY < 0;

        // If inner panel can still scroll in this direction, let it scroll naturally
        if ((goingDown && !atBottom) || (goingUp && !atTop)) {
          return;
        }
      }

      e.preventDefault();

      const now = Date.now();
      const timeSinceLastWheel = now - lastWheelEventTime.current;
      lastWheelEventTime.current = now;

      // In cooldown from a previous section transition
      if (now - lastTransitionTime.current < cooldown) {
        return;
      }

      // If wheel events are firing rapidly in succession (< 80ms apart)
      // and we just came out of cooldown, ignore residual trackpad inertia
      if (timeSinceLastWheel < 70 && now - lastTransitionTime.current < cooldown + 200) {
        return;
      }

      // Check threshold for intentional scroll
      if (Math.abs(e.deltaY) >= threshold) {
        go(e.deltaY > 0 ? 1 : -1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [go, threshold, cooldown]);

  // ── Touch ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const target = e.target as HTMLElement | null;
      const panelContent = target?.closest('[data-scroll-panel]');

      const dy = touchStartY.current - e.changedTouches[0].clientY;
      touchStartY.current = null;

      if (Math.abs(dy) < 40) return; // ignore small accidental touches

      if (panelContent) {
        const el = panelContent as HTMLElement;
        const atTop = el.scrollTop <= 0;
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
        if ((dy > 0 && !atBottom) || (dy < 0 && !atTop)) return;
      }

      go(dy > 0 ? 1 : -1);
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [go]);

  // ── Keyboard ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      const panelContent = (e.target as HTMLElement)?.closest('[data-scroll-panel]');
      if (panelContent) {
        const el = panelContent as HTMLElement;
        if (
          (e.key === 'ArrowDown' || e.key === 'PageDown') &&
          el.scrollTop + el.clientHeight < el.scrollHeight - 1
        ) {
          return;
        }
        if (
          (e.key === 'ArrowUp' || e.key === 'PageUp') &&
          el.scrollTop > 0
        ) {
          return;
        }
      }

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          go(1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          go(-1);
          break;
        case 'End':
          e.preventDefault();
          navigateTo(total - 1);
          break;
        case 'Home':
          e.preventDefault();
          navigateTo(0);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [go, navigateTo, total]);

  return { activeIndex, navigateTo, reducedMotion };
}
