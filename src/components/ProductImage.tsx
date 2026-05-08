import type { Produto } from '../data/produtos'
// Renomeamos aqui para evitar conflito com a prop 'produto'
import produtoImg from "../assets/produto.jpeg"

interface ProductImageProps {
  produto: Produto
  className?: string
  showFormula?: boolean
}

export default function ProductImage({ produto, className = '', showFormula = false }: ProductImageProps) {
  return (
    <div className={`aspect-square relative overflow-hidden ${className}`}>
      {/* A imagem importada agora preenche todo o fundo */}
      <img 
        src={produtoImg} 
        alt={produto.nome}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay escuro opcional para caso a imagem seja muito clara (ajuda a ver a fórmula) */}
      <div className="absolute inset-0 bg-black/5" aria-hidden="true" />

      {showFormula && produto.formula && (
        <div className="absolute bottom-3 left-3 z-10">
          <span
            className="bg-black/60 backdrop-blur-sm text-white/90 px-2 py-1 rounded text-[0.6rem] font-mono border border-white/10"
          >
            {produto.formula}
          </span>
        </div>
      )}
    </div>
  )
}