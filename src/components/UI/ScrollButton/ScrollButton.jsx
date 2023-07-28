import styles from "./ScrollButton.module.css";
import ScrollBtnSvg from "../../../images/codicon_fold-up.svg";

export const ScrollButton = ({ isVisible }) => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleScroll}
      className={`${styles.container} ${isVisible ? styles.active : ""}`}
    >
      <img className={styles.icon} src={ScrollBtnSvg} alt="scroll_btn" />
    </div>
  );
};
