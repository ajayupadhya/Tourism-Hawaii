import React from "react";
import styles from "./Activity.module.css";
interface Props {
  description: any;
}
const Description: React.FC<Props> = ({ description }) => {
  return (
    <div className={styles.description_container}>
      <div className={styles.description_container_data}>
        <h2>About {description?.name} in Hawaii</h2>
        <p>{description.description}</p>
      </div>
    </div>
  );
};

export default Description;
