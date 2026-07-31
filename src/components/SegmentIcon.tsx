interface Props {
  slug: string
  className?: string
}

/**
 * Ícones setoriais em estilo duotone: a silhueta principal recebe um
 * preenchimento suave em currentColor e o traço por cima, os detalhes
 * ficam só em traço. Funciona tanto em tile claro (ícone colorido)
 * quanto em tile escuro (ícone branco), sem precisar de segunda cor.
 */
export default function SegmentIcon({ slug, className = 'w-6 h-6' }: Props) {
  const p = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true as const,
  }

  // preenchimento suave da silhueta
  const solid = { fill: 'currentColor', fillOpacity: 0.16 }

  switch (slug) {
    // gota d'água com ondas — tratamento e clarificação
    case 'tratamento-de-agua':
      return (
        <svg {...p}>
          <path
            d="M12 3.6c3.8 4 6.7 7.2 6.7 10.4a6.7 6.7 0 1 1-13.4 0C5.3 10.8 8.2 7.6 12 3.6Z"
            {...solid}
          />
          <path d="M8.7 14.3c1.1-1.05 2.15-1.05 3.25 0s2.15 1.05 3.25 0" />
          <path d="M9.4 17.7c.87-.83 1.7-.83 2.57 0s1.7.83 2.57 0" />
        </svg>
      )

    // carretel de linha — tinturaria, lavanderia e acabamento
    case 'textil':
      return (
        <svg {...p}>
          <rect x="4.4" y="2.9" width="15.2" height="3.1" rx="1.2" {...solid} />
          <rect x="4.4" y="18" width="15.2" height="3.1" rx="1.2" {...solid} />
          <path d="M7.7 6v12M16.3 6v12" />
          <path d="M7.7 9.6l8.6-1.4M7.7 13.1l8.6-1.4M7.7 16.6l8.6-1.4" />
        </svg>
      )

    // espiga de trigo — grau alimentício, panificação e ingredientes
    case 'alimenticio':
      return (
        <svg {...p}>
          <path d="M12 21.8V7.4" />
          <path d="M12 12.6c0-2.8 1.6-5 3.6-5 0 2.8-1.6 5-3.6 5Z" {...solid} />
          <path d="M12 12.6c0-2.8-1.6-5-3.6-5 0 2.8 1.6 5 3.6 5Z" {...solid} />
          <path d="M12 18.6c0-2.8 1.6-5 3.6-5 0 2.8-1.6 5-3.6 5Z" {...solid} />
          <path d="M12 18.6c0-2.8-1.6-5-3.6-5 0 2.8 1.6 5 3.6 5Z" {...solid} />
        </svg>
      )

    // frasco com brilho — saneantes e limpeza profissional
    case 'saneantes':
      return (
        <svg {...p}>
          <rect x="9.5" y="2.6" width="5" height="2.8" rx=".9" {...solid} />
          <path
            d="M10.4 5.4v1.5c0 .7-.35 1.3-.9 1.75A3.6 3.6 0 0 0 8 11.5v7.7a2.2 2.2 0 0 0 2.2 2.2h3.6a2.2 2.2 0 0 0 2.2-2.2v-7.7a3.6 3.6 0 0 0-1.5-2.85c-.55-.45-.9-1.05-.9-1.75V5.4"
            {...solid}
          />
          <path d="M8 13.2h8M8 16.4h8" />
          <path
            d="M19.3 3.2l.85 2.35 2.35.85-2.35.85-.85 2.35-.85-2.35-2.35-.85 2.35-.85z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      )

    // bobina de papel — celulose e processo
    case 'papel-celulose':
      return (
        <svg {...p}>
          <path d="M7 6.6v10.8a5 2.7 0 0 0 10 0V6.6" {...solid} />
          <ellipse cx="12" cy="6.6" rx="5" ry="2.7" {...solid} />
          <ellipse cx="12" cy="6.6" rx="1.5" ry=".8" />
        </svg>
      )

    // cápsula — insumos USP, cosméticos e farmacêutico
    case 'cosmeticos-farmaceutico':
      return (
        <svg {...p}>
          <path
            d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"
            {...solid}
          />
          <path d="m8.5 8.5 7 7" />
        </svg>
      )

    // pele/couro estendido — curtume
    case 'curtume':
      return (
        <svg {...p}>
          <path
            d="M11.2 3.2h1.6c.95 0 1.65.7 1.85 1.6.25 1.15 1.2 1.95 2.4 2l2.35.1c1.5.05 2.15 1.85 1.05 2.85l-1.4 1.3c-.85.8-1.05 2.05-.5 3.05l1.25 2.3c.75 1.35-.35 2.9-1.85 2.65l-2.35-.4c-1.1-.2-2.2.35-2.7 1.35l-.35.7c-.35.7-1.35.7-1.7 0l-.35-.7c-.5-1-1.6-1.55-2.7-1.35l-2.35.4c-1.5.25-2.6-1.3-1.85-2.65l1.25-2.3c.55-1 .35-2.25-.5-3.05l-1.4-1.3c-1.1-1-.45-2.8 1.05-2.85l2.35-.1c1.2-.05 2.15-.85 2.4-2 .2-.9.9-1.6 2.45-1.6Z"
            {...solid}
          />
        </svg>
      )

    // trator — agricultura, pecuária e nutrientes
    case 'agropecuario':
      return (
        <svg {...p}>
          <circle cx="7.2" cy="16.4" r="4.4" {...solid} />
          <circle cx="7.2" cy="16.4" r="1.5" />
          <circle cx="18.4" cy="18.4" r="2.6" {...solid} />
          <path d="M11.6 16.6V8.8h3.6v3.4h4.4a1.4 1.4 0 0 1 1.4 1.4v3.4" />
          <path d="M11.6 16.6h4.3" />
        </svg>
      )

    // frasco de laboratório — fallback
    default:
      return (
        <svg {...p}>
          <path
            d="M9.8 3.2v5.4a2.4 2.4 0 0 1-.35 1.25L4.9 17.3A2.4 2.4 0 0 0 6.95 21h10.1a2.4 2.4 0 0 0 2.05-3.7l-4.55-7.45a2.4 2.4 0 0 1-.35-1.25V3.2"
            {...solid}
          />
          <path d="M8.6 3.2h6.8" />
          <path d="M7.6 14.6h8.8" />
        </svg>
      )
  }
}
