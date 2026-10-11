/**
 * ScrollNavContext
 *
 * Provides navigateTo and activeIndex to any descendant component
 * (e.g. Navbar) without prop-drilling.
 */

import { createContext, useContext } from 'react';

interface ScrollNavCtx {
  activeIndex: number;
  navigateTo: (index: number) => void;
  sectionIds: string[];
}

export const ScrollNavContext = createContext<ScrollNavCtx>({
  activeIndex: 0,
  navigateTo: () => {},
  sectionIds: [],
});

export function useScrollNavContext() {
  return useContext(ScrollNavContext);
}
