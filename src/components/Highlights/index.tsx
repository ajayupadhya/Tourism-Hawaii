import React from "react";
import { Card } from "../index";
import styles from "./highlights.module.css";
interface Props {
  highlight: Array<[]>;
}

const HighLights: React.FC<Props> = ({ highlight }) => {
  console.log(highlight);

  return (
    <div className={styles.highlight_container}>
      <div className={styles.highlight_div_container}>
        <h2>Highlights</h2>
        <div className={styles.highlight_container_card}>
          {highlight.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighLights;
