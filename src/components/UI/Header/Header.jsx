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
  const [active, setActive] = useState(false);

  const handleBurgerMenu = () => {
    setActive(!active);
  };

  return (
    <div className="header_container">
      <header className="header_wrapper">
        <div className="logo_wrapper">
          <img className="logo_img" src={Logo} alt="logo" />
        </div>
        <nav className={active ? 'nav_wrapper active' : 'nav_wrapper'}>
          <ul className="nav_list">
            {buttons.map((button) => (
              <li className="nav_item" key={button.text}>
                <a className="nav_href">{button.text}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div onClick={handleBurgerMenu} className="burger_menu_icon" />
      </header>
    </div>
  );
};
