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
         <div className={isOpen ? styles.close : styles.menu} onClick={toggleMenu}>
                    <span>CLOSE</span>
                    <span>MENU</span>
      </div>
    </div>

    </>
  )
}

export default NavBar