import React from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import './method.css';

const items = [
  {
    icon: '📋',
    title: 'Plano alimentar 100% individualizado',
    description:
      'Feito com os alimentos que você gosta e encaixado na tua rotina. Quando a dieta respeita quem você é, seguir ela deixa de ser um sacrifício e passa a ser algo natural.',
  },
  {
    icon: '📖',
    title: 'Manual do Protagonista',
    description:
      'Um guia com mais de 70 opções de trocas dentro da tua dieta pra que nenhum imprevisto, viagem, jantar fora ou dia corrido seja motivo pra você sair do plano.',
  },
  {
    icon: '🍽️',
    title: 'Guia de restaurantes de Fortaleza',
    description:
      'Com indicações de pratos e combinações nos principais restaurantes, hamburguerias e pizzarias de Fortaleza. Você come fora, aproveita, e continua emagrecendo no dia seguinte como se nada tivesse acontecido.',
  },
  {
    icon: '💬',
    title: 'Acompanhamento pelo WhatsApp',
    description:
      'Leonardo monitora a tua evolução por fotos e mensagens e faz os ajustes necessários no momento certo. Você não vai estar sozinha em nenhum momento do processo.',
  },
];

const Method: React.FC = () => {
  return (
    <Section id="method" variant="darker">
      <Container>
        <div className="method__content">
          <h2 className="method__heading">
            Como o <em>Método Protagonista do Emagrecimento</em> faz teu processo
            de emagrecimento ser mais rápido e sem sofrimento?
          </h2>

          <div className="method__grid">
            {items.map((it, idx) => (
              <div key={idx} className="method__card">
                <span className="method__card-icon" aria-hidden="true">
                  {it.icon}
                </span>
                <h3 className="method__card-title">{it.title}</h3>
                <p className="method__card-desc">{it.description}</p>
              </div>
            ))}
          </div>

          <div className="method__bonus">
            <div className="method__bonus-head">
              <span className="method__bonus-tag">Bônus do nutri</span>
              <h3 className="method__bonus-title">
                Se decidir entrar pro Método Protagonista do Emagrecimento nos
                próximos <strong>6 minutos</strong>, você também ganha:
              </h3>
            </div>

            <div className="method__bonus-card">
              <h4 className="method__bonus-card-title">
                Um e-book com 50 receitas proteicas
              </h4>
              <p className="method__bonus-card-desc">
                De bombom de prestígio a brownie, de cookies a sorvete. Pra você
                nunca mais precisar escolher entre comer o que gosta e
                emagrecer. Porque com esse método, as duas coisas andam juntas.
              </p>
            </div>
          </div>

          <div className="method__cta">
            <Button size="large" className="method__cta-btn">
              Quero aproveitar o presente agora
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Method;