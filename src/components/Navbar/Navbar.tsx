import React, { useState, useEffect, useRef } from 'react';
import Container from '../Container/Container';
import './navbar.css';

const WHATSAPP_LINK =
  'https://wa.me/558592716776?text=Olá%20Leonardo,%20quero%20emagrecer%20comendo%20o%20que%20eu%20gosto';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trava scroll do body quando menu está aberto (mobile)
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Fecha com ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Fecha ao clicar fora do menu (no mobile)
  useEffect(() => {
    if (!menuOpen) return;

    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Container>
        <div className="navbar__inner">
          <a href="#hero" className="navbar__logo" onClick={closeMenu}>
            Método Protagonista
          </a>

          <button
            className={`navbar__toggle ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
          </button>

          {/* overlay (aparece só quando menu aberto; CSS controla) */}
          <div
            className={`navbar__overlay ${menuOpen ? 'navbar__overlay--open' : ''}`}
            aria-hidden="true"
            onClick={closeMenu}
          />

          <div
            ref={menuRef}
            id="mobile-menu"
            className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}
          >
            <button className="navbar__close" onClick={closeMenu} aria-label="Fechar menu">
              ✕
            </button>

            <a href="#problem" className="navbar__link" onClick={closeMenu}>
              O problema
            </a>
            <a href="#painpoints" className="navbar__link" onClick={closeMenu}>
              Você se identifica?
            </a>
            <a href="#method" className="navbar__link" onClick={closeMenu}>
              O Método
            </a>
            <a href="#testimonials" className="navbar__link" onClick={closeMenu}>
              Depoimentos
            </a>
            <a href="#about" className="navbar__link" onClick={closeMenu}>
              Sobre
            </a>
            <a href="#faq" className="navbar__link" onClick={closeMenu}>
              FAQ
            </a>

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