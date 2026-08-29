import { Link } from "react-router-dom";
import { segmentos, setoresAtendidos, gruposSetores } from "../data/segmentos";
import { produtosPorSegmento } from "../data/produtos";
import SegmentIcon from "../components/SegmentIcon";
import PageHeroShell from "../components/PageHeroShell";

import heroSegmentos from "../assets/segmentos.jpg";

import tratamentoAguaImg from "../assets/tratamento2.avif";
import textilImg from "../assets/textil2.jpg";
import alimenticioImg from "../assets/alimenticio2.jpg";
import saneantesImg from "../assets/saneantes2.avif";
import papelImg from "../assets/papel2.avif";
import cosmeticosImg from "../assets/farmaceuticos2.jpg";
import curtumeImg from "../assets/curtume2.jpg";
import agropecuarioImg from "../assets/agropecuario2.avif";

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

export default function Segmentos() {
  return (
    <div>
      <PageHeroShell watermark="8" backgroundImage={heroSegmentos}>
        <div className="max-w-7xl mx-auto px-6">
          <h1
            className="font-display font-bold text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",

              fontFamily: "'Oswald', sans-serif",

              marginBottom: "1.25rem",
            }}
          >
            A indústria do Nordeste, atendida por quem entende cada processo.
          </h1>

          <p className="text-white/70 font-body text-base max-w-xl">
            Cada segmento tem suas exigências técnicas, suas embalagens, seus
            prazos. Conheça a oferta para o seu setor.
          </p>
        </div>
      </PageHeroShell>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {segmentos.map((seg) => {
              const count = produtosPorSegmento(seg.slug).length;
              return (
                <Link
                  key={seg.slug}
                  to={`/segmentos/${seg.slug}`}
                  className="relative overflow-hidden group block rounded-xl"
                  style={{
                    aspectRatio: "3 / 4",
                    boxShadow: "0 6px 20px rgba(19,27,74,0.12)",
                    transition: "box-shadow 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.boxShadow = "0 20px 44px rgba(19,27,74,0.3)";
                    el.style.transform = "translateY(-6px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.boxShadow = "0 6px 20px rgba(19,27,74,0.12)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* background photo */}
                  <img
                    src={segmentImages[seg.slug]}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* dark gradient overlay for legibility */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(19,27,74,0.55) 0%, rgba(19,27,74,0.25) 35%, rgba(13,18,52,0.92) 100%)",
                    }}
                    aria-hidden="true"
                  />

                  {/* top orange bar, slides in on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] bg-brand-orange origin-left z-10"
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

                  {/* icon */}
                  <div className="absolute top-6 left-6 z-10">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm"
                      style={{
                        background: "rgba(223,83,66,0.85)",
                        color: "#fff",
                      }}
                    >
                      <SegmentIcon slug={seg.slug} className="w-6 h-6" />
                    </div>
                  </div>

                  {/* content, bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h2
                      className="font-display font-bold text-white text-xl leading-snug"
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        marginBottom: "0.6rem",
                      }}
                    >
                      {seg.nome}
                    </h2>
                    <p
                      className="text-white/70 font-body text-sm leading-relaxed"
                      style={{ marginBottom: "1rem" }}
                    >
                      {seg.descricaoCurta}
                    </p>
                    <span className="inline-flex items-center gap-1.5 ds-label text-brand-orange">
                      Ver {count} insumo{count !== 1 ? "s" : ""}
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amplitude real da carteira */}
      <section className="relative overflow-hidden" style={{ background: "#0e1540", padding: "5rem 0" }}>
        <div className="absolute inset-0 ds-grid-texture opacity-30" aria-hidden="true" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange" aria-hidden="true" />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-15%",
            right: "-8%",
            width: "520px",
            height: "520px",
            background: "radial-gradient(circle, rgba(47,59,146,0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="ds-eyebrow" style={{ marginBottom: "1.5rem" }}>
            Amplitude da carteira
          </div>

          <div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
            style={{ marginBottom: "3.5rem" }}
          >
            <h2
              className="font-display font-bold text-white"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                lineHeight: 1.1,
              }}
            >
              {setoresAtendidos.length} setores industriais
              <br />
              <span className="text-brand-orange">abastecidos hoje.</span>
            </h2>
            <p className="text-white/55 font-body text-sm leading-relaxed max-w-md">
              Os oito segmentos acima organizam o catálogo por tipo de insumo.
              Esta é a leitura por indústria: onde a química da Quimitêxtil
              chega, do tear ao viveiro de camarão.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {gruposSetores.map((g) => (
              <div
                key={g.id}
                className="relative overflow-hidden rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderTop: `3px solid ${g.cor}`,
                  padding: "1.75rem",
                  transition: "background 0.25s, border-color 0.25s, transform 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.07)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.04)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* cabeçalho do grupo */}
                <div className="flex items-start justify-between gap-4" style={{ marginBottom: "0.75rem" }}>
                  <h3
                    className="font-display font-bold text-white leading-tight"
                    style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.35rem" }}
                  >
                    {g.nome}
                  </h3>
                  <span
                    className="font-label font-bold uppercase tracking-widest flex-shrink-0 rounded-full"
                    style={{
                      background: g.bg,
                      color: g.cor,
                      fontSize: "0.6rem",
                      padding: "0.35rem 0.7rem",
                      border: `1px solid ${g.cor}55`,
                    }}
                  >
                    {g.setores.length} setores
                  </span>
                </div>

                <p
                  className="text-white/45 font-body text-sm leading-relaxed"
                  style={{ marginBottom: "1.25rem" }}
                >
                  {g.resumo}
                </p>

                {/* setores como chips */}
                <div className="flex flex-wrap gap-2">
                  {g.setores.map((setor) => (
                    <span
                      key={setor}
                      className="inline-flex items-center gap-1.5 font-body rounded-md"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "0.78rem",
                        padding: "0.4rem 0.7rem",
                      }}
                    >
                      <svg
                        className="w-3 h-3 flex-shrink-0"
                        style={{ color: g.cor }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {setor}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-white/40 font-body text-xs text-center"
            style={{ marginTop: "2rem" }}
          >
            Não encontrou o seu setor? Fale com nosso comercial: atendemos
            demandas específicas caso a caso.
          </p>
        </div>
      </section>
    </div>
  );
}
