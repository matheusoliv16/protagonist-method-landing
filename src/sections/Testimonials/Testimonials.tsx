import React from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import './testimonials.css';

const testimonials = [
  {
    name: 'Camila S.',
    text: 'Em 3 semanas já tinha perdido 4kg comendo pizza no final de semana. Nunca pensei que fosse possível!',
  },
  {
    name: 'Fernanda M.',
    text: 'Eu já tinha desistido de emagrecer. O Leonardo mudou completamente minha relação com a comida.',
  },
  {
    name: 'Ana Paula R.',
    text: 'O plano é tão personalizado que nem parece dieta. Estou amando os resultados e comendo o que gosto.',
  },
  {
    name: 'Juliana C.',
    text: 'Perdi 7kg em 2 meses sem cortar nada. Meu guarda-roupa inteiro voltou a servir!',
  },
  {
    name: 'Beatriz L.',
    text: 'O acompanhamento pelo WhatsApp faz toda a diferença. Me sinto acolhida e motivada todos os dias.',
  },
  {
    name: 'Mariana T.',
    text: 'Finalmente consegui colocar biquíni sem vergonha. Obrigada, Leonardo! Método incrível.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" variant="dark">
      <Container>
        <div className="testimonials__content">
          <span className="testimonials__label">Resultados Reais</span>
          <h2 className="testimonials__heading">
            Mulheres comuns, assim como você, que <em>aprovaram</em> o método
          </h2>

          <div className="testimonials__grid">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonials__card">
                <div className="testimonials__card-stars" aria-label="5 estrelas">
                  ★★★★★
                </div>
                <p className="testimonials__card-text">"{t.text}"</p>
                <span className="testimonials__card-name">— {t.name}</span>
              </div>
            ))}
          </div>

          <Button size="large">Quero ser a próxima a ter resultados como esses</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
