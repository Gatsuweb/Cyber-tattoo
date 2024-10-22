"use client"
import React from 'react'
import useMousePosition from '../utils/useMousePosition';
import Image from 'next/image'
import ImgViking from "../assets/imagemath.jpg"
import styles from "../styles/ThirdSection.module.css"
import { useState } from 'react';
import { motion } from 'framer-motion';

const ThirdSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    const { x, y } = useMousePosition();
  
    const size = isHovered ? 400 : 40;
    
  return (
    <>
    <div className={styles.vikingcontent}>
        <motion.div className={styles.mask}
            animate={{
                WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`, WebkitMaskSize: `${size}px`,}}
            transition={{ type: "tween", ease: "backOut", duration:0.5}} >
            <h2 onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>Le voyage commence <span>aujourd&apos;hui</span>.</h2>
            <h2 onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>La <span>force</span> du Nord.</h2>
            <h2 onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>L&apos;<span>esprit</span> du loup.</h2>
            </motion.div>
        <div className={styles.body}>
            <div className={styles.numeroun}>
                <h2 >ᛚᛖ ᚹᛟᛃᚨᚷᛖ ᚲᛟᛗᛗᛖᚾ<br />ᚲᛖ  ᚨᚢᛅᛏᛟᚱᛞᚢᛁ.</h2>
                <Image src={ImgViking} alt='image 1' width={180} height={100} />
            </div>

            <div className={styles.numerodeux}>
                <Image src={ImgViking} alt='image 1' width={180} height={100} />
                <h2>ᛚᚨ ᚠᛟᚱᚲᛖ ᛞᚢ ᚾᛟᚱᛞ.</h2>
            </div>
            <div className={styles.numerotrois}>
                <h2>ᛚᛖᛊᛈᚱᛁᛏ ᛞᚢ ᛚᛟᚢᛞ.</h2>
                <Image src={ImgViking} alt='image 1' width={180} height={100} />
            </div>
        </div>
        
    </div>  

        {/* <div className={styles.vikingcontent}>
                <Image src={ImgViking} alt='image 1' width={180} height={100} />
                <div className={styles.body}><h2>ᛚᚨ ᚠᛟᚱᚲᛖ ᛞᚢ ᚾᛟᚱᛞ.</h2></div>
                <motion.div className={styles.mask}
            animate={{
                WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`, WebkitMaskSize: `${size}px`,}}
            transition={{ type: "tween", ease: "backOut", duration:0.5}} >
                    <h2 onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>La force du Nord.</h2>
                </motion.div>
        </div>

        <div className={styles.vikingcontent}>
                <div className={styles.body}><h2>ᛚᛖᛊᛈᚱᛁᛏ ᛞᚢ ᛚᛟᚢᛞ.</h2></div>
                <motion.div className={styles.mask} 
                animate= {{ WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`}} 
                transition={{type: "tween", ease: "backOut"}}>
                    <h2 onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>L'esprit du loup.</h2>
                </motion.div>
                <Image src={ImgViking} alt='image 1' width={180} height={100} />
            </div> */}
            </>
          )
        }
    
export default ThirdSection