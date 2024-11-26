"use client";
import { useRef } from "react"
import { useScroll, motion, useTransform } from "framer-motion"
import styles from "../styles/ScrollText.module.css"

interface ScrollTextProps {
    value: string;
    title: string;
  }
  
  interface WordProps {
    children: React.ReactNode;
    range: [number, number];
    progress: any;
  }

export default function ScrollText({value, title}: ScrollTextProps) {
    const element = useRef(null)
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.7', 'start 0.1'],
    })
    const words = value.split(" ");
  return (
    <>
        <h3 className={styles.titlescroll}>{title}</h3>
        <p 
            className={styles.paragraph}
            ref={element} >
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length);
                    return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word >
                })}
        </p>
    </>
  )
}

const Word = ({children, range, progress}: WordProps) => {
    const opacity= useTransform(progress, range,[0, 1])

    return (
    <span className={styles.word}>
    <span className={styles.shadow}>{children}</span>
    <motion.span style={{opacity: opacity}}>
        {children}
    </motion.span>
    </span>
    )
}