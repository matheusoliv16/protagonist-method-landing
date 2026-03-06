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
      <div className="hero__bg-accent" aria-hidden="true" />

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
            <div className="hero__device">
              <div className="hero__device-bezel">
                <div className="hero__device-screen">
                  <img
                    className="hero__device-image"
                    src={leo1}
                    alt="Leonardo Colaço"
                    loading="eager"
                    decoding="async"
                  />

                  <div className="hero__device-glass" />

                  <div className="hero__device-ui">
                    <div className="hero__device-brand">
                      <img
                        className="hero__device-logo"
                        src={logo}
                        alt="Logo"
                        loading="eager"
                        decoding="async"
                      />

                      <h3 className="hero__device-name">Leonardo Colaço</h3>
                      <p className="hero__device-role">NUTRICIONISTA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero__device-shadow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;