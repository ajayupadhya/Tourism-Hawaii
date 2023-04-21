import React from "react";
import Image from "next/image";
import styles from "./activity.module.css";
interface Props {
  banner: any;
}
const Banner: React.FC<Props> = ({ banner }) => {
  return (
    <>
      <div className={styles.banner_container}>
        <div className={styles.desktop_banner_image_container}>
          <Image src={banner?.image} alt={banner.name} fill />
        </div>
        <div className={styles.desktop_banner_heading}>
          <h1 className={styles.desktop_banner_heading1}>{banner.name}</h1>
        </div>
      </div>

      <div className={styles.banner_container_mobile}>
        <div className={styles.desktop_banner_image_container}>
          <Image src={banner?.image} alt={banner.name} fill />
        </div>
        <div className={styles.mobile_banner_heading}>
          <h1 className={styles.mobile_banner_heading1}>{banner.name}</h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
