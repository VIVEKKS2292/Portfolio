import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { journeySteps } from '../../data/experience';

export default function Journey() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-[#1a1a1a]"
      aria-label="Career journey"
    >
      <div className="max-w-7xl mx-auto">
        <motion.span
          className="font-mono text-xs tracking-[0.25em] text-[#c8a96e] block mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          02 / JOURNEY
        </motion.span>

        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-[#f0ede8] mb-16 md:mb-24 leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          MY JOURNEY
        </motion.h2>

        {/* Journey path — cinematic vertical timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px bg-[#1a1a1a]"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
            style={{ originY: 0 }}
          />

          <div className="space-y-0">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.phase}
                className="relative pl-10 md:pl-16 pb-12 md:pb-16 group"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
              >
                {/* Dot on timeline */}
                <div className="absolute left-0 top-1 w-2 h-2 rounded-full border border-[#c8a96e] bg-[#0a0a0a] group-hover:bg-[#c8a96e] transition-colors duration-300 -translate-x-[3px]" />

                {/* Arrow between steps */}
                {i < journeySteps.length - 1 && (
                  <div className="absolute left-[-3px] top-8 text-[#4a4744] font-mono text-xs select-none" aria-hidden="true">
                    ↓
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-2">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-[#f0ede8] tracking-wide">
                    {step.phase}
                  </h3>
                  <span className="font-mono text-xs tracking-[0.15em] text-[#c8a96e]">
                    {step.label}
                  </span>
                </div>
                <p className="font-body text-[#8a8580] text-sm md:text-base leading-relaxed max-w-md">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
