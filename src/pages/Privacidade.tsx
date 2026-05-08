import { empresa } from '../data/empresa'
import PageHeroShell from '../components/PageHeroShell'

const sections = [
  {
    n: '01',
    title: 'Quem é o responsável pelos seus dados',
    content: (
      <p>
        O responsável pelo tratamento dos seus dados pessoais é a <strong>Quimitêxtil Limitada</strong>, inscrita no CNPJ sob o nº {empresa.cnpj}, com sede em {empresa.endereco}.
      </p>
    ),
  },
  {
    n: '02',
    title: 'Quais dados coletamos',
    content: (
      <>
        <p className="mb-3">Coletamos os seguintes dados quando você utiliza este site:</p>
        <ul className="flex flex-col gap-2">
          {['Nome completo', 'Empresa / razão social', 'Telefone e e-mail (quando fornecidos voluntariamente)', 'Dados de navegação (cookies analíticos)', 'Produto de interesse e mensagem (quando preenchido o formulário de cotação)'].map(item => (
            <li key={item} className="flex items-start gap-2 text-slate-600 font-body text-sm">
              <span className="text-brand-orange flex-shrink-0 mt-0.5">→</span>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    n: '03',
    title: 'Para que usamos seus dados',
    content: (
      <>
        <p className="mb-3">Os dados coletados são utilizados exclusivamente para:</p>
        <ul className="flex flex-col gap-2">
          {['Responder a cotações e solicitações enviadas através do site', 'Enviar comunicações relacionadas ao pedido realizado', 'Melhorar a experiência de navegação no site', 'Cumprir obrigações legais aplicáveis'].map(item => (
            <li key={item} className="flex items-start gap-2 text-slate-600 font-body text-sm">
              <span className="text-brand-orange flex-shrink-0 mt-0.5">→</span>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    n: '04',
    title: 'Compartilhamento com terceiros',
    content: (
      <p>
        A Quimitêxtil não vende, aluga ou compartilha seus dados pessoais com terceiros para fins comerciais. Os dados podem ser compartilhados apenas quando exigido por lei ou autoridade competente.
      </p>
    ),
  },
  {
    n: '05',
    title: 'Tempo de armazenamento',
    content: (
      <p>
        Os dados pessoais são armazenados pelo tempo necessário para cumprimento das finalidades descritas nesta política ou para atendimento de obrigações legais, o que for maior.
      </p>
    ),
  },
  {
    n: '06',
    title: 'Seus direitos como titular dos dados',
    content: (
      <>
        <p className="mb-3">Nos termos da LGPD, você tem direito a:</p>
        <ul className="flex flex-col gap-2">
          {['Confirmação de que tratamos seus dados', 'Acesso aos dados que temos sobre você', 'Correção de dados incompletos ou desatualizados', 'Anonimização, bloqueio ou eliminação de dados desnecessários', 'Portabilidade dos dados', 'Eliminação dos dados tratados com base no seu consentimento', 'Revogação do consentimento a qualquer momento'].map(item => (
            <li key={item} className="flex items-start gap-2 text-slate-600 font-body text-sm">
              <span className="text-brand-orange flex-shrink-0 mt-0.5">→</span>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    n: '07',
    title: 'Cookies e tecnologias de rastreamento',
    content: (
      <p>
        Utilizamos cookies para entender como os visitantes interagem com o site (navegação, páginas visitadas, tempo de sessão). Nenhum cookie é utilizado para rastreamento comercial ou compartilhamento com plataformas de anúncio. Você pode desativar cookies nas configurações do seu navegador, com possível impacto na experiência de navegação.
      </p>
    ),
  },
  {
    n: '08',
    title: 'Segurança da informação',
    content: (
      <p>
        Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. O site utiliza protocolo HTTPS em todas as páginas.
      </p>
    ),
  },
  {
    n: '09',
    title: 'Como entrar em contato com o encarregado',
    content: (
      <>
        <p className="mb-4">Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:</p>
        <div className="bg-[#F4F5F9] p-5 border border-slate-200 rounded-sm">
          <p className="font-body text-sm text-slate-700"><strong>{empresa.razaoSocial}</strong></p>
          <p className="font-body text-sm text-slate-600">CNPJ: {empresa.cnpj}</p>
          <p className="font-body text-sm text-slate-600">{empresa.endereco}</p>
          <p className="font-body text-sm text-slate-600">E-mail: {empresa.email}</p>
          <p className="font-body text-sm text-slate-600">WhatsApp: (81) 9 9551-0011</p>
        </div>
      </>
    ),
  },
]

export default function Privacidade() {
  return (
    <div>
      <PageHeroShell>
        <div className="max-w-7xl mx-auto px-6">
          <div className="ds-eyebrow mb-4">Documentação legal</div>
          <h1
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: "'Oswald', sans-serif" }}
          >
            Política de Privacidade
          </h1>
        </div>
      </PageHeroShell>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-slate-600 font-body text-base leading-relaxed mb-12 p-6 bg-[#F4F5F9] border-l-4 border-brand-blue">
            A <strong>Quimitêxtil Limitada</strong> (CNPJ {empresa.cnpj}) trata seus dados pessoais com a seriedade exigida pela Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018). Esta política descreve como coletamos, usamos, armazenamos e protegemos as informações que você nos fornece através deste site.
          </p>

          <div className="flex flex-col gap-10">
            {sections.map(sec => (
              <div key={sec.n}>
                <h2
                  className="font-display font-bold text-[#131b4a] mb-4"
                  style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.4rem' }}
                >
                  <span className="font-mono text-brand-orange mr-2 text-base">{sec.n}.</span>
                  {sec.title}
                </h2>
                <div className="text-slate-600 font-body text-sm leading-relaxed">
                  {sec.content}
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-400 font-body text-xs mt-12 pt-6 border-t border-slate-200">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>
    </div>
  )
}
