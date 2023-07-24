import { Heading } from "../../typography/Heading";
import styles from "./Goal.module.css";
import DonateButton from "../DonateButton/DonateButton";
import ProgresBar from "../ProgresBar/ProgresBar";
export default function Goal({ modal }) {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.title}>
          <Heading variant="primary">Сталеві Обійми</Heading>
        </div>
        <div className={styles.flexBox}>
          <p className={styles.save}>
            Врятуємо життя тим, хто рятує наше щодня!
          </p>

          <div className={styles.contentBox}>
            <div className={styles.image}></div>
            <div className={styles.textBox}>
              <p className={styles.text}>Наша мета забезпечити 59 бригаду на</p>

              <div className={styles.number}>
                <Heading variant="numbers">117 042 грн</Heading>
              </div>

              <div className={styles.button}>
                <DonateButton modal={modal}>Обійняти</DonateButton>
              </div>
            </div>
          </div>
        </div>
        <ProgresBar />
      </div>
    </section>
  );
}
