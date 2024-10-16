import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import { close, menu, brazil, united_states } from '../../assets';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.headerContent} w-full flex justify-between items-center max-w-7xl mx-auto`}>
        <a href="#home" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" /> {/* Atualize o caminho do logo */}
          <h1 className="text-2xl font-bold">Otavio Soares</h1>
        </a>

        <nav className={styles.desktopMenu}>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-gray-300">{t('header.home')}</a></li>
            <li><a href="#about" className="hover:text-gray-300">{t('header.about')}</a></li>
            <li><a href="#experience" className="hover:text-gray-300">{t('header.experience')}</a></li>
            <li><a href="#contact" className="hover:text-gray-300">{t('header.contact')}</a></li>
          </ul>
        </nav>

        <div className={styles.languageSelector}>
          <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? styles.active : ''}>
            <img src={united_states} alt="English" className={styles.flagIcon} />
          </button>
          <button onClick={() => changeLanguage('pt')} className={i18n.language === 'pt' ? styles.active : ''}>
            <img src={brazil} alt="Português" className={styles.flagIcon} />
          </button>
        </div>

        <div className={styles.mobileMenu}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${styles.mobileMenuContent} ${toggle ? styles.show : ''}`}>
            <ul className="list-none flex flex-col justify-end items-start">
              <li><a href="#home" onClick={() => setToggle(false)}>{t('header.home')}</a></li>
              <li><a href="#about" onClick={() => setToggle(false)}>{t('header.about')}</a></li>
              <li><a href="#experience" onClick={() => setToggle(false)}>{t('header.experience')}</a></li>
              <li><a href="#contact" onClick={() => setToggle(false)}>{t('header.contact')}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
