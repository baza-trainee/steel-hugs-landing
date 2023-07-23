import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modalRoot");

export const Modal = ({ onClose, children }) => {
  const hadleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", hadleKeyDown);

    return () => {
      window.removeEventListener("keydown", hadleKeyDown);
    };
  });

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handleBackdropClick} className={styles.backdrop}>
      <div className={styles.container}>{children}</div>
    </div>,
    modalRoot
  );
};
