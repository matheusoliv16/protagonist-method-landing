import React from "react";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import "./about.css";
import leo2 from "../../assets/leo2.jpeg";

const About: React.FC = () => {
  return (
    <Section id="about" variant="darker">
      <Container>
        <div className="about__content">
          <div className="about__avatar">
            <img
              src={leo2}
              alt="Leonardo"
              className="about__avatar-img"
              loading="lazy"
            />
          </div>

          <div className="about__text">
            <span className="about__label">Sobre o criador</span>
            <h2 className="about__heading">
              Afinal, quem é o criador do{" "}
              <em>Método Protagonista do Emagrecimento</em>?
            </h2>

            <div className="about__bio">
              <p>
                Leonardo Colaço é nutricionista formado pela Universidade de
                Fortaleza e pós-graduado em nutrição clínica, esportiva e
                interpretação de exames laboratoriais (CRN 16862).
              </p>
              <p>
                Com mais de 4 anos de experiência em consultório, ele se tornou
                especialista em emagrecimento feminino depois de perceber que o
                problema das suas pacientes nunca foi falta de vontade. Foi a
                falta de um método feito pra elas.
              </p>
              <p>
                Foi a partir daí que desenvolveu o Método Protagonista do
                Emagrecimento, criado pra simplificar o processo, respeitar os
                gostos e a rotina de cada paciente e entregar resultados reais
                sem sofrimento. Um método que já transformou a vida de centenas
                de mulheres que haviam tentado de tudo e não conseguiam
                emagrecer.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
