import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
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
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [perPage, setPerPage] = useState(1);
  const [page, setPage] = useState(0);

  // 1 por página no mobile | 2 por página no desktop
  useEffect(() => {
    const compute = () => setPerPage(window.innerWidth >= 1024 ? 2 : 1);
    compute();
    window.addEventListener('resize', compute, { passive: true });
    return () => window.removeEventListener('resize', compute);
  }, []);

  const pages = useMemo(() => {
    const out: Array<typeof testimonials> = [];
    for (let i = 0; i < testimonials.length; i += perPage) {
      out.push(testimonials.slice(i, i + perPage));
    }
    return out;
  }, [perPage]);

  const totalPages = pages.length || 1;

  // garante page válida ao mudar perPage
  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));

    const track = trackRef.current;
    if (!track) return;

    const pageWidth = track.clientWidth || 1;
    track.scrollTo({ left: pageWidth * Math.min(page, totalPages - 1) });
  }, [totalPages, perPage]);

  const scrollToPage = (nextPage: number) => {
    const track = trackRef.current;
    if (!track) return;

    const clamped = Math.max(0, Math.min(nextPage, totalPages - 1));
    const pageWidth = track.clientWidth || 1;

    track.scrollTo({
      left: pageWidth * clamped,
      behavior: 'smooth',
    });

    setPage(clamped);
  };

  const prev = () => scrollToPage(page - 1);
  const next = () => scrollToPage(page + 1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const pageWidth = track.clientWidth || 1;
      const p = Math.round(track.scrollLeft / pageWidth);
      setPage(Math.max(0, Math.min(p, totalPages - 1)));
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [totalPages]);

  const trackStyle = {
    '--per-page': perPage,
  } as React.CSSProperties;

  return (
    <Section id="testimonials" variant="dark">
      <Container>
        <div className="testimonials__content">
          <h2 className="testimonials__heading">
            Se elas conseguiram, você também consegue
          </h2>

          <div className="testimonials__carousel" aria-label="Depoimentos">
            <button
              className="testimonials__nav testimonials__nav--prev"
              onClick={prev}
              aria-label="Depoimento anterior"
              disabled={page === 0}
            >
              ‹
            </button>

            <div
              ref={trackRef}
              className="testimonials__track"
              style={trackStyle}
            >
              {pages.map((group, pageIndex) => (
                <div className="testimonials__page" key={pageIndex}>
                  {group.map((t, i) => (
                    <div key={`${t.name}-${i}`} className="testimonials__card">
                      <div
                        className="testimonials__card-stars"
                        aria-label="5 estrelas"
                      >
                        ★★★★★
                      </div>
                      <p className="testimonials__card-text">{t.text}</p>
                      <span className="testimonials__card-name">
                        — {t.name}
                      </span>
                    </div>
                  ))}

                  {perPage === 2 && group.length === 1 ? (
                    <div
                      className="testimonials__card testimonials__card--ghost"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              ))}
            </div>

            <button
              className="testimonials__nav testimonials__nav--next"
              onClick={next}
              aria-label="Próximo depoimento"
              disabled={page >= totalPages - 1}
            >
              ›
            </button>
          </div>

          <div
            className="testimonials__dots"
            aria-label="Paginação de depoimentos"
          >
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${
                  i === page ? 'is-active' : ''
                }`}
                onClick={() => scrollToPage(i)}
                aria-label={`Ir para página ${i + 1}`}
                aria-current={i === page ? 'true' : 'false'}
              />
            ))}
          </div>

          <Button size="large">
            Quero ser a próxima a ter resultados como esses
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;