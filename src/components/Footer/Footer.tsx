import './style.css';
import React from 'react';
import TelegramIcon from '../../ui/icons/TelegramIcon';
import { footerMenuInfo } from '../data';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <FooterSocial />
        <FooterMenu />
      </div>
    </footer>
  );
};

const FooterSocial = () => {
  return (
    <div className="footer__info">
      <p className="footer__info-title">Разработано на платформе Noxer</p>
      <a href="#" className="footer__info-btn">
        <TelegramIcon />
        <span>noxerai_bot</span>
      </a>
    </div>
  );
};

const FooterMenu = () => {
  const [activeMenu, setActiveMenu] = React.useState(0);

  return (
    <nav className="footer__menu">
      <ul className="footer__list">
        {footerMenuInfo.map((item, index) => (
          <li
            key={item.id}
            className={activeMenu === index ? 'active' : ''}
            onClick={() => setActiveMenu(index)}
          >
            <FooterMenuIcon icon={item.icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

const FooterMenuIcon = ({ icon }: { icon: React.ReactNode }) => {
  return <>{icon}</>;
};
