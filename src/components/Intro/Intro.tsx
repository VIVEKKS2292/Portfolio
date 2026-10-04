import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const lines = [
  { text: 'Software developer.', delay: 0 },
  { text: '', delay: 0 },
  { text: 'Currently building enterprise applications at Lennox India Technology Centre, Chennai.', delay: 0.15 },
  { text: '', delay: 0 },
  { text: 'Started as an intern. Moved to full-stack engineering.', delay: 0.3 },
  { text: 'Now owning production systems end-to-end.', delay: 0.4 },
  { text: '', delay: 0 },
  { text: 'Still figuring things out.', delay: 0.55 },
  { text: 'Still building things.', delay: 0.65 },
];

export default function Intro() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center py-24 px-6 md:px-12 bg-[#0a0a0a]"
      aria-label="About Vivek"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-center">
        {/* Left: Label */}
        <div>
          <motion.span
            className="font-mono text-xs tracking-[0.25em] text-[#c8a96e] block mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            01 / WHO
          </motion.span>
          <motion.h2
            className="font-display text-5xl md:text-6xl font-bold leading-none text-[#f0ede8]"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            SO,
            <br />
            <span className="text-[#c8a96e]">WHO</span>
            <br />
            AM I?
          </motion.h2>
        </div>

        {/* Right: Progressive text reveal */}
        <div className="space-y-4">
          {lines.map((line, i) =>
            line.text === '' ? (
              <div key={i} className="h-4" />
            ) : (
              <div key={i} className="overflow-hidden">
                <motion.p
                  className={`font-display leading-snug ${
                    i === 0
                      ? 'text-2xl md:text-3xl font-medium text-[#f0ede8]'
                      : i === 2
                      ? 'text-lg md:text-xl text-[#8a8580]'
                      : i === 4 || i === 5
                      ? 'text-lg text-[#8a8580]'
                      : 'text-xl md:text-2xl font-light text-[#f0ede8]'
                  }`}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: line.delay,
                    ease: [0.77, 0, 0.175, 1],
                  }}
                >
                  {line.text}
                </motion.p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
