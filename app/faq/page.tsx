import NavBar from "../components/NavBar";
import styles from "../styles/Faq.module.css"

export default function  Faq() {
  return (
    <section className={styles.faqContainer}>
        <NavBar />
        <div className={styles.faqContent}>

            <h2>FAQ</h2>
        <section className={styles.beforeRdv}>
            <h3>Avant le rendez-vous</h3>
            <ul>
                <li><div className={styles.spanQuestion}><div className={styles.widthDiv}><span>01</span></div><p>Une a deux semaine avant le rendez-vous</p></div><p>+</p></li>
            </ul>
            <ul>
                <li><div className={styles.spanQuestion}><div className={styles.widthDiv}><span>02</span></div><p>Une a deux semaine avant le rendez-vous</p></div><p>+</p></li>
            </ul>
            <ul>
                <li><div className={styles.spanQuestion}><div className={styles.widthDiv}><span>03</span></div><p>Une a deux semaine avant le rendez-vous</p></div><p>+</p></li>
            </ul>

         
        </section>
        <section className={styles.duringRdv}>
            <h3>Pendant le rendez-vous</h3>
            <ul>
                <li><div className={styles.spanQuestion}><div className={styles.widthDiv}><span>04</span></div><p>Une a deux semaine avant le rendez-vous</p></div><p>+</p></li>
            </ul>
            <ul>
                <li><div className={styles.spanQuestion}><div className={styles.widthDiv}><span>05</span></div><p>Une a deux semaine avant le rendez-vous</p></div><p>+</p></li>
            </ul>
            <ul>
                <li><div className={styles.spanQuestion}><div className={styles.widthDiv}><span>06</span></div><p>Une a deux semaine avant le rendez-vous</p></div><p>+</p></li>
            </ul>
        </section>
        <section className={styles.afterRdv}>
            <h3>Après le rendez-vous</h3>
            <ul>
                <li><div className={styles.spanQuestion}><div className={styles.widthDiv}><span>07</span></div><p>Une a deux semaine avant le rendez-vous</p></div><p>+</p></li>
            </ul>
            <ul>
                <li><div className={styles.spanQuestion}><div className={styles.widthDiv}><span>08</span></div><p>Une a deux semaine avant le rendez-vous</p></div><p>+</p></li>
            </ul>
            <ul>
                <li><div className={styles.spanQuestion}><div className={styles.widthDiv}><span>09</span></div><p>Une a deux semaine avant le rendez-vous</p></div><p>+</p></li>
            </ul>
        </section>
        <section className={styles.paiementRdv}>
            <h3>Paiement</h3>
            <ul>
                <li><div className={styles.spanQuestion}><div className={styles.widthDiv}><span>10</span></div><p>Une a deux semaine avant le rendez-vous</p></div><p>+</p></li>
            </ul>
            <ul>
                <li><div className={styles.spanQuestion}><div className={styles.widthDiv}><span>11</span></div><p>Une a deux semaine avant le rendez-vous</p></div><p>+</p></li>
            </ul>
            <ul>
                <li><div className={styles.spanQuestion}><div className={styles.widthDiv}><span>12</span></div><p>Une a deux semaine avant le rendez-vous</p></div><p>+</p></li>
            </ul>
        <div style={{height: '100px'}}></div>
        </section>
        </div>
    </section>
  )
}
