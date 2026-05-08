import { useState, useMemo } from 'react'
import { produtos, type CategoriaProduto } from '../data/produtos'
import { segmentos, type SegmentoSlug } from '../data/segmentos'
import { whatsappLink } from '../data/empresa'
import CatalogCard, { catColors } from '../components/CatalogCard'
import { categoriasLabels } from '../data/produtos'

import heroCatalogo from "../assets/catalogo.jpg";

const catOrder: CategoriaProduto[] = [
  'acidos', 'bases', 'sais', 'surfactantes',
  'oxidantes', 'redutores', 'corantes', 'outros',
]

// ─── page ─────────────────────────────────────────────────────────────────
export default function Catalogo() {
  const [busca, setBusca]         = useState('')
  const [categorias, setCategorias] = useState<CategoriaProduto[]>([])
  const [segmento, setSegmento]   = useState('')
  const [ordenacao, setOrdenacao] = useState('az')

  function toggleCat(cat: CategoriaProduto) {
    setCategorias(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const filtered = useMemo(() => {
    let result = [...produtos]

    if (busca.trim()) {
      const q = busca.toLowerCase()
      result = result.filter(p =>
        p.nome.toLowerCase().includes(q) ||
        p.formula?.toLowerCase().includes(q) ||
        p.aplicacoes.some(a => a.toLowerCase().includes(q)) ||
        p.sinonimos?.some(s => s.toLowerCase().includes(q))
      )
    }

    if (categorias.length > 0) result = result.filter(p => categorias.includes(p.categoria))
    if (segmento) result = result.filter(p => p.segmentos.includes(segmento as SegmentoSlug))

    result.sort((a, b) => {
      if (ordenacao === 'za')  return b.nome.localeCompare(a.nome)
      if (ordenacao === 'cat') return a.categoria.localeCompare(b.categoria)
      return a.nome.localeCompare(b.nome)
    })

    return result
  }, [busca, categorias, segmento, ordenacao])

  const hasFilters = busca.trim() || categorias.length > 0 || segmento

  function clearFilters() {
    setBusca('')
    setCategorias([])
    setSegmento('')
    setOrdenacao('az')
  }

  // group by category when no filters active
  const grouped = useMemo(() => {
    if (hasFilters) return null
    const map = new Map<CategoriaProduto, typeof produtos>()
    for (const cat of catOrder) {
      const items = filtered.filter(p => p.categoria === cat)
      if (items.length > 0) map.set(cat, items)
    }
    return map
  }, [filtered, hasFilters])

  return (
    <div className="bg-[#F4F5F9]" style={{ minHeight: '100vh' }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-cover bg-center"

  style={{

    paddingTop: '3.5rem',

    paddingBottom: '3rem',

    backgroundImage: `url(${heroCatalogo})`,

    backgroundPosition: 'center 35%',

  }}>

    <div
  className="absolute inset-0"
  style={{
    background:
      'linear-gradient(to right, rgba(8,12,35,0.92), rgba(8,12,35,0.72))',
  }}
/>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange" aria-hidden="true" />
       
        
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="ds-eyebrow" style={{ marginBottom: '1.25rem' }}>Catálogo de insumos</div>
          <h1
            className="text-white font-display font-bold"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              marginBottom: '0.75rem',
              lineHeight: 1.1,
            }}
          >
            Encontre o insumo certo<br />
            <span className="text-brand-orange">para o seu processo.</span>
          </h1>
          <p className="text-white/50 font-body text-sm" style={{ marginBottom: '2rem' }}>
            33 insumos · 8 categorias · 9 estados
          </p>

          {/* search */}
          <div className="relative max-w-2xl">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={busca}
              onChange={e => setBusca(e.target.value)}
              placeholder="Nome, fórmula química, aplicação ou sinônimo..."
              className="w-full bg-white font-body text-[#131b4a] placeholder:text-slate-400 rounded-lg border-0 pl-12 pr-4"
              style={{
                fontSize: '0.95rem',
                padding: '0.9rem 1rem 0.9rem 3rem',
                boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                outline: 'none',
              }}
              onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(223,83,66,0.4), 0 4px 24px rgba(0,0,0,0.18)')}
              onBlur={e => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.18)')}
            />
            {busca && (
              <button
                onClick={() => setBusca('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Limpar busca"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
        {/* Bottom fade line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)' }}
          aria-hidden="true"
        />
      </div>

      {/* ── FILTERS ───────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-200" style={{ position: 'sticky', top: '60px', zIndex: 30 }}>
        <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>

          {/* category chips */}
          <div className="flex flex-wrap items-center gap-2" style={{ marginBottom: '0.625rem' }}>
            <span className="font-label text-slate-400 text-[0.6rem] uppercase tracking-widest mr-1 flex-shrink-0">
              Tipo:
            </span>
            {catOrder.map(cat => {
              const active = categorias.includes(cat)
              const c = catColors[cat]
              return (
                <button
                  key={cat}
                  onClick={() => toggleCat(cat)}
                  className="font-label font-bold text-[0.6rem] uppercase tracking-widest px-2.5 py-1 rounded-sm transition-all"
                  style={{
                    background: active ? c.accent : c.bg,
                    color: active ? 'white' : c.text,
                    border: `1px solid ${active ? c.accent : 'transparent'}`,
                  }}
                >
                  {categoriasLabels[cat]}
                </button>
              )
            })}
          </div>

          {/* segment + sort + clear */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-label text-slate-400 text-[0.6rem] uppercase tracking-widest mr-1 flex-shrink-0">
              Setor:
            </span>
            {segmentos.map(s => {
              const active = segmento === s.slug
              return (
                <button
                  key={s.slug}
                  onClick={() => setSegmento(active ? '' : s.slug)}
                  className="font-label font-bold text-[0.6rem] uppercase tracking-widest px-2.5 py-1 rounded-sm transition-all"
                  style={{
                    background: active ? '#131b4a' : 'rgba(19,27,74,0.06)',
                    color: active ? 'white' : '#131b4a',
                    border: `1px solid ${active ? '#131b4a' : 'transparent'}`,
                  }}
                >
                  {s.nome}
                </button>
              )
            })}

            <div className="ml-auto flex items-center gap-3">
              <select
                value={ordenacao}
                onChange={e => setOrdenacao(e.target.value)}
                className="font-label text-[0.65rem] uppercase tracking-wide text-slate-500 bg-transparent border-0 cursor-pointer outline-none"
                aria-label="Ordenar"
              >
                <option value="az">A → Z</option>
                <option value="za">Z → A</option>
                <option value="cat">Por categoria</option>
              </select>
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="font-label font-bold text-[0.6rem] uppercase tracking-widest text-brand-orange hover:text-brand-orangehover transition-colors"
                >
                  Limpar tudo ×
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── RESULTS ───────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>

        {/* results count */}
        <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
          <p className="font-label text-slate-400 text-xs uppercase tracking-widest">
            {filtered.length} insumo{filtered.length !== 1 ? 's' : ''}
            {hasFilters ? ' encontrados' : ' no catálogo'}
          </p>
          {hasFilters && (
            <>
              <span className="w-px h-3 bg-slate-300" aria-hidden="true" />
              <div className="flex flex-wrap gap-1.5">
                {busca && (
                  <span className="bg-white border border-slate-200 text-slate-600 font-label text-[0.6rem] uppercase tracking-wide px-2 py-0.5 rounded-sm flex items-center gap-1">
                    "{busca}"
                    <button onClick={() => setBusca('')} className="text-slate-400 hover:text-slate-600">×</button>
                  </span>
                )}
                {categorias.map(cat => (
                  <span
                    key={cat}
                    className="font-label text-[0.6rem] uppercase tracking-wide px-2 py-0.5 rounded-sm flex items-center gap-1"
                    style={{ background: catColors[cat].bg, color: catColors[cat].text }}
                  >
                    {categoriasLabels[cat]}
                    <button onClick={() => toggleCat(cat)}>×</button>
                  </span>
                ))}
                {segmento && (
                  <span className="bg-[#131b4a]/08 border border-[#131b4a]/15 text-[#131b4a] font-label text-[0.6rem] uppercase tracking-wide px-2 py-0.5 rounded-sm flex items-center gap-1">
                    {segmentos.find(s => s.slug === segmento)?.nome}
                    <button onClick={() => setSegmento('')}>×</button>
                  </span>
                )}
              </div>
            </>
          )}
        </div>

        {/* empty state */}
        {filtered.length === 0 && (
          <div className="bg-white border border-slate-200 p-12 text-center max-w-lg mx-auto" style={{ marginTop: '3rem' }}>
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
              style={{ background: 'rgba(47,59,146,0.08)', marginBottom: '1.25rem' }}
            >
              <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3
              className="font-display font-bold text-[#131b4a] text-xl"
              style={{ fontFamily: "'Oswald', sans-serif", marginBottom: '0.75rem' }}
            >
              Nenhum produto encontrado.
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed" style={{ marginBottom: '2rem' }}>
              Refine a busca ou fale direto com a gente — temos linha completa, e às vezes o produto tem outro nome no catálogo.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={clearFilters}
                className="font-label font-bold text-sm text-brand-blue hover:text-brand-orange transition-colors uppercase tracking-wide"
              >
                Limpar filtros
              </button>
              <a
                href={whatsappLink('Olá! Não encontrei o produto que preciso no catálogo do site. Pode me ajudar?')}
                target="_blank"
                rel="noreferrer"
                className="ds-btn-primary py-2.5 px-5 text-xs"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* grouped view (no filters active) */}
        {grouped && (
          <div className="flex flex-col gap-12">
            {Array.from(grouped.entries()).map(([cat, items]) => {
              const c = catColors[cat]
              return (
                <div key={cat}>
                  <div
                    className="flex items-center gap-3"
                    style={{ marginBottom: '1.25rem' }}
                  >
                    <span
                      className="font-display font-bold text-lg"
                      style={{ fontFamily: "'Oswald', sans-serif", color: c.accent }}
                    >
                      {categoriasLabels[cat]}
                    </span>
                    <div className="flex-1 h-px" style={{ background: c.bg }} aria-hidden="true" />
                    <span className="font-label text-[0.6rem] uppercase tracking-widest" style={{ color: c.text }}>
                      {items.length} produto{items.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div
                    className="grid gap-px"
                    style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', background: '#e2e8f0' }}
                  >
                    {items.map(p => <CatalogCard key={p.slug} produto={p} />)}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* flat grid (filters active) */}
        {!grouped && filtered.length > 0 && (
          <div
            className="grid gap-px"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', background: '#e2e8f0' }}
          >
            {filtered.map(p => <CatalogCard key={p.slug} produto={p} />)}
          </div>
        )}
      </div>

      {/* ── FOOTER CTA ────────────────────────────────────────── */}
      <div className="bg-white border-t border-slate-200" style={{ padding: '3rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p
              className="font-display font-bold text-[#131b4a]"
              style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.1rem', marginBottom: '0.25rem' }}
            >
              Não encontrou o que precisava?
            </p>
            <p className="text-slate-400 font-body text-sm">
              Linha completa disponível — mande o nome ou a fórmula no WhatsApp.
            </p>
          </div>
          <a
            href={whatsappLink('Olá! Preciso cotar um produto que não encontrei no catálogo do site da Quimitêxtil.')}
            target="_blank"
            rel="noreferrer"
            className="ds-btn-primary flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Consultar pelo WhatsApp
          </a>
        </div>
      </div>

    </div>
  )
}
