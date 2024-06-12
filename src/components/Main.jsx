import React from "react";
import InputComponent from "./Input";
import ButtonsComponent from "./Button";
import styles from "./MainStyle.module.css";


function MainComponent() {
  return (
    <div className={styles.main}>
      
      <InputComponent />
    </div>
  );
}

export default MainComponent;
