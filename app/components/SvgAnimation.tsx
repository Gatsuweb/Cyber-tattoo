'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/SvgAnimation.module.css';

export default function SvgAnimation() {
  const containerRef = useRef(null);

  // Suivre le scroll dans le conteneur
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transformer la progression du scroll en dessin progressif des lignes
  const verticalLine1Length = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
  const horizontalLineLength = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
  const verticalLine2Length = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

  return (
    <div className={styles.svgContainer} ref={containerRef}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8676 9753"
        fill="none"
        width="100%"
        height="100vh"
      >
        {/* Première ligne verticale */}
        <motion.line
          x1="2.5"
          y1="0"
          x2="2.5"
          y2="4876"
          stroke="white"
          strokeWidth="15"
          style={{
            pathLength: verticalLine1Length, // Animer la première ligne
          }}
        />

        {/* Ligne horizontale */}
        <motion.line
          y1="4873.5"
          x2="8671"
          y2="4873.5"
          stroke="white"
          strokeWidth="15"
          style={{
            pathLength: horizontalLineLength, // Animer la ligne horizontale
          }}
        />

        {/* Deuxième ligne verticale */}
        <motion.line
          x1="8673.5"
          y1="4876"
          x2="8673.5"
          y2="15000"  // Augmenter la valeur ici pour un scroll plus long
          stroke="white"
          strokeWidth="15"
          style={{
            pathLength: verticalLine2Length,
          }}
        />
      </motion.svg>
    </div>
  );
}
