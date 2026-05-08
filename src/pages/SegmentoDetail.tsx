import { useParams, Navigate, Link } from 'react-router-dom'
import { getSegmento } from '../data/segmentos'
import { produtosPorSegmento } from '../data/produtos'
import { whatsappLink } from '../data/empresa'
import CatalogCard from '../components/CatalogCard'
import SegmentIcon from '../components/SegmentIcon'
import PageHeroShell from '../components/PageHeroShell'

export default function SegmentoDetail() {
  const { slug } = useParams<{ slug: string }>()
  const segmento = getSegmento(slug ?? '')

  if (!segmento) return <Navigate to="/segmentos" />

  const segProdutos = produtosPorSegmento(segmento.slug)
  const cotarMsg = `Olá! Atuo no segmento ${segmento.nome} e gostaria de cotar produtos com a Quimitêxtil.`

  return (
    <div>
      <PageHeroShell minHeight="340px">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs font-label text-white/40" style={{ marginBottom: '1.25rem' }}>
            <Link to="/" className="hover:text-white/70 transition-colors">Início</Link>
            <span>/</span>
            <Link to="/segmentos" className="hover:text-white/70 transition-colors">Segmentos</Link>
          </nav>
          <div className="flex items-center gap-4" style={{ marginBottom: '1.25rem' }}>
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(223,83,66,0.15)', color: '#df5342' }}
            >
              <SegmentIcon slug={segmento.slug} className="w-7 h-7" />
            </div>
            <h1
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Oswald', sans-serif" }}
            >
              {segmento.nome}
            </h1>
          </div>
          <p className="text-white/70 font-body text-base leading-relaxed max-w-2xl" style={{ marginBottom: '2.5rem' }}>
            {segmento.descricaoLonga}
          </p>
          <a
            href={whatsappLink(cotarMsg)}
            target="_blank"
            rel="noreferrer"
            className="ds-btn-primary"
          >
            Cotar produtos para {segmento.nome}
          </a>
        </div>
      </PageHeroShell>

      <section className="bg-[#F4F5F9] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-row-label">
            <span className="ds-label">Insumos para {segmento.nome}</span>
          </div>
          <p className="ds-label" style={{ marginBottom: '2rem' }}>
            {segProdutos.length} insumo{segProdutos.length !== 1 ? 's' : ''} disponíve{segProdutos.length !== 1 ? 'is' : 'l'}
          </p>

          {segProdutos.length > 0 ? (
            <div
              className="grid gap-px"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', background: '#e2e8f0' }}
            >
              {segProdutos.map(p => (
                <CatalogCard key={p.slug} produto={p} />
              ))}
            </div>
          ) : (
            <div className="border-l-4 border-brand-blue bg-blue-50 p-8">
              <p className="text-slate-600 font-body">
                Produtos deste segmento disponíveis mediante consulta.{' '}
                <a href={whatsappLink(cotarMsg)} target="_blank" rel="noreferrer" className="text-brand-blue font-bold hover:text-brand-orange transition-colors">
                  Fale com nosso comercial.
                </a>
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
