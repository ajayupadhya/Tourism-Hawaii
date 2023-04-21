import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Arrow from "../../../../assets/arrow_forward.svg";
import Link from "next/link";
interface Props {
  data: any;
}

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_image_container}>
        <Image src={data.image} alt={data.title} fill />{" "}
      </div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <Link className={styles.card_container_arrow} href={`/${data.title}`}>
        <Image src={Arrow} width={16} height={16} alt="Arrow" />
      </Link>
    </div>
  );
};

export default Card;
