import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles["center-body"]}>
      <div className={styles["loader-circle-6"]}></div>
    </div>
  );
};

export default Loader;
