export const empresa = {
  nome: 'Quimitêxtil',
  razaoSocial: 'Quimitêxtil Limitada',
  cnpj: '11.338.050/0001-08',
  inscricaoEstadual: '0058340-58',
  fundacao: '8 de junho de 1977',
  fundacaoAno: 1977,
  anos: new Date().getFullYear() - 1977,
  // Anos de história usados na comunicação da marca (50 anos de mercado)
  anosHistoria: 50,
  fundador: 'Alexandre Moura Vasconcelos',
  whatsapp: '5581995510011',
  telefone: '(81) 3339-6922',
  email: 'atendimento@quimitextil.com.br',
  horarioAtendimento: 'Segunda a sexta, das 8h às 17h',
  endereco: 'Vitória de Santo Antão, Pernambuco',
  enderecoCompleto:
    'Rod. Luiz Gonzaga, do km 42,002 ao km 45,101, S/N, Gleba 15 Bento Velho, Distrito Industrial (Pref. José Augusto), Vitória de Santo Antão / PE, CEP 55613-010',
  instagram: 'quimitextil_ltda',
  instagramUrl: 'https://www.instagram.com/quimitextil_ltda',
  site: 'quimitextil.com.br',
  slogan: 'Sua preferência acompanha o nosso tempo!',
  prazoEntrega: 'até 72 horas',
  politicaFrete: 'Definida em conjunto no fechamento de cada pedido.',
}

/** Diretoria da empresa */
export const socios = [
  { nome: 'Alexandre Moura Vasconcelos', cargo: 'Diretor Presidente' },
  { nome: 'Tarcísio Franco Vasconcelos', cargo: 'Diretor Comercial' },
  { nome: 'Felipe Franco Vasconcelos', cargo: 'Diretor Financeiro' },
  { nome: 'Rosa Amélia Franco Vasconcelos', cargo: 'Diretora' },
]

/** Licenças e certificados vigentes, com número e validade reais */
export const licencas = [
  {
    sigla: 'CPRH',
    nome: 'Licença de Operação',
    orgao: 'Agência Estadual de Meio Ambiente de Pernambuco',
    numero: '03.26.07.005985-5',
    validade: '02/08/2031',
    desc: 'Licença de Operação para comércio atacadista, armazenamento e distribuição de produtos químicos.',
  },
  {
    sigla: 'Polícia Federal',
    nome: 'Certificado de Licença de Funcionamento (CLF)',
    orgao: 'Ministério da Justiça e Segurança Pública',
    numero: '2020-00558066 · CRC 2003000621',
    validade: '03/08/2027',
    desc: 'Autorização para comercialização e transporte de produtos químicos controlados, nos termos da Lei 10.357/2001.',
  },
  {
    sigla: 'IBAMA',
    nome: 'Certificado de Regularidade (CTF/APP)',
    orgao: 'Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis',
    numero: 'Registro 54123',
    validade: '09/10/2026',
    desc: 'Regularidade no Cadastro Técnico Federal para transporte de cargas perigosas e comércio de produtos químicos.',
  },
  {
    sigla: 'MOPP',
    nome: 'Motoristas certificados',
    orgao: 'Movimentação Operacional de Produtos Perigosos',
    numero: '4 motoristas certificados',
    validade: 'Renovação periódica',
    desc: 'Equipe de motoristas com certificação válida para o transporte rodoviário de produtos perigosos.',
  },
]

/** Composição da frota própria */
export const frota = [
  { qtd: 2, tipo: 'Caminhões-tanque' },
  { qtd: 4, tipo: 'Carrocerias abertas' },
  { qtd: 2, tipo: 'Utilitários' },
  { qtd: 1, tipo: 'Carreta' },
]

/** Estados atendidos, com a abrangência real dentro de cada um */
export const cobertura = [
  { uf: 'PE', nome: 'Pernambuco', detalhe: 'Sede da operação e todo o estado' },
  { uf: 'AL', nome: 'Alagoas', detalhe: 'Consultar cobertura' },
  { uf: 'SE', nome: 'Sergipe', detalhe: 'Consultar cobertura' },
  { uf: 'PB', nome: 'Paraíba', detalhe: 'João Pessoa e região' },
  { uf: 'RN', nome: 'Rio Grande do Norte', detalhe: 'Consultar cobertura' },
  { uf: 'CE', nome: 'Ceará', detalhe: 'Fortaleza e região' },
]

export function whatsappLink(mensagem?: string): string {
  const base = `https://wa.me/${empresa.whatsapp}`
  if (!mensagem) return base
  return `${base}?text=${encodeURIComponent(mensagem)}`
}
