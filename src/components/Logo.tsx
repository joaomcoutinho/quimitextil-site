import { Link } from 'react-router-dom'
import { empresa } from '../data/empresa'

// 1. Importe a sua logo PNG aqui
import logoPng from '../assets/logo_quimitextil-removebg-preview.png' 

interface LogoProps {
  variant?: 'dark' | 'light'
  showAnos?: boolean
}

export default function Logo({ variant = 'dark', showAnos = false }: LogoProps) {
  const isLight = variant === 'light'
  const nameColor = isLight ? 'text-white' : 'text-brand-blue'
  const taglineColor = isLight ? 'text-white/60' : 'text-slate-500'

  return (
    <Link to="/" className="flex items-center gap-3 no-underline group">
      {/* 2. Substituímos o desenho manual pela tag img */}
      <div className="flex-shrink-0">
        <img
          src={logoPng}
          alt={empresa.nome}
          className="h-10 w-auto"
          style={{ filter: isLight ? 'brightness(0) invert(1)' : 'none' }}
        />
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-bold text-[1.1rem] tracking-tight uppercase ${nameColor}`}
          style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '-0.01em' }}
        >
          {empresa.nome}
        </span>
        {showAnos ? (
          <span className="flex items-center gap-1">
            <span className={`text-[0.6rem] font-bold uppercase tracking-widest font-label ${taglineColor}`}>
              {empresa.anosHistoria} anos
            </span>
          </span>
        ) : (
          <span
            className={`text-[0.5rem] font-bold uppercase tracking-[0.12em] font-label ${taglineColor}`}
          >
            Distribuição Química Industrial
          </span>
        )}
      </div>
    </Link>
  )
}