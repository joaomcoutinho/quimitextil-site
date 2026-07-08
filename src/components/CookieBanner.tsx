import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible] = useState(() => !localStorage.getItem('cookies-accepted'))
  const [show, setShow] = useState(visible)

  if (!show) return null

  function accept() {
    localStorage.setItem('cookies-accepted', 'true')
    setShow(false)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#131b4a] border-t border-white/10 py-3">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
        <p className="text-white/70 text-sm font-body leading-relaxed">
          Usamos cookies para entender como o site é navegado. Continuar a navegação é concordar com a{' '}
          <Link to="/politica-de-privacidade" className="text-brand-orange underline hover:text-brand-orangelight">
            Política de Privacidade
          </Link>
          .
        </p>
        <button
          onClick={accept}
          className="ds-btn-primary flex-shrink-0 py-2 px-5 text-xs"
        >
          Concordar
        </button>
      </div>
    </div>
  )
}
