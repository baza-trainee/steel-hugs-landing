import { Heading } from "../../typography/Heading";

import styles from "./HowItWorks.module.css";
import DonateButton from "../DonateButton";

export default function HowItWorks() {
  return (
    <section>
      <div className="container">
        <div className={styles.title}>
          <Heading variant="secondary">Як це працює</Heading>
        </div>

        <div className={styles.content_container}>
          <div className={styles.howItWorks_button}>
            <DonateButton>Мій донат</DonateButton>
          </div>
          <div className={styles.firstArrow}></div>
          <div className={styles.secondArrow}></div>
          <div className={styles.man}></div>
          <div className={styles.bulletprufer}></div>
        </div>
      </div>
    </section>
  );
}
