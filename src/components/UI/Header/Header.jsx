import './header.css';
import Logo from '../../../images/logo.png';
import { useState } from 'react';

const navButtons = [
  { text: 'Мета' },
  { text: 'Бригада' },
  { text: 'Як це працює' },
  { text: 'Збір' },
  { text: 'Звіт' },
];

export const Header = ({ buttons = navButtons }) => {
  const [active, setActive] = useState();

  return (
    <>
      <header className="header_container">
        <div className="header_wrapper">
          <div className="logo_wrapper">
            <img className="logo_img" src={Logo} alt="logo" />
          </div>
          <nav className={active ? 'nav_wrapper active' : 'nav_wrapper'} x>
            <ul className="nav_list">
              {buttons.map((button) => (
                <li className="nav_item" key={button.text}>
                  <a className="nav_href">{button.text}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className="burger_menu_icon"
            onClick={() => setActive(!active)}
          />
          <div
            className={active ? 'burger_menu_blur active' : 'burger_menu_blur'}
          ></div>
        </div>
      </header>
    </>
  );
};
