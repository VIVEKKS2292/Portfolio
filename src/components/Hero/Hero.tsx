import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const metadata = [
  'SIRSI, KARNATAKA',
  'JAVA / SPRING / REACT / TYPESCRIPT',
  'OCT 2026',
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vivek-k-saklathi-019156229',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/VIVEKKS2292',
    external: true,
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
    external: true,
  },
];

// Film-grain noise canvas overlay
function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255 * 0.04; // subtle grain
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
      animId = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen"
      aria-hidden="true"
    />
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const lineVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
  },
};

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a]"
      aria-label="Introduction"
    >
      <FilmGrain />

      {/* Subtle radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(200,169,110,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Main name */}
        <motion.div
          className="mb-6 md:mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={lineVariants}
              className="font-display font-bold text-[clamp(2.8rem,8vw,7rem)] leading-none tracking-[-0.02em] text-[#f0ede8]"
            >
              VIVEK K
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.span
              variants={lineVariants}
              className="font-display font-bold text-[clamp(2.8rem,8vw,7rem)] leading-none tracking-[-0.02em] text-[#c8a96e]"
            >
              SAKLATHI
            </motion.span>
          </div>
        </motion.div>

        {/* Role */}
        <motion.div
          className="overflow-hidden mb-10 md:mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="font-mono text-sm md:text-base tracking-[0.2em] text-[#8a8580] flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c9a7] animate-pulse flex-shrink-0" aria-hidden="true" />
            SOFTWARE DEVELOPER
          </p>
        </motion.div>

        {/* Description lines */}
        <motion.div
          className="mb-12 md:mb-16 space-y-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            'I build software.',
            'I experiment with ideas.',
            'I keep trying to get better.',
          ].map((line) => (
            <div key={line} className="overflow-hidden">
              <motion.p
                variants={lineVariants}
                className="font-display text-xl md:text-2xl font-light text-[#f0ede8]/80"
              >
                {line}
              </motion.p>
            </div>
          ))}
        </motion.div>

        {/* CTA links */}
        <motion.div
          className="flex flex-wrap gap-4 md:gap-6 mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={fadeVariants}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-3 font-mono text-sm tracking-[0.15em] text-[#8a8580] hover:text-[#f0ede8] transition-colors duration-300"
            >
              <span className="w-6 h-px bg-[#c8a96e] transition-all duration-300 group-hover:w-10" />
              {link.label.toUpperCase()}
            </motion.a>
          ))}
        </motion.div>

        {/* Metadata strip */}
        <motion.div
          className="flex flex-wrap gap-6 md:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {metadata.map((item) => (
            <span
              key={item}
              className="font-mono text-xs tracking-[0.2em] text-[#4a4744]"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-[#4a4744]">SCROLL</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-[#4a4744] to-transparent"
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
