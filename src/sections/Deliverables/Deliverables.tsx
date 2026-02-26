import React from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import './deliverables.css';

const items = [
  {
    icon: '📋',
    title: 'Plano alimentar 100% individualizado',
    description: 'Feito com base nos seus gostos, rotina e realidade. Sem dietas genéricas.',
  },
  {
    icon: '📖',
    title: 'Manual do Protagonista',
    description: 'Guia completo para você entender o método e aplicar com autonomia.',
  },
  {
    icon: '🍽️',
    title: 'Guia de restaurantes de Fortaleza',
    description: 'Coma fora sem culpa. Saiba exatamente o que pedir em cada restaurante.',
  },
  {
    icon: '💬',
    title: 'Acompanhamento pelo WhatsApp',
    description: 'Suporte direto comigo para tirar dúvidas e ajustar o plano sempre que precisar.',
  },
];

const Deliverables: React.FC = () => {
  return (
    <Section id="deliverables" variant="dark">
      <Container>
        <div className="deliverables__content">
          <h2 className="deliverables__heading">
            E para chegar nesse resultado, você vai ter acesso a:
          </h2>

          <div className="deliverables__grid">
            {items.map((item, index) => (
              <div key={index} className="deliverables__card">
                <span className="deliverables__card-icon">{item.icon}</span>
                <h3 className="deliverables__card-title">{item.title}</h3>
                <p className="deliverables__card-desc">{item.description}</p>
              </div>
            ))}
          </div>

          <Button>Quero ter acesso a tudo isso agora</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Deliverables;
