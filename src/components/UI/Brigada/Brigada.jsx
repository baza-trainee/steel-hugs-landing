import { Heading } from "../../typography/Heading";

import styles from "./Brigada.module.css";
import DonateButton from "../DonateButton";

export default function Brigada() {
  return (
    <section>
      <div className="container">
        <div className={styles.title}>
          <Heading variant="secondary">Бригада</Heading>
        </div>

        <div className={styles.content_container}>
          <p className={styles.text}>
            59-та окрема мотопіхотна бригада імені{" "}
            <span className={styles.bold}>Якова Гандзюка</span>. Бригада була
            сформована вже після початку російської агресії, наприкінці 2014
            року. До її складу увійшли три батальйони, які також були сформовані
            вже після початку війни: 9-й, 10-й та 11-й. Бригада названа на честь
            Якова Гандзюка — українського військового діяча часів Перших
            Визвольних змагань.
          </p>
          <div className={styles.brigada_button}>
            <DonateButton>Обійняти</DonateButton>
          </div>
          <div className={styles.image}></div>
        </div>
      </div>
    </section>
  );
}
