import React, { useState } from "react";
import styles from "./ShareButton.module.css";
import ShareModal from "../ShareModal/ShareModal";

export default function ShareButton() {
  // let [visible, setVisible] = useState(false);
  let [buttonClasses, setButtonClasses] = useState(styles.shareButton);
  function clickHandler() {
    setVisible(true);
    setButtonClasses(`${styles.shareButton} ${styles.shareButton_clicked}`);
  }
  return (
    <div className={styles.shareContainer}>
      <button className={buttonClasses} onClick={() => clickHandler()}>
        Поділитися Обіймами
      </button>
      {/* <ShareModal visible={visible} setVisible={setVisible} /> */}
    </div>
  );
}
