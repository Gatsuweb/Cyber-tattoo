import { MotionValue, useTransform, motion } from "framer-motion";
import styles from "../styles/Runes.module.css"

interface RuneType {
    rune: string;
}

interface SecondSectionRune {
    group: RuneType[];
    style?: React.CSSProperties;
    progress: MotionValue;
    // x: MotionValue;
    direction: string;
}

const Runes = ({ group, style, progress, direction }: SecondSectionRune) => {
    const dir = direction == "left" ? -1 : 1;
    const x = useTransform(progress, [0, 1], [-500 * dir, 500 * dir])
  return (
    
    <motion.div className={styles.scrollxcontainer} style={{x}}>
    <div className={styles.runesContainer} style={style}>
      {group.map((runeObj, index) => (
        <h1 key={index}>
          {runeObj.rune}
        </h1>
      ))}
    </div>
    </motion.div>
  );
}

export default Runes;
