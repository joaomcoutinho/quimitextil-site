import { Link } from "react-router-dom";
import { segmentos } from "../data/segmentos";
import { produtosPorSegmento } from "../data/produtos";
import SegmentIcon from "../components/SegmentIcon";
import PageHeroShell from "../components/PageHeroShell";

import heroSegmentos from "../assets/segmentos.jpg";

export default function Segmentos() {
  return (
    <div>
      <PageHeroShell watermark="8" backgroundImage={heroSegmentos}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-eyebrow" style={{ marginBottom: "1.5rem" }}>
            Setores atendidos
          </div>

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
            className="grid gap-px bg-slate-200"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            }}
          >
            {segmentos.map((seg) => {
              const count = produtosPorSegmento(seg.slug).length;
              return (
                <Link
                  key={seg.slug}
                  to={`/segmentos/${seg.slug}`}
                  className="relative bg-white p-8 overflow-hidden group"
                  style={{ transition: "box-shadow 0.25s, transform 0.25s" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.boxShadow = "0 12px 32px rgba(47,59,146,0.13)";
                    el.style.transform = "translateY(-4px)";
                    el.style.zIndex = "2";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.boxShadow = "";
                    el.style.transform = "";
                    el.style.zIndex = "";
                  }}
                >
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

                  {/* icon */}
                  <div className="flex items-start mb-6">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
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
                      <SegmentIcon slug={seg.slug} className="w-7 h-7" />
                    </div>
                  </div>

                  {/* divider */}
                  <div
                    className="w-10 h-px bg-slate-200 mb-5 group-hover:w-16 group-hover:bg-brand-orange"
                    style={{ transition: "width 0.3s, background 0.3s" }}
                  />

                  {/* content */}
                  <h2
                    className="font-display font-semibold text-[#131b4a] text-xl leading-snug"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      marginBottom: "1rem",
                    }}
                  >
                    {seg.nome}
                  </h2>
                  <p
                    className="text-slate-500 font-body text-sm leading-relaxed"
                    style={{ marginBottom: "1.25rem" }}
                  >
                    {seg.descricaoCurta}
                  </p>
                  <span className="ds-label text-brand-orange">
                    Ver {count} insumo{count !== 1 ? "s" : ""} →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
