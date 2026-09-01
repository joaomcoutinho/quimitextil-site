import { useState } from 'react'
import { empresa, whatsappLink } from '../data/empresa'
import { segmentos, setoresAtendidos } from '../data/segmentos'
import { produtos, distribuicoes } from '../data/produtos'
import PageHeroShell from '../components/PageHeroShell'

const categorias = [
  {
    label: 'Sobre nossos produtos',
    items: [
      {
        q: 'Quais produtos químicos vocês fornecem?',
        a: `Trabalhamos com ${produtos.length} insumos químicos (ácidos, bases, sais, oxidantes, redutores, surfactantes, corantes e outros) para ${segmentos.length} segmentos industriais. Distribuímos ainda marcas como ${distribuicoes.map(d => d.marca).join(', ')}. Acesse o catálogo completo para ver todos os produtos disponíveis.`,
      },
      {
        q: 'Posso solicitar a FISPQ de um produto antes de comprar?',
        a: 'Sim. A Ficha de Informações de Segurança de Produto Químico é fornecida sem custo. Solicite pelo WhatsApp informando o produto.',
      },
      {
        q: 'Vocês atendem demandas customizadas (volume, embalagem, especificação)?',
        a: 'Cada operação é única. Para volumes específicos, embalagens especiais ou exigências técnicas particulares, fale diretamente com nosso comercial, analisamos caso a caso.',
      },
    ],
  },
  {
    label: 'Sobre logística',
    items: [
      {
        q: 'Vocês entregam em qual região?',
        a: 'Atendemos seis estados do Nordeste: Pernambuco, Alagoas, Sergipe, Paraíba, Rio Grande do Norte e Ceará. A cobertura varia dentro de cada estado, então confirme a da sua cidade pelo WhatsApp.',
      },
      {
        q: 'Qual o prazo de entrega?',
        a: 'O prazo máximo é de até 72 horas nos estados atendidos, contado a partir da confirmação do pedido.',
      },
      {
        q: 'Como é feita a entrega?',
        a: 'Saída do nosso CD em Vitória de Santo Antão / PE, com veículos próprios e motoristas certificados em MOPP, além de transportadores parceiros homologados quando o volume exige.',
      },
      {
        q: 'Como funciona o frete?',
        a: 'A condição de frete é definida em conjunto no fechamento do pedido, de acordo com volume, destino e periodicidade da operação.',
      },
      {
        q: 'Vocês têm certificações de transporte?',
        a: 'Sim. Mantemos Licença de Operação da CPRH/PE (válida até 02/08/2031), Certificado de Licença de Funcionamento da Polícia Federal (até 03/08/2027), Certificado de Regularidade do IBAMA e quatro motoristas certificados em MOPP. Documentação completa disponível mediante solicitação.',
      },
    ],
  },
  {
    label: 'Sobre vendas e atendimento',
    items: [
      {
        q: 'Vocês vendem para pessoa física?',
        a: 'Nosso foco é a venda no atacado para empresas, modelo B2B, que é o que nos permite entregar a especialização que a indústria exige. Casos específicos podem ser avaliados diretamente com o comercial.',
      },
      {
        q: 'Qual o horário de atendimento?',
        a: 'Segunda a sexta, das 8h às 17h. Pelo WhatsApp você pode enviar sua solicitação a qualquer momento e nosso comercial responde no próximo horário útil.',
      },
      {
        q: 'Como solicito uma cotação?',
        a: 'Pelo WhatsApp (resposta mais rápida), telefone ou formulário no site. Você fala diretamente com o comercial, sem URA, sem fila, sem intermediário.',
      },
      {
        q: 'Quais segmentos vocês atendem?',
        a: `O catálogo é organizado em ${segmentos.length} segmentos: ${segmentos.map(s => s.nome).join(', ')}. Na prática, a carteira alcança ${setoresAtendidos.length} setores industriais, incluindo bebidas e sucos, laticínios, galvanização, usinas e destilarias, siderúrgicas, avicultura e carcinicultura.`,
      },
    ],
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`ds-accordion-item${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="ds-accordion-summary"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {q}
        <svg className="chevron w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="ds-accordion-body-wrap">
        <div className="ds-accordion-body">{a}</div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <div>
      <PageHeroShell>
        <div className="max-w-7xl mx-auto px-6">
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
                <AccordionItem key={item.q} q={item.q} a={item.a} />
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
              Ligar: {empresa.telefone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
