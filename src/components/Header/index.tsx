import React from "react";
import styles from "./header.module.css";
import Logo from "../../../assets/Aloha.svg";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className={styles.header_container}>
      <Image src={Logo} alt="logo" width={94} height={35} />
      <nav className={styles.header_navigation}>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Surfing</Link>
          </li>
          <li>
            <Link href={"/"}>Hula</Link>
          </li>
          <li>
            <Link href={"/"}>Vulcano</Link>
          </li>
        </ul>
      </nav>
      <button className={styles.header_button}>Book a trip</button>
    </header>
  );
};

export default Header;
