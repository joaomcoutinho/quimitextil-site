import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { empresa, whatsappLink } from '../data/empresa'

const navLinks = [
  { to: '/', label: 'Início', end: true },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/logistica', label: 'Logística' },
  { to: '/segmentos', label: 'Segmentos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const indicatorRef = useRef<HTMLSpanElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Sliding underline indicator
  useEffect(() => {
    const nav = navRef.current
    const bar = indicatorRef.current
    if (!nav || !bar) return

    const moveTo = (el: HTMLElement | null) => {
      if (!el) { bar.style.opacity = '0'; return }
      const navRect = nav.getBoundingClientRect()
      const rect = el.getBoundingClientRect()
      bar.style.left = `${rect.left - navRect.left}px`
      bar.style.width = `${rect.width}px`
      bar.style.opacity = '1'
    }

    // position on active link
    moveTo(nav.querySelector<HTMLElement>('[aria-current="page"]'))

    const links = nav.querySelectorAll<HTMLElement>('a')
    const onEnter = (e: Event) => moveTo(e.currentTarget as HTMLElement)
    const onLeave = () => moveTo(nav.querySelector<HTMLElement>('[aria-current="page"]'))

    links.forEach(a => {
      a.addEventListener('mouseenter', onEnter)
      a.addEventListener('mouseleave', onLeave)
    })
    return () => {
      links.forEach(a => {
        a.removeEventListener('mouseenter', onEnter)
        a.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [location])

  return (
    <>
      <header
        className="sticky top-0 z-40 relative overflow-hidden"
        style={{
          background: '#131b4a',
          boxShadow: scrolled
            ? '0 4px 32px rgba(0,0,0,0.4)'
            : '0 1px 0 rgba(255,255,255,0.05)',
          transition: 'box-shadow 0.3s',
        }}
      >
        {/* Subtle grid texture */}
        <div className="absolute inset-0 ds-grid-texture opacity-20 pointer-events-none" aria-hidden="true" />

        {/* Left orange accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange" aria-hidden="true" />

        {/* Bottom gradient line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #df5342 0%, #2F3B92 45%, #2F3B92 55%, #df5342 100%)',
            opacity: 0.55,
          }}
          aria-hidden="true"
        />

        <nav className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-between h-[68px]">

          <Logo variant="light" />

          {/* Desktop links */}
          <div ref={navRef} className="hidden lg:flex items-center relative">

            {/* Sliding underline */}
            <span
              ref={indicatorRef}
              className="absolute bottom-0 h-0.5 bg-brand-orange rounded-full pointer-events-none"
              style={{
                opacity: 0,
                transition:
                  'left 0.3s cubic-bezier(0.4,0,0.2,1), width 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s',
              }}
              aria-hidden="true"
            />

            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `relative px-4 h-[68px] inline-flex items-center gap-1.5 text-[0.65rem] font-label font-bold uppercase tracking-[0.12em] transition-colors duration-150 ` +
                  (isActive ? 'text-brand-orange' : 'text-white/45 hover:text-white')
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span
                        className="w-1 h-1 rounded-full bg-brand-orange flex-shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <div className="w-px h-4 bg-white/10" aria-hidden="true" />
            <a
              href={`tel:${empresa.telefone.replace(/\D/g, '')}`}
              className="font-label font-semibold tracking-wide transition-colors duration-150"
              style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)')}
            >
              {empresa.telefone}
            </a>
            <a
              href={whatsappLink('Olá! Vim pelo site da Quimitêxtil e gostaria de solicitar uma cotação.')}
              target="_blank"
              rel="noreferrer"
              className="ds-btn-primary py-2 px-5 text-xs"
            >
              Falar agora
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <>
                <span className="block w-5 h-[2px] rounded" style={{ background: 'rgba(255,255,255,0.75)' }} />
                <span className="block w-5 h-[2px] rounded" style={{ background: 'rgba(255,255,255,0.75)' }} />
                <span className="block w-3.5 h-[2px] rounded bg-brand-orange" />
              </>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed top-[68px] left-0 right-0 z-30 border-b shadow-2xl lg:hidden"
          style={{ background: '#0e1540', borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <div className="absolute inset-0 ds-grid-texture opacity-15 pointer-events-none" aria-hidden="true" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange" aria-hidden="true" />

          <nav className="relative z-10 max-w-7xl mx-auto px-6 py-3 flex flex-col">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3.5 text-[0.7rem] font-label font-bold uppercase tracking-widest border-l-2 transition-colors ` +
                  (isActive
                    ? 'text-brand-orange border-brand-orange bg-brand-orange/5'
                    : 'text-white/45 border-transparent hover:text-white hover:border-white/15')
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="h-px my-3 mx-4" style={{ background: 'rgba(255,255,255,0.07)' }} aria-hidden="true" />

            <a
              href={`tel:${empresa.telefone.replace(/\D/g, '')}`}
              className="px-4 py-2 font-label tracking-wide"
              style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}
            >
              {empresa.telefone}
            </a>

            <a
              href={whatsappLink('Olá! Vim pelo site da Quimitêxtil e gostaria de solicitar uma cotação.')}
              target="_blank"
              rel="noreferrer"
              className="ds-btn-primary mt-2 mx-4 mb-4 justify-center"
              onClick={() => setOpen(false)}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar agora
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
