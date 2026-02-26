import React from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import './about.css';

const About: React.FC = () => {
  return (
    <Section id="about" variant="darker">
      <Container narrow>
        <div className="about__content">
          <div className="about__avatar">
            <div className="about__avatar-placeholder">L</div>
          </div>

          <div className="about__text">
            <span className="about__label">Sobre o criador</span>
            <h2 className="about__heading">
              Afinal, quem é o criador do <em>Método Protagonista</em> do Emagrecimento?
            </h2>

            <div className="about__bio">
              <p>
                Leonardo é nutricionista apaixonado por transformar a relação das pessoas com a comida. 
                Cansado de ver pacientes sofrendo com dietas restritivas que nunca funcionavam a longo prazo, 
                ele desenvolveu o Método Protagonista do Emagrecimento.
              </p>
              <p>
                Sua abordagem é simples: respeitar a individualidade de cada pessoa. Cada plano é feito 
                sob medida, considerando rotina, gostos alimentares e realidade — para que emagrecer 
                seja algo natural, sem sofrimento e sem abrir mão do que você ama comer.
              </p>
              <p>
                Já ajudou centenas de mulheres em Fortaleza e em todo o Brasil a conquistarem o corpo 
                que sempre quiseram, comendo pizza, doce e hambúrguer no processo.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
