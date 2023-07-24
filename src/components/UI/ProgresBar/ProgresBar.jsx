import styles from "./ProgresBar.module.css";

export default function ProgresBar() {
  /*Змінити зібрану суму нижче*/
  const donation = 59958;

  const width = (donation / 117042) * 100;
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.textBox}>
          <p className={styles.title}>Вже зібрано</p>

          {/* Змінити зібрану суму нижче */}
          <p className={styles.number}>59 958 грн</p>
        </div>
        <div className={styles.textBox}>
          <p className={styles.title}>Наша мета</p>
          <p className={styles.number}>117 042 грн</p>
        </div>
      </div>

      <div className={styles.progresBar}>
        <div className={styles.progres} style={{ width: width + "%" }}></div>
      </div>

      <p className={styles.annotation}>
        Забезпечення бронежилетами бригади ЗСУ
      </p>
    </div>
  );
}
