import React from "react";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import "./problem.css";

const Problem: React.FC = () => {
  return (
    <Section id="problem" variant="darker">
      <Container narrow>
        <div className="problem__content">
          <h2 className="problem__heading">
            Mas primeiro, você precisa entender o motivo de{" "}
            <span className="problem__highlight">não conseguir emagrecer</span>
          </h2>

          <div className="problem__text">
            <p>
              Você já cortou carboidrato, doce, deixou de comer tudo o que
              gosta, passou fome… fez de tudo. Mas mesmo assim, não conseguiu
              chegar naquele corpo que você tanto queria.
            </p>
            <p>
              <strong>Isso acontece porque</strong> quando você fica sem comer o que gosta por
              muito tempo, o cortisol, hormônio do estresse, dispara e você
              acaba <strong>comendo duas, três vezes mais do que comeria</strong> se nunca
              tivesse cortado nada.
            </p>
            <p>
              Então o problema{" "}
              <strong>nunca foi a sua falta de vontade.</strong> Mas sim, um
              plano alimentar que nunca foi feito pensando em você.
            </p>
            <p className="problem__conclusion">
              E quando um plano respeita a tua rotina, os teus gostos e a tua
              vida, você começa a <strong>emagrecer mais rápido e sem sofrimento.</strong>
            </p>
          </div>
          <Button>QUERO EMAGRECER SEM SOFRIMENTO</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Problem;
