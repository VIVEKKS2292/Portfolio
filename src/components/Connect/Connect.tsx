import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vivek-k-saklathi-019156229', description: 'Professional' },
  { label: 'GitHub', href: 'https://github.com/VIVEKKS2292', description: 'Code' },
  { label: 'Email', href: 'mailto:vivek.k.saklathi@gmail.com', description: 'Direct' },
  { label: 'Resume', href: '/resume.pdf', description: 'PDF' },
];

export default function Connect() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-24 md:py-36 px-6 md:px-12 bg-[#0a0a0a] border-t border-[#1a1a1a]"
      aria-label="Contact and social links"
    >
      <div className="max-w-7xl mx-auto">
        <motion.span
          className="font-mono text-xs tracking-[0.25em] text-[#c8a96e] block mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          08 / CONNECT
        </motion.span>

        <motion.h2
          className="font-display text-4xl md:text-6xl font-bold text-[#f0ede8] mb-6 leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          WHERE CAN
          <br />
          YOU FIND
          <br />
          <span className="text-[#c8a96e]">ME?</span>
        </motion.h2>

        <motion.p
          className="font-body text-[#8a8580] text-lg mb-16 max-w-md"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Pick a channel.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a]">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              download={link.label === 'Resume' ? 'Vivek_K_Saklathi_Resume.pdf' : undefined}
              className="group bg-[#0a0a0a] p-8 md:p-10 hover:bg-[#111111] transition-colors duration-300 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              aria-label={`${link.label} — ${link.description}`}
            >
              <span className="font-mono text-xs tracking-[0.15em] text-[#4a4744]">
                {link.description}
              </span>
              <span className="font-display text-2xl md:text-3xl font-semibold text-[#f0ede8] group-hover:text-[#c8a96e] transition-colors duration-300">
                {link.label}
              </span>
              <span
                className="font-mono text-xs text-[#4a4744] group-hover:text-[#c8a96e] transition-all duration-300 group-hover:translate-x-2"
                aria-hidden="true"
              >
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
