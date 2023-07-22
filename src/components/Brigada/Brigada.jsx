import { Heading } from "../typography/Heading";
import styles from "./Brigada.module.css";

export default function Brigada() {
  return (
    <section>
      <div className="container">
        <div className={styles.header}>
          <Heading variant="secondary">Бригада</Heading>
        </div>

        <p className={styles.text}>
          59-та окрема мотопіхотна бригада імені Якова Гандзюка. Бригада була
          сформована вже після початку російської агресії, наприкінці 2014 року.
          До її складу увійшли три батальйони, які також були сформовані вже
          після початку війни: 9-й, 10-й та 11-й. Бригада названа на честь Якова
          Гандзюка — українського військового діяча часів Перших Визвольних
          змагань.
        </p>
        <button>Обійняти</button>
        <img src="./src/images/brigada_420.png" alt="Military people" />
      </div>
    </section>
  );
}
