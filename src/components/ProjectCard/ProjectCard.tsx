import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';

interface Props {
  project: Project;
  index: number;
  inView: boolean;
}

const statusLabel: Record<Project['status'], string> = {
  complete: 'COMPLETE',
  'in-progress': 'IN PROGRESS',
  experimental: 'EXPERIMENTAL',
};

export default function ProjectCard({ project, index, inView }: Props) {
  return (
    <motion.article
      className="group border border-[#1a1a1a] hover:border-[#c8a96e]/25 transition-all duration-500 bg-[#0a0a0a]"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
      aria-label={`Project: ${project.name}`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.15em] text-[#4a4744]">
            {String(index + 1).padStart(2, '0')}
          </span>
          {project.status === 'in-progress' && (
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00c9a7] animate-pulse" aria-hidden="true" />
              <span className="font-mono text-[10px] tracking-[0.15em] text-[#00c9a7]">
                {statusLabel[project.status]}
              </span>
            </span>
          )}
          {project.status === 'complete' && (
            <span className="font-mono text-[10px] tracking-[0.15em] text-[#4a4744]">
              {statusLabel[project.status]}
            </span>
          )}
          {project.status === 'experimental' && (
            <span className="font-mono text-[10px] tracking-[0.15em] text-[#00c9a7]/70">
              {statusLabel[project.status]}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="font-display text-xl md:text-2xl font-semibold text-[#f0ede8] mb-3 leading-tight">
          {project.name}
        </h3>
        <p className="font-body text-[#8a8580] text-sm mb-6 leading-relaxed">
          {project.tagline}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] tracking-[0.12em] text-[#8a8580] border border-[#1a1a1a] px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Story */}
        <div className="space-y-4 mb-8">
          <div>
            <p className="font-mono text-[10px] tracking-[0.15em] text-[#c8a96e] mb-1.5">WHAT I BUILT</p>
            <p className="font-body text-[#8a8580] text-sm leading-relaxed">{project.what}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.15em] text-[#c8a96e] mb-1.5">WHY</p>
            <p className="font-body text-[#8a8580] text-sm leading-relaxed">{project.why}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.15em] text-[#c8a96e] mb-1.5">WHAT I LEARNED</p>
            <p className="font-body text-[#8a8580] text-sm leading-relaxed">{project.learned}</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[0.12em] text-[#8a8580] hover:text-[#c8a96e] transition-colors duration-300 flex items-center gap-2"
              aria-label={`View ${project.name} on GitHub`}
            >
              <span className="w-4 h-px bg-current" aria-hidden="true" />
              GITHUB
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[0.12em] text-[#8a8580] hover:text-[#c8a96e] transition-colors duration-300 flex items-center gap-2"
              aria-label={`View live demo of ${project.name}`}
            >
              <span className="w-4 h-px bg-current" aria-hidden="true" />
              LIVE DEMO
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
