import { Link } from 'react-router-dom'
import type { Produto, CategoriaProduto } from '../data/produtos'
import { categoriasLabels } from '../data/produtos'
import { whatsappLink } from '../data/empresa'

export const catColors: Record<CategoriaProduto, { accent: string; bg: string; text: string }> = {
  acidos:       { accent: '#df5342', bg: 'rgba(223,83,66,0.09)',   text: '#df5342' },
  bases:        { accent: '#2F3B92', bg: 'rgba(47,59,146,0.09)',   text: '#2F3B92' },
  sais:         { accent: '#0891b2', bg: 'rgba(8,145,178,0.09)',   text: '#0891b2' },
  surfactantes: { accent: '#7c3aed', bg: 'rgba(124,58,237,0.09)',  text: '#7c3aed' },
  oxidantes:    { accent: '#d97706', bg: 'rgba(217,119,6,0.09)',   text: '#d97706' },
  redutores:    { accent: '#059669', bg: 'rgba(5,150,105,0.09)',   text: '#059669' },
  corantes:     { accent: '#db2777', bg: 'rgba(219,39,119,0.09)',  text: '#db2777' },
  outros:       { accent: '#64748b', bg: 'rgba(100,116,139,0.09)', text: '#64748b' },
}

export default function CatalogCard({ produto }: { produto: Produto }) {
  const c = catColors[produto.categoria]
  return (
    <article
      className="bg-white group flex flex-col"
      style={{
        borderTop: `3px solid ${c.accent}`,
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = '0 16px 40px -8px rgba(19,27,74,0.16)'
        el.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)'
        el.style.transform = 'translateY(0)'
      }}
    >
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between" style={{ marginBottom: '1rem' }}>
          <span
            className="font-label font-bold text-[0.6rem] uppercase tracking-widest px-2 py-1 rounded-sm"
            style={{ background: c.bg, color: c.text }}
          >
            {categoriasLabels[produto.categoria]}
          </span>
          {produto.formula && (
            <span className="font-mono text-[0.65rem] text-slate-300 select-all">
              {produto.formula}
            </span>
          )}
        </div>

        <Link to={`/produto/${produto.slug}`} className="block" style={{ marginBottom: '0.75rem' }}>
          <h3
            className="font-display font-bold leading-tight group-hover:text-brand-blue transition-colors"
            style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.2rem', color: '#131b4a' }}
          >
            {produto.nome}
          </h3>
        </Link>

        <p className="text-slate-500 font-body text-sm leading-relaxed" style={{ marginBottom: '0.5rem' }}>
          {produto.aplicacoes[0]}
        </p>

        <p
          className="font-label text-slate-400 uppercase tracking-widest"
          style={{ fontSize: '0.6rem', marginBottom: 'auto', paddingBottom: '1.25rem' }}
        >
          {produto.apresentacao}
        </p>

        <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #f1f5f9' }}>
          <Link
            to={`/produto/${produto.slug}`}
            className="font-label font-bold text-brand-blue hover:text-brand-orange transition-colors"
            style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}
          >
            Ficha técnica →
          </Link>
          <a
            href={whatsappLink(`Olá! Preciso cotar ${produto.nome} com a Quimitêxtil.`)}
            target="_blank"
            rel="noreferrer"
            className="ml-auto font-label font-bold text-white px-3 py-1.5 rounded-sm"
            style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', background: c.accent, transition: 'filter 0.15s' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.filter = 'brightness(0.88)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.filter = 'brightness(1)'}
          >
            Cotar
          </a>
        </div>
      </div>
    </article>
  )
}
