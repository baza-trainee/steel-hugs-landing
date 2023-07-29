import styles from "./ScrollButton.module.css";
import ScrollBtnSvg from "../../../images/codicon_fold-up.svg";
import { useRef } from "react";
import "./ScrollButton.module.css";

export const ScrollButton = ({ isVisible }) => {
  const ref = useRef(null);

  const handleScroll = () => {
    const el = ref.current;

    el.classList.add(styles.animate);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 500);
  };

  return (
    <div
      ref={ref}
      onClick={handleScroll}
      className={`${styles.container} ${isVisible ? styles.active : ""}`}
    >
      <img className={styles.icon} src={ScrollBtnSvg} alt="scroll_btn" />
    </div>
  );
};
