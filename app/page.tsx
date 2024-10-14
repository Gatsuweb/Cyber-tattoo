"use client";
import { useEffect, useState } from "react";
import Lenis from 'lenis'
import Image from "next/image";
import Mathtexture from "./assets/mathtexture.jpg"
import Arrow from "./assets/Arrow.svg"
import NavBar from "./components/NavBar";
import styles from "./page.module.css";
import SecondSection from "./components/SecondSection";



export default function Home() {
  useEffect( () => {

    const lenis = new Lenis()
  
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
  
    }
  
    requestAnimationFrame(raf)
  
  }, [])
  const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
    <section className={styles.container}>
      <div className={styles.sectioncontent}>
        <div className={styles.header}>
          <NavBar />
        </div>
        <div className={styles.mainpage}>
          <Image src={Arrow} alt="flèche" height={300} />
          <div className={styles.title} onMouseMove={handleMouseMove}>
            <div className={styles.animhover} >
              <h1 className={styles.cyberviking}>CYBERVIKING</h1>
              <Image src={Mathtexture} className={styles.hoverImage} alt="image author hover"
              style={{
                top: `${cursorPosition.y}px`,
                left: `${cursorPosition.x}px`,
                transform: 'translate(-50%, -50%)',
              }}
              />
            </div>
          <div className={styles.subtitle}>
            <p>&quot;transforme ton corps en art&quot;</p>
            <span>Tattoo</span>
            </div>
          </div>
          <div className={styles.reso}>
            <p>instagram</p>
            <p>mail</p>
          </div>
        </div>
        <div className={styles.footermain}>
          <div className={styles.imagefootermain}>
            <div className={styles.imagetext}>
         
            <h2>BOOK.</h2>
            </div>
            <div className={styles.imagespan}>
            <p>/</p>
            </div>
            <div className={styles.imagetext}>
            <h2>GALERIE.</h2>
            </div> 
          </div>
          <h2>SCROLL</h2>
          <div className={styles.texticone}>
            <p>Tattoo artist basé à Glomel</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <SecondSection Mathtexture={Mathtexture} />
    </section>

    </>
  );
}
