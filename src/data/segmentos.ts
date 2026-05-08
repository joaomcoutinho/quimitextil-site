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
    descricaoLonga: 'Estações de tratamento, ETEs e processos industriais que dependem de qualidade hídrica não admitem variabilidade no insumo. Trabalhamos com coagulantes (sulfato de alumínio, PAC), oxidantes (peróxido, hipoclorito, permanganato), clarificantes e corretores de pH com a pureza adequada para cada aplicação — desde água potável até efluente industrial complexo.',
  },
  {
    slug: 'textil',
    nome: 'Têxtil',
    descricaoCurta: 'Linha completa para tinturaria, lavanderia industrial e acabamento.',
    descricaoLonga: 'A indústria têxtil pernambucana foi a origem da Quimitêxtil em 1977 — e quase meio século depois, segue sendo um dos setores onde mais conhecemos os processos. Atendemos tinturarias, lavanderias industriais e malharias com a linha completa: hidrossulfito, peróxido, soda, ácido acético, corantes, sulfito e auxiliares de tingimento, alvejamento e acabamento.',
  },
  {
    slug: 'alimenticio',
    nome: 'Alimentício',
    descricaoCurta: 'Aditivos, conservantes e ingredientes em grau alimentício.',
    descricaoLonga: 'Indústria alimentícia exige fornecedor com critério rigoroso: rastreabilidade, lote, conformidade. Atendemos panificação industrial, laticínios, frigoríficos, bebidas e processamento com produtos em grau alimentício — ácido cítrico, bicarbonatos, metabissulfito, ácido fosfórico, ácido peracético — selecionados sob os parâmetros exigidos por certificações alimentícias.',
  },
  {
    slug: 'saneantes',
    nome: 'Saneantes e Limpeza Profissional',
    descricaoCurta: 'Tensoativos, alcalinizantes e ácidos para fabricação de saneantes.',
    descricaoLonga: 'Para fabricantes de detergentes, desinfetantes e produtos de higiene profissional: a base química completa em volume industrial. Tensoativos (lauril, lauril éter sulfato, ácido sulfônico), alcalinizantes (soda cáustica, barrilha, metassilicato), oxidantes (hipoclorito, peróxido) e ácidos — com a consistência que sua linha de produção exige para entregar qualidade ao consumidor final.',
  },
  {
    slug: 'papel-celulose',
    nome: 'Papel e Celulose',
    descricaoCurta: 'Sodas, peróxidos e sulfatos para todas as etapas do processo.',
    descricaoLonga: 'A indústria de papel opera em escala que exige fornecedor robusto e regular. Trabalhamos com sodas (escamas e líquida), peróxido de hidrogênio, sulfato de alumínio (granulado e isento de ferro), policloreto de alumínio, hidrossulfito, sulfito e dióxido de titânio — para cada etapa: cozimento, branqueamento, acabamento, retenção e tratamento de águas do processo.',
  },
  {
    slug: 'cosmeticos-farmaceutico',
    nome: 'Cosméticos e Farmacêutico',
    descricaoCurta: 'Insumos USP de alta pureza, com rastreabilidade.',
    descricaoLonga: 'Cosméticos e farmacêuticos não admitem dúvida sobre origem ou pureza. Trabalhamos com glicerina bidestilada, óleo mineral USP, lauril éter sulfato 70%, ácido cítrico e demais ativos — com documentação que atende exigências da ANVISA e o cuidado que sua linha de produtos premium demanda.',
  },
  {
    slug: 'curtume',
    nome: 'Curtume',
    descricaoCurta: 'Linha técnica para ribeira, curtimento, recurtimento e acabamento.',
    descricaoLonga: 'O curtume é uma das indústrias mais tradicionais do Nordeste — assim como a Quimitêxtil. Atendemos curtumes da região com formol, bicarbonato de amônia, sulfato de alumínio, acetato de sódio e demais insumos para cada fase do processo: ribeira, curtimento, recurtimento e acabamento. Tradição encontrando tradição.',
  },
  {
    slug: 'agropecuario',
    nome: 'Agropecuário',
    descricaoCurta: 'Ureia, sulfatos e nutrientes para agricultura e pecuária.',
    descricaoLonga: 'Para quem produz alimento e fibra: ureia técnica, sulfato de magnésio, bicarbonato de sódio (nutrição animal) e demais insumos para agricultura, pecuária e suplementação. Logística adequada para entregar onde sua operação está — frequentemente fora dos grandes centros urbanos, onde a frota terceirizada não chega no prazo.',
  },
]

export function getSegmento(slug: string): Segmento | undefined {
  return segmentos.find(s => s.slug === slug)
}
