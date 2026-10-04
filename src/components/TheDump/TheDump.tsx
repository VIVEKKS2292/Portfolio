import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { experiments } from '../../data/experiments';

const statusColors: Record<string, string> = {
  BUILT: '#c8a96e',
  EXPERIMENTED: '#8a8580',
  RESEARCHED: '#6e8ac8',
  ABANDONED: '#4a4744',
  LEARNING: '#8ac86e',
};

export default function TheDump() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="dump"
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-[#1a1a1a]"
      aria-label="The Dump - notebook of experiments and ideas"
    >
      <div className="max-w-7xl mx-auto">
        <motion.span
          className="font-mono text-xs tracking-[0.25em] text-[#c8a96e] block mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          06 / DUMP
        </motion.span>

        <motion.h2
          className="font-display text-5xl md:text-7xl font-bold text-[#f0ede8] mb-4 leading-none"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          THE
          <br />
          <span className="text-[#c8a96e]">DUMP</span>
        </motion.h2>

        <motion.p
          className="font-body text-[#8a8580] text-base mb-16 max-w-lg"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          A working notebook. Things I tried, built, researched, or just poked at.
          Not everything is finished. Not everything needs to be.
        </motion.p>

        {/* Legend */}
        <motion.div
          className="flex flex-wrap gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          aria-label="Status legend"
        >
          {Object.entries(statusColors).map(([status, color]) => (
            <div key={status} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: color }} aria-hidden="true" />
              <span className="font-mono text-[10px] tracking-[0.15em] text-[#4a4744]">
                {status}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Masonry-like asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="bg-[#0a0a0a] p-6 md:p-8 cursor-pointer group hover:bg-[#111111] transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              onClick={() => setActiveId(activeId === exp.id ? null : exp.id)}
              role="button"
              aria-expanded={activeId === exp.id}
              aria-label={`${exp.name}: ${exp.description}`}
            >
              {/* Status dot */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: statusColors[exp.status] }}
                  aria-hidden="true"
                />
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#4a4744]">
                  {exp.status}
                </span>
              </div>

              <h3 className="font-display text-lg md:text-xl font-semibold text-[#f0ede8] mb-2 group-hover:text-[#c8a96e] transition-colors duration-300">
                {exp.name}
              </h3>

              <p className="font-body text-sm text-[#8a8580] mb-1">↓</p>
              <p className="font-body text-sm text-[#8a8580]">{exp.description}</p>

              <AnimatePresence>
                {activeId === exp.id && exp.detail && (
                  <motion.p
                    className="mt-4 font-body text-sm text-[#f0ede8]/70 leading-relaxed border-t border-[#1a1a1a] pt-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.detail}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
