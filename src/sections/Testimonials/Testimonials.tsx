import React from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import './testimonials.css';

const testimonials = [
  {
    name: 'Paciente 1',
    text: 'Oieee! Passando aqui pra dar um feedback super sincero desses 6 meses de acompanhamento (e que continuarão por mais tempo, tenho certeza!)\n\nQuando olho pra todo o processo, desde a 1ª consulta até aqui, é muito nítido que estivemos em várias fases e realidades de vida, rotina, saúde... mas ainda sim, você consegue ser muito flexível e trazer adaptabilidade, sem perder o foco principal.\n\nNunca teve terrorismo nutricional, nunca teve dieta radical, mas a boa e sempre certeira: reeducação alimentar. E consegui atingir meus objetivos, até mais do que pensei conseguir porque tive o apoio e ajuda, fora as mil respostas para as minhas mil dúvidas e curiosidades hahah.\n\nMas o sentimento é de total gratidão e satisfação de ter um nutricionista bem preparado e focado em atingir objetivos junto dos pacientes. Não é à toa que trouxe mais 3 pacientes pro consultório kkkkk.\n\nÉ isso, obrigadaaa!! Vamos voltar com tudo!!',
  },
  {
    name: 'Paciente 2',
    text: 'Quero deixar aqui meu agradecimento ao Leo, que fez toda a diferença nessa minha mudança de hábitos alimentares. Desde o começo, ele teve o cuidado de montar um plano alimentar que se encaixasse de verdade na minha rotina, leve, prático e com refeições tão gostosas que nem parecia que eu estava de dieta.\n\nEle sempre buscou facilitar ao máximo, o que tornou tudo muito mais leve e sustentável. Os materiais de apoio também foram essenciais — cheios de dicas e sugestões que me ajudaram a fazer trocas inteligentes no dia a dia.\n\nCom ele, cuidar da alimentação deixou de ser um peso e virou parte da minha rotina sem restrições ou terrorismo.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" variant="dark">
      <Container>
        <div className="testimonials__content">
          <span className="testimonials__label">Resultados Reais</span>
          <h2 className="testimonials__heading">
            Veja o que <em>pacientes reais</em> dizem sobre o método
          </h2>

          <div className="testimonials__grid">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonials__card">
                <div className="testimonials__card-stars" aria-label="5 estrelas">
                  ★★★★★
                </div>
                <p className="testimonials__card-text">{t.text}</p>
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
