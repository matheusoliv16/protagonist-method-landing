import React, { useState } from "react";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import "./faq.css";

const faqItems = [
  {
    question: "Como funciona a consultoria com o Leonardo Colaço?",
    answer:
      "O atendimento é individualizado e feito em cima da tua rotina, dos teus gostos e da tua realidade. A partir disso, Leonardo cria um plano alimentar personalizado pra te ajudar a emagrecer sem abrir mão do que você gosta.",
  },
  {
    question: "Vou precisar cortar tudo que gosto de comer?",
    answer:
      "Não. O Método Protagonista foi criado exatamente pra acabar com isso. O teu plano é feito incluindo os alimentos que você gosta, pra que você consiga seguir sem sofrimento e ter resultados duradouros.",
  },
  {
    question: "Em quanto tempo vou começar a ver resultado?",
    answer:
      "As pacientes já começam a sentir diferença nos primeiros 14 dias seguindo o plano.",
  },
  {
    question: "O atendimento é presencial ou online?",
    answer:
      "As duas opções estão disponíveis. Você escolhe o formato que melhor se encaixa na tua rotina.",
  },
  {
    question: "Depois da consulta há acompanhamento contínuo?",
    answer:
      "Sim. O acompanhamento é parte do processo pra garantir que os ajustes necessários sejam feitos e que o teu resultado continue evoluindo.",
  },
  {
    question:
      "Já tentei várias dietas e nunca funcionou. Esse método vai ser diferente?",
    answer:
      "Sim, porque as outras dietas foram feitas pra todo mundo. O Método Protagonista é feito pra você, pro teu corpo, pra tua rotina e pros teus gostos. É isso que muda tudo.",
  },
  {
    question: "Tomo Mounjaro, preciso de acompanhamento nutricional?",
    answer:
      "Sim. O Mounjaro acelera o emagrecimento, mas sem um plano alimentar feito pra você, seu corpo perde músculo junto com gordura, fica flácido e quando o tratamento acabar você corre o risco de reganhar tudo que perdeu. O acompanhamento com Leonardo garante que você emagreça do jeito certo, preservando massa muscular e conquistando um resultado duradouro. Vale lembrar: Leonardo não prescreve nem vende medicações. O trabalho dele é garantir que a tua alimentação potencialize os teus resultados.",
  },
  {
    question: "Como faço pra começar?",
    answer:
      "É só clicar no botão abaixo e entrar em contato com Leonardo. Ele vai te explicar tudo e criar o teu plano personalizado.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" variant="dark">
      <Container narrow>
        <div className="faq__content">
          <h2 className="faq__heading">Perguntas frequentes</h2>

          <div className="faq__list">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`faq__item ${openIndex === index ? "faq__item--open" : ""}`}
              >
                <button
                  className="faq__question"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{item.question}</span>
                  <span className="faq__icon">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <Button size="large">Quero emagrecer comendo o que eu gosto</Button>
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
