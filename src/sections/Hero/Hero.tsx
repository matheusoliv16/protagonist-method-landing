import React from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import leo1 from '../../assets/leo1.jpeg';
import logo from '../../assets/logo.jpeg';
import './hero.css';

const Hero: React.FC = () => {
  return (
    <Section id="hero" variant="dark" className="hero">
      <div className="hero__bg-accent hero__bg-accent--top" aria-hidden="true" />
      <div className="hero__bg-accent hero__bg-accent--bottom" aria-hidden="true" />
      <div className="hero__bg-grid" aria-hidden="true" />

      <Container>
        <div className="hero__row">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">
                Essa é a <em>última vez</em> que você vai tentar emagrecer
              </h1>

              <p className="hero__subtitle">
                Você está prestes a conhecer um{' '}
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
          </div>

          <div className="hero__photo">
            <div className="hero__portrait">
              <img
                className="hero__portrait-image"
                src={leo1}
                alt="Leonardo Colaço"
                loading="eager"
                decoding="async"
              />

              <div className="hero__portrait-vignette" />
              <div className="hero__portrait-bottom-fade" />
              <div className="hero__portrait-glow" />
              <div className="hero__portrait-glass" />

              <div className="hero__portrait-brand">
                <img
                  className="hero__portrait-logo"
                  src={logo}
                  alt="Logo"
                  loading="eager"
                  decoding="async"
                />

                <h3 className="hero__portrait-name">Leonardo Colaço</h3>
                <p className="hero__portrait-role">NUTRICIONISTA</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;