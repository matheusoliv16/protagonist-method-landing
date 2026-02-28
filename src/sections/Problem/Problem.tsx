import React from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import './problem.css';

const Problem: React.FC = () => {
  return (
    <Section id="problem" variant="darker">
      <Container narrow>
        <div className="problem__content">
          <h2 className="problem__heading">
            Mas primeiro, você precisa entender o motivo de{' '}
            <span className="problem__highlight">não conseguir emagrecer</span>
          </h2>

          <div className="problem__text">
            <p>
              Você já cortou carboidrato, doce, passou fome, se esforçou. E mesmo assim, 
              você não conseguiu chegar naquele corpo que você tanto queria — e se chegou, 
              ganhou todo o peso que tinha perdido.
            </p>
            <p>
              Isso acontece porque quando você fica sem comer o que gosta por muito tempo, 
              o teu corpo não aguenta.
            </p>
            <p>
              O cortisol dispara, o estresse bate e você acaba comendo duas, três vezes mais 
              do que comeria se nunca tivesse cortado nada.
            </p>
          </div>

          <div className="problem__insight">
            <div className="problem__insight-line" aria-hidden="true" />
            <p className="problem__insight-text">
              Então o problema <strong>nunca foi a sua falta de vontade.</strong> Mas sim, 
              um plano alimentar que nunca foi feito pensando em você.
            </p>
          </div>

          <p className="problem__conclusion">
            E quando um plano respeita a tua rotina, os teus gostos e a tua vida, o teu 
            corpo responde diferente e aí que o emagrecimento de verdade começa.
          </p>

          <Button>Quero ter resultados mesmo comendo o que gosto</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Problem;
