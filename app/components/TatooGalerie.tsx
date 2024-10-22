import Image from 'next/image';
import Image1 from "../assets/minigalerie/rune1.png"
import Image2 from "../assets/minigalerie/chat.png"
import Image3 from "../assets/minigalerie/femme.png"
import Image4 from "../assets/minigalerie/rune2.png"
import Image5 from "../assets/minigalerie/homme.png"
import Image6 from "../assets/minigalerie/main1.png"
import Image7 from "../assets/minigalerie/papillon.png"
import Image8 from "../assets/minigalerie/main2.png"
import Image9 from "../assets/minigalerie/tigre.png"
import styles from "../styles/TatooGalerie.module.css"

const TatooGalerie = () => {
  return (
    <>
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
        </>
  )
}

export default TatooGalerie