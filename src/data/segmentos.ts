export type SegmentoSlug =
  | 'tratamento-de-agua'
  | 'textil'
  | 'alimenticio'
  | 'saneantes'
  | 'papel-celulose'
  | 'cosmeticos-farmaceutico'
  | 'curtume'
  | 'agropecuario'

export interface Segmento {
  slug: SegmentoSlug
  nome: string
  descricaoCurta: string
  descricaoLonga: string
}

export const segmentos: Segmento[] = [
  {
    slug: 'tratamento-de-agua',
    nome: 'Tratamento de Água',
    descricaoCurta: 'Coagulantes, oxidantes e clarificantes para ETA, ETE e processo industrial.',
    descricaoLonga: 'Estações de tratamento, ETEs e processos industriais que dependem de qualidade hídrica não admitem variabilidade no insumo. Trabalhamos com coagulantes (sulfato de alumínio isento de ferro, policloreto de alumínio), floculantes poliméricos aniônicos e catiônicos, oxidantes (peróxido de hidrogênio, hipoclorito de cálcio, permanganato de potássio), carvão ativado e corretores de pH, desde água potável até efluente industrial complexo.',
  },
  {
    slug: 'textil',
    nome: 'Têxtil',
    descricaoCurta: 'Linha completa para tinturaria, lavanderia industrial e acabamento.',
    descricaoLonga: 'A indústria têxtil pernambucana é a origem da Quimitêxtil, e, com 50 anos de história, segue sendo um dos setores onde mais conhecemos os processos. Atendemos tinturarias, lavanderias industriais e malharias com hidrossulfito de sódio, peróxido de hidrogênio, sodas, ácido acético, sulfato de sódio anidro, perborato, percarbonato e demais auxiliares de tingimento, alvejamento e acabamento.',
  },
  {
    slug: 'alimenticio',
    nome: 'Alimentício',
    descricaoCurta: 'Aditivos, conservantes e ingredientes em grau alimentício.',
    descricaoLonga: 'Indústria alimentícia exige fornecedor com critério rigoroso: rastreabilidade, lote, conformidade. Atendemos panificação industrial, laticínios, frigoríficos, bebidas e processamento com ácido cítrico, ácido ascórbico, ácido fosfórico 85%, conservantes (sorbato de potássio, benzoato de sódio, propionato de cálcio), lecitina de soja, corantes naturais, diatomita para filtração e ácido peracético para sanitização.',
  },
  {
    slug: 'saneantes',
    nome: 'Saneantes e Limpeza Profissional',
    descricaoCurta: 'Tensoativos, alcalinizantes e ácidos para fabricação de saneantes.',
    descricaoLonga: 'Para fabricantes de detergentes, desinfetantes e produtos de higiene profissional: a base química completa em volume industrial. Tensoativos (lauril 70% em pasta, ácido sulfônico 90), alcalinizantes (soda cáustica, barrilha, metassilicato, fosfato trissódico), builders (tripolifosfato de sódio), alvejantes de oxigênio ativo (perborato, percarbonato) e oxidantes clorados.',
  },
  {
    slug: 'papel-celulose',
    nome: 'Papel e Celulose',
    descricaoCurta: 'Sodas, peróxidos e sulfatos para todas as etapas do processo.',
    descricaoLonga: 'A indústria de papel opera em escala que exige fornecedor robusto e regular. Trabalhamos com sodas (escamas 98% e líquida 50%), peróxido de hidrogênio HPS, sulfato de alumínio isento de ferro, policloreto de alumínio, polímeros de retenção, hidrossulfito e sulfito de sódio, para cada etapa: cozimento, branqueamento, retenção e tratamento das águas de processo.',
  },
  {
    slug: 'cosmeticos-farmaceutico',
    nome: 'Cosméticos e Farmacêutico',
    descricaoCurta: 'Insumos USP de alta pureza, com rastreabilidade.',
    descricaoLonga: 'Cosméticos e farmacêuticos não admitem dúvida sobre origem ou pureza. Trabalhamos com glicerina bidestilada, óleo mineral USP, propilenoglicol USP, lauril 70%, ácido cítrico e ácido ascórbico, com documentação que atende exigências da ANVISA e o cuidado que sua linha de produtos premium demanda.',
  },
  {
    slug: 'curtume',
    nome: 'Curtume',
    descricaoCurta: 'Linha técnica para ribeira, curtimento, recurtimento e acabamento.',
    descricaoLonga: 'O curtume é uma das indústrias mais tradicionais do Nordeste, assim como a Quimitêxtil. Atendemos curtumes da região com formol, paraformaldeído, bicarbonato de amônia, sulfato de alumínio, acetato de sódio, ácido oxálico e demais insumos para cada fase do processo: ribeira, curtimento, recurtimento e acabamento. Tradição encontrando tradição.',
  },
  {
    slug: 'agropecuario',
    nome: 'Agropecuário',
    descricaoCurta: 'Ureia, sulfatos e nutrientes para agricultura, pecuária e carcinicultura.',
    descricaoLonga: 'Para quem produz alimento e fibra: ureia técnica, sulfato de amônia, sulfatos de magnésio, manganês, zinco e cobre para nutrição vegetal e animal, bicarbonato de sódio para suplementação de ruminantes e insumos para correção de água em carcinicultura. Logística dimensionada para entregar onde sua operação está, frequentemente fora dos grandes centros urbanos.',
  },
]

/**
 * Relação completa de setores industriais atendidos, conforme material
 * institucional da empresa. Os oito segmentos acima organizam o catálogo;
 * esta lista mostra a amplitude real da carteira.
 */
export interface GrupoSetor {
  id: string
  nome: string
  resumo: string
  cor: string
  /** Variante clara da cor, para uso sobre o fundo navy */
  corClara: string
  bg: string
  setores: string[]
}

export const gruposSetores: GrupoSetor[] = [
  {
    id: 'transformacao',
    nome: 'Transformação e manufatura',
    resumo: 'Onde a Quimitêxtil nasceu e onde conhecemos cada etapa do processo.',
    cor: '#2F3B92',
    corClara: '#8f9bf0',
    bg: 'rgba(47,59,146,0.09)',
    setores: [
      'Indústria Têxtil',
      'Indústria de Papel',
      'Indústria Química',
      'Curtume',
      'Indústria de Galvanização',
      'Siderúrgicas e Fundições',
    ],
  },
  {
    id: 'alimentos',
    nome: 'Alimentos e bebidas',
    resumo: 'Insumos em grau alimentício, com rastreabilidade e conformidade sanitária.',
    cor: '#059669',
    corClara: '#34d399',
    bg: 'rgba(5,150,105,0.09)',
    setores: [
      'Indústria Alimentícia',
      'Indústrias de Bebidas e Sucos',
      'Indústrias de Laticínios',
      'Usinas e Destilarias',
    ],
  },
  {
    id: 'saude',
    nome: 'Saúde, higiene e limpeza',
    resumo: 'Insumos USP de alta pureza e a base química de saneantes profissionais.',
    cor: '#df5342',
    corClara: '#ff8f7e',
    bg: 'rgba(223,83,66,0.09)',
    setores: ['Indústrias Farmacêuticas', 'Indústrias de Domissanitários'],
  },
  {
    id: 'agro',
    nome: 'Agro e produção animal',
    resumo: 'Nutrição vegetal e animal, com logística que chega fora dos grandes centros.',
    cor: '#d97706',
    corClara: '#fbbf24',
    bg: 'rgba(217,119,6,0.09)',
    setores: ['Agricultura', 'Pecuária', 'Avicultura', 'Carcinicultura'],
  },
]

/** Lista plana dos setores, derivada dos grupos acima. */
export const setoresAtendidos: string[] = gruposSetores.flatMap(g => g.setores)

export function getSegmento(slug: string): Segmento | undefined {
  return segmentos.find(s => s.slug === slug)
}
