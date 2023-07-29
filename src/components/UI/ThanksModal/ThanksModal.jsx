import styles from "./ThanksModal.module.css";

export default function ThanksModal({ modal }) {
  const handleClick = () => {
    modal();
  };
  return (
    <div className={styles.thanksContainer}>
      <div className={styles.image}></div>
      <h2 className={styles.title}>Дякуємо за ваші Сталеві Обійми!</h2>
      <div className={styles.hands}></div>
      <button type="button" onClick={handleClick} className={styles.button}>
        Повернутись на сторінку
      </button>
    </div>
  );
}
