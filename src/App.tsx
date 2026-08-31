import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Produto from './pages/Produto'
import Segmentos from './pages/Segmentos'
import SegmentoDetail from './pages/SegmentoDetail'
import Sobre from './pages/Sobre'
import Esg from './pages/Esg'
import Contato from './pages/Contato'
import Logistica from './pages/Logistica'
import FAQ from './pages/FAQ'
import Privacidade from './pages/Privacidade'
import NaoEncontrado from './pages/NaoEncontrado'

export default function App() {
  return (
    <BrowserRouter basename="/quimitextil-site">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/produto/:slug" element={<Produto />} />
          <Route path="/segmentos" element={<Segmentos />} />
          <Route path="/segmentos/:slug" element={<SegmentoDetail />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/esg" element={<Esg />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/logistica" element={<Logistica />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/politica-de-privacidade" element={<Privacidade />} />
          {/* Rota desconhecida: pagina 404 propria, em vez de mandar em silencio para a home */}
          <Route path="*" element={<NaoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
