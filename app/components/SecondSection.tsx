
import Image from 'next/image'
import { StaticImageData } from "next/image";
import styles from "../styles/SecondSection.module.css"
import SplineComponent from './SplineComponent';
import ThirdSection from './ThirdSection';
import ParallaxImage from './ParallaxImage';
import SvgAnimation from './SvgAnimation';

interface SecondSectionProps {
    Mathtexture: StaticImageData;
}
const SecondSection = ({ Mathtexture }: SecondSectionProps) => {
   
  return (
    <>
    <div className={styles.littleaboutcontainer}>
        <section className={styles.animsvg}><SvgAnimation /></section>
        <section><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit ipsam facilis alias repellendus dolorum enim incidunt eaque quibusdam iure distinctio harum nesciunt debitis voluptatum id sint molestiae, non nostrum.</p></section>

        <section><SplineComponent /></section>
        <section>
            <ParallaxImage />
        </section>
        {/* <section><Image src={Mathtexture} alt='image auteur' height={200} width={300}/></section> */}
    </div>
        <section className={styles.issou}>
            <ThirdSection />
        </section>

    </>
  )
}

export default SecondSection