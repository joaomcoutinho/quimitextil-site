import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import CookieBanner from './CookieBanner'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Sem overflow-x no wrapper: ele criaria um contêiner de rolagem e quebraria
  // o position:sticky do header. O corte horizontal fica no html e no body.
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* overflow-x-clip, não hidden: hidden criaria contêiner de rolagem e
          quebraria os elementos sticky das páginas (filtros do catálogo e
          título do FAQ), além do header. */}
      <main className="flex-1 overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </div>
  )
}
