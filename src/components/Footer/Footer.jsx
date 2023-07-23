import React from "react";
import "./Footer.css";
import ShareButton from "../UI/ShareButton/ShareButton";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerHead">
          <h3>Допоможи іншим дізнатися про наш збір!</h3>
        </div>
        <div className="footerButton">
          <ShareButton />
        </div>
      </div>
      <div className="footerRights">
        <p>Розробка Baza Trainee Ukraine 2023. Всі права захищені.</p>
      </div>
    </div>
  );
}
