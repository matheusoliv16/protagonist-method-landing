import React from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import './painpoints.css';

const painPoints = [
  'Não ir mais à praia por não conseguir colocar um biquíni',
  'Tirar foto, não gostar, tirar de novo e no final não postar nenhuma',
  'Abrir o guarda-roupa e fechar sem usar a roupa que você mais ama porque não serve mais',
  'Tentar emagrecer e não conseguir',
];

const PainPoints: React.FC = () => {
  return (
    <Section id="painpoints" variant="dark">
      <Container narrow>
        <div className="painpoints__content">
          <h2 className="painpoints__heading">
            Então se você <em>cansou</em> de...
          </h2>

          <ul className="painpoints__list">
            {painPoints.map((point, index) => (
              <li key={index} className="painpoints__item">
                <span className="painpoints__icon" aria-hidden="true">✕</span>
                <span className="painpoints__text">{point}</span>
              </li>
            ))}
          </ul>

          <div className="painpoints__cta-block">
            <p className="painpoints__cta-text">
              Então o <strong>Método Protagonista do Emagrecimento</strong> foi feito pra você.
            </p>
            <Button size="large">Quero emagrecer de uma vez por todas</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PainPoints;
