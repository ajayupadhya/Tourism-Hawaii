import React from "react";
import Guide from "../../../assets/Ellipse 10.png";
import Arrow from "../../../assets/arrow_forward.svg";
import Image from "next/image";
import styles from "./categories.module.css";
interface Props {
  category: any;
}
const Categories: React.FC<Props> = ({ category }) => {
  return (
    <div className={styles.category_container_section}>
      <div className={styles.category_container}>
        <div className={styles.category_container_left}>
          <h3>Categories</h3>
          <div className={styles.category_container_left_data}>
            {category.map((item: any, index: number) => (
              <div key={index}>
                <p>{item.name}</p>
                <Image src={Arrow} alt="arrow" />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.category_container_right}>
          <h3>Travel Guide</h3>
          <div className={styles.category_container_right_box}>
            <div className={styles.category_container_right_box_left}>
              <div>
                <h5>Hadwin Malone</h5>
                <p>Guide since 2012</p>
              </div>

              <button>Contact</button>
            </div>
            <div className={styles.category_container_right_box_right}>
              <Image src={Guide} alt="Guide photo" fill/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
