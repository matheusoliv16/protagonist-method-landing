import React, { useState, useEffect } from 'react';
import Container from '../Container/Container';
import './navbar.css';

const WHATSAPP_LINK =
  'https://wa.me/558592716776?text=Olá%20Leonardo,%20quero%20emagrecer%20comendo%20o%20que%20eu%20gosto';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Container>
        <div className="navbar__inner">
          <a href="#hero" className="navbar__logo">Método Protagonista</a>

          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
          </button>

          <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
            <a href="#method" className="navbar__link" onClick={closeMenu}>O Método</a>
            <a href="#deliverables" className="navbar__link" onClick={closeMenu}>Entregáveis</a>
            <a href="#testimonials" className="navbar__link" onClick={closeMenu}>Depoimentos</a>
            <a href="#about" className="navbar__link" onClick={closeMenu}>Sobre</a>
            <a href="#faq" className="navbar__link" onClick={closeMenu}>FAQ</a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cta"
              onClick={closeMenu}
            >
              Fale comigo
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
