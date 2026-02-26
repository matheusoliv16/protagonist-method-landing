import React from 'react';
import Container from '../../components/Container/Container';
import './footer.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__logo">Método Protagonista</span>
            <p className="footer__tagline">Emagreça comendo o que você gosta.</p>
          </div>

          <div className="footer__links">
            <a href="#hero" className="footer__link">Início</a>
            <a href="#method" className="footer__link">O Método</a>
            <a href="#about" className="footer__link">Sobre</a>
            <a href="#faq" className="footer__link">FAQ</a>
          </div>

          <div className="footer__bottom">
            <p className="footer__copy">
              © {year} Leonardo Nutricionista. Todos os direitos reservados.
            </p>
            <p className="footer__disclaimer">
              Este site não faz parte do Facebook ou do Google. Resultados podem variar de pessoa para pessoa.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
