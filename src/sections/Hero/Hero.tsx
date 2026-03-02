import React from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import leo1 from '../../assets/leo1.jpeg';
import './hero.css';

const Hero: React.FC = () => {
  return (
    <Section id="hero" variant="dark" className="hero">
      {/* Fundo APENAS no mobile */}
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

      <div className="hero__bg-accent" aria-hidden="true" />

      <Container>
        <div className="hero__row">
          <div className="hero__text">
            <span className="hero__label">Método Protagonista</span>

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

          {/* Foto “card” para desktop (como era antes) */}
          <div className="hero__photo">
            <img
              className="hero__photo-img"
              src={leo1}
              alt="Léo"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;