import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { experience } from '../../data/experience';

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  return (
    <section
      id="work"
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-[#1a1a1a]"
      aria-label="Professional experience"
    >
      <div className="max-w-7xl mx-auto">
        <motion.span
          className="font-mono text-xs tracking-[0.25em] text-[#c8a96e] block mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          03 / EXPERIENCE
        </motion.span>

        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-[#f0ede8] mb-4 leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          WHAT I
          <br />
          <span className="text-[#c8a96e]">ACTUALLY DO</span>
        </motion.h2>

        <motion.p
          className="font-body text-[#8a8580] text-base mb-16 max-w-lg"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Building enterprise applications at Lennox India Technology Centre.
        </motion.p>

        {/* Company header */}
        {experience.map((entry) => (
          <div key={entry.company} className="mb-16">
            <motion.div
              className="flex flex-col md:flex-row md:items-end gap-2 md:gap-8 mb-10 pb-4 border-b border-[#1a1a1a]"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#f0ede8]">
                {entry.company}
              </h3>
              <span className="font-mono text-xs tracking-[0.15em] text-[#4a4744]">
                {entry.location}
              </span>
            </motion.div>

            {/* Roles */}
            <div className="space-y-6">
              {entry.roles.map((role, i) => (
                <motion.div
                  key={role.title}
                  className="border border-[#1a1a1a] hover:border-[#c8a96e]/20 transition-colors duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                  onClick={() =>
                    setExpandedRole(expandedRole === role.title ? null : role.title)
                  }
                >
                  <div className="p-6 md:p-8 flex items-center justify-between">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                      <h4 className="font-display text-lg md:text-xl font-semibold text-[#f0ede8]">
                        {role.title}
                      </h4>
                      <span className="font-mono text-xs tracking-[0.15em] text-[#c8a96e]">
                        {role.period}
                      </span>
                    </div>
                    <motion.span
                      className="font-mono text-xs text-[#4a4744] ml-4"
                      animate={{ rotate: expandedRole === role.title ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {expandedRole === role.title && (
                      <motion.div
                        className="px-6 md:px-8 pb-6 md:pb-8 border-t border-[#1a1a1a]"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul className="mt-4 space-y-3">
                          {role.description.map((item) => (
                            <li key={item} className="flex gap-3 items-start">
                              <span className="text-[#c8a96e] mt-1 text-xs" aria-hidden="true">—</span>
                              <span className="font-body text-[#8a8580] text-sm md:text-base leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
