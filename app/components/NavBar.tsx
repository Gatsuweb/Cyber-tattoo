"use client"
import { useState } from 'react'
import Image from "next/image";
import Logo from "../assets/logomath-removebg-preview.png"
import styles from "../styles/Navbar.module.css";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <div className={styles.navcontainer}>
      <div className={styles.logodate}>
         <Image src={Logo} alt="Logo author" height={80} width={80}/>
         <p>©2024</p>
         </div>
        {isOpen ? (
          <div className={styles.close} onClick={toggleMenu}>
            <span>CLOSE</span>
          </div>
        ): (
          <div className={styles.menu} onClick={toggleMenu}>
            <span>MENU</span>
          </div>
        )}
    </div>
    {isOpen ? (
  <div className={`${styles.modalNav} ${styles.navOpen}`}>
    <li><a href="/">Accueil</a></li>
    <li><a href="/about">About</a></li>
    <li>
      <a href="/galerie">Galerie</a></li>
    <li><a href="/faq">Faq</a></li>
  </div>
) : (
  <div className={`${styles.modalNav} ${styles.navClose}`}>
    <li>Accueil</li>
    <li>About</li>
    <li>Galerie</li>
    <li>Faq</li>
  </div>
)}

    </>
  )
}

export default NavBar