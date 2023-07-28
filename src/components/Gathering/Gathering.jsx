import { Heading } from "../typography/Heading";
import styles from "./Gathering.module.css";

export default function Gathering() {
  return (
    <section id="section_collection">
      <div className="container">
        <div className={styles.title}>
          <Heading variant="secondary">Збір</Heading>
        </div>
        <p className={styles.subtitle}>Чому потрібен волонтерський збір?</p>
        <p className={styles.firstTextSmall}>
          Нашій бригаді постійно треба відновлювати стан бронежилетів, оскільки
          вони є життєво важливими засобами захисту для захисників.
        </p>
        <div className={styles.contentBox}>
          <div className={styles.image}></div>
          <div className={styles.textBox}>
            <p className={styles.firstText}>
              Нашій бригаді постійно треба відновлювати стан бронежилетів,
              оскільки вони є життєво важливими засобами захисту для захисників.
            </p>
            <p className={styles.secondText}>
              Забезпечення наших воїнів високоякісними бронежилетами підвищить
              їх шанси на успішне виконання завдань на передовій та збережуть
              життя, що є найважливішим!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
