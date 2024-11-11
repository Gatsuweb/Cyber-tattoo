"use client"
import Image from "next/image"
import Tigre from "../assets/minigalerie/tigre.png"
import MathTexture from "../assets/imagea.svg"
import styles from "../styles/About.module.css"
import NavBar from "../components/NavBar"
import { useEffect } from "react"
import Lenis from "lenis"
import { section } from "framer-motion/client"

export default function About() {
    useEffect( () => {

        const lenis = new Lenis()
      
        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
      
        }
      
        requestAnimationFrame(raf)
      
      }, [])
  return (
    <section className={styles.bgContainer}>
    <section className={styles.proposContainer}>
        <div className={styles.proposContent}>
        <NavBar />

            <div className={styles.firstParagraph}>
            <p>Je suis Mathias, tatoueur passionné et créateur<br /> d’œuvres inspirées par la culture Viking, <br />la mythologie nordique, et l’univers du métal.<br /> Mon art, comme ma musique de prédilection,<br /> explore la liberté, avec une touche unique<br /> que j’apporte à chaque projet.</p>

            </div>
            <div className={styles.proposTitle}>
                <h1>MATHIAS</h1>
            </div>

        </div>
        <div style={{height: "100vh"}}></div>
        <div className={styles.imgTest}>
            <Image src={MathTexture} alt="" height={350}/>
        </div>
        <div style={{height: "100vh"}}></div>
        <div className={styles.imgTestDeux}>
            <Image src={MathTexture} alt="" height={350}/>
        </div>
    <div style={{height: "100vh"}}></div>
    </section>
        <section className={styles.paragraphAbout}>
            <h2>A Propos de moi</h2>
                    <p>Mon style, inspiré par l’univers des Vikings et leurs symboles, plonge profondément dans les mystères des runes, les récits héroïques et l’esthétique sauvage du Nord. Les tatouages que je crée ne se limitent pas à être de simples motifs ; ils sont des pièces d’art qui racontent des histoires, symbolisent des valeurs comme le courage, la force, et l’authenticité. En m'inspirant de l’art viking, je réalise des designs qui vont de symboles anciens tels que les runes et les boucliers, à des compositions modernes et puissantes, intégrant parfois des touches de style cyberpunk pour donner une dimension futuriste et unique à chaque œuvre.</p> 
                <div className={styles.subParagraphAbout}>
                    <span>Ma passion pour la musique métal se reflète également dans mon travail. Le métal, avec son énergie brute et ses thèmes profonds, partage avec les Vikings une philosophie d'intensité et de liberté. Que ce soit par des détails sombres et audacieux ou des lignes fluides et dynamiques, mon approche vise à capturer l'esprit rebelle et indomptable qui anime à la fois le métal et la culture viking.</span>
                    <span>L'expérience CybervikingTattoo, c'est avant tout une collaboration. Mon objectif est de comprendre ce qui résonne en vous pour donner vie à un tatouage unique, qui vous parle et vous représente. Que vous soyez ici pour un symbole discret, une manchette complète, ou une pièce imposante dans le dos, mon but est de transformer chaque idée en une œuvre personnelle et intemporelle.</span>
                </div>
                    <div style={{height: "100vh"}}></div>
            </section>
            <section className={styles.proposParallax}>
                <div>
                    <Image src={MathTexture} alt=""  id={styles.imgProposBas}/>
                </div>
        
            </section>
            <div className={styles.imgProposDeux}>
                <Image src={MathTexture} alt="" height={350}/>
                <div style={{height: "100vh"}}></div>
                </div>
                <div className={styles.imgProposTrois}>
                <Image src={MathTexture} alt="" height={350}/>
                <div style={{height: "100vh"}}></div>
                </div>
            <div className={styles.lastSectionPropos}>
                <div className={styles.pPlusc}>
                    <p>Si vous êtes passionné par les mythes nordiques, le métal, ou simplement en quête d’un tatouage chargé de sens, je vous invite à venir découvrir mon atelier, discuter de vos idées, et explorer ensemble les possibilités infinies de l’art corporel.
                    Prêt à faire de votre tatouage une légende personnelle ?</p>
                    <div className={styles.carreAnim}></div>
                    <div className={styles.carreAnim}></div>
                </div>
<Image src={Tigre} alt="" height={800}/>
            </div>
    </section>
  )
}
