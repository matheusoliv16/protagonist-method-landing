import React from "react";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import "./painpoints.css";

const painPoints = [
  "Tentar emagrecer e não conseguir",
  "Não ir mais a praia por ter vergonha de vestir biquíni",
  "Tirar várias fotos e acabar não postando nenhuma",
  "Abrir o guarda-roupa e fechar sem usar aquela roupa que você queria",
];

const PainPoints: React.FC = () => {
  return (
    <Section id="painpoints" variant="dark">
      <Container narrow>
        <div className="painpoints__content">
          <h2 className="painpoints__heading">
            Então se você <em>está cansada</em> de…
          </h2>

          <ul className="painpoints__list">
            {painPoints.map((point, index) => (
              <li key={index} className="painpoints__item">
                <span className="painpoints__icon" aria-hidden="true">
                  ✕
                </span>
                <span className="painpoints__text">{point}</span>
              </li>
            ))}
          </ul>

          <div className="painpoints__cta-block">
            <p className="painpoints__cta-lead">
              E quer emagrecer e finalmente perder aquela gordurinha na barriga
              sem precisar sofrer com dieta ruim?
            </p>

            <p className="painpoints__cta-proof">
              O Método Protagonista do Emagrecimento é para <strong>VOCÊ</strong>.
            </p>

            <Button size="large" className="painpoints__cta-btn">
              Quero perder a pochete de uma vez por todas
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PainPoints;