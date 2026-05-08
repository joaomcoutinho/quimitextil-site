import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Produto from './pages/Produto'
import Segmentos from './pages/Segmentos'
import SegmentoDetail from './pages/SegmentoDetail'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Logistica from './pages/Logistica'
import FAQ from './pages/FAQ'
import Privacidade from './pages/Privacidade'

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
          <Route path="/contato" element={<Contato />} />
          <Route path="/logistica" element={<Logistica />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/politica-de-privacidade" element={<Privacidade />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
