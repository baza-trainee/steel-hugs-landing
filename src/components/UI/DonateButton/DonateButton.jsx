import React, { useState } from "react";
import styles from "./DonateButton.module.css";

export default function Button({ modal, children }) {
  return (
    <a className={styles.button} href="https://send.monobank.ua/jar/AGkFHnu96u" target="_blank" onClick={modal}>
      {children}
      </a>
  );
}
