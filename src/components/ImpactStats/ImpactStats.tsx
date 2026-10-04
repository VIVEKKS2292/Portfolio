import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { impactStats } from '../../data/experience';

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState('0');
  const hasArrow = value.includes('→');

  useEffect(() => {
    if (!inView) return;
    if (hasArrow) {
      setDisplay(value);
      return;
    }

    // Extract numeric part
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ''));
    const suffix = value.replace(/[0-9.]/g, '');

    if (isNaN(numeric)) {
      setDisplay(value);
      return;
    }

    const duration = 1500;
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numeric);
      setDisplay(`${current}${suffix}`);

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value, hasArrow]);

  return <span>{display}</span>;
}

export default function ImpactStats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 px-6 md:px-12 bg-[#111111] border-y border-[#1a1a1a]"
      aria-label="Impact statistics"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="font-mono text-xs tracking-[0.25em] text-[#4a4744] mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          — THE NUMBERS
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-[#1a1a1a]">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="md:px-8 first:pl-0 last:pr-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <p className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-none ${i === impactStats.length - 1 ? 'text-[#00c9a7]' : 'text-[#c8a96e]'}`}>
                <AnimatedNumber value={stat.value} inView={inView} />
              </p>
              <p className="font-mono text-xs tracking-[0.15em] text-[#4a4744]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
