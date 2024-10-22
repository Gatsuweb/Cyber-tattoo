'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/SvgAnimation.module.css';

export default function SvgAnimation() {
  const containerRef = useRef(null);

  // Suivre le scroll dans le conteneur
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end 0.25'],
  });

  // Animer chaque ligne du SVG avec le scroll
  const line1Length = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const line2Length = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const line3Length = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const line4Length = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <div className={styles.svgContainer} ref={containerRef}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 6110 9761"
        fill="none"
        width="200%"
        height="200vh"
      >
        {/* Première ligne */}
        <motion.line
          x1="5.56064"
          y1="2.04695"
          x2="6107.56"
          y2="4878.05"
          stroke="#b40000"
          strokeWidth="20"
          style={{ pathLength: line1Length }}  // Animation sur le scroll
        />

        {/* Deuxième ligne */}
        <motion.line
          y1="-2.5"
          x2="7810.88"
          y2="-2.5"
          transform="matrix(-0.781218 0.624258 0.624258 0.781218 6106 4)"
          stroke="#b40000"
          strokeWidth="20"
          style={{ pathLength: line2Length }}  // Animation sur le scroll
        />

        {/* Troisième ligne */}
        <motion.line
          x1="6107.56"
          y1="4881.95"
          x2="5.56072"
          y2="9758.95"
          stroke="#b40000"
          strokeWidth="20"
          style={{ pathLength: line3Length }}  // Animation sur le scroll
        />

        {/* Quatrième ligne */}
        <motion.line
          y1="-2.5"
          x2="7811.5"
          y2="-2.5"
          transform="matrix(0.781156 0.624336 0.624336 -0.781156 4 4880)"
          stroke="#b40000"
          strokeWidth="20"
          style={{ pathLength: line4Length }}  // Animation sur le scroll
        />
      </motion.svg>
    </div>
  );
}
