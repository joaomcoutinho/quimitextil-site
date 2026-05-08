import { empresa, whatsappLink } from '../data/empresa'
import PageHeroShell from '../components/PageHeroShell'

const categorias = [
  {
    label: 'Sobre nossos produtos',
    items: [
      {
        q: 'Quais produtos químicos vocês fornecem?',
        a: 'Trabalhamos com 33 insumos químicos — ácidos, bases, sais, oxidantes, redutores, surfactantes, corantes e outros — para 8 segmentos industriais. Acesse o catálogo completo para ver todos os produtos disponíveis.',
      },
      {
        q: 'Posso solicitar a FISPQ de um produto antes de comprar?',
        a: 'Sim. A Ficha de Informações de Segurança de Produto Químico é fornecida sem custo. Solicite pelo WhatsApp informando o produto.',
      },
      {
        q: 'Vocês atendem demandas customizadas (volume, embalagem, especificação)?',
        a: 'Cada operação é única. Para volumes específicos, embalagens especiais ou exigências técnicas particulares, fale diretamente com nosso comercial — analisamos caso a caso.',
      },
    ],
  },
  {
    label: 'Sobre logística',
    items: [
      {
        q: 'Vocês entregam em qual região?',
        a: 'Atendemos os 9 estados do Nordeste com frota própria: Pernambuco, Alagoas, Bahia, Ceará, Maranhão, Paraíba, Piauí, Rio Grande do Norte e Sergipe.',
      },
      {
        q: 'Como é feita a entrega?',
        a: 'Saída do nosso CD em Vitória de Santo Antão / PE, com frota especializada e motoristas certificados em MOPP. Cada entrega é acompanhada operacionalmente.',
      },
      {
        q: 'Vocês têm certificações de transporte?',
        a: 'Sim. Operamos sob registro da ANTT e nossos motoristas são certificados em MOPP. Documentação completa disponível mediante solicitação.',
      },
    ],
  },
  {
    label: 'Sobre vendas e atendimento',
    items: [
      {
        q: 'Vocês vendem para pessoa física?',
        a: 'Não. Trabalhamos com vendas no atacado para empresas — modelo B2B. Esse foco é o que nos permite entregar a especialização que indústria exige.',
      },
      {
        q: 'Como solicito uma cotação?',
        a: 'Pelo WhatsApp (resposta mais rápida), telefone ou formulário no site. Você fala diretamente com o comercial — sem URA, sem fila, sem intermediário.',
      },
      {
        q: 'Quais segmentos vocês atendem?',
        a: 'Tratamento de água, têxtil, alimentício, saneantes e limpeza profissional, papel e celulose, cosméticos e farmacêutico, curtume e agropecuário.',
      },
    ],
  },
]

export default function FAQ() {
  return (
    <div>
      <PageHeroShell>
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-eyebrow" style={{ marginBottom: '1.5rem' }}>Perguntas frequentes</div>
          <h1
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Oswald', sans-serif", marginBottom: '1.25rem' }}
          >
            Perguntas que ajudam a decidir.
          </h1>
          <p className="text-white/70 font-body text-base max-w-xl">
            As dúvidas mais comuns de quem está cotando com a Quimitêxtil pela primeira vez. Não achou a sua? Manda no WhatsApp.
          </p>
        </div>
      </PageHeroShell>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          {categorias.map(cat => (
            <div key={cat.label} className="mb-12">
              <div className="ds-row-label mb-6">
                <span className="ds-label">{cat.label}</span>
              </div>
              {cat.items.map(item => (
                <details key={item.q} className="ds-accordion-item">
                  <summary>
                    {item.q}
                    <svg className="chevron w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="ds-accordion-body">{item.a}</div>
                </details>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#131b4a] ds-grid-texture py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-display font-bold text-white text-3xl" style={{ fontFamily: "'Oswald', sans-serif", marginBottom: '1.25rem' }}>
            Tem outra pergunta?
          </h3>
          <p className="text-white/70 font-body" style={{ marginBottom: '2.5rem' }}>Manda no WhatsApp ou liga. Resposta direta com nosso comercial.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={whatsappLink('Olá! Tenho uma dúvida que não vi no site.')}
              target="_blank"
              rel="noreferrer"
              className="ds-btn-primary"
            >
              Falar no WhatsApp
            </a>
            <a
              href={`tel:${empresa.telefone.replace(/\D/g, '')}`}
              className="ds-btn-ghost"
            >
              Ligar — {empresa.telefone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
