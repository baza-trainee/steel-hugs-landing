import { useState } from "react";
import styles from "./DonateModal.module.css";

export default function DonateModal({ isThanks }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Amount is: ${amount}`);
    setAmount("");
    isThanks();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.buttonsContainer}>
        <button
          type="button"
          className={styles.button}
          onClick={() => setAmount("100")}
        >
          100 грн
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => setAmount("200")}
        >
          200 грн
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => setAmount("500")}
        >
          500 грн
        </button>
      </div>

      <input
        type="number"
        name="Amount"
        placeholder="Введіть свою суму"
        className={styles.input}
        value={amount}
        onChange={(e) => setAmount(e.target.value.toString())}
      />

      <button type="submit" className={styles.submit}>
        Оплатити
      </button>
    </form>
  );
}
