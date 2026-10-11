import { useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useScrollNavContext } from '../../hooks/ScrollNavContext';

export default function ScrollProgress() {
  const { activeIndex, sectionIds } = useScrollNavContext();
  const total = sectionIds.length;
  const progressTarget = total > 1 ? activeIndex / (total - 1) : 0;

  const scaleX = useSpring(progressTarget, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const prevTargetRef = useRef(progressTarget);
  useEffect(() => {
    if (prevTargetRef.current !== progressTarget) {
      prevTargetRef.current = progressTarget;
      scaleX.set(progressTarget);
    }
  }, [progressTarget, scaleX]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[200] origin-left pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(to right, #c8a96e, #00c9a7)',
      }}
      aria-hidden="true"
    />
  );
}
