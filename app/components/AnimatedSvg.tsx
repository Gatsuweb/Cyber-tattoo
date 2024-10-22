import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedSvg = () => {
  const { scrollYProgress } = useScroll();

  // Rendre l'animation plus rapide en limitant le range de la progression du scroll
  const pathLength = useTransform(scrollYProgress, [0, 0], [0, 1], { clamp: true });


  return (
<div> {/* Assure une petite hauteur */}
<motion.svg
       width="100%"
        height="200vh"
 viewBox="0 0 6110 9761"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"    >

    <motion.path
      d="M3269 5C3269 5 5.00289 1108 5 2916.5C4.99711 4725 4107 3931 4305.5 6291C4504 8651 1901.5 9687.5 1901.5 9687.5"
      stroke="white"
      strokeWidth="10"
      style={{ pathLength }}
    />
  </motion.svg>
</div>
  );
};

export default AnimatedSvg;
