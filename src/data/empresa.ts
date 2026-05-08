export const empresa = {
  nome: 'Quimitêxtil',
  razaoSocial: 'Quimitêxtil Limitada',
  cnpj: '11.338.050/0001-08',
  inscricaoEstadual: '0058340-58',
  fundacao: '8 de junho de 1977',
  anos: new Date().getFullYear() - 1977,
  whatsapp: '5581995510011',
  telefone: '(81) 3339-6922',
  email: 'contato@quimitextil.com.br',
  endereco: 'Vitória de Santo Antão — Pernambuco',
  instagram: 'quimitextil_ltda',
  instagramUrl: 'https://www.instagram.com/quimitextil_ltda',
}

export function whatsappLink(mensagem?: string): string {
  const base = `https://wa.me/${empresa.whatsapp}`
  if (!mensagem) return base
  return `${base}?text=${encodeURIComponent(mensagem)}`
}
