import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const journey = [
  {
    place: 'SIRSI',
    region: 'KARNATAKA',
    role: 'Origin',
    detail: 'Ave Mariya School\nMES PU College',
  },
  {
    place: 'DHARWAD',
    region: 'KARNATAKA',
    role: 'Engineering',
    detail: 'SDM College of Engineering and Technology\nB.E. Computer Science and Engineering\nCGPA: 8.35 · 2021 → 2025',
  },
  {
    place: 'CHENNAI',
    region: 'TAMIL NADU',
    role: 'Software Engineering',
    detail: 'Lennox India Technology Centre\nBuilding enterprise software.',
  },
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 bg-[#111111] border-t border-[#1a1a1a]"
      aria-label="Origin and education"
    >
      <div className="max-w-7xl mx-auto">
        <motion.span
          className="font-mono text-xs tracking-[0.25em] text-[#c8a96e] block mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          07 / ORIGIN
        </motion.span>

        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-[#f0ede8] mb-16 leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          EDUCATION
          <br />
          <span className="text-[#c8a96e]">/ ORIGIN</span>
        </motion.h2>

        {/* Journey path */}
        <div className="relative max-w-xl">
          {journey.map((stop, i) => (
            <motion.div
              key={stop.place}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
            >
              <div className="mb-2">
                <span className="font-display text-3xl md:text-4xl font-bold text-[#f0ede8] block leading-none">
                  {stop.place}
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-[#4a4744]">
                  {stop.region}
                </span>
              </div>

              {stop.detail && (
                <p className="font-body text-sm text-[#8a8580] leading-relaxed mb-2 whitespace-pre-line">
                  {stop.detail}
                </p>
              )}

              {i < journey.length - 1 && (
                <div className="flex flex-col items-start my-6 pl-2">
                  <motion.div
                    className="w-px h-8 bg-gradient-to-b from-[#c8a96e] to-[#1a1a1a]"
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
                    style={{ originY: 0 }}
                  />
                  <span className="font-mono text-xs text-[#4a4744] mt-1">↓</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
