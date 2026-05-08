import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { empresa, whatsappLink } from "../data/empresa";
import { segmentos } from "../data/segmentos";
import banner2 from "../assets/banner2.jpg";

import tratamentoAguaImg from "../assets/tratamento2.avif";
import textilImg from "../assets/textil2.jpg";
import alimenticioImg from "../assets/alimenticio2.jpg";
import saneantesImg from "../assets/saneantes2.avif";
import papelImg from "../assets/papel2.avif";
import cosmeticosImg from "../assets/farmaceuticos2.jpg";
import curtumeImg from "../assets/curtume2.jpg";
import agropecuarioImg from "../assets/agropecuario2.avif";

import frotaImg from "../assets/frota.jpeg";

const segmentImages: Record<string, string> = {
  "tratamento-de-agua": tratamentoAguaImg,
  textil: textilImg,
  alimenticio: alimenticioImg,
  saneantes: saneantesImg,
  "papel-celulose": papelImg,
  "cosmeticos-farmaceutico": cosmeticosImg,
  curtume: curtumeImg,
  agropecuario: agropecuarioImg,
};

const stats = [
  { num: "48 anos", label: "de operação contínua" },
  { num: "33+", label: "insumos no catálogo ativo" },
  { num: "9 estados", label: "atendidos no Nordeste" },
  { num: "100%", label: "frota própria, sem terceirização" },
];

const whyCards = [
  {
    n: "01",
    title: "Tradição que opera há 48 anos",
    text: "Quem está abastecendo indústria desde 1977 conhece a urgência de quem produz. Não é promessa de catálogo — é resultado provado.",
  },
  {
    n: "02",
    title: "Frota inteiramente própria",
    text: "Caminhão nosso, motorista nosso, expedição nossa. Sem subcontratação no caminho — porque químico não admite improviso.",
  },
  {
    n: "03",
    title: "Sem camada de revendedor",
    text: "Você fala diretamente com nosso comercial. Cotação, dúvida técnica, ajuste de pedido — pelo mesmo canal, com a mesma pessoa.",
  },
  {
    n: "04",
    title: "Catálogo amplo e segmentado",
    text: "33 insumos cobrindo desde tratamento de água até cosméticos farmacêuticos. Encontre o seu pelo nome, pela fórmula ou pelo segmento.",
  },
];

const steps = [
  {
    n: 1,
    title: "Você descreve o que precisa",
    text: "Pelo WhatsApp, telefone ou formulário no site. Diga produto, quantidade e prazo desejado — quanto mais específico, mais rápido o retorno.",
  },
  {
    n: 2,
    title: "Confirmamos viabilidade e condições",
    text: "Nosso comercial estuda a demanda e retorna com disponibilidade, condições e a melhor opção logística para sua localização.",
  },
  {
    n: 3,
    title: "Entregamos com nossa frota",
    text: "Saída do nosso CD em Vitória de Santo Antão / PE, com motoristas treinados em transporte de produtos perigosos. Em qualquer estado do Nordeste.",
  },
];

const logisticaItems = [
  "Frota equipada para químicos",
  "Motoristas certificados em MOPP",
  "Cobertura nos 9 estados",
  "Saída de PE para o Nordeste todo",
];

const faqs = [
  {
    q: "Como solicito uma cotação?",
    a: "Pelo WhatsApp (resposta mais rápida), telefone ou formulário no site. Você fala diretamente com nosso comercial — não há intermediário, URA ou fila.",
  },
  {
    q: "Vocês entregam fora de Pernambuco?",
    a: "Sim. Atendemos os 9 estados do Nordeste com frota própria, sempre.",
  },
  {
    q: "Atendem pessoa física?",
    a: "Não. Trabalhamos com vendas no atacado para empresas — modelo B2B. Esse foco é o que nos permite entregar a especialização que indústria precisa.",
  },
  {
    q: "Posso receber a FISPQ antes de comprar?",
    a: "Sim. Solicite a Ficha de Informações de Segurança pelo WhatsApp informando o produto desejado.",
  },
  {
    q: "Quais segmentos vocês atendem?",
    a: "Tratamento de água, têxtil, alimentício, saneantes, papel e celulose, cosméticos e farmacêutico, curtume e agropecuário.",
  },
];

function WhySection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".why-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement;
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    cards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(32px)";
      card.style.transitionDelay = `${i * 100}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="ds-row-label">
          <span className="ds-label">Por que Quimitêxtil</span>
        </div>
        <h2
          className="text-[#131b4a] font-display font-bold"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontFamily: "'Oswald', sans-serif",
            marginBottom: "1.25rem",
          }}
        >
          Quatro razões pelas quais a indústria nordestina nos escolhe.
        </h2>
        <p
          className="text-slate-500 font-body max-w-xl"
          style={{ marginBottom: "4rem" }}
        >
          Características que parecem simples — mas que, juntas, são raras no
          mercado de distribuição química.
        </p>

        <div
          ref={gridRef}
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          }}
        >
          {whyCards.map((card) => (
            <div
              key={card.n}
              className="why-card group relative bg-white overflow-hidden cursor-default"
              style={{
                transition:
                  "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.25s ease",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 16px 40px -8px rgba(47,59,146,0.18)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 1px 4px rgba(0,0,0,0.06)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              {/* top accent bar that slides in on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-blue to-brand-orange origin-left scale-x-0 group-hover:scale-x-100"
                style={{ transition: "transform 0.3s ease" }}
                aria-hidden="true"
              />

              {/* ghost number */}
              <div
                aria-hidden="true"
                className="absolute top-3 right-4 font-display font-bold select-none pointer-events-none leading-none"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "6rem",
                  color: "rgba(47,59,146,0.06)",
                  lineHeight: 1,
                }}
              >
                {card.n}
              </div>

              <div className="p-8 relative z-10">
                {/* numbered badge */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-8 rounded-full bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center font-label font-bold text-brand-orange text-xs">
                    {card.n}
                  </span>
                  <div
                    className="flex-1 h-px bg-slate-100 group-hover:bg-brand-orange/20"
                    style={{ transition: "background 0.3s" }}
                    aria-hidden="true"
                  />
                </div>

                <h3
                  className="font-display font-bold text-[#131b4a] group-hover:text-brand-blue transition-colors"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: 1.2,
                    marginBottom: "1rem",
                  }}
                >
                  {card.title}
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const segmentIcons: Record<string, React.ReactNode> = {
  "tratamento-de-agua": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path d="M12 2C6.5 2 2 8.5 2 13a10 10 0 0 0 20 0c0-4.5-4.5-11-10-11z" />
      <path d="M12 18v-6" />
      <path d="M9 15l3 3 3-3" />
    </svg>
  ),
  textil: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M3 12h4M17 12h4M12 3v4M12 17v4" />
      <path d="M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  ),
  alimenticio: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path d="M12 2a9 9 0 0 0-9 9v2a9 9 0 0 0 18 0v-2a9 9 0 0 0-9-9z" />
      <path d="M8 13s.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01M15 9h.01" />
    </svg>
  ),
  saneantes: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path d="M9 3h6l1 4H8L9 3z" />
      <path d="M8 7v13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7" />
      <path d="M10 11h4M10 15h4" />
    </svg>
  ),
  "papel-celulose": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  ),
  "cosmeticos-farmaceutico": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path d="M9 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3" />
      <rect x="9" y="1" width="6" height="4" rx="1" />
      <path d="M12 11v6M9 14h6" />
    </svg>
  ),
  curtume: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  agropecuario: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path d="M12 22V12" />
      <path d="M12 12C12 12 7 10 7 5a5 5 0 0 1 10 0c0 5-5 7-5 7z" />
      <path d="M12 12C12 12 17 14 19 19" />
    </svg>
  ),
};




function SegmentosSection() {
  const [active, setActive] = useState(segmentos[0]);
  const [visible, setVisible] = useState(true);

  function handleSelect(seg: (typeof segmentos)[0]) {
    if (seg.slug === active.slug) return;
    setVisible(false);
    setTimeout(() => {
      setActive(seg);
      setVisible(true);
    }, 200);
  }

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="mb-14">
          <div className="ds-row-label">
            <span className="ds-label">Setores atendidos</span>
          </div>
          <h2
            className="text-[#131b4a] font-display font-bold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontFamily: "'Oswald', sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            Para quem produz, em qualquer escala industrial.
          </h2>
          <p
            className="text-slate-500 font-body max-w-xl"
            style={{ marginBottom: "1rem" }}
          >
            Da têxtil — onde tudo começou em 1977 — ao tratamento de água.
            Clique no setor para conhecer a linha de insumos.
          </p>
        </div>

        {/* Mobile-only sector selector */}
        <div className="lg:hidden mb-0">
          <div className="relative">
            <select
              value={active.slug}
              onChange={(e) => {
                const seg = segmentos.find((s) => s.slug === e.target.value);
                if (seg) handleSelect(seg);
              }}
              style={{
                width: "100%",
                border: "1px solid #e2e8f0",
                borderBottom: "none",
                borderRadius: "8px 8px 0 0",
                padding: "12px 40px 12px 16px",
                fontSize: "1rem",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                color: "#131b4a",
                background: "white",
                appearance: "none",
                WebkitAppearance: "none",
                outline: "none",
              }}
            >
              {segmentos.map((seg) => (
                <option key={seg.slug} value={seg.slug}>
                  {seg.nome}
                </option>
              ))}
            </select>
            <div
              style={{
                pointerEvents: "none",
                position: "absolute",
                top: 0,
                right: "12px",
                bottom: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#2F3B92"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* interactive showcase */}
        <div
          className="grid lg:grid-cols-[320px_1fr] gap-0 border border-slate-200 overflow-hidden"
          style={{ minHeight: "480px", borderRadius: "0 0 0 0" }}
        >
          {/* left: sector list — desktop only */}
          <div className="hidden lg:flex flex-col border-r border-slate-200">
            {segmentos.map((seg, i) => {
              const isActive = seg.slug === active.slug;
              return (
                <button
                  key={seg.slug}
                  onClick={() => handleSelect(seg)}
                  className="group relative flex items-center gap-4 px-6 py-5 text-left w-full"
                  style={{
                    background: isActive ? "#edf1fc" : "white",
                    borderBottom:
                      i < segmentos.length - 1 ? "1px solid #e2e8f0" : "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.background =
                        "#f8f9fe";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.background =
                        "white";
                  }}
                >
                  {/* active indicator bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px]"
                    style={{
                      background: isActive ? "#df5342" : "transparent",
                      transition: "background 0.2s",
                    }}
                    aria-hidden="true"
                  />

                  {/* small icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isActive ? "#2F3B92" : "rgba(47,59,146,0.07)",
                      color: isActive ? "white" : "#df5342",
                      transition: "background 0.2s, color 0.2s",
                    }}
                  >
                    {segmentIcons[seg.slug]}
                  </div>

                  {/* text */}
                  <div className="min-w-0">
                    <p
                      className="font-display font-bold leading-tight truncate"
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "0.95rem",
                        color: isActive ? "#2F3B92" : "#131b4a",
                        transition: "color 0.2s",
                      }}
                    >
                      {seg.nome}
                    </p>
                    <p className="text-slate-400 font-body text-xs mt-0.5 leading-snug line-clamp-1">
                      {seg.descricaoCurta}
                    </p>
                  </div>

                  {/* chevron */}
                  <svg
                    className="w-4 h-4 flex-shrink-0 ml-auto"
                    style={{
                      color: isActive ? "#2F3B92" : "#cbd5e1",
                      transition: "color 0.2s",
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* right: image placeholder */}
          <div
            className="relative overflow-hidden flex flex-col justify-end"
            style={{
              backgroundImage: `url(${segmentImages[active.slug]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* grid texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden="true"
            />

            {/* placeholder badge */}
            <div
              className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"
                aria-hidden="true"
              />
              <span className="font-label text-white/60 text-[0.6rem] uppercase tracking-widest">
                Placeholder
              </span>
            </div>

            {/* bottom info bar */}
            <div
              className="relative z-10 p-8"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <p className="font-label text-white/50 text-[0.65rem] uppercase tracking-widest mb-2">
                Setor ·{" "}
                {String(
                  segmentos.findIndex((s) => s.slug === active.slug) + 1,
                ).padStart(2, "0")}{" "}
                / {String(segmentos.length).padStart(2, "0")}
              </p>
              <h3
                className="font-display font-bold text-white"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  marginBottom: "0.75rem",
                }}
              >
                {active.nome}
              </h3>
              <p
                className="text-white/70 font-body text-sm leading-relaxed max-w-md"
                style={{ marginBottom: "1.75rem" }}
              >
                {active.descricaoCurta}
              </p>
              <Link
                to={`/segmentos/${active.slug}`}
                className="inline-flex items-center gap-2 font-label font-bold text-sm uppercase tracking-wide px-5 py-2.5 rounded"
                style={{
                  background: "#df5342",
                  color: "white",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#c94733";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#df5342";
                }}
              >
                Ver insumos do setor
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-[85vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        {/* Overlay para escurecer a imagem e o texto ficar legível */}
        <div
          className="absolute inset-0 bg-[#131b4a]/75 z-0"
          aria-hidden="true"
        />

        {/* Detalhe da barra laranja na lateral esquerda (opcional, mantendo o design original) */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange z-20"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
          <div className="max-w-3xl">
            <div className="ds-eyebrow" style={{ marginBottom: "1.75rem" }}>
              {empresa.anos} anos no mercado · Atendemos todo o Nordeste
            </div>
            <h1
              className="text-white font-display font-bold leading-[0.95]"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "-0.01em",
                marginBottom: "2rem",
              }}
            >
              A química que abastece
              <br />
              <span className="text-brand-orange">
                a indústria do Nordeste.
              </span>
              <br />
              Desde 1977.
            </h1>
            <p
              className="text-white/70 text-lg font-body leading-relaxed max-w-2xl"
              style={{ marginBottom: "3rem" }}
            >
              Distribuição direta de{" "}
              <strong className="text-white">
                mais de 30 insumos químicos
              </strong>{" "}
              para 8 setores industriais — com{" "}
              <strong className="text-white">frota própria</strong>,{" "}
              <strong className="text-white">
                atendimento sem intermediário
              </strong>{" "}
              e o compromisso de quem está aqui há quase meio século.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappLink(
                  "Olá! Vim pelo site da Quimitêxtil e gostaria de solicitar uma cotação.",
                )}
                target="_blank"
                rel="noreferrer"
                className="ds-btn-primary"
              >
                {/* ... SVG do Whatsapp ... */}
                Solicitar cotação
              </a>
              <Link to="/catalogo" className="ds-btn-ghost">
                Ver catálogo completo
              </Link>
            </div>
          </div>
        </div>

        {/* Linha decorativa no rodapé do hero */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"
          aria-hidden="true"
        />
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-2 lg:grid-cols-4 bg-[#F4F5F9]"
            style={{ gap: "1px" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white px-8 py-10 relative group"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  aria-hidden="true"
                />
                <div className="ds-stat-num mb-2">{stat.num}</div>
                <div className="ds-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que Quimitêxtil */}
      <WhySection />

      {/* Segmentos */}
      <SegmentosSection />

      {/* Como funciona */}
      <section className="bg-[#F4F5F9] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-row-label">
            <span className="ds-label">Processo de compra</span>
          </div>
          <h2
            className="text-[#131b4a] font-display font-bold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontFamily: "'Oswald', sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            Da cotação à entrega: três passos. Sem rodeios.
          </h2>
          <p
            className="text-slate-500 font-body max-w-xl"
            style={{ marginBottom: "3.5rem" }}
          >
            Cotar com a Quimitêxtil é direto. Sem cadastro obrigatório. Sem
            fila.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">
            {steps.map((step, i) => {
              const icons = [
                /* chat/message */
                <svg
                  key="chat"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>,
                /* clipboard check */
                <svg
                  key="clip"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>,
                /* truck */
                <svg
                  key="truck"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1.5.5M13 16l1.5.5M13 16H3m10 0h4.586a1 1 0 00.707-.293l2.414-2.414A1 1 0 0021 12.586V11a2 2 0 00-2-2h-2m-4-3H9M7 16h.01" />
                </svg>,
              ];
              return (
                <div
                  key={step.n}
                  className="relative bg-white p-8 overflow-hidden group cursor-default"
                  style={{ transition: "box-shadow 0.25s, transform 0.25s" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "0 12px 32px rgba(47,59,146,0.13)";
                    el.style.transform = "translateY(-4px)";
                    el.style.zIndex = "2";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "";
                    el.style.transform = "";
                    el.style.zIndex = "";
                  }}
                >
                  {/* watermark number */}
                  <div
                    className="absolute -bottom-5 -right-3 font-display font-bold leading-none select-none pointer-events-none"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "9rem",
                      color: "rgba(47,59,146,0.05)",
                    }}
                    aria-hidden="true"
                  >
                    {step.n}
                  </div>

                  {/* top orange bar — slides in on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] bg-brand-orange origin-left"
                    style={{
                      transform: "scaleX(0)",
                      transition: "transform 0.3s ease",
                    }}
                    ref={(el) => {
                      if (el) {
                        const parent = el.closest(
                          ".group",
                        ) as HTMLElement | null;
                        parent?.addEventListener("mouseenter", () => {
                          el.style.transform = "scaleX(1)";
                        });
                        parent?.addEventListener("mouseleave", () => {
                          el.style.transform = "scaleX(0)";
                        });
                      }
                    }}
                    aria-hidden="true"
                  />

                  {/* step number + icon row */}
                  <div className="flex items-start justify-between mb-6">
                    <span
                      className="font-display font-bold leading-none"
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "3.5rem",
                        color: "#df5342",
                        transition: "color 0.25s",
                      }}
                      ref={(el) => {
                        if (el) {
                          const parent = el.closest(
                            ".group",
                          ) as HTMLElement | null;
                          parent?.addEventListener("mouseenter", () => {
                            el.style.color = "#2F3B92";
                          });
                          parent?.addEventListener("mouseleave", () => {
                            el.style.color = "#df5342";
                          });
                        }
                      }}
                    >
                      0{step.n}
                    </span>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(223,83,66,0.08)",
                        color: "#df5342",
                        transition: "background 0.25s, color 0.25s",
                      }}
                      ref={(el) => {
                        if (el) {
                          const parent = el.closest(
                            ".group",
                          ) as HTMLElement | null;
                          parent?.addEventListener("mouseenter", () => {
                            el.style.background = "rgba(47,59,146,0.08)";
                            el.style.color = "#2F3B92";
                          });
                          parent?.addEventListener("mouseleave", () => {
                            el.style.background = "rgba(223,83,66,0.08)";
                            el.style.color = "#df5342";
                          });
                        }
                      }}
                    >
                      {icons[i]}
                    </div>
                  </div>

                  {/* divider */}
                  <div
                    className="w-10 h-px bg-slate-200 mb-5 group-hover:w-16 group-hover:bg-brand-orange"
                    style={{ transition: "width 0.3s, background 0.3s" }}
                  />

                  {/* content */}
                  <h3
                    className="font-display font-semibold text-[#131b4a] text-xl leading-snug"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      marginBottom: "1rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-slate-500 font-body text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logística */}
      <section className="bg-[#0e1540] relative overflow-hidden">
        {/* decorative grid lines */}
        <div
          className="absolute inset-0 ds-grid-texture opacity-50"
          aria-hidden="true"
        />
        {/* orange accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange"
          aria-hidden="true"
        />

        {/* Desktop: two-column grid with photo */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:min-h-[520px] max-w-7xl mx-auto">
          {/* LEFT — image placeholder */}
          <div className="relative overflow-hidden">
            {/* Substituímos o gradiente e o SVG pela imagem real */}
            <img
              src={frotaImg}
              alt="Frota Quimitêxtil"
              className="absolute inset-0 w-full h-full object-cover border-r border-white/5"
            />

            {/* Overlay suave opcional: para manter o texto legível se a foto for muito clara */}
            <div
              className="absolute inset-0 bg-[#0e1540]/20"
              aria-hidden="true"
            />

            {/* Mantemos o detalhe laranja no canto */}
            <div
              className="absolute bottom-0 left-0 w-24 h-24 bg-brand-orange/10 blur-2xl"
              aria-hidden="true"
            />
          </div>
          {/* RIGHT — content (desktop) */}
          <div className="relative z-10 flex flex-col justify-center px-14 py-16">
            {/* eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-brand-orange" aria-hidden="true" />
              <span className="font-label text-xs tracking-widest uppercase text-brand-orange">
                Logística própria
              </span>
            </div>

            <h2
              className="text-white font-display font-bold mb-5 leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontFamily: "'Oswald', sans-serif",
              }}
            >
              Frota nossa.
              <br />
              Motorista nosso.
              <br />
              <span className="text-brand-orange">Risco menor.</span>
            </h2>

            <p className="text-white/60 font-body text-base leading-relaxed mb-8 max-w-md">
              Em distribuição química industrial, terceirização é onde o prazo
              se perde. Por isso operamos com estrutura logística 100% própria —
              da expedição à porta do seu galpão.
            </p>

            {/* feature pills */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {logisticaItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded px-3 py-2.5 hover:border-brand-orange/40 transition-colors"
                >
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-white/80 font-body text-sm leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link to="/logistica" className="ds-btn-primary">
                Conhecer nossa estrutura logística →
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile: single-column com foto abaixo do título (mesma imagem do desktop) */}
        <div className="lg:hidden px-6 py-12 relative z-10">
          {/* eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-px bg-brand-orange" aria-hidden="true" />
            <span className="font-label text-xs tracking-widest uppercase text-brand-orange">
              Logística própria
            </span>
          </div>

          <h2
            className="text-white font-display font-bold mb-5 leading-tight"
            style={{
              fontSize: "clamp(2rem, 8vw, 3rem)",
              fontFamily: "'Oswald', sans-serif",
            }}
          >
            Frota nossa.
            <br />
            Motorista nosso.
            <br />
            <span className="text-brand-orange">Risco menor.</span>
          </h2>

          <div
            className="relative w-full overflow-hidden rounded-sm border border-white/10 mb-8"
            style={{ aspectRatio: "16 / 10", maxHeight: "min(42vh, 340px)" }}
          >
            <img
              src={frotaImg}
              alt="Frota Quimitêxtil"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-[#0e1540]/20 pointer-events-none"
              aria-hidden="true"
            />
          </div>

          <p className="text-white/60 font-body text-base leading-relaxed mb-8">
            Em distribuição química industrial, terceirização é onde o prazo se
            perde. Por isso operamos com estrutura logística 100% própria — da
            expedição à porta do seu galpão.
          </p>

          {/* feature pills — single column on mobile */}
          <div className="flex flex-col gap-3 mb-10">
            {logisticaItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded px-4 py-3"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-white/80 font-body text-sm">{item}</p>
              </div>
            ))}
          </div>

          <Link
            to="/logistica"
            className="ds-btn-primary w-full"
            style={{ justifyContent: "center" }}
          >
            Conhecer nossa estrutura logística →
          </Link>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          aria-hidden="true"
        />
      </section>

      {/* FAQ Rápido */}
      <section className="bg-[#F4F5F9] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
            {/* left: sticky heading */}
            <div className="lg:sticky lg:top-24">
              <div className="ds-row-label">
                <span className="ds-label">Dúvidas frequentes</span>
              </div>
              <h2
                className="text-[#131b4a] font-display font-bold"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontFamily: "'Oswald', sans-serif",
                  marginBottom: "1.25rem",
                }}
              >
                Dúvidas que costumam aparecer antes de cotar.
              </h2>
              <p
                className="text-slate-500 font-body text-sm leading-relaxed"
                style={{ marginBottom: "2rem" }}
              >
                Respostas curtas. Para o resto, tem o WhatsApp.
              </p>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 text-brand-blue font-label font-bold text-sm hover:text-brand-orange transition-colors"
              >
                Ver todas as perguntas
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* right: accordion */}
            <div className="flex flex-col gap-2">
              {faqs.map((faq, i) => (
                <details
                  key={faq.q}
                  className="group/faq bg-white overflow-hidden"
                  style={{
                    border: "1px solid rgba(47,59,146,0.08)",
                    borderRadius: "4px",
                  }}
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none"
                    style={{ WebkitUserSelect: "none" }}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="font-label font-bold text-[0.6rem] tracking-widest flex-shrink-0"
                        style={{ color: "rgba(47,59,146,0.3)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="font-body font-semibold text-[#131b4a] text-sm leading-snug group-open/faq:text-brand-blue"
                        style={{ transition: "color 0.2s" }}
                      >
                        {faq.q}
                      </span>
                    </div>
                    <svg
                      className="w-4 h-4 flex-shrink-0 text-brand-blue group-open/faq:rotate-180"
                      style={{ transition: "transform 0.25s" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  {/* left accent bar on open */}
                  <div className="relative">
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-orange"
                      aria-hidden="true"
                    />
                    <p
                      className="font-body text-sm text-slate-500 leading-relaxed pl-8"
                      style={{ padding: "0.75rem 1.5rem 1.5rem 2rem" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-brand-orange ds-grid-texture relative overflow-hidden py-20">
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div
            className="ds-eyebrow mx-auto"
            style={{
              background: "rgba(255,255,255,0.15)",
              borderColor: "rgba(255,255,255,0.3)",
              color: "white",
              marginBottom: "2rem",
            }}
          >
            Cotação direta
          </div>
          <h2
            className="text-white font-display font-bold"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontFamily: "'Oswald', sans-serif",
              marginBottom: "1.5rem",
            }}
          >
            Tem um pedido pra cotar?
          </h2>
          <p
            className="text-white/80 font-body text-lg text-center"
            style={{ marginBottom: "3rem" }}
          >
            Mande sua lista pelo WhatsApp. Resposta direta, sem formulário
            longo, sem espera.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={whatsappLink(
                "Olá! Tenho um pedido para cotar com a Quimitêxtil.",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-orange font-label font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg hover:bg-white/90 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Cotar pelo WhatsApp
            </a>
            <a
              href={`tel:${empresa.telefone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-label font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Ligar agora — {empresa.telefone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
