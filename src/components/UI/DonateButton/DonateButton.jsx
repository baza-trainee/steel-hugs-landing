import React, { useState } from "react";
import styles from "./DonateButton.module.css";

export default function Button({ modal, children }) {
  return (
    <a href="https://send.monobank.ua/jar/AGkFHnu96u" target="_blank"><button className={styles.button} type="button" onClick={modal}>
      {children}
      </button></a>
  );
}
