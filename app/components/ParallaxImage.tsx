'use client';
import { useRef } from "react";
import styles from '../styles/ParallaxImage.module.css';
import Picture1 from '../assets/imgparallax.jpg';
import Picture2 from '../assets/imgparallax2.jpg';
import Picture3 from '../assets/imagemath.jpg';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';

const word = "with framer-motion";

export default function ParallaxImage() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -350]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -550]);

    const images = [
        {
            src: Picture1,
            y: sm
        },
        {
            src: Picture2,
            y: lg
        },
        {
            src: Picture3,
            y: md
        }
    ];

    return (
        <div ref={container} className={styles.containerparallax}>
           
            <div className={styles.parallax}>
                {
                    images.map( ({src, y}, i) => {
                        return <motion.div style={{y}} key={`i_${i}`} className={styles.parallaxContainer}>
                            <Image 
                                src={src}
                                placeholder="blur"
                                alt="image"
                                fill
                            />
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}