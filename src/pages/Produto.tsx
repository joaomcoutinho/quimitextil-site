import { useParams, Navigate, Link } from 'react-router-dom'
import { produtos, categoriasLabels, produtosRelacionados, type CategoriaProduto } from '../data/produtos'
import { segmentos } from '../data/segmentos'
import { whatsappLink } from '../data/empresa'
import CatalogCard, { catColors } from '../components/CatalogCard'
import SegmentIcon from '../components/SegmentIcon'
import logoQuimitextil from '../assets/logo_quimitextil-removebg-preview.png'

import bgBases from '../assets/produto-bases.jpg'
import bgSais from '../assets/produto-sais.jpg'
import bgSurfactantes from '../assets/produto-surfactantes.jpg'
import bgOxidantes from '../assets/produto-oxidantes.jpg'
import bgRedutores from '../assets/produto-redutores.jpg'
import bgCorantes from '../assets/produto-corantes.jpg'
import bgOutros from '../assets/produto-outros.jpg'

/**
 * Fundo do hero por categoria de produto.
 * TODO: 'acidos' usa o fundo grafite provisoriamente, até chegar a
 * imagem em burnt sienna (#8A3B22) da categoria.
 */
const bgPorCategoria: Record<CategoriaProduto, string> = {
  acidos: bgOutros,
  bases: bgBases,
  sais: bgSais,
  surfactantes: bgSurfactantes,
  oxidantes: bgOxidantes,
  redutores: bgRedutores,
  corantes: bgCorantes,
  outros: bgOutros,
}



export default function Produto() {
  const { slug } = useParams<{ slug: string }>()
  const produto = produtos.find(p => p.slug === slug)

  if (!produto) return <Navigate to="/catalogo" />

  const related = produtosRelacionados(produto.slug)
  const c = catColors[produto.categoria]

  /* Ficha técnica: só entram os campos que o produto realmente possui, para a
     faixa nunca terminar com uma célula vazia quando não há fórmula. */
  const specs = [
    ...(produto.formula
      ? [{
          label: 'Fórmula',
          value: (
            <span className="font-mono font-bold truncate block" style={{ fontSize: '1.15rem', color: c.accent }}>
              {produto.formula}
            </span>
          ),
        }]
      : []),
    {
      label: 'Forma física',
      value: (
        <span className="font-body font-semibold text-[#131b4a] text-sm leading-snug">
          {produto.apresentacao}
        </span>
      ),
    },
    {
      label: 'Tipo químico',
      value: (
        <span
          className="font-label font-bold text-[0.6rem] uppercase tracking-widest px-2.5 py-1 rounded-sm inline-block"
          style={{ background: c.bg, color: c.text }}
        >
          {categoriasLabels[produto.categoria]}
        </span>
      ),
    },
  ]

  const cotarMsg = `Olá! Quero cotar ${produto.nome}${produto.formula ? ` (${produto.formula})` : ''} com a Quimitêxtil.`
  const fispqMsg = `Olá! Preciso da FISPQ do produto ${produto.nome}${produto.formula ? ` (${produto.formula})` : ''}, vocês podem enviar?`

  const segmentosNomeProduto = produto.segmentos
    .map(s => segmentos.find(seg => seg.slug === s))
    .filter(Boolean) as (typeof segmentos)[0][]

  return (
    <div className="bg-[#F4F5F9] overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div className="bg-[#131b4a] relative overflow-hidden">
        {/* Fundo: cena da categoria do produto */}
        <img
          src={bgPorCategoria[produto.categoria]}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        {/* Véu escuro, mais denso à esquerda onde fica o texto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(19,27,74,0.95) 0%, rgba(19,27,74,0.88) 45%, rgba(19,27,74,0.55) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Logo da marca, no canto reservado pela composição da imagem */}
        <img
          src={logoQuimitextil}
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute bottom-6 right-6 h-9 w-auto opacity-40 pointer-events-none"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange z-10" aria-hidden="true" />
        {/* Tom da categoria, sutil sobre a foto */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: c.accent + '14', transform: 'translate(30%, -30%)' }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10" style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}>
          {/* breadcrumb */}
          <nav
            className="flex items-center gap-2 font-label text-white/30"
            style={{ fontSize: '0.7rem', marginBottom: '2rem' }}
            aria-label="Navegação"
          >
            <Link to="/" className="hover:text-white/60 transition-colors">Início</Link>
            <span>/</span>
            <Link to="/catalogo" className="hover:text-white/60 transition-colors">Catálogo</Link>
            <span>/</span>
            <span className="text-white/60">{produto.nome}</span>
          </nav>

          <div className="max-w-3xl">

            {/* left: content */}
            <div>
              {/* category chip */}
              <div style={{ marginBottom: '1.25rem' }}>
                <span
                  className="font-label font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-sm"
                  style={{ background: c.accent + '22', color: c.accent, border: `1px solid ${c.accent}44` }}
                >
                  {categoriasLabels[produto.categoria]}
                </span>
              </div>

              {/* name */}
              <h1
                className="text-white font-display font-bold leading-tight"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                  marginBottom: '0.75rem',
                }}
              >
                {produto.nome}
              </h1>

              {/* formula + synonyms */}
              <div className="flex flex-wrap items-center gap-4" style={{ marginBottom: '1.5rem' }}>
                {produto.formula && (
                  <span
                    className="font-mono font-bold text-white/90 px-3 py-1 rounded-sm"
                    style={{ background: 'rgba(255,255,255,0.08)', fontSize: '1rem', letterSpacing: '0.04em' }}
                  >
                    {produto.formula}
                  </span>
                )}
                {produto.sinonimos && produto.sinonimos.length > 0 && (
                  <p className="font-body text-white/40 text-sm">
                    {produto.sinonimos.join(' · ')}
                  </p>
                )}
              </div>

              {/* selos */}
              {(produto.controladoPF || produto.distribuidor) && (
                <div className="flex flex-wrap gap-2" style={{ marginBottom: '1.5rem' }}>
                  {produto.controladoPF && (
                    <span
                      className="inline-flex items-center gap-1.5 font-label font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm"
                      style={{ background: 'rgba(217,119,6,0.18)', color: '#fbbf24', fontSize: '0.6rem' }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      Controlado pela Polícia Federal
                    </span>
                  )}
                  {produto.distribuidor && (
                    <span
                      className="inline-flex items-center gap-1.5 font-label font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm"
                      style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', fontSize: '0.6rem' }}
                    >
                      Distribuidor {produto.distribuidor}
                    </span>
                  )}
                </div>
              )}

              {/* description */}
              <p className="text-white/70 font-body text-base leading-relaxed" style={{ marginBottom: '2.5rem', maxWidth: '560px' }}>
                {produto.descricao}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappLink(cotarMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className="ds-btn-primary"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Solicitar cotação
                </a>
                <a
                  href={whatsappLink(fispqMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-label font-bold text-sm uppercase tracking-wide border border-white/25 text-white/80 hover:bg-white/10 hover:border-white/50 transition-colors rounded-lg px-6 py-3"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Solicitar FISPQ
                </a>
              </div>
              <p className="text-white/25 font-body text-xs" style={{ marginTop: '1rem' }}>
                Resposta direta com nosso comercial. Sem URA, sem fila.
              </p>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
      </div>

      {/* ── FICHA TÉCNICA ────────────────────────────────────
          flex (e não grid de 2/3 colunas): com 2 ou 3 itens a linha se
          completa sozinha e nunca sobra o quadrante vazio que aparecia no
          celular. Cada card carrega o mesmo filete da categoria à esquerda. */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row" style={{ gap: '1px', background: '#e8ecf3' }}>
            {specs.map(spec => (
              <div
                key={spec.label}
                className="bg-white flex-1 min-w-0 flex items-center justify-between gap-4 px-4 py-3.5 sm:flex-col sm:items-start sm:justify-center sm:gap-0 sm:px-7 sm:py-6"
                style={{ borderLeft: `3px solid ${c.accent}` }}
              >
                <p className="font-label text-slate-400 text-[0.6rem] uppercase tracking-widest whitespace-nowrap mb-0 sm:mb-2">
                  {spec.label}
                </p>
                <div className="min-w-0 flex items-center justify-end sm:justify-start min-h-[1.75rem] text-right sm:text-left">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── APLICAÇÕES + SEGMENTOS ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 overflow-hidden" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="grid md:grid-cols-2 gap-px overflow-hidden" style={{ background: '#e2e8f0' }}>

          {/* applications */}
          <div className="bg-white p-5 sm:p-8 min-w-0 overflow-hidden">
            <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
              <span className="w-5 h-px" style={{ background: c.accent }} aria-hidden="true" />
              <span className="font-label text-[0.6rem] uppercase tracking-widest" style={{ color: c.accent }}>
                Aplicações industriais
              </span>
            </div>
            <h2
              className="font-display font-bold text-[#131b4a]"
              style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.35rem', marginBottom: '1.5rem' }}
            >
              Onde este insumo é usado
            </h2>
            <ul className="flex flex-col" style={{ gap: '0.875rem' }}>
              {produto.aplicacoes.map((ap, i) => (
                <li key={ap} className="flex items-start gap-3">
                  <span
                    className="font-label font-bold text-[0.55rem] w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: c.bg, color: c.text }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-slate-600 font-body text-sm leading-relaxed">{ap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* segments */}
          <div className="bg-white p-5 sm:p-8 min-w-0 overflow-hidden">
            <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
              <span className="w-5 h-px bg-brand-blue" aria-hidden="true" />
              <span className="font-label text-brand-blue text-[0.6rem] uppercase tracking-widest">
                Setores industriais
              </span>
            </div>
            <h2
              className="font-display font-bold text-[#131b4a]"
              style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.35rem', marginBottom: '1.5rem' }}
            >
              Indústrias que utilizam
            </h2>
            <div className="flex flex-col" style={{ gap: '0.75rem' }}>
              {segmentosNomeProduto.map(seg => (
                <Link
                  key={seg.slug}
                  to={`/segmentos/${seg.slug}`}
                  className="flex items-center gap-3 group/seg min-w-0 overflow-hidden"
                  style={{
                    padding: '0.875rem 1rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    background: 'white',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#2F3B92'
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(47,59,146,0.03)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'
                    ;(e.currentTarget as HTMLElement).style.background = 'white'
                  }}
                >
                  <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(223,83,66,0.08)', color: '#df5342' }}>
                    <SegmentIcon slug={seg.slug} className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <p
                      className="font-display font-semibold text-[#131b4a] group-hover/seg:text-brand-blue transition-colors truncate"
                      style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.95rem' }}
                    >
                      {seg.nome}
                    </p>
                    <p className="text-slate-400 font-body text-xs truncate">{seg.descricaoCurta}</p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-slate-300 group-hover/seg:text-brand-blue flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── EMBALAGEM ────────────────────────────────────────── */}
      <div className="bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
          <div className="flex items-start gap-5 max-w-2xl">
            <div
              className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
              style={{ background: c.bg }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: c.accent }} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>
            <div>
              <p
                className="font-display font-bold text-[#131b4a]"
                style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.1rem', marginBottom: '0.5rem' }}
              >
                Embalagem sob medida para sua operação
              </p>
              <p className="text-slate-500 font-body text-sm leading-relaxed">
                Fornecido na forma de <strong className="text-[#131b4a]">{produto.apresentacao}</strong>.
                Embalagens e volumes são definidos na cotação, conforme as exigências do seu processo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── PRODUTOS RELACIONADOS ────────────────────────────── */}
      {related.length > 0 && (
        <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: '3.5rem', paddingBottom: '4rem' }}>
          <div className="flex items-center gap-3" style={{ marginBottom: '2rem' }}>
            <span className="w-6 h-px bg-brand-orange" aria-hidden="true" />
            <span className="font-label text-brand-orange text-[0.6rem] uppercase tracking-widest">Insumos relacionados</span>
          </div>
          <h2
            className="font-display font-bold text-[#131b4a]"
            style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '1.75rem' }}
          >
            Outros insumos que costumam ser cotados juntos
          </h2>
          <div
            className="grid gap-px"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', background: '#e2e8f0' }}
          >
            {related.map(p => (
              <CatalogCard key={p.slug} produto={p} />
            ))}
          </div>
        </div>
      )}

    </div>
  )
}
