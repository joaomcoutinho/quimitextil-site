import { useRef, useEffect, type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { whatsappLink } from '../data/empresa'

import heroEsg from '../assets/tratamentoAgua.jpeg'

// ─── Os três pilares do ESG ────────────────────────────────────────────────
type Pilar = {
  sigla: string
  nome: string
  resumo: string
  cor: string
  bg: string
  itens: string[]
  icon: ReactElement
}

const pilares: Pilar[] = [
  {
    sigla: 'E',
    nome: 'Ambiental',
    resumo:
      'Reduzir o impacto de cada litro que transportamos, do descarte responsável ao transporte eficiente.',
    cor: '#059669',
    bg: 'rgba(5,150,105,0.09)',
    itens: [
      'PGRS, Plano de Gerenciamento de Resíduos Sólidos documentado',
      'Destinação de resíduos por empresas licenciadas, com manifesto',
      'Licença de Operação da CPRH e regularidade no IBAMA',
      'Bacia de contenção e prevenção de vazamentos no armazenamento',
      'Uso consciente de água e energia na operação',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75M10.5 21h3M12 10.5a6 6 0 00-6 6v1.5m6-7.5a6 6 0 016 6v1.5m-6-7.5c0-3 1.5-7.5 6-7.5m-12 0c4.5 0 6 4.5 6 7.5" />
      </svg>
    ),
  },
  {
    sigla: 'S',
    nome: 'Social',
    resumo:
      'Cuidar de quem manuseia, transporta e vive perto do que fazemos, segurança e respeito em primeiro lugar.',
    cor: '#2F3B92',
    bg: 'rgba(47,59,146,0.09)',
    itens: [
      'PGR e PCMSO para saúde e segurança do trabalho',
      'Quatro motoristas certificados em MOPP',
      'Treinamento contínuo e uso de EPIs',
      'Respeito à comunidade de Vitória de Santo Antão',
      'Atendimento próximo, direto e sem intermediário',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    sigla: 'G',
    nome: 'Governança',
    resumo:
      'Operar de forma transparente, ética e em conformidade, do documento à palavra dada.',
    cor: '#df5342',
    bg: 'rgba(223,83,66,0.09)',
    itens: [
      'Código de conduta e política de governança documentados',
      'Licenças CPRH, IBAMA e Polícia Federal em dia',
      'Controle de produtos químicos sujeitos à fiscalização federal',
      'Gestão criteriosa de fornecedores e parceiros',
      'Compromisso firmado: palavra dada, palavra cumprida',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
  },
]

// ─── Referências que orientam a operação ───────────────────────────────────
const referencias = [
  {
    nome: 'Licença de Operação CPRH',
    fonte: 'Válida até 02/08/2031',
    desc: 'Licença de Operação nº 03.26.07.005985-5, emitida pela Agência Estadual de Meio Ambiente de Pernambuco, para armazenamento e distribuição de produtos químicos. Inclui exigências de contenção, destinação de resíduos e plano de atendimento a emergências.',
  },
  {
    nome: 'Certificado de Regularidade IBAMA',
    fonte: 'CTF/APP · até 09/10/2026',
    desc: 'Registro nº 54123 no Cadastro Técnico Federal de Atividades Potencialmente Poluidoras, nas categorias de transporte de cargas perigosas e comércio de produtos químicos.',
  },
  {
    nome: 'Licença de Funcionamento da Polícia Federal',
    fonte: 'CLF · até 03/08/2027',
    desc: 'Certificado nº 2020-00558066 (CRC 2003000621), que autoriza a comercialização e o transporte de produtos químicos controlados, nos termos da Lei 10.357/2001.',
  },
  {
    nome: 'Programas de segurança do trabalho',
    fonte: 'PGR · PCMSO · MOPP',
    desc: 'Mantemos Programa de Gerenciamento de Riscos e Programa de Controle Médico de Saúde Ocupacional, além de quatro motoristas certificados em MOPP para o transporte de produtos perigosos.',
  },
  {
    nome: 'PGRS',
    fonte: 'Gerenciamento de resíduos',
    desc: 'Plano de Gerenciamento de Resíduos Sólidos documentado, que define a segregação, o armazenamento e a destinação final de cada classe de resíduo gerado na operação, sempre por empresas licenciadas.',
  },
  {
    nome: 'Código de conduta',
    fonte: 'Governança',
    desc: 'Código de conduta e política de governança documentados, que orientam a relação com clientes, fornecedores e equipe, e formalizam os princípios éticos que a empresa pratica desde a fundação.',
  },
  {
    nome: 'FISPQ',
    fonte: 'Segurança do produto',
    desc: 'Disponibilizamos a Ficha de Informações de Segurança de Produtos Químicos, garantindo manuseio, armazenamento e descarte corretos por parte de quem recebe.',
  },
  {
    nome: 'Destinação de resíduos',
    fonte: 'Exigência da Licença de Operação',
    desc: 'Resíduos classe 1, embalagens contaminadas e materiais absorventes são destinados por empresas licenciadas ambientalmente, com manifesto de transporte e certificado de destinação mantidos atualizados.',
  },
]

// ─── Compromissos ──────────────────────────────────────────────────────────
const compromissos = [
  'Transportar e distribuir com o menor impacto ambiental possível.',
  'Priorizar a segurança de pessoas em toda a cadeia de manuseio.',
  'Manter a operação em conformidade com a legislação vigente.',
  'Ser transparente com clientes, fornecedores e comunidade.',
  'Evoluir continuamente nossas práticas ambientais e sociais.',
]

export default function Esg() {
  const pillarsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cards = pillarsRef.current?.querySelectorAll<HTMLElement>('.esg-reveal')
    if (!cards) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex items-center bg-cover bg-center"
        style={{
          minHeight: '460px',
          paddingTop: '5rem',
          paddingBottom: '5rem',
          backgroundImage: `url(${heroEsg})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(8,12,35,0.94), rgba(8,12,35,0.72))',
          }}
          aria-hidden="true"
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1
              className="text-white font-display font-bold"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                lineHeight: 0.98,
                letterSpacing: '-0.01em',
                marginTop: '1.5rem',
                marginBottom: '1.75rem',
              }}
            >
              Química responsável
              <br />
              <span style={{ color: '#df5342' }}>para os próximos</span>
              <br />
              50 anos.
            </h1>
            <p
              className="text-white/60 font-body text-base leading-relaxed max-w-xl"
              style={{ marginBottom: '2.25rem' }}
            >
              ESG não é discurso novo para quem opera com produto químico há 50
              anos. É a forma como sempre entendemos nossa responsabilidade: com
              o meio ambiente, com as pessoas e com a palavra dada.
            </p>
          </div>
        </div>
      </section>

      {/* ── O QUE É ESG ─────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="ds-row-label">
            <span className="ds-label">O que significa</span>
          </div>
          <h2
            className="font-display font-bold text-[#131b4a]"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              marginBottom: '1.25rem',
            }}
          >
            ESG, traduzido para quem move a indústria.
          </h2>
          <p className="text-slate-600 font-body leading-relaxed" style={{ marginBottom: '1rem' }}>
            <strong className="text-[#131b4a]">ESG</strong> é a sigla, em inglês,
            para <strong className="text-[#131b4a]">Ambiental (Environmental)</strong>,{' '}
            <strong className="text-[#131b4a]">Social</strong> e{' '}
            <strong className="text-[#131b4a]">Governança (Governance)</strong>. É o
            padrão que o mercado usa hoje para medir o quanto uma empresa é
            responsável com o planeta, com as pessoas e com a forma como conduz
            seus negócios.
          </p>
          <p className="text-slate-600 font-body leading-relaxed">
            No setor de insumos químicos, esses três pilares deixam de ser
            teoria: cada carga transportada, cada embalagem descartada e cada
            documento emitido carrega uma responsabilidade concreta. É sobre
            isso que a Quimitêxtil se compromete, de forma prática, no dia a dia
            da operação.
          </p>
        </div>
      </section>

      {/* ── OS TRÊS PILARES ─────────────────────────────────────── */}
      <section ref={pillarsRef} className="bg-[#F4F5F9] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-row-label">
            <span className="ds-label">Os três pilares</span>
          </div>
          <h2
            className="font-display font-bold text-[#131b4a]"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              marginBottom: '3rem',
            }}
          >
            Como cada pilar vive na nossa operação
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-slate-200">
            {pilares.map((p, i) => (
              <div
                key={p.sigla}
                className="esg-reveal bg-white p-8 relative overflow-hidden"
                style={{
                  borderTop: `3px solid ${p.cor}`,
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                {/* Letra-marca de fundo */}
                <div
                  className="absolute pointer-events-none select-none font-bold leading-none top-2 right-4"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: '6rem',
                    color: p.bg,
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {p.sigla}
                </div>

                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                    style={{ background: p.bg, color: p.cor }}
                  >
                    {p.icon}
                  </div>
                  <span
                    className="ds-label"
                    style={{ display: 'block', marginBottom: '0.4rem', color: p.cor }}
                  >
                    Pilar {p.sigla}
                  </span>
                  <h3
                    className="font-display font-bold text-[#131b4a]"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: '1.4rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {p.nome}
                  </h3>
                  <p className="text-slate-500 font-body text-sm leading-relaxed" style={{ marginBottom: '1.5rem' }}>
                    {p.resumo}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {p.itens.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-slate-600 font-body text-sm leading-snug">
                        <span className="flex-shrink-0 mt-0.5" style={{ color: p.cor }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                            <path d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFERÊNCIAS DO SETOR ────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-row-label">
            <span className="ds-label">Licenças e programas vigentes</span>
          </div>
          <h2
            className="font-display font-bold text-[#131b4a] text-3xl"
            style={{ fontFamily: "'Oswald', sans-serif", marginBottom: '1rem' }}
          >
            Conformidade que se comprova em documento.
          </h2>
          <p className="text-slate-500 font-body max-w-2xl" style={{ marginBottom: '2.5rem' }}>
            Não se trata de intenção declarada: cada compromisso abaixo
            corresponde a uma licença, certificado ou programa vigente, com
            número e validade que podem ser verificados.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-slate-200">
            {referencias.map((ref) => (
              <div key={ref.nome} className="bg-white p-8 group relative overflow-hidden" style={{ transition: 'box-shadow 0.25s, transform 0.25s' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = '0 12px 32px rgba(47,59,146,0.10)'
                  el.style.transform = 'translateY(-3px)'
                  el.style.zIndex = '2'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = ''
                  el.style.transform = ''
                  el.style.zIndex = ''
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3
                    className="font-display font-bold text-[#131b4a]"
                    style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.25rem' }}
                  >
                    {ref.nome}
                  </h3>
                  <span className="ds-chip flex-shrink-0">{ref.fonte}</span>
                </div>
                <p className="text-slate-500 font-body text-sm leading-relaxed">{ref.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 font-body text-xs mt-6">
            Documentação e fichas técnicas disponíveis mediante solicitação.
          </p>
        </div>
      </section>

      {/* ── COMPROMISSOS + 50 ANOS ──────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: '#0e1540', padding: '5rem 0' }}>
        <div className="absolute inset-0 ds-grid-texture opacity-30" aria-hidden="true" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange" aria-hidden="true" />
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-10%',
            right: '-5%',
            width: '480px',
            height: '480px',
            background: 'radial-gradient(circle, rgba(47,59,146,0.25) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="ds-eyebrow" style={{ marginBottom: '1.5rem' }}>
                Nossos compromissos
              </div>
              <h2
                className="text-white font-display font-bold"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  lineHeight: 1.1,
                  marginBottom: '1.25rem',
                }}
              >
                Sustentabilidade é o que
                <br />
                <span style={{ color: '#df5342' }}>garante os próximos 50 anos.</span>
              </h2>
              <p className="text-white/50 font-body leading-relaxed" style={{ marginBottom: '2rem' }}>
                A mesma seriedade que nos consolidou como referência ao longo de
                50 anos é a que nos compromete com o futuro. Estes são os
                princípios que orientam cada decisão da operação.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {compromissos.map((c, i) => (
                <li
                  key={c}
                  className="flex items-start gap-4 bg-white/[0.04] border border-white/10 rounded-lg p-5"
                >
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold"
                    style={{ background: 'rgba(223,83,66,0.15)', color: '#df5342', fontFamily: "'Oswald', sans-serif" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-white/80 font-body text-sm leading-relaxed pt-1">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────────── */}
      <section className="bg-brand-orange py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="font-display font-bold text-white"
            style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.25rem' }}
          >
            Quer conhecer nossa operação de perto?
          </h2>
          <p className="text-white/80 font-body text-lg max-w-lg mx-auto" style={{ marginBottom: '2.5rem' }}>
            Fale com nosso comercial e entenda como entregamos química com
            responsabilidade em todo o Nordeste.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={whatsappLink('Olá! Gostaria de conhecer os compromissos ESG da Quimitêxtil.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-orange font-label font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg hover:bg-white/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar com nosso comercial
            </a>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-label font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Nossa história de 50 anos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
