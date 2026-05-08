import { useParams, Navigate, Link } from 'react-router-dom'
import { produtos, categoriasLabels, produtosRelacionados } from '../data/produtos'
import { segmentos } from '../data/segmentos'
import { whatsappLink } from '../data/empresa'
import ProductImage from '../components/ProductImage'
import CatalogCard, { catColors } from '../components/CatalogCard'
import SegmentIcon from '../components/SegmentIcon'



export default function Produto() {
  const { slug } = useParams<{ slug: string }>()
  const produto = produtos.find(p => p.slug === slug)

  if (!produto) return <Navigate to="/catalogo" />

  const related = produtosRelacionados(produto.slug)
  const c = catColors[produto.categoria]

  const cotarMsg = `Olá! Quero cotar ${produto.nome}${produto.formula ? ` (${produto.formula})` : ''} com a Quimitêxtil.`
  const fispqMsg = `Olá! Preciso da FISPQ do produto ${produto.nome}${produto.formula ? ` (${produto.formula})` : ''} — vocês podem enviar?`

  const segmentosNomeProduto = produto.segmentos
    .map(s => segmentos.find(seg => seg.slug === s))
    .filter(Boolean) as (typeof segmentos)[0][]

  return (
    <div className="bg-[#F4F5F9] overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div className="bg-[#131b4a] ds-grid-texture relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: c.accent + '18', transform: 'translate(30%, -30%)' }}
          aria-hidden="true"
        />
        {/* Orange glow — bottom left */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: 0, left: '6%',
            width: '320px', height: '320px',
            background: 'radial-gradient(circle, rgba(223,83,66,0.15) 0%, transparent 70%)',
            transform: 'translateY(40%)',
          }}
          aria-hidden="true"
        />
        {/* Geometric decorators */}
        <div className="absolute top-5 right-5 w-8 h-8 border border-white/10 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-5 right-[3.5rem] w-4 h-4 border border-brand-orange/20 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-5 right-5 w-8 h-8 border border-white/10 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-9 right-[3.5rem] w-2 h-2 bg-brand-orange/30 pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}>
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

          <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-center">

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

              {/* description */}
              <p className="text-white/70 font-body text-base leading-relaxed" style={{ marginBottom: '2.5rem', maxWidth: '560px' }}>
                {produto.descricao}
              </p>

              {/* Mobile: mesma imagem do hero — acima de Solicitar cotação */}
              <div className="lg:hidden w-full mb-8 flex justify-center">
                <div
                  className="rounded-sm overflow-hidden w-full max-w-[min(100%,18.5rem)] sm:max-w-xs"
                  style={{ boxShadow: `0 24px 60px -12px ${c.accent}44` }}
                >
                  <ProductImage produto={produto} showFormula />
                </div>
              </div>

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

            {/* right: product image */}
            <div className="hidden lg:block">
              <div
                className="rounded-sm overflow-hidden"
                style={{ boxShadow: `0 24px 60px -12px ${c.accent}44` }}
              >
                <ProductImage produto={produto} showFormula />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
      </div>

      {/* ── SPECS STRIP ──────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 overflow-hidden" style={{ gap: '1px', background: '#f1f5f9' }}>
            {produto.formula && (
              <div className="bg-white px-4 py-5 md:px-8 md:py-6 min-w-0" style={{ borderLeft: `3px solid ${c.accent}` }}>
                <p className="font-label text-slate-400 text-[0.6rem] uppercase tracking-widest" style={{ marginBottom: '0.5rem' }}>
                  Fórmula
                </p>
                <p className="font-mono font-bold truncate" style={{ fontSize: '1.2rem', color: c.accent }}>
                  {produto.formula}
                </p>
              </div>
            )}
            <div className="bg-white px-4 py-5 md:px-8 md:py-6 min-w-0">
              <p className="font-label text-slate-400 text-[0.6rem] uppercase tracking-widest" style={{ marginBottom: '0.5rem' }}>
                Forma física
              </p>
              <p className="font-body font-semibold text-[#131b4a] text-sm leading-snug">{produto.apresentacao}</p>
            </div>
            <div className="bg-white px-4 py-5 md:px-8 md:py-6 min-w-0">
              <p className="font-label text-slate-400 text-[0.6rem] uppercase tracking-widest" style={{ marginBottom: '0.5rem' }}>
                Tipo químico
              </p>
              <span
                className="font-label font-bold text-[0.6rem] uppercase tracking-widest px-2 py-1 rounded-sm inline-block"
                style={{ background: c.bg, color: c.text, wordBreak: 'break-word' }}
              >
                {categoriasLabels[produto.categoria]}
              </span>
            </div>
          </div>
        </div>
        {/* Bottom fade line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)' }}
          aria-hidden="true"
        />
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
                Trabalhamos com sacos, tambores, bombonas, IBC e granel conforme o volume e as exigências do seu processo.
                A apresentação padrão é <strong className="text-[#131b4a]">{produto.apresentacao}</strong> — confirme variações disponíveis na cotação.
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
