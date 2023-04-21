import React, { useState } from "react";
import styles from "./header.module.css";
import Logo from "../../../assets/Aloha.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className={styles.header_container_desktop}>
        <Image src={Logo} alt="logo" width={94} height={35} />
        <nav className={styles.header_navigation}>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/Surfing"}>Surfing</Link>
            </li>
            <li>
              <Link href={"/Traditional Festivals"}>Traditional Festivals</Link>
            </li>
            <li>
              <Link href={"/Volcanoes"}>Volcanoes</Link>
            </li>
          </ul>
        </nav>
        <button className={styles.header_button}>Book a trip</button>
      </header>
      <header className={styles.header_container_mobile}>
        <nav className={styles.header_container_mobile_logo_section}>
          <Image src={Logo} alt="logo" width={94} height={35} />
          <div onClick={() => setMenu(true)} className={styles.menu_toggle}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className={styles.menu}>
              <Link href={"/"}>Home</Link>

              <Link href={"/surfing"}>Surfing</Link>

              <Link href={"/"}>Hula</Link>

              <Link href={"/"}>Vulcano</Link>
            <button className={styles.header_button}>Book a trip</button>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
