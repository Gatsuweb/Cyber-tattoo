import Image from 'next/image';
import SplineComponent from './SplineComponent';
import ParallaxImage from './ParallaxImage';
import Word from './Word';
import Runes from "./Runes";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Image1 from "../assets/minigalerie/rune1.png"
import Image2 from "../assets/minigalerie/chat.png"
import Image3 from "../assets/minigalerie/femme.png"
import Image4 from "../assets/minigalerie/rune2.png"
import Image5 from "../assets/minigalerie/homme.png"
import Image6 from "../assets/minigalerie/main1.png"
import Image7 from "../assets/minigalerie/papillon.png"
import Image8 from "../assets/minigalerie/main2.png"
import Image9 from "../assets/minigalerie/tigre.png"
import styles from "../styles/SecondSection.module.css"


const SecondSection = () => {
    const title = "Le studio"
    const othertitle = "L'artiste"
    const paragraph = "Tatoueur Français. Je transmets ma passion pour la mythologie vikings et le metal sous forme d'art sur votre corps. Tatoueur Français. Je transmets ma passion pour la mythologie vikings et le metal sous forme d'art sur votre corps."
    const otherparagraph = "Je m'appelle Mathias. Je tattoo depuis X années. Je m'appelle Mathias. Je tattoo depuis X années.Je m'appelle Mathias."
    const runesGroup1 = [
        { rune: "ᚠ Fehu ᚢ Uruz ᚦ Thurisaz ᚨ Ansuz ᚱ Raidho ᚲ Kenaz" },
      ];
      
      const runesGroup2 = [
        { rune: "ᚷ Gebo ᚹ Wunjo ᚺ / ᚻ Hagalaz ᚾ Nauthiz ᛁ Isa ᛃ Jera" },

      ];
      
      const runesGroup3 = [
        { rune: "ᛇ Eihwaz ᛈ Perthro ᛉ Algiz ᛋ Sowilo ᛏ Tiwaz ᛒ Berkano"  },
      ];
      
      const runesGroup4 = [
        { rune: "ᛖ Ehwaz ᛗ Mannaz ᛚ Laguz ᛜ Ingwaz ᛞ Dagaz ᛟ Othala" },
      ];
      

      const containerScroll = useRef()
      const { scrollYProgress } = useScroll({
            target: containerScroll,
            offset: ['start end', 'end start']
        })

  return (
    <>
    <div className={styles.littleaboutcontainer}>
    
        <section>
           <Word value={paragraph} title={title}/>
        </section>
        <section ref={containerScroll} className={styles.runes} >
                <Runes group={runesGroup1} style={{ left: '-5%' }} progress={scrollYProgress} direction="left"/>

                <Runes group={runesGroup2} style={{ left: '-39%' }} progress={scrollYProgress} direction="right"/>
                <Runes group={runesGroup3}  style={{ left: '-25%' }} progress={scrollYProgress} direction="left"/>
                <Runes group={runesGroup4} style={{ left: '-12%' }} progress={scrollYProgress} direction="right"/>
        </section>
        <section className={styles.splinecrane}><SplineComponent /></section>

        <section className={styles.getout}>
        <div>
            <h1>Ta</h1>
            <h1>To</h1>
            <h1><span>T</span>o</h1>
         </div>
     
        <div className={styles.artist}>
            <h2>A</h2>
            <h2>r</h2>
            <h2>t</h2>
            <h2>i</h2>
            <h2>s</h2>
            <h2>t</h2>
        </div>
            </section>

        <section className={styles.list}>
            <div className={styles.testdefou}>
                <Image src={Image1} alt="" />
                <Image src={Image8} alt="" />
                <Image src={Image3} alt="" />
                <Image src={Image9} alt="" />
                <Image src={Image5} alt="" />
                <Image src={Image7} alt="" />
                <Image src={Image6} alt="" />
                <Image src={Image2} alt="" />
                </div>
                <div className={styles.divbtngalerie}>
                    <span className={styles.spanHover}>A</span>
                       <button className={styles.btnGalerie}>Galerie</button>
                </div>
                {/* <div className={styles.svgtest}>
                <AnimatedSvg />
                </div> */}
            </section>
                    <div className={styles.animphoto}>
                        <div className={styles.widthphoto}>
                            <Image src={Image4} alt="" className={styles.photoarigato} />
                            </div>
                        </div>
            <div style={{height: '100vh'}} className={styles.animPhotoDiv}></div>
        <section className={styles.deuxiemeparagraph}>
                <Word value={otherparagraph} title={othertitle}/>
        </section>
        <section className={styles.parallaxContainer}>
            <ParallaxImage />
        </section>
        <section  className={styles.btnAboutContainer}>
        </section>
        <section className={styles.sectionBtnAbout}>
            <div className={styles.divBtnAbout}>
                <button className={styles.btnAbout}>A propos</button>
                <span className={styles.spanHover}>N</span>
            </div>
            </section>

        <section></section>

    </div>
  {/*  */}

    </>
  )
}

export default SecondSection