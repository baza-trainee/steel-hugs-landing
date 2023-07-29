import "./header.css";
import Logo from "../../../images/logo.png";
import { useState } from "react";
import { useRef } from "react";

const navLinks = [
  { text: "Мета", sectionId: "section_meta" },
  { text: "Бригада", sectionId: "section_brigade" },
  { text: "Як це працює", sectionId: "section_how_it_works" },
  { text: "Збір", sectionId: "section_collection" },
];

export const Header = ({ links = navLinks }) => {
  const [active, setActive] = useState();
  const scrollRef = useRef();

  const handleButtonClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      scrollRef.current = element.offsetTop - 70; // adjust the scroll indent
      window.scrollTo(0, scrollRef.current);
      setActive(false);
    }
  };

  return (
    <>
      <header className="header_container">
        <div className="header_wrapper">
          <div className="header_undercover"></div>
          <div className="logo_wrapper">
            <img className="logo_img" src={Logo} alt="logo" />
          </div>
          <nav className={active ? "nav_wrapper active" : "nav_wrapper"}>
            <ul className="nav_list">
              {links.map((link) => (
                <li className="nav_item" key={link.sectionId}>
                  <a
                    className="nav_href"
                    onClick={() => handleButtonClick(link.sectionId)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className="burger_menu_icon"
            onClick={() => setActive(!active)}
          />
        </div>
        <div
          className={active ? "burger_menu_blur active" : "burger_menu_blur"}
        ></div>
      </header>
    </>
  );
};
