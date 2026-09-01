import { useRef, useEffect, useState, type ReactElement, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { whatsappLink, empresa, socios } from "../data/empresa";

import logoQuimitextil from "../assets/logo_quimitextil-removebg-preview.png";
import heroSobre from "../assets/industrial_facility_exterior_v2.jpg";

const timeline = [
  {
    ano: "1977",
    title: "Fundação",
    text: "A Quimitêxtil é idealizada e fundada pelo empresário Alexandre Moura Vasconcelos, em Vitória de Santo Antão / PE, com a missão de atender e superar as expectativas dos clientes.",
    color: "bg-brand-blue",
  },
  {
    ano: "Início",
    title: "Comércio e Representação",
    text: "A empresa nasce como Quimitêxtil Comércio e Representação, voltada exclusivamente para a indústria têxtil pernambucana.",
    color: "bg-brand-orange",
  },
  {
    ano: "Anos 1980",
    title: "A virada",
    text: "Com a crise que acomete o mercado têxtil, Alexandre Vasconcelos entende que era o momento de expandir e, com capital próprio, inicia a distribuição e comercialização de produtos químicos para outros segmentos.",
    color: "bg-brand-blue",
  },
  {
    ano: "Expansão",
    title: "Além da têxtil",
    text: "De fornecedora de um único setor, a Quimitêxtil se torna fornecedora para todo o mercado industrial, com atuação como distribuidora, importadora e revendedora para o Nordeste.",
    color: "bg-brand-orange",
  },
  {
    ano: "Estrutura",
    title: "Investimento contínuo",
    text: "A preocupação em antecipar as demandas do mercado sustenta investimentos contínuos e planos estratégicos na área de logística, com soluções personalizadas para cada cliente.",
    color: "bg-brand-blue",
  },
  {
    ano: "Hoje",
    title: "A casa segue de pé",
    text: "56 produtos em catálogo, seis estados atendidos e distribuição de marcas como Esseco, Lonza e Saporiti, movidos pelo mesmo princípio fundador.",
    color: "bg-brand-orange",
  },
];

const valores = [
  "Ética e profissionalismo em cada negociação.",
  "Confiança e transparência nos negócios.",
  "Lucratividade com crescimento sustentável.",
  "Responsabilidade socioambiental.",
  "Sua preferência acompanha o nosso tempo.",
];

import galpao from "../assets/galpao.jpeg";
import frota from "../assets/home-frota-aerea.jpg";
import vistaAerea from "../assets/home-aerea-desktop.jpg";

const certs = [
  {
    nome: "CPRH",
    desc: "Licença de Operação · válida até 02/08/2031",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75M10.5 21h3M12 10.5a6 6 0 00-6 6v1.5m6-7.5a6 6 0 016 6v1.5m-6-7.5c0-3 1.5-7.5 6-7.5m-12 0c4.5 0 6 4.5 6 7.5" />
      </svg>
    ),
    color: "#059669",
    bg: "rgba(5,150,105,0.09)",
  },
  {
    nome: "Polícia Federal",
    desc: "Certificado de Licença de Funcionamento · até 03/08/2027",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M12 3l7.5 3v5.25c0 4.28-3.2 8.28-7.5 9.75-4.3-1.47-7.5-5.47-7.5-9.75V6L12 3z" />
        <path d="M9.75 12l1.5 1.5 3-3.75" />
      </svg>
    ),
    color: "#2F3B92",
    bg: "rgba(47,59,146,0.09)",
  },
  {
    nome: "IBAMA",
    desc: "Certificado de Regularidade CTF/APP · até 09/10/2026",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
      </svg>
    ),
    color: "#df5342",
    bg: "rgba(223,83,66,0.09)",
  },
  {
    nome: "MOPP",
    desc: "4 motoristas certificados para produtos perigosos",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    color: "#d97706",
    bg: "rgba(217,119,6,0.09)",
  },
];

// ─── Timeline icons ────────────────────────────────────────────────────────
const TimelineIcons: Record<string, ReactElement> = {
  "1977": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M2.25 21h19.5m-18-18v18m2.25-18v18M15.75 3v18m2.25-18v18M6 6.75h.75m-.75 3h.75m-.75 3h.75m3-6H10.5m-.75 3h.75m-.75 3h.75M6 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008H17.25V10.5z" />
    </svg>
  ),
  "Início": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  ),
  "Anos 1980": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
    </svg>
  ),
  "Expansão": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
    </svg>
  ),
  "Estrutura": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
  Hoje: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
};

function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".tl-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateX(0) translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#0e1540", padding: "5rem 0" }}
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 ds-grid-texture opacity-30"
        aria-hidden="true"
      />
      {/* Left orange accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange"
        aria-hidden="true"
      />
      {/* Decorative glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(47,59,146,0.25) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0%",
          left: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(223,83,66,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="ds-eyebrow" style={{ marginBottom: "1.25rem" }}>
          Marcos da trajetória
        </div>
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          style={{ marginBottom: "5rem" }}
        >
          <h2
            className="font-display font-bold text-white"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              lineHeight: 1.1,
            }}
          >
            50 anos
            <br />
            <span style={{ color: "#df5342" }}>construindo referências.</span>
          </h2>
          <p className="text-white/40 font-body text-sm max-w-xs leading-relaxed">
            Da têxtil pernambucana ao Nordeste inteiro, cada marco, um degrau.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Continuous central spine, desktop */}
          <div
            className="absolute hidden md:block"
            style={{
              left: "50%",
              transform: "translateX(-1px)",
              top: "28px",
              bottom: "28px",
              width: "2px",
              background:
                "linear-gradient(180deg, rgba(47,59,146,0.6) 0%, rgba(223,83,66,0.7) 30%, rgba(47,59,146,0.7) 60%, rgba(223,83,66,0.6) 100%)",
              borderRadius: "999px",
            }}
            aria-hidden="true"
          />
          {/* Continuous left spine, mobile */}
          <div
            className="absolute md:hidden"
            style={{
              left: "15px",
              top: "28px",
              bottom: "28px",
              width: "2px",
              background: "rgba(255,255,255,0.12)",
              borderRadius: "999px",
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col" style={{ gap: "2.5rem" }}>
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              const isBlue = item.color === "bg-brand-blue";
              const accent = isBlue ? "#2F3B92" : "#df5342";
              const accentLight = isBlue
                ? "rgba(47,59,146,0.18)"
                : "rgba(223,83,66,0.18)";
              const glowColor = isBlue
                ? "rgba(47,59,146,0.45)"
                : "rgba(223,83,66,0.45)";

              return (
                <div
                  key={item.ano}
                  className="relative grid items-start"
                  style={{
                    // Mobile: [dot-col 32px] [card 1fr]
                    // Desktop: [1fr] [dot-col 64px] [1fr]
                    gridTemplateColumns: "32px 1fr",
                  }}
                >
                  {/* ── Mobile layout: dot col on left ── */}
                  <div
                    className="md:hidden flex flex-col items-center"
                    style={{ paddingTop: "1.25rem" }}
                  >
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0 relative z-10"
                      style={{
                        background: accent,
                        border: "2.5px solid #0e1540",
                        boxShadow: `0 0 0 4px ${glowColor}`,
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="md:hidden pl-5">
                    <div
                      className="tl-card"
                      style={{
                        opacity: 0,
                        transform: "translateX(24px) translateY(8px)",
                        transition: "opacity 0.65s ease, transform 0.65s ease",
                        transitionDelay: "0.05s",
                      }}
                    >
                      <TlCard
                        item={item}
                        accent={accent}
                        accentLight={accentLight}
                        icon={TimelineIcons[item.ano]}
                      />
                    </div>
                  </div>

                  {/* ── Desktop layout: 3-col grid ── (spans both mobile cols) */}
                  <div
                    className="hidden md:grid col-span-2"
                    style={{ gridTemplateColumns: "1fr 64px 1fr" }}
                  >
                    {/* Left card slot */}
                    <div className="pr-8">
                      {isLeft && (
                        <div
                          className="tl-card"
                          style={{
                            opacity: 0,
                            transform: "translateX(-48px)",
                            transition:
                              "opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)",
                          }}
                        >
                          <TlCard
                            item={item}
                            accent={accent}
                            accentLight={accentLight}
                            icon={TimelineIcons[item.ano]}
                            align="right"
                          />
                        </div>
                      )}
                    </div>

                    {/* Dot */}
                    <div
                      className="flex justify-center"
                      style={{ paddingTop: "1.5rem" }}
                    >
                      <div
                        className="relative flex-shrink-0"
                        style={{
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          background: accent,
                          border: "3px solid #0e1540",
                          boxShadow: `0 0 0 5px ${glowColor}`,
                          zIndex: 10,
                        }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Right card slot */}
                    <div className="pl-8">
                      {!isLeft && (
                        <div
                          className="tl-card"
                          style={{
                            opacity: 0,
                            transform: "translateX(48px)",
                            transition:
                              "opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)",
                          }}
                        >
                          <TlCard
                            item={item}
                            accent={accent}
                            accentLight={accentLight}
                            icon={TimelineIcons[item.ano]}
                            align="left"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TlCard({
  item,
  accent,
  accentLight,
  icon,
  align = "left",
}: {
  item: (typeof timeline)[number];
  accent: string;
  accentLight: string;
  icon: ReactElement;
  align?: "left" | "right";
}) {
  return (
    <div
      className="relative bg-white overflow-hidden group"
      style={{
        borderTop: `3px solid ${accent}`,
        boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
        transition: "box-shadow 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 20px 48px rgba(0,0,0,0.28)";
        el.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.18)";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Year watermark */}
      <div
        className={`absolute pointer-events-none select-none font-bold leading-none bottom-0 ${align === "right" ? "left-2" : "right-2"}`}
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "5.5rem",
          color: "rgba(19,27,74,0.05)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {item.ano}
      </div>

      {/* Hover bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
        style={{
          background: accent,
          transform: "scaleX(0)",
          transition: "transform 0.35s ease",
        }}
        ref={(el) => {
          if (el) {
            const parent = el.closest(".group") as HTMLElement | null;
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

      <div className="p-6">
        {/* Icon + year pill row */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: accentLight, color: accent }}
          >
            {icon}
          </div>
          <span
            className="font-label font-bold text-xs uppercase tracking-widest px-2.5 py-1 rounded-sm"
            style={{ background: accentLight, color: accent }}
          >
            {item.ano}
          </span>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-4 group-hover:w-full"
          style={{
            width: "2rem",
            background: accent,
            transition: "width 0.4s ease",
          }}
          ref={(el) => {
            if (el) {
              const parent = el.closest(".group") as HTMLElement | null;
              parent?.addEventListener("mouseenter", () => {
                el.style.width = "100%";
              });
              parent?.addEventListener("mouseleave", () => {
                el.style.width = "2rem";
              });
            }
          }}
          aria-hidden="true"
        />

        {/* Title */}
        <h3
          className="font-display font-bold text-[#131b4a] leading-tight"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "1.15rem",
            marginBottom: "0.6rem",
          }}
        >
          {item.title}
        </h3>

        {/* Body */}
        <p className="text-slate-500 font-body text-sm leading-relaxed">
          {item.text}
        </p>
      </div>
    </div>
  );
}

// ─── Vídeo institucional (capa customizada + player sob demanda) ────────────
function VideoInstitucional() {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-[#0e1540]"
      style={{ aspectRatio: "16 / 9", boxShadow: "var(--shadow-cardhover)" }}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube-nocookie.com/embed/3V5TUVnE1Nw?rel=0&autoplay=1"
          title="Vídeo institucional Quimitêxtil"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Assistir ao vídeo institucional da Quimitêxtil"
          className="group absolute inset-0 w-full h-full cursor-pointer border-0 p-0"
        >
          {/* backdrop: instalação em baixa opacidade */}
          <img
            src={galpao}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
          />
          {/* overlay navy */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(19,27,74,0.94) 0%, rgba(14,21,64,0.86) 100%)",
            }}
            aria-hidden="true"
          />
          {/* textura de grade */}
          <div
            className="absolute inset-0 ds-grid-texture opacity-30"
            aria-hidden="true"
          />
          {/* barra laranja lateral */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange"
            aria-hidden="true"
          />
          {/* brilho decorativo */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-20%",
              right: "-10%",
              width: "380px",
              height: "380px",
              background:
                "radial-gradient(circle, rgba(223,83,66,0.16) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
            aria-hidden="true"
          />

          {/* conteúdo central */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6 px-6 text-center">
            {/* logo */}
            <img
              src={logoQuimitextil}
              alt="Quimitêxtil"
              className="h-12 md:h-16 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />

            {/* botão play */}
            <span className="relative flex items-center justify-center">
              <span
                className="absolute rounded-full bg-brand-orange/25 group-hover:scale-125 transition-transform duration-300"
                style={{ width: "84px", height: "84px" }}
                aria-hidden="true"
              />
              <span
                className="relative flex items-center justify-center rounded-full bg-brand-orange transition-colors duration-200 group-hover:bg-brand-orangehover"
                style={{
                  width: "64px",
                  height: "64px",
                  boxShadow: "0 10px 30px rgba(223,83,66,0.45)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-6 h-6"
                  style={{ marginLeft: "1px" }}
                  aria-hidden="true"
                >
                  <path d="M9 6.5l9 5.5-9 5.5z" />
                </svg>
              </span>
            </span>

            {/* legenda */}
            <span className="font-label font-bold uppercase text-white/70 text-xs" style={{ letterSpacing: "0.2em" }}>
              Assista ao vídeo institucional
            </span>
          </div>
        </button>
      )}
    </div>
  );
}

export default function Sobre() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex items-center bg-cover bg-center"

        style={{

          minHeight: "480px",

          paddingTop: "5rem",

          paddingBottom: "5rem",

          backgroundImage: `url(${heroSobre})`,

        }}
      >

        <div

          className="absolute inset-0"

          style={{

            background:

              "linear-gradient(to right, rgba(8,12,35,0.92), rgba(8,12,35,0.75))",

          }}

        />
        {/* Left orange accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange"
          aria-hidden="true"
        />

  

        

        

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1
              className="text-white font-display font-bold"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                marginTop: "1.5rem",
                marginBottom: "1.75rem",
              }}
            >
              50 anos
              <br />
              <span style={{ color: "#df5342" }}>abastecendo quem</span>
              <br />
              produz no Nordeste.
            </h1>
            <p
              className="text-white/60 font-body text-base leading-relaxed max-w-lg"
              style={{ marginBottom: "2.5rem" }}
            >
              Meio século de história construída pela indústria, com a
              indústria. De Pernambuco para seis estados do Nordeste, com a
              autoridade de quem é referência no setor químico.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappLink(
                  "Olá! Quero saber mais sobre a Quimitêxtil.",
                )}
                target="_blank"
                rel="noreferrer"
                className="ds-btn-primary"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Falar com nosso comercial
              </a>
              <Link to="/catalogo" className="ds-btn-ghost">
                Ver catálogo completo
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
          }}
          aria-hidden="true"
        />
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-2 lg:grid-cols-4 bg-[#F4F5F9]"
            style={{ gap: "1px" }}
          >
            {[
              { num: "50 anos", label: "de história no setor" },
              { num: "6", label: "Estados atendidos" },
              { num: "56", label: "Insumos no catálogo" },
              { num: "72h", label: "Prazo máximo de entrega" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white px-8 py-10 relative group overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-brand-orange origin-left"
                  style={{
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease",
                  }}
                  ref={(el) => {
                    if (el) {
                      const parent = el.closest(".group") as HTMLElement | null;
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
                <div
                  className="font-display font-bold text-[#131b4a]"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  {stat.num}
                </div>
                <div className="ds-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 50 ANOS, faixa comemorativa ─────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0e1540", padding: "4.5rem 0" }}
      >
        <div className="absolute inset-0 ds-grid-texture opacity-30" aria-hidden="true" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange" aria-hidden="true" />
        {/* número gigante de fundo */}
        <div
          className="absolute pointer-events-none select-none font-bold leading-none"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(14rem, 34vw, 30rem)",
            color: "rgba(223,83,66,0.06)",
            right: "-2%",
            top: "50%",
            transform: "translateY(-50%)",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          50
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            <div className="flex-shrink-0">
              <div
                className="font-display font-bold text-brand-orange leading-none"
                style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(4.5rem, 12vw, 8rem)" }}
              >
                {empresa.anosHistoria}
              </div>
              <div
                className="font-label font-bold uppercase text-white/50"
                style={{ fontSize: "0.8rem", letterSpacing: "0.2em", marginTop: "0.25rem" }}
              >
                anos de história
              </div>
            </div>

            <div className="max-w-xl">
              <div className="ds-eyebrow" style={{ marginBottom: "1.25rem" }}>
                50 anos de história · Autoridade no mercado químico
              </div>
              <h2
                className="text-white font-display font-bold"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "clamp(1.6rem, 3.2vw, 2.5rem)",
                  lineHeight: 1.1,
                  marginBottom: "1rem",
                }}
              >
                Meio século abastecendo quem faz a indústria girar.
              </h2>
              <p className="text-white/55 font-body leading-relaxed">
                Poucas empresas do setor químico no Nordeste podem contar uma
                história tão longa. São 50 anos em que cada carga entregue somou
                autoridade, confiança e excelência, com a mesma seriedade do
                primeiro dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VÍDEO INSTITUCIONAL ──────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="ds-row-label">
            <span className="ds-label">Vídeo institucional</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4" style={{ marginBottom: "2.5rem" }}>
            <h2
              className="font-display font-bold text-[#131b4a]"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                lineHeight: 1.1,
              }}
            >
              Conheça a Quimitêxtil
              <br />
              <span className="text-brand-orange">por dentro.</span>
            </h2>
            <p className="text-slate-500 font-body text-sm max-w-xs leading-relaxed">
              Meio século de história, estrutura e gente que faz a química chegar
              a quem produz.
            </p>
          </div>

          <VideoInstitucional />
        </div>
      </section>

      {/* História */}
      <section className="bg-[#F4F5F9] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-row-label">
            <span className="ds-label">Estrutura</span>
          </div>
          <h2
            className="font-display font-bold text-[#131b4a] text-3xl"
            style={{ fontFamily: "'Oswald', sans-serif", marginBottom: "1rem" }}
          >
            A operação que sustenta cada entrega.
          </h2>
          <p
            className="text-slate-500 font-body max-w-2xl"
            style={{ marginBottom: "2rem" }}
          >
            Sede estratégica em Vitória de Santo Antão / PE. Frota especializada
            em transporte de produtos químicos. Motoristas certificados em
            legislação de produtos perigosos. Cada elemento dimensionado para
            sustentar nosso compromisso com o prazo da sua operação.
          </p>

          <div className="grid md:grid-cols-3 gap-1 bg-[#F4F5F9]">
            {[
              { label: "Sede / CD", img: galpao },
              { label: "Frota", img: frota },
              { label: "Vista aérea", img: vistaAerea },
            ].map((item) => (
              <div
                key={item.label}
                className="group relative aspect-[4/3] bg-white overflow-hidden"
              >
                {/* Imagem real */}
                <img
                  src={item.img}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay para o texto aparecer no hover ou ficar fixo */}
                <div className="absolute inset-0 bg-[#131b4a]/40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-label text-xs uppercase tracking-widest font-bold">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <TimelineSection />

      {/* Missão/Visão/Valores */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-row-label">
            <span className="ds-label">Propósito</span>
          </div>
          <h2
            className="font-display font-bold text-[#131b4a]"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              marginBottom: "3rem",
            }}
          >
            O que nos move há 50 anos
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-slate-200">
            {/* Missão */}
            <div
              className="ds-proposito"
              style={{ "--acento": "#df5342", "--acento-claro": "#ff8f7e" } as CSSProperties}
            >
              <div
                className="ds-proposito-icone w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "rgba(223,83,66,0.09)", color: "#df5342" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <span
                className="ds-proposito-rotulo ds-label text-brand-orange"
                style={{ display: "block", marginBottom: "0.75rem" }}
              >
                Missão
              </span>
              <p className="ds-proposito-texto text-slate-600 font-body text-sm leading-relaxed">
                Atender as expectativas dos clientes, com serviços de
                qualidade, logística eficiente e segura.
              </p>
            </div>

            {/* Visão */}
            <div
              className="ds-proposito"
              style={{ "--acento": "#2F3B92", "--acento-claro": "#93a0ee" } as CSSProperties}
            >
              <div
                className="ds-proposito-icone w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "rgba(47,59,146,0.09)", color: "#2F3B92" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span
                className="ds-proposito-rotulo ds-label text-brand-blue"
                style={{ display: "block", marginBottom: "0.75rem" }}
              >
                Visão
              </span>
              <p className="ds-proposito-texto text-slate-600 font-body text-sm leading-relaxed">
                Ser conhecida nacional e internacionalmente como sólida,
                confiável e comprometida com seus clientes, fornecedores e com
                a responsabilidade socioambiental.
              </p>
            </div>

            {/* Valores */}
            <div
              className="ds-proposito"
              style={{ "--acento": "#df5342", "--acento-claro": "#ff8f7e" } as CSSProperties}
            >
              <div
                className="ds-proposito-icone w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "rgba(223,83,66,0.09)", color: "#df5342" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <span
                className="ds-proposito-rotulo ds-label text-brand-orange"
                style={{ display: "block", marginBottom: "0.75rem" }}
              >
                Valores
              </span>
              <ul className="flex flex-col gap-2.5">
                {valores.map((v) => (
                  <li
                    key={v}
                    className="ds-proposito-texto flex items-start gap-2.5 text-slate-600 font-body text-sm"
                  >
                    <span
                      className="ds-proposito-seta flex-shrink-0 mt-0.5"
                      style={{ color: "#df5342" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                      >
                        <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      

      {/* Certificações */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-row-label">
            <span className="ds-label">Conformidade</span>
          </div>
          <h2
            className="font-display font-bold text-[#131b4a] text-3xl"
            style={{ fontFamily: "'Oswald', sans-serif", marginBottom: "1rem" }}
          >
            Operação documentada e em conformidade.
          </h2>
          <p
            className="text-slate-500 font-body max-w-xl"
            style={{ marginBottom: "2rem" }}
          >
            Trabalhamos sob as normas técnicas e ambientais aplicáveis ao setor
            de transporte e distribuição de produtos químicos.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            {certs.map((cert) => (
              <div
                key={cert.nome}
                className="relative bg-white p-8 text-center overflow-hidden group"
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
                {/* top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] origin-left"
                  style={{
                    background: cert.color,
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease",
                  }}
                  ref={(el) => {
                    if (el) {
                      const parent = el.closest(".group") as HTMLElement | null;
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

                {/* icon */}
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-5"
                  style={{ background: cert.bg, color: cert.color }}
                >
                  {cert.icon}
                </div>

                {/* divider */}
                <div
                  className="h-px mx-auto mb-4"
                  style={{
                    width: "2rem",
                    background: cert.color,
                    transition: "width 0.3s",
                  }}
                  ref={(el) => {
                    if (el) {
                      const parent = el.closest(".group") as HTMLElement | null;
                      parent?.addEventListener("mouseenter", () => {
                        el.style.width = "3.5rem";
                      });
                      parent?.addEventListener("mouseleave", () => {
                        el.style.width = "2rem";
                      });
                    }
                  }}
                  aria-hidden="true"
                />

                <h3
                  className="font-display font-bold text-[#131b4a]"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "1.1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {cert.nome}
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 font-body text-xs mt-6 text-center">
            Documentação disponível mediante solicitação
          </p>
        </div>
      </section>

      {/* ── ESG, teaser ─────────────────────────────────────── */}
      <section className="bg-[#F4F5F9] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="relative overflow-hidden bg-white"
            style={{ borderTop: "3px solid #059669", boxShadow: "var(--shadow-card)" }}
          >
            <div className="grid lg:grid-cols-2">
              {/* left: content */}
              <div className="p-8 lg:p-12">
                <div className="ds-row-label">
                  <span className="ds-label">Compromisso ESG</span>
                </div>
                <h2
                  className="font-display font-bold text-[#131b4a]"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                    lineHeight: 1.1,
                    marginBottom: "1rem",
                  }}
                >
                  Responsabilidade ambiental e social não é tendência aqui.
                </h2>
                <p className="text-slate-600 font-body leading-relaxed" style={{ marginBottom: "1.75rem" }}>
                  Operar com produto químico por 50 anos ensina que
                  meio ambiente, segurança das pessoas e governança séria andam
                  juntos. Reunimos esses princípios numa página só.
                </p>
                <Link to="/esg" className="ds-btn-secondary">
                  Ver nosso compromisso ESG
                </Link>
              </div>

              {/* right: 3 pilares */}
              <div className="grid grid-cols-3 gap-px bg-slate-200 border-t lg:border-t-0 lg:border-l border-slate-200">
                {[
                  { s: "E", n: "Ambiental", c: "#059669", bg: "rgba(5,150,105,0.09)" },
                  { s: "S", n: "Social", c: "#2F3B92", bg: "rgba(47,59,146,0.09)" },
                  { s: "G", n: "Governança", c: "#df5342", bg: "rgba(223,83,66,0.09)" },
                ].map((p) => (
                  <div key={p.s} className="bg-white flex flex-col items-center justify-center text-center p-6">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 font-display font-bold"
                      style={{
                        background: p.bg,
                        color: p.c,
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "1.5rem",
                      }}
                    >
                      {p.s}
                    </div>
                    <div className="ds-label" style={{ color: p.c }}>
                      {p.n}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dados jurídicos */}
      <section className="bg-[#F4F5F9] py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="ds-row-label">
            <span className="ds-label">Dados legais</span>
          </div>
          <h2
            className="font-display font-bold text-[#131b4a] text-3xl"
            style={{ fontFamily: "'Oswald', sans-serif", marginBottom: "2rem" }}
          >
            Identidade jurídica
          </h2>
          <table className="ds-spec-table">
            <tbody>
              <tr>
                <td>Razão Social</td>
                <td>{empresa.razaoSocial}</td>
              </tr>
              <tr>
                <td>CNPJ</td>
                <td>{empresa.cnpj}</td>
              </tr>
              <tr>
                <td>Inscrição Estadual</td>
                <td>{empresa.inscricaoEstadual}</td>
              </tr>
              <tr>
                <td>Fundação</td>
                <td>{empresa.fundacao}</td>
              </tr>
              <tr>
                <td>Sede</td>
                <td>{empresa.enderecoCompleto}</td>
              </tr>
            </tbody>
          </table>

          {/* Diretoria */}
          <div style={{ marginTop: "3rem" }}>
            <div className="ds-row-label">
              <span className="ds-label">Diretoria</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-slate-200">
              {socios.map((s) => (
                <div key={s.nome} className="bg-white p-5">
                  <p className="ds-label text-brand-orange" style={{ marginBottom: "0.35rem" }}>
                    {s.cargo}
                  </p>
                  <p className="font-body font-semibold text-[#131b4a] text-sm leading-snug">
                    {s.nome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-brand-orange py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="font-display font-bold text-white text-4xl"
            style={{
              fontFamily: "'Oswald', sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            Tradição não é só sobre o passado.
          </h2>
          <p
            className="text-white/80 font-body text-lg max-w-lg mx-auto"
            style={{ marginBottom: "2.5rem", textAlign: "center" }}
          >
            É o que sustenta cada cotação que vamos responder amanhã. Vamos
            conversar?
          </p>
          <a
            href={whatsappLink("Olá! Tenho uma dúvida que não vi no site.")}
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
            Falar com nosso comercial
          </a>
        </div>
      </section>
    </div>
  );
}
