import { motion } from 'framer-motion';

const credits = [
  'Java',
  'Spring Boot',
  'React',
  'TypeScript',
  'and an unreasonable amount of curiosity.',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-[#1a1a1a]"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* Film credits style */}
        <div className="mb-16 md:mb-24 text-center">
          <motion.p
            className="font-mono text-xs tracking-[0.3em] text-[#4a4744] mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            — ROLL CREDITS —
          </motion.p>

          <motion.h2
            className="font-display text-4xl md:text-6xl font-bold text-[#f0ede8] mb-4 leading-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            VIVEK K SAKLATHI
          </motion.h2>

          <motion.p
            className="font-mono text-sm tracking-[0.2em] text-[#8a8580] mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            SOFTWARE DEVELOPER
          </motion.p>

          <motion.div
            className="space-y-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <p className="font-body text-[#4a4744] text-sm">Built with:</p>
            {credits.map((credit) => (
              <p key={credit} className="font-display text-[#8a8580] text-base">
                {credit}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[#1a1a1a]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.15em] text-[#4a4744]">
            THE END? · {year}
          </p>

          <p className="font-mono text-xs tracking-[0.15em] text-[#4a4744]">
            Designed & built by Vivek.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
