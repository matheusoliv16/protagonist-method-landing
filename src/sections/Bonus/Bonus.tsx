import React from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import './bonus.css';

const bonuses = [
  {
    tag: 'Presente do Nutri',
    title: 'Presente exclusivo do Leonardo',
    description: 'Um presente especial preparado com carinho para quem inicia o método — direto do nutri para você.',
  },
  {
    tag: 'Ebook Exclusivo',
    title: 'Ebook com 50 receitas proteicas',
    description: '50 receitas práticas, saborosas e ricas em proteína para facilitar ainda mais o seu dia a dia.',
  },
];

const Bonus: React.FC = () => {
  return (
    <Section id="bonus" variant="darker">
      <Container narrow>
        <div className="bonus__content">
          <h2 className="bonus__heading">
            E você ainda leva de <em>presente</em>:
          </h2>

          <div className="bonus__list">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bonus__card">
                <span className="bonus__card-tag">{bonus.tag}</span>
                <h3 className="bonus__card-title">{bonus.title}</h3>
                <p className="bonus__card-desc">{bonus.description}</p>
              </div>
            ))}
          </div>

          <Button size="large">Quero aproveitar o presente agora</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Bonus;
