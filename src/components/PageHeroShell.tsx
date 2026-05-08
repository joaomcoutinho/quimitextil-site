import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  watermark?: string
  minHeight?: string
  backgroundImage?: string
}

export default function PageHeroShell({
  children,
  watermark,
  minHeight = '300px',
  backgroundImage,
}: Props) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        minHeight,
        paddingTop: '4rem',
        paddingBottom: '4rem',

        backgroundImage: backgroundImage
          ? `
            linear-gradient(rgba(19,27,74,0.78), rgba(19,27,74,0.78)),
            url(${backgroundImage})
          `
          : undefined,

        backgroundColor: '#131b4a',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Texture */}
      <div className="absolute inset-0 ds-grid-texture opacity-30" />

      {/* Left orange accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange"
        aria-hidden="true"
      />

      {/* Blue glow — top right */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '480px',
          height: '480px',
          background:
            'radial-gradient(circle, rgba(47,59,146,0.32) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
        aria-hidden="true"
      />

      {/* Orange glow — bottom left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          left: '6%',
          width: '320px',
          height: '320px',
          background:
            'radial-gradient(circle, rgba(223,83,66,0.15) 0%, transparent 70%)',
          transform: 'translateY(40%)',
        }}
        aria-hidden="true"
      />

      {/* Watermark */}
      {watermark && (
        <div
          className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="text-white font-display font-bold"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 'clamp(8rem, 15vw, 14rem)',
              lineHeight: 1,
              opacity: 0.045,
              letterSpacing: '-0.02em',
              marginRight: '-0.5rem',
            }}
          >
            {watermark}
          </span>
        </div>
      )}

      {/* Geometric decorators */}
      <div
        className="absolute top-5 right-5 w-8 h-8 border border-white/10 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute top-5 right-[3.5rem] w-4 h-4 border border-brand-orange/20 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-5 right-5 w-8 h-8 border border-white/10 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-9 right-[3.5rem] w-2 h-2 bg-brand-orange/30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom fade line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
        }}
        aria-hidden="true"
      />
    </div>
  )
}