import { whatsappLink, cobertura, frota, licencas } from "../data/empresa";
import PageHeroShell from "../components/PageHeroShell";
import mapa from "../assets/mapa_quimitextil.webp";

import heroLogistica from "../assets/chemical_loading_dock.jpg";

const diferenciais = [
  {
    n: "01",
    title: "Frota própria dimensionada",
    text: "Dois caminhões-tanque, quatro carrocerias abertas, dois utilitários e uma carreta. Parceiros homologados complementam a malha quando o volume exige.",
  },
  {
    n: "02",
    title: "Quatro motoristas certificados em MOPP",
    text: "Capacitação em Movimentação Operacional de Produtos Perigosos, renovada periodicamente. Quem dirige sabe o que está transportando.",
  },
  {
    n: "03",
    title: "Veículos preparados para químicos",
    text: "Equipados com todos os itens de segurança exigidos pela legislação e pelas normas técnicas aplicáveis ao transporte de cargas perigosas.",
  },
  {
    n: "04",
    title: "Localização estratégica",
    text: "CD em Vitória de Santo Antão / PE, no Distrito Industrial, um dos pontos com melhor logística rodoviária do Nordeste.",
  },
  {
    n: "05",
    title: "Entrega em até 72 horas",
    text: "Prazo máximo de entrega nos estados atendidos, contado a partir da confirmação do pedido.",
  },
  {
    n: "06",
    title: "Frete acordado por pedido",
    text: "A condição de frete é definida em conjunto no fechamento, de acordo com volume, destino e periodicidade da operação.",
  },
];

export default function Logistica() {
  return (
    <div>
      <PageHeroShell watermark="6" backgroundImage={heroLogistica}>
        <div className="max-w-7xl mx-auto px-6">
          <h1
            className="font-display font-bold text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontFamily: "'Oswald', sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            Quem transporta responde pela carga.
          </h1>

          <p className="text-white/70 font-body text-base max-w-2xl">
            Em distribuição química industrial, o prazo se perde quando ninguém
            responde pela carga. Aqui cada entrega tem um responsável, com
            motoristas certificados em MOPP e prazo de até 72 horas nos seis
            estados que atendemos.
          </p>
        </div>
      </PageHeroShell>

      {/* Diferenciais */}
      <section className="bg-[#F4F5F9] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-row-label">
            <span className="ds-label">Diferenciais operacionais</span>
          </div>
          <h2
            className="text-[#131b4a] font-display font-bold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontFamily: "'Oswald', sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            O que diferencia nossa operação logística
          </h2>
          <p
            className="text-slate-500 font-body max-w-xl"
            style={{ marginBottom: "3.5rem" }}
          >
            Seis pontos que definem como a carga sai daqui e chega até você.
            Cada detalhe pensado para quem não pode perder prazo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">
            {diferenciais.map((d, i) => {
              const icons = [
                /* frota própria, truck */
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
                /* MOPP, shield check */
                <svg
                  key="shield"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>,
                /* veículos preparados, wrench */
                <svg
                  key="wrench"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>,
                /* localização, map pin */
                <svg
                  key="pin"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>,
                /* rastreabilidade, eye */
                <svg
                  key="eye"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>,
                /* cobertura nordeste, globe */
                <svg
                  key="globe"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>,
              ];
              return (
                <div
                  key={d.n}
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
                    {i + 1}
                  </div>

                  {/* top orange bar, slides in on hover */}
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

                  {/* number + icon row */}
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
                      0{i + 1}
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
                    className="w-10 h-px bg-slate-200 group-hover:w-16 group-hover:bg-brand-orange"
                    style={{
                      transition: "width 0.3s, background 0.3s",
                      marginBottom: "1.25rem",
                    }}
                  />

                  {/* content */}
                  <h3
                    className="font-display font-semibold text-[#131b4a] text-xl leading-snug"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      marginBottom: "1rem",
                    }}
                  >
                    {d.title}
                  </h3>
                  <p className="text-slate-500 font-body text-sm leading-relaxed">
                    {d.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="relative overflow-hidden" style={{ background: "#0e1540", padding: "5rem 0" }}>
        <div className="absolute inset-0 ds-grid-texture opacity-30" aria-hidden="true" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange" aria-hidden="true" />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-10%",
            right: "-5%",
            width: "480px",
            height: "480px",
            background: "radial-gradient(circle, rgba(47,59,146,0.28) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="ds-eyebrow" style={{ marginBottom: "1.5rem" }}>
            Cobertura regional
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6" style={{ marginBottom: "3rem" }}>
            <h2
              className="font-display font-bold text-white"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                lineHeight: 1.1,
              }}
            >
              Seis estados,
              <br />
              <span className="text-brand-orange">uma operação.</span>
            </h2>
            <p className="text-white/55 font-body text-sm leading-relaxed max-w-md">
              Vitória de Santo Antão / PE não foi escolha por acaso. É um dos
              pontos com melhor logística rodoviária do Nordeste, o que se
              traduz em prazos mais previsíveis e custos mais estáveis para
              quem produz na região.
            </p>
          </div>

          {/* mapa em destaque */}
          <div className="relative mx-auto" style={{ maxWidth: "520px", marginBottom: "4rem" }}>
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={mapa}
                alt="Mapa de cobertura logística no Nordeste do Brasil"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div
              className="absolute flex items-center gap-2 bg-brand-orange text-white rounded-full"
              style={{
                top: "-14px",
                right: "-14px",
                padding: "0.6rem 1.1rem",
                boxShadow: "0 10px 30px rgba(223,83,66,0.45)",
              }}
            >
              <span className="font-display font-bold" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.2rem", lineHeight: 1 }}>
                6
              </span>
              <span className="font-label text-[0.6rem] uppercase tracking-widest">estados</span>
            </div>
          </div>

          {/* origem / hub */}
          <div
            className="flex items-center gap-5 mx-auto"
            style={{
              maxWidth: "620px",
              marginBottom: "2.5rem",
              background: "rgba(223,83,66,0.08)",
              border: "1px solid rgba(223,83,66,0.25)",
              borderRadius: "12px",
              padding: "1.25rem 1.5rem",
            }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(223,83,66,0.15)", color: "#df5342" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z" />
                <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1.5.5M13 16l1.5.5M13 16H3m10 0h4.586a1 1 0 00.707-.293l2.414-2.414A1 1 0 0021 12.586V11a2 2 0 00-2-2h-2m-4-3H9M7 16h.01" />
              </svg>
            </div>
            <div>
              <p className="font-label font-bold uppercase text-brand-orange" style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>
                Origem · Centro de distribuição
              </p>
              <p className="font-display font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.15rem", marginTop: "0.2rem" }}>
                Vitória de Santo Antão, Pernambuco
              </p>
            </div>
          </div>

          {/* estados de destino */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {cobertura.map(({ uf, nome, detalhe }) => (
              <div
                key={uf}
                className="group relative text-center overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "1.5rem 1rem",
                  transition: "background 0.25s, border-color 0.25s, transform 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.08)";
                  el.style.borderColor = "rgba(223,83,66,0.4)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.04)";
                  el.style.borderColor = "rgba(255,255,255,0.1)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <p
                  className="font-display font-bold text-white"
                  style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.75rem", lineHeight: 1 }}
                >
                  {uf}
                </p>
                <p
                  className="font-label text-white/45 uppercase"
                  style={{ fontSize: "0.6rem", letterSpacing: "0.1em", marginTop: "0.4rem" }}
                >
                  {nome}
                </p>
                <div
                  className="mx-auto"
                  style={{ width: "1.5rem", height: "1px", background: "rgba(255,255,255,0.15)", margin: "0.75rem auto" }}
                />
                <p className="font-body text-white/40 leading-snug" style={{ fontSize: "0.68rem" }}>
                  {detalhe}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-white/40 font-body text-xs text-center"
            style={{ marginTop: "1.5rem" }}
          >
            A cobertura varia dentro de cada estado. Confirme a da sua cidade
            pelo WhatsApp.
          </p>

          {/* composição da frota */}
          <div style={{ marginTop: "4rem" }}>
            <div className="ds-eyebrow" style={{ marginBottom: "1.5rem" }}>
              Composição da frota própria
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {frota.map(({ qtd, tipo }) => (
                <div
                  key={tipo}
                  className="text-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    padding: "1.5rem 1rem",
                  }}
                >
                  <p
                    className="font-display font-bold text-brand-orange"
                    style={{ fontFamily: "'Oswald', sans-serif", fontSize: "2.25rem", lineHeight: 1 }}
                  >
                    {qtd}
                  </p>
                  <p
                    className="font-label text-white/50 uppercase leading-snug"
                    style={{ fontSize: "0.6rem", letterSpacing: "0.1em", marginTop: "0.5rem" }}
                  >
                    {tipo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conformidade */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-row-label">
            <span className="ds-label">Conformidade</span>
          </div>
          <h2
            className="font-display font-bold text-[#131b4a] text-3xl text-center"
            style={{
              fontFamily: "'Oswald', sans-serif",
              marginBottom: "2.5rem",
            }}
          >
            Conformidade documentada para transporte seguro
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-slate-200 mb-6">
            {licencas.map((lic) => (
              <div key={lic.sigla} className="bg-white p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4" style={{ marginBottom: "0.75rem" }}>
                  <h3
                    className="font-display font-semibold text-[#131b4a] text-xl leading-snug"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {lic.sigla}
                  </h3>
                  <span className="ds-chip orange self-start sm:flex-shrink-0">
                    {lic.validade.includes("/")
                      ? `Válido até ${lic.validade}`
                      : lic.validade}
                  </span>
                </div>
                <p className="font-body font-semibold text-slate-600 text-sm" style={{ marginBottom: "0.25rem" }}>
                  {lic.nome}
                </p>
                <p className="font-mono text-brand-blue text-xs" style={{ marginBottom: "0.75rem" }}>
                  {lic.numero}
                </p>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  {lic.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 font-body text-sm text-center">
            Documentação completa disponível mediante solicitação. Trabalhamos
            com clientes que exigem auditoria de fornecedor.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#131b4a] ds-grid-texture relative overflow-hidden py-20">
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="font-display font-bold text-white text-4xl"
            style={{
              fontFamily: "'Oswald', sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            Quer saber se entregamos na sua cidade?
          </h2>
          <p
            className="text-white/70 font-body text-lg"
            style={{ marginBottom: "2.5rem" }}
          >
            Manda o CEP no WhatsApp. Confirmamos cobertura na hora.
          </p>
          <a
            href={whatsappLink(
              "Olá! Quero confirmar se vocês entregam na minha região. CEP: ___",
            )}
            target="_blank"
            rel="noreferrer"
            className="ds-btn-primary"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Consultar entrega
          </a>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          aria-hidden="true"
        />
      </section>
    </div>
  );
}
