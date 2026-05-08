import { Link } from 'react-router-dom'
import type { Produto } from '../data/produtos'
import { categoriasLabels } from '../data/produtos'
import { whatsappLink } from '../data/empresa'
import ProductImage from './ProductImage'

interface ProductCardProps {
  produto: Produto
}

export default function ProductCard({ produto }: ProductCardProps) {
  return (
    <article className="bg-white flex flex-col hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] transition-all duration-200 group">
      <Link to={`/produto/${produto.slug}`} className="block flex-shrink-0">
        <ProductImage produto={produto} />
      </Link>
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-center justify-between gap-2">
          <span className="ds-chip">{categoriasLabels[produto.categoria]}</span>
          {produto.formula && (
            <span className="font-mono text-[0.6rem] text-slate-400">{produto.formula}</span>
          )}
        </div>

        <Link to={`/produto/${produto.slug}`} className="block group/title">
          <h3
            className="text-brand-blue font-display font-semibold text-lg leading-tight group-hover/title:text-brand-orange transition-colors"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {produto.nome}
          </h3>
        </Link>

        <p className="text-xs text-slate-500 font-body">
          <span className="ds-label" style={{ fontSize: '0.55rem' }}>Para: </span>
          {produto.aplicacoes[0]}
        </p>

        <p className="text-[0.7rem] text-slate-400 font-label uppercase tracking-wide">
          {produto.apresentacao}
        </p>

        <div className="flex gap-2 mt-auto pt-2 border-t border-slate-100">
          <Link
            to={`/produto/${produto.slug}`}
            className="text-brand-blue text-[0.75rem] font-label font-bold uppercase tracking-wide hover:text-brand-orange transition-colors"
          >
            Ficha técnica →
          </Link>
          <a
            href={whatsappLink(`Olá! Preciso cotar ${produto.nome} com a Quimitêxtil.`)}
            target="_blank"
            rel="noreferrer"
            className="ml-auto text-[0.75rem] font-label font-bold uppercase tracking-wide text-brand-orange hover:text-brand-orangehover transition-colors"
          >
            Cotar
          </a>
        </div>
      </div>
    </article>
  )
}
