import { Link } from "react-router-dom";
import { segmentos, setoresAtendidos, gruposSetores } from "../data/segmentos";
import { produtosPorSegmento } from "../data/produtos";
import SegmentIcon from "../components/SegmentIcon";
import PageHeroShell from "../components/PageHeroShell";

import heroSegmentos from "../assets/industrial_complex_blue_hour.jpg";

import tratamentoAguaImg from "../assets/water_clarifier_portrait.jpg";
import textilImg from "../assets/textile_dyeing_mill_yarn.jpg";
import alimenticioImg from "../assets/food_processing_production_line.jpg";
import saneantesImg from "../assets/detergent_filling_line.jpg";
import papelImg from "../assets/papel2.avif";
import cosmeticosImg from "../assets/cleanroom_mixing_vessel.jpg";
import curtumeImg from "../assets/leather_tannery_modern.jpg";
import agropecuarioImg from "../assets/northeast_brazil_agricultural_land.jpg";

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

          {/* Registro por indústria, e não uma grade de cartões arredondados
              com selo e checkmark: fileiras com filete e numeral, o mesmo
              vocabulário das aplicações na ficha do produto. */}
          <div className="ds-registro">
            {gruposSetores.map((g, i) => (
              <div
                key={g.id}
                className="ds-registro-linha grid gap-x-12 gap-y-5 md:grid-cols-[17rem_1fr]"
              >
                {/* identificação do grupo */}
                <div className="flex gap-4">
                  <span
                    className="font-display font-bold leading-none flex-shrink-0"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "1.5rem",
                      color: g.cor,
                      paddingTop: "0.1rem",
                    }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className="font-display font-bold text-white leading-tight"
                      style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.25rem" }}
                    >
                      {g.nome}
                    </h3>
                    <p
                      className="font-label uppercase"
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.12em",
                        color: g.cor,
                        marginTop: "0.4rem",
                      }}
                    >
                      {g.setores.length} setores
                    </p>
                    <p
                      className="text-white/40 font-body leading-relaxed"
                      style={{ fontSize: "0.8rem", marginTop: "0.6rem" }}
                    >
                      {g.resumo}
                    </p>
                  </div>
                </div>

                {/* setores do grupo */}
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 self-center">
                  {g.setores.map((setor) => (
                    <li
                      key={setor}
                      className="text-white/80 font-body leading-snug"
                      style={{
                        fontSize: "0.875rem",
                        borderLeft: `1px solid ${g.cor}`,
                        paddingLeft: "0.75rem",
                      }}
                    >
                      {setor}
                    </li>
                  ))}
                </ul>
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
