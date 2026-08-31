import { Link } from 'react-router-dom'
import { whatsappLink } from '../data/empresa'
import { produtos } from '../data/produtos'
import { segmentos } from '../data/segmentos'
import PageHeroShell from '../components/PageHeroShell'

const atalhos = [
  {
    to: '/catalogo',
    titulo: 'Catálogo',
    descricao: `${produtos.length} insumos químicos, com ficha técnica e FISPQ sob solicitação.`,
  },
  {
    to: '/segmentos',
    titulo: 'Segmentos',
    descricao: `Os ${segmentos.length} segmentos industriais atendidos e o que fornecemos para cada um.`,
  },
  {
    to: '/logistica',
    titulo: 'Logística',
    descricao: 'Cobertura em seis estados do Nordeste e entrega em até 72 horas.',
  },
  {
    to: '/sobre',
    titulo: 'A empresa',
    descricao: 'Cinquenta anos de operação em Vitória de Santo Antão, Pernambuco.',
  },
  {
    to: '/esg',
    titulo: 'ESG e licenças',
    descricao: 'Licenciamento ambiental, Polícia Federal, IBAMA e certificações da equipe.',
  },
  {
    to: '/contato',
    titulo: 'Contato',
    descricao: 'Telefone, e-mail, endereço e horário de atendimento do comercial.',
  },
]

export default function NaoEncontrado() {
  return (
    <div>
      <PageHeroShell watermark="404" minHeight="340px">
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-eyebrow" style={{ marginBottom: '1.5rem' }}>
            Erro 404
          </div>
          <h1
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Oswald', sans-serif", marginBottom: '1.25rem' }}
          >
            Esta página não existe.
          </h1>
          <p className="text-white/70 font-body text-base leading-relaxed max-w-xl" style={{ marginBottom: '2.5rem' }}>
            O endereço pode ter mudado, o link pode estar incompleto ou o produto
            pode ter saído do catálogo. Abaixo estão os caminhos mais procurados.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="ds-btn-primary">
              Voltar para o início
            </Link>
            <Link to="/catalogo" className="ds-btn-ghost">
              Ver o catálogo
            </Link>
          </div>
        </div>
      </PageHeroShell>

      <section className="bg-[#F4F5F9]" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-row-label">
            <span className="ds-label">Onde você provavelmente queria chegar</span>
          </div>

          {/* 6 atalhos em 1 / 2 / 3 colunas: divisores exatos de 6, entao a
              ultima linha nunca fica com celula vazia. */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: '#e2e8f0', marginTop: '1.5rem' }}
          >
            {atalhos.map(atalho => (
              <Link
                key={atalho.to}
                to={atalho.to}
                className="bg-white group flex flex-col min-w-0 p-6 transition-colors hover:bg-[#fafbfd]"
              >
                <div className="flex items-center justify-between gap-4" style={{ marginBottom: '0.75rem' }}>
                  <h2
                    className="font-display font-bold text-[#131b4a] group-hover:text-brand-blue transition-colors"
                    style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.15rem' }}
                  >
                    {atalho.titulo}
                  </h2>
                  <svg
                    className="w-4 h-4 text-slate-300 group-hover:text-brand-orange flex-shrink-0 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-slate-500 font-body text-sm leading-relaxed">{atalho.descricao}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#131b4a] ds-grid-texture" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="font-display font-bold text-white text-3xl"
            style={{ fontFamily: "'Oswald', sans-serif", marginBottom: '1.25rem' }}
          >
            Procurando um insumo específico?
          </h2>
          <p className="text-white/70 font-body" style={{ marginBottom: '2.5rem' }}>
            Manda o nome do produto no WhatsApp. Nosso comercial confirma disponibilidade na hora.
          </p>
          <a
            href={whatsappLink('Olá! Estava procurando um produto no site da Quimitêxtil e não encontrei a página.')}
            target="_blank"
            rel="noreferrer"
            className="ds-btn-primary"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
