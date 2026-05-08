import { useState } from "react";
import { empresa, whatsappLink } from "../data/empresa";

import heroContato from "../assets/contato.jpg";
import PageHeroShell from "../components/PageHeroShell";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [empresaF, setEmpresaF] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [produto, setProduto] = useState("");
  const [detalhes, setDetalhes] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      `Olá! Vim pelo site da Quimitêxtil e gostaria de solicitar uma cotação.`,
      ``,
      `*Nome:* ${nome}`,
      empresaF ? `*Empresa:* ${empresaF}` : "",
      `*Telefone:* ${telefone}`,
      email ? `*E-mail:* ${email}` : "",
      produto ? `*Produto:* ${produto}` : "",
      detalhes ? `*Detalhes:* ${detalhes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(msg), "_blank");
    setEnviado(true);
  }

  return (
    <div>
      <PageHeroShell watermark="C" backgroundImage={heroContato}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-eyebrow" style={{ marginBottom: "1.5rem" }}>
            Atendimento direto
          </div>

          <h1
            className="font-display font-bold text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontFamily: "'Oswald', sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            Falar com a Quimitêxtil é falar com vendedor.
          </h1>

          <p className="text-white/70 font-body text-base">
            Sem URA. Sem chatbot. Sem fila. Escolha o canal e a gente responde.
          </p>
        </div>
      </PageHeroShell>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="ds-row-label">
                <span className="ds-label">Canais de atendimento</span>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href={`https://wa.me/${empresa.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-5 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors rounded-sm"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="ds-label text-[#25D366] mb-1">WHATSAPP</p>
                    <p className="font-body font-semibold text-[#131b4a] text-lg">
                      (81) 9 9551-0011
                    </p>
                    <p className="text-slate-500 font-body text-sm">
                      Resposta mais rápida — atendimento direto.
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${empresa.telefone.replace(/\D/g, "")}`}
                  className="flex items-start gap-4 p-5 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors rounded-sm"
                >
                  <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <div>
                    <p className="ds-label mb-1">TELEFONE</p>
                    <p className="font-body font-semibold text-[#131b4a] text-lg">
                      {empresa.telefone}
                    </p>
                    <p className="text-slate-500 font-body text-sm">
                      Linha comercial direta.
                    </p>
                  </div>
                </a>

                <a
                  href={empresa.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-5 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors rounded-sm"
                >
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📸</span>
                  </div>
                  <div>
                    <p className="ds-label text-pink-600 mb-1">INSTAGRAM</p>
                    <p className="font-body font-semibold text-[#131b4a] text-lg">
                      @{empresa.instagram}
                    </p>
                    <p className="text-slate-500 font-body text-sm">
                      Bastidor da operação.
                    </p>
                  </div>
                </a>

                <div className="p-5 bg-blue-50 border-l-4 border-brand-blue">
                  <p className="font-body font-semibold text-[#131b4a] mb-1">
                    Onde estamos
                  </p>
                  <p className="text-slate-600 font-body text-sm">
                    {empresa.endereco}. Localização estratégica para cobrir o
                    Nordeste com frota própria.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="ds-row-label">
                <span className="ds-label">Solicitar cotação</span>
              </div>
              <p
                className="text-slate-500 font-body text-sm"
                style={{ marginBottom: "1.75rem" }}
              >
                Preencha os dados e a mensagem é enviada direto pelo seu
                WhatsApp para nosso comercial.
              </p>

              {!enviado ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="ds-field-label" htmlFor="nome">
                      Seu nome*
                    </label>
                    <input
                      id="nome"
                      type="text"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="ds-field-input"
                      placeholder="Nome completo"
                    />
                  </div>
                  <div>
                    <label className="ds-field-label" htmlFor="empresa-f">
                      Empresa
                    </label>
                    <input
                      id="empresa-f"
                      type="text"
                      value={empresaF}
                      onChange={(e) => setEmpresaF(e.target.value)}
                      className="ds-field-input"
                      placeholder="Razão social ou nome fantasia"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="ds-field-label" htmlFor="telefone">
                        Telefone*
                      </label>
                      <input
                        id="telefone"
                        type="tel"
                        required
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        className="ds-field-input"
                        placeholder="(00) 0 0000-0000"
                      />
                    </div>
                    <div>
                      <label className="ds-field-label" htmlFor="email">
                        E-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="ds-field-input"
                        placeholder="seu@email.com.br"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="ds-field-label" htmlFor="produto">
                      Produto de interesse
                    </label>
                    <input
                      id="produto"
                      type="text"
                      value={produto}
                      onChange={(e) => setProduto(e.target.value)}
                      className="ds-field-input"
                      placeholder="Ex.: Soda cáustica escamas 98%"
                    />
                  </div>
                  <div>
                    <label className="ds-field-label" htmlFor="detalhes">
                      Detalhes da cotação
                    </label>
                    <textarea
                      id="detalhes"
                      value={detalhes}
                      onChange={(e) => setDetalhes(e.target.value)}
                      className="ds-field-input"
                      rows={4}
                      placeholder="Volume estimado, prazo desejado, embalagem, especificações..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="ds-btn-primary w-full justify-center"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Enviar via WhatsApp
                  </button>
                  <p className="text-slate-400 font-body text-xs text-center">
                    Você é redirecionado para o WhatsApp com a mensagem pronta.
                    Conclui o envio por lá.
                  </p>
                </form>
              ) : (
                <div className="bg-blue-50 border-l-4 border-brand-blue p-8 text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <h3
                    className="font-display font-semibold text-[#131b4a] mb-2 text-xl"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    Conversa aberta no WhatsApp.
                  </h3>
                  <p className="text-slate-600 font-body text-sm mb-6">
                    Conclua o envio na conversa que abriu em uma nova aba. Nosso
                    comercial responderá em seguida.
                  </p>
                  <button
                    onClick={() => setEnviado(false)}
                    className="text-brand-blue font-label font-bold text-sm hover:text-brand-orange transition-colors underline"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
