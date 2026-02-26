import React from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import './method.css';

const steps = [
  {
    number: '01',
    title: 'Baseado na sua rotina',
    description: 'Todo o plano alimentar é feito com base na tua rotina, nos teus gostos alimentares e da tua realidade.',
  },
  {
    number: '02',
    title: 'Fácil de seguir',
    description: 'Fica muito mais fácil de seguir, e você acaba emagrecendo mais rápido — sem reganhar o peso que perdeu.',
  },
  {
    number: '03',
    title: 'Resultados em 14 dias',
    description: 'Já nos primeiros 14 dias você começa a ver resultado no espelho e na balança.',
  },
];

const Method: React.FC = () => {
  return (
    <Section id="method" variant="darker">
      <Container narrow>
        <div className="method__content">
          <h2 className="method__heading">
            E como o <em>Método Protagonista</em> faz teu processo de emagrecimento ser mais rápido?
          </h2>

          <p className="method__intro">
            Isso acontece porque todo o plano alimentar do método é feito com base na tua rotina, 
            nos teus gostos alimentares e da tua realidade. Ou seja: fica muito mais fácil de seguir, 
            e você acaba emagrecendo mais rápido — sem reganhar o peso que perdeu.
          </p>

          <div className="method__steps">
            {steps.map((step) => (
              <div key={step.number} className="method__step">
                <span className="method__step-number">{step.number}</span>
                <div className="method__step-content">
                  <h3 className="method__step-title">{step.title}</h3>
                  <p className="method__step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="method__cta">
            <p className="method__cta-highlight">
              E já nos primeiros <strong>14 dias</strong> você começa a ver resultado.
            </p>
            <Button size="large">Quero ter resultados nos primeiros 14 dias</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Method;
