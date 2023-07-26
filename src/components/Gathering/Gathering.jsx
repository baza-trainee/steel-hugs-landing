import React from "react";
import "./Gathering.css";
import { Heading } from "../typography/Heading";
import title from "../../images/gathering.png";
import bulletproof from "../../images/Group40.png";

export default function Gathering() {
  return (
    <div className="gathering-body">
      <div className="gathering-text">
        <div className="gathering-title">
          <Heading variant="secondary">Збір</Heading>
        </div>
        <p className="gathering-subtitle">Чому потрібен волонтерський збір?</p>
      </div>
      <div className="gathering-bulletproof">
        <div className="gathering-images">
          <img src={bulletproof} alt="Бронежелет" />
        </div>
        <div className="gathering-bulletproof-items">
          <p className="gathering-bulletproof-item_first">
            Нашій бригаді постійно треба відновлювати стан бронежилетів,
            оскільки вони є життєво важливими засобами захисту для захисників.
          </p>
          <div className="gathering-activ">
            <p className="gathering-bulletproof-item_second">
              Забезпечення наших воїнів високоякісними бронежилетами підвищить
              їх шанси на успішне виконання завдань на передовій та збережуть
              життя, що є найважливішим!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
