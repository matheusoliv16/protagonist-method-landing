import React from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import './finalcta.css';

const FinalCTA: React.FC = () => {
  return (
    <Section id="finalcta" variant="darker" className="finalcta">
      <div className="finalcta__glow" aria-hidden="true" />
      <Container narrow>
        <div className="finalcta__content">
          <span className="finalcta__label">Sua transformação começa agora</span>
          <h2 className="finalcta__heading">
            Essa é a <em>última vez</em> que você vai tentar emagrecer
          </h2>
          <p className="finalcta__text">
            Pare de sofrer com dietas que não funcionam. Comece o Método Protagonista 
            do Emagrecimento e veja resultados nos primeiros 14 dias — comendo o que você gosta.
          </p>
          <Button size="large">Quero emagrecer comendo o que eu gosto</Button>
        </div>
      </Container>
    </Section>
  );
};

export default FinalCTA;
