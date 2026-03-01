import React from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import leo1 from '../../assets/leo1.jpeg';
import './hero.css';

const Hero: React.FC = () => {
  return (
    <Section id="hero" variant="dark" className="hero">
      {/* imagem vira “bg” no mobile */}
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__media-img"
          src={leo1}
          alt=""
          loading="eager"
          decoding="async"
        />
        <div className="hero__media-overlay" />
      </div>

      <Container>
        <div className="hero__row">
          <div className="hero__text">

            <h1 className="hero__title">
              Essa é a <em>última vez</em> que você vai tentar emagrecer
            </h1>

            <p className="hero__subtitle">
              Isso porque você está prestes a conhecer um{' '}
              <strong className="hero__subtitle-strong">
                jeito que te permite comer doce, pizza e hambúrguer e continuar
                emagrecendo ao mesmo tempo
              </strong>
              .
            </p>

            <Button size="large" className="hero__cta">
              Quero emagrecer comendo o que eu gosto
            </Button>
          </div>

          {/* foto “card” só no desktop */}
          <div className="hero__photo" aria-hidden="true">
            <img
              className="hero__photo-img"
              src={leo1}
              alt="Léo"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* seta pra baixo (mobile) */}
        <a className="hero__scroll" href="#about" aria-label="Role para ver mais">
          <span className="hero__scroll-icon">↓</span>
        </a>
      </Container>
    </Section>
  );
};

export default Hero;