"use client"
import { useState } from "react";
import Image from "next/image";
import Logo from "../assets/logomath-removebg-preview.png"
import styles from "../styles/Navbar.module.css";

import React from 'react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <div className={styles.navcontainer}>
        <Image src={Logo} alt="Logo author" height={80} width={80}/>
        <div className={styles.navList} onClick={toggleMenu}>
            <div className={`${styles.bar} ${isOpen ?  styles.open : ""}`}></div>
            <div className={`${styles.bar} ${isOpen ?  styles.open : ""}`}></div>
            <div className={`${styles.bar} ${isOpen ?  styles.open : ""}`}></div>
        </div>      
    </div>
    {isOpen && (
            <ul className={styles.navcontent}>
              <li>ACCUEIL</li>
              <li>A PROPOS</li>
              <li>GALERIE</li>
              <li>CONTACT</li>
          </ul>
        ) }
    </>
  )
}

export default NavBar