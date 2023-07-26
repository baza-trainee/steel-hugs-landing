import React from "react";
import styles from "./Footer.module.css";
import ShareButton from "../UI/ShareButton/ShareButton";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerHead}>
            <h3>Допоможи іншим дізнатися про наш збір!</h3>
          </div>
          <div className={styles.footerButton}>
            <ShareButton />
          </div>
        </div>
        <div className={styles.footerRights}>
          <p>Розробка Baza Trainee Ukraine 2023. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}
