import { motion, useScroll, useTransform } from "framer-motion";

const BarbedWireAnimation = () => {
  const { scrollYProgress } = useScroll(); // Capturer la progression du scroll

  // Transformer la progression du scroll en animation de tracé
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div style={{ height: "200vh" }}> {/* Simule un scroll long */}
      <svg
        width="6177"
        height="5491"
        viewBox="0 0 6177 5491"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto" }} // Ajuste le SVG au conteneur
      >
        <motion.path
          d="M6174.5 8C6174.5 8 4597.5 379 4390.5 992C4183.5 1605 4496 1885 4390.5 2427.5C4285 2970 2670.5 2841 2401 3166C2131.5 3491 2189.5 3626.5 2093.5 4437.5C1997.5 5248.5 1.5 5483.5 1.5 5483.5"
          stroke="white"
          strokeWidth="15"
          strokeDasharray="0 1"
          style={{
            pathLength, // lie la longueur du chemin à l'animation
          }}
        />
        {/* Ajoute les autres barbelés ici avec les mêmes animations */}
        <motion.path
          d="M5708 64.8784L5793 128.878"
          stroke="white"
          strokeWidth="10"
          strokeDasharray="0 1"
          style={{
            pathLength,
          }}
        />
        {/* ... */}
      </svg>
    </div>
  );
};

export default BarbedWireAnimation;
