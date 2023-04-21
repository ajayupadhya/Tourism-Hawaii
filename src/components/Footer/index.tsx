import React from 'react'
import footerLogo from '../../../assets/Menu.svg'
import Image from "next/image"
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footer_container}>
        <div>

        <Image alt = "footer Logo" width = {94} height={35} src={footerLogo}/>
        </div>
        
    </div>
  )
}

export default Footer