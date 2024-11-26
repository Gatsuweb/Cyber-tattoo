"use client";
import { useEffect, useState } from "react";
import Lenis from 'lenis'
import Image from "next/image";
import SvgFleche from "./assets/svgfleche.svg"
import Mathtexture from "./assets/mathtexture.jpg"
import MathBg from "./assets/mathbg.svg"
import Arrow from "./assets/Arrow.svg"
import NavBar from "./components/NavBar";
import styles from "./page.module.css";
import SecondSection from "./components/SecondSection";
import SvgAnimation from "./components/SvgAnimation";

import Contact from "./components/Contact";
import ThirdSection from "./components/ThirdSection";



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
      <div className={styles.videoBackground}>
        <video autoPlay width="100%" height="auto" loop muted>
        <source src="/smoke.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos
      </video>
    </div>
      <div className={styles.sectioncontent}>
        <div className={styles.header}>
          <NavBar />
        </div>
        <div className={styles.mainpage}>
          <Image src={Arrow} alt="flèche" className={styles.arrowImg}/>
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
            <p><a href="https://www.instagram.com/cybervikingtattoo/">instagram</a></p>
            <p><a href="mailto:cyberpunkvikingtattoo@hotmail.fr">mail</a></p>
          </div>
        </div>
        <div className={styles.footermain}>
                <div className={styles.imagefootermain}>
          <div className={styles.imagetext}>
            {/* <div className={styles.videoContainer}>
              <video autoPlay loop muted className={styles.videoMath}>
                <source src="/IMG_1042.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos
              </video>
            </div> */}
            <Image src={MathBg} alt="" className={styles.mathimg}/>
            <span className={styles.galerieHoverImg}>GALERIE</span>
          </div>
        </div>

          <div className={styles.middleFooter}>
            <Image src={SvgFleche} alt="svg fleche scroll down" className={styles.svgarrow}/>
          </div>
          
          <div className={styles.texticone}>
            <p>ARTISTE <span>O</span> FRANCAIS, <br />BASE A GLOMEL</p>
          </div>
        </div>
      </div>
    </section>
    {/* <div className={styles.svgposition}>
            <SvgAnimation  />
            <SvgAnimation  />
            </div> */}
    
    <section >
      <SecondSection  />
      <section className={styles.issou}>
        <ThirdSection />
      </section>
        <div style={{height: '100vh'}} className={styles.issouDiv}></div>
    </section>
        <section>
  
    </section>
    </>
  );
}
