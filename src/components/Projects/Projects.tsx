import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const selected = projects.filter((p) => p.type === 'selected');

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-[#1a1a1a]"
      aria-label="Selected projects"
    >
      <div className="max-w-7xl mx-auto">
        <motion.span
          className="font-mono text-xs tracking-[0.25em] text-[#c8a96e] block mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          04 / PROJECTS
        </motion.span>

        <motion.h2
          className="font-display text-4xl md:text-6xl font-bold text-[#f0ede8] mb-4 leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          SELECTED
          <br />
          <span className="text-[#c8a96e]">WORK</span>
        </motion.h2>

        <motion.p
          className="font-body text-[#8a8580] text-base mb-16 max-w-lg"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Things that I've built with my friends.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {selected.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
