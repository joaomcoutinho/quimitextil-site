import { Link } from 'react-router-dom'
import Logo from './Logo'
import { empresa } from '../data/empresa'
import { segmentos } from '../data/segmentos'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/segmentos', label: 'Segmentos' },
  { to: '/logistica', label: 'Logística' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
  { to: '/faq', label: 'FAQ' },
  { to: '/politica-de-privacidade', label: 'Privacidade' },
]

export default function Footer() {
  return (
    <footer className="bg-[#131b4a] text-white relative">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue via-brand-bluelight to-brand-orange opacity-60" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="flex flex-col gap-4">
            <Logo variant="light" />
            <p className="text-white/60 text-sm font-body leading-relaxed">
              A química que abastece a indústria do Nordeste — desde 1977.
            </p>
            <a
              href={empresa.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-brand-orange transition-colors text-sm font-label"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @{empresa.instagram}
            </a>
          </div>

          <div>
            <h4 className="text-[0.65rem] font-label font-bold uppercase tracking-widest text-white/40 mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white/60 hover:text-white transition-colors text-sm font-body"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-[0.65rem] font-label font-bold uppercase tracking-widest text-white/40 mb-4">Setores atendidos</h4>
            <nav className="flex flex-col gap-2">
              {segmentos.slice(0, 6).map(seg => (
                <Link
                  key={seg.slug}
                  to={`/segmentos/${seg.slug}`}
                  className="text-white/60 hover:text-white transition-colors text-sm font-body"
                >
                  {seg.nome}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-[0.65rem] font-label font-bold uppercase tracking-widest text-white/40 mb-4">Atendimento direto</h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[0.6rem] font-label font-bold uppercase tracking-widest text-white/30 mb-1">WhatsApp</p>
                <a
                  href={`https://wa.me/${empresa.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-brand-orange transition-colors text-sm font-body font-medium"
                >
                  (81) 9 9551-0011
                </a>
              </div>
              <div>
                <p className="text-[0.6rem] font-label font-bold uppercase tracking-widest text-white/30 mb-1">Telefone</p>
                <a
                  href={`tel:${empresa.telefone.replace(/\D/g, '')}`}
                  className="text-white hover:text-brand-orange transition-colors text-sm font-body font-medium"
                >
                  {empresa.telefone}
                </a>
              </div>
              <div>
                <p className="text-[0.6rem] font-label font-bold uppercase tracking-widest text-white/30 mb-1">Instagram</p>
                <a
                  href={empresa.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-brand-orange transition-colors text-sm font-body font-medium"
                >
                  @{empresa.instagram}
                </a>
              </div>
              <div>
                <p className="text-[0.6rem] font-label font-bold uppercase tracking-widest text-white/30 mb-1">Endereço</p>
                <p className="text-white/60 text-sm font-body">{empresa.endereco}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-label">
            © {new Date().getFullYear()} {empresa.razaoSocial} · CNPJ {empresa.cnpj} · IE {empresa.inscricaoEstadual}
          </p>
          <Link
            to="/politica-de-privacidade"
            className="text-white/40 hover:text-white/70 transition-colors text-xs font-label underline"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
