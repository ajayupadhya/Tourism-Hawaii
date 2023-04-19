import React from "react";
import DesktopBanner from "../../../assets/desktopBanner.webp";
import MobileBanner from "../../../assets/desktopBanner.webp";
import Image from "next/image";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div className={styles.desktop_banner_image_container}>
        <Image src={DesktopBanner} alt="Hawaii Banner" fill />
      </div>
      <div className={styles.desktop_banner_heading}>
        <h1 className={styles.desktop_banner_heading1}>
          Welcome 
        </h1>
        <h2 className={styles.desktop_banner_heading2}>to Hawaii</h2>
      </div>
    </div>
  );
};

export default Banner;
