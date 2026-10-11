/**
 * SectionDots
 *
 * Vertical pill indicator on the right edge.
 * Active dot grows; clicking / pressing navigates directly to that section.
 */



interface SectionDotsProps {
  sections: { id: string; label: string }[];
  activeIndex: number;
  onNavigate: (index: number) => void;
}

export default function SectionDots({
  sections,
  activeIndex,
  onNavigate,
}: SectionDotsProps) {
  return (
    <nav
      className="fixed right-5 top-1/2 -translate-y-1/2 z-[200] flex flex-col gap-3 items-center"
      aria-label="Section navigation"
    >
      {sections.map((section, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={section.id}
            onClick={() => onNavigate(i)}
            aria-label={`Go to section: ${section.label}`}
            aria-current={isActive ? 'true' : undefined}
            title={section.label}
            style={{
              width: isActive ? 3 : 2,
              height: isActive ? 24 : 8,
              background: isActive ? 'var(--accent)' : 'var(--text-muted)',
              borderRadius: 999,
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'height 0.35s cubic-bezier(0.77,0,0.175,1), background 0.35s ease, width 0.35s ease',
              outline: 'none',
            }}
            onFocus={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                '0 0 0 2px var(--accent)')
            }
            onBlur={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow = 'none')
            }
          />
        );
      })}
    </nav>
  );
}
