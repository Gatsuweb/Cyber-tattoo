"use client"
import Image from "next/image"
import Image1 from "../assets/img/image 31.svg"
import Image2 from "../assets/img/image 32.svg"
import Image3 from "../assets/img/image 33.svg"
import Image4 from "../assets/img/image 34.svg"
import Image5 from "../assets/img/image 29.svg"
import Image6 from "../assets/img/image 30.svg"
import Image7 from "../assets/minigalerie/tigre.png"
import Image8 from "../assets/minigalerie/rune1.png"
import Image9 from "../assets/minigalerie/rune2.png"
import Arrow from "../assets/Arrow.svg"
import CraneGalerie from "../components/CraneGalerie"
import NavBar from "../components/NavBar"
import styles from "../styles/Galerie.module.css"
import { useEffect } from "react"
import Lenis from "lenis"


export default function Galerie() {

    useEffect( () => {

        const lenis = new Lenis()
      
        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
      
        }
      
        requestAnimationFrame(raf)
      
      }, [])
    return(
    <>
        <section className={styles.galerieContainer}>
        <NavBar />
        <div className={styles.bgGalerie}>
        <h1>GALERIE <span>C</span> GALERIE <span>C</span>  GALERIE</h1>
        </div>
            <div className={styles.galerieContent}>
                <div className={styles.boxcontainer}>
                    <div className={styles.boxContent}>
                        <div className={styles.boxImg}>
                        <Image src= {Image1} alt="" id={styles.boxune} />
                        </div>
                        <div className={styles.boxImg}>
                        <Image src= {Image2} alt="" id={styles.boxdeux}/>
                        </div>
                        <div className={styles.boxImg}>
                        <Image src= {Image3} alt="" id={styles.boxtrois}/>
                        </div>
                    </div>
                <div className={styles.boxContentDeux}>
                    <div className={styles.boxImgDeux}>
                    <Image src= {Image4} alt="" id={styles.boxquatre}/>
                    </div>
                    <div className={styles.boxImgDeux}>
                    <Image src= {Image5} alt="" id={styles.boxcinq}/>
                    </div>
                </div>
        
                </div>
                <div className={styles.canvaCrane}>
                <CraneGalerie />
                </div>
                <div className={styles.textGalerie}>
                <p>Bienvenue dans ma galerie. <br /> venez découvrir mes autres<br /> photos ici</p>
                <Image src={Arrow} alt="test" />
                </div>
            </div>
                <div className={styles.footerGalerie}>
                    <span>P</span>
                    <div className={styles.resoGalerie}>
                    <p>instagram</p>
                    <p>mail</p>
                    </div>
                </div>
        </section>
        <section className={styles.imgContainer}>
            <div className={styles.column}>
                <Image src={Image1} alt="test" className={styles.imagesGalerie} />
            </div>
            <div className={styles.column}>
                <Image src={Image2} alt="test" className={styles.imagesGalerie} />
            </div>
            <div className={styles.column}>
                <Image src={Image3} alt="test" className={styles.imagesGalerie} />
            </div>
            <div className={styles.column}>
                <Image src={Image4} alt="test" className={styles.imagesGalerie} />
            </div>
            <div className={styles.column}>
                <Image src={Image5} alt="test" className={styles.imagesGalerie} />
            </div>
            <div className={styles.column}>
                <Image src={Image6} alt="test" className={styles.imagesGalerie} />
            </div>
            <div className={styles.column}>
                <Image src={Image7} alt="test" className={styles.imagesGalerie} />
            </div>
            <div className={styles.column}>
                <Image src={Image8} alt="test" className={styles.imagesGalerie} />
            </div>
            <div className={styles.column}>
                <Image src={Image9} alt="test" className={styles.imagesGalerie} />
            </div>
            <div className={styles.column}>
            </div>
        </section>
    </>
    )
}