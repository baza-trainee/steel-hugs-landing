import styles from "./Report.module.css";
import { Heading } from "../../typography/Heading";

export default function Report() {
  return (
    <section id="section_report">
      <div className="container">
        <div className={styles.title}>
          <Heading variant="secondary">Звіт</Heading>
        </div>
        <div className={styles.frame}>Тут має бути фото</div>
      </div>
    </section>
  );
}
