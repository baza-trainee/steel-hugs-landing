import styles from "./DonateButton.module.css";

export default function Button({ modal, children }) {
  return (
    <button className={styles.button} type="button" onClick={() => modal()}>
      {children}
    </button>
  );
}
