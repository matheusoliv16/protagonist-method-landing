import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import './faq.css';

const faqItems = [
  {
    question: 'Eu realmente posso comer o que gosto e emagrecer?',
    answer: 'Sim! O segredo está no equilíbrio e na individualização do plano. Você não precisa cortar nada, apenas aprender a encaixar os alimentos que ama dentro de uma estratégia inteligente.',
  },
  {
    question: 'Em quanto tempo vou ver resultado?',
    answer: 'A maioria das nossas clientes começa a perceber mudanças já nos primeiros 14 dias. Resultados mais expressivos aparecem entre 30 e 60 dias.',
  },
  {
    question: 'O plano alimentar é genérico?',
    answer: 'Não! O plano é 100% individualizado, feito com base na sua rotina, seus gostos alimentares e sua realidade. Nada de dietas copiadas da internet.',
  },
  {
    question: 'Preciso ir presencialmente?',
    answer: 'Não. Todo o acompanhamento é feito de forma online, pelo WhatsApp. Você pode estar em qualquer lugar do Brasil.',
  },
  {
    question: 'E se eu tiver dúvidas durante o processo?',
    answer: 'Você terá acompanhamento direto pelo WhatsApp para tirar dúvidas, ajustar o plano e receber suporte sempre que precisar.',
  },
  {
    question: 'Funciona para quem já tentou de tudo?',
    answer: 'Especialmente para quem já tentou de tudo! O método é justamente para quem cansou de dietas que não funcionam e quer uma abordagem que respeite sua vida.',
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
                className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
              >
                <button
                  className="faq__question"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{item.question}</span>
                  <span className="faq__icon">{openIndex === index ? '−' : '+'}</span>
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
