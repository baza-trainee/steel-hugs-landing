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

  // const handleScroll = () => {
  //   const button = ref.current;

  //   const windowWidth = window.innerWidth; // Получаем ширину окна

  //   const finalPosition = -windowWidth; // Сдвигаем кнопку на ширину окна влево
  //   const duration = 1500; // Продолжительность анимации в миллисекундах
  //   const framesPerSecond = 60; // Число кадров в секунду
  //   const frameStep = finalPosition / ((duration / 1000) * framesPerSecond); // Шаг смещения на каждом кадре

  //   let currentPosition = 0;
  //   let currentFrame = 0;

  //   const moveButton = () => {
  //     currentPosition += frameStep;
  //     currentFrame++;

  //     if (currentFrame <= (duration / 1000) * framesPerSecond) {
  //       button.style.transform = `translateX(${currentPosition}px)`;
  //       requestAnimationFrame(moveButton);
  //     } else {
  //       button.style.transform = `translateX(${finalPosition}px)`;
  //       setIsClicked(false);
  //     }
  //   };

  //   requestAnimationFrame(moveButton);

  //   setTimeout(() => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }, 2000);
  // };

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
