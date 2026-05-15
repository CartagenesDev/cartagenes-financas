
import React from 'react';
import { Stock, NewsItem, RankingItem, NewsArticle } from './types';

export const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || 'contato@cartagenes.com.br';

export const STOCKS: Stock[] = [
  { symbol: 'CSNA3', price: 14.52, change: 1.25 },
  { symbol: 'PETR4', price: 38.90, change: -0.45 },
  { symbol: 'VALE3', price: 62.15, change: 0.85 },
  { symbol: 'ITUB4', price: 34.20, change: 1.10 },
  { symbol: 'WEGE3', price: 41.55, change: -0.20 },
  { symbol: 'BBAS3', price: 27.85, change: 2.30 },
  { symbol: 'PRIO3', price: 45.10, change: -1.15 },
  { symbol: 'MGLU3', price: 2.15, change: -3.50 },
];

export const NEWS_DATABASE: NewsArticle[] = [
  {
    id: 1,
    category: "Finanças",
    title: "Ibovespa fecha semana acima dos 140 mil pontos com bancos e energia",
    excerpt: "O apetite por risco voltou após revisão do cenário externo. Bancos e empresas de energia lideraram os ganhos.",
    author: "João Silva",
    source: "Valor Econômico",
    date: "7 fev 2026",
    publishedAt: "2026-02-07T12:00:00Z",
    readingTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Painel do mercado financeiro com gráficos",
    slug: "ibovespa-fecha-semana-acima-140-mil",
    tags: ["ibovespa", "bolsa", "mercado"],
    isTrending: true,
    content: [
      "O Ibovespa encerrou a semana consolidado acima dos 140 mil pontos, impulsionado pelos sólidos resultados do setor bancário e pela valorização das empresas de energia elétrica. O movimento representa um rompimento técnico relevante, aguardado pelos analistas desde o início do ano.",
      "O retorno do fluxo estrangeiro foi o principal catalisador da semana. Dados do Banco Central mostraram entrada líquida de R$ 3,2 bilhões em ativos de renda variável, revertendo a cautela observada nas semanas anteriores. A melhora nas perspectivas para os juros americanos favoreceu ativos de mercados emergentes como o Brasil.",
      "Itaú, Bradesco e Banco do Brasil lideraram as altas entre os bancos, com papéis valorizando entre 2,5% e 4,1% na semana. No setor elétrico, Eletrobras e Equatorial se destacaram com ganhos expressivos, beneficiadas pelo câmbio mais favorável e pela demanda estável de energia no período.",
      "Para a próxima semana, o mercado aguarda a divulgação do IPCA e as atas das reuniões do Fed e do Copom. Analistas recomendam cautela com posições excessivamente concentradas em um único setor, dado que a janela de volatilidade ainda não está completamente fechada."
    ],
    keyPoints: [
      "Ibovespa acima de 140 mil pontos pelo 1º fechamento semanal no ano",
      "Entrada de R$ 3,2 bi de capital estrangeiro em renda variável",
      "Bancos (ITUB4, BBAS3) e energia elétrica puxam alta semanal",
      "IPCA e atas do Fed e Copom são aguardados na próxima semana"
    ]
  },
  {
    id: 2,
    category: "Bem-estar",
    title: "Suplementos para energia sustentada: o que a ciência diz em 2026",
    excerpt: "Especialistas apontam quais nutrientes têm melhor evidência para foco e disposição, sem promessas exageradas.",
    author: "Dra. Ana Costa",
    source: "Health Science",
    date: "7 fev 2026",
    publishedAt: "2026-02-07T10:30:00Z",
    readingTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Frascos de suplementos em bancada",
    slug: "suplementos-energia-sustentada-2026",
    tags: ["saude", "suplementos", "performance"],
    isTrending: true,
    content: [
      "A busca por energia sustentada sem os efeitos colaterais de estimulantes agressivos tem impulsionado o interesse por suplementos nutricionais com respaldo científico. Em 2026, o mercado brasileiro de suplementos registrou crescimento de 18% no segmento de foco cognitivo e disposição física.",
      "Entre os compostos com maior evidência para energia e concentração, destacam-se a Coenzima Q10, o Magnésio Malato e as vitaminas do complexo B (especialmente B6 e B12). Estudos publicados em revistas indexadas mostram que deficiências nesses micronutrientes estão diretamente associadas à fadiga crônica e à dificuldade de concentração.",
      "O ginseng coreano (Panax ginseng) e a ashwagandha são adaptógenos que ganham espaço nas prateleiras. O primeiro possui ação estimulante com evidências para redução da fadiga física e mental. O segundo age no eixo do estresse, ajudando o organismo a lidar melhor com pressão e demandas cognitivas intensas.",
      "Especialistas alertam que suplementação sem diagnóstico prévio pode ser ineficaz ou até prejudicial. 'O primeiro passo é entender o que está causando a fadiga. Pode ser sono inadequado, deficiência de ferro, disfunção tireoidiana ou simplesmente má alimentação', orienta a nutricionista Dra. Ana Costa. Consulte sempre um profissional de saúde antes de iniciar qualquer suplementação."
    ],
    keyPoints: [
      "Mercado de suplementos para foco cresce 18% no Brasil em 2026",
      "Magnésio, Vitaminas B6/B12 e Coenzima Q10 têm as melhores evidências",
      "Adaptógenos como ginseng e ashwagandha ganham popularidade científica",
      "Avaliação médica prévia é indispensável para suplementação segura"
    ]
  },
  {
    id: 3,
    category: "Economia",
    title: "Câmbio recua e melhora projeções para inflação de curto prazo",
    excerpt: "Com a entrada de fluxo externo, o real se valorizou e analistas revisaram a curva de juros.",
    author: "Maria Rocha",
    source: "Reuters",
    date: "7 fev 2026",
    publishedAt: "2026-02-07T09:15:00Z",
    readingTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Painel de câmbio com cotações",
    slug: "cambio-recua-e-inflacao-curto-prazo",
    tags: ["economia", "cambio"],
    isTrending: false,
    content: [
      "O dólar recuou 1,8% na semana, fechando cotado a R$ 5,12, impulsionado pela entrada de capital estrangeiro e por dados mais favoráveis do mercado de trabalho americano. A valorização do real aliviou as pressões inflacionárias sobre produtos importados e insumos industriais.",
      "O impacto cambial sobre o IPCA foi imediato. Analistas do mercado financeiro revisaram para baixo suas projeções para a inflação de curto prazo, com o índice de janeiro podendo fechar abaixo de 0,4%, contra estimativas anteriores de 0,6%. O recuo beneficia especialmente os grupos de transportes e alimentação domiciliar.",
      "A equipe econômica do governo sinalizou satisfação com o movimento. 'Um câmbio mais estável reduz a volatilidade das expectativas e abre espaço para a política monetária atuar com mais eficiência', afirmou nota do Ministério da Fazenda. A manutenção do fluxo positivo dependerá da trajetória das contas públicas.",
      "Para economistas consultados, a sustentabilidade do câmbio abaixo de R$ 5,20 depende de dois fatores centrais: aprovação das medidas de controle fiscal no Congresso e manutenção da postura hawkish do Fed. Divergência em qualquer desses pontos pode reverter rapidamente o fluxo positivo de capital para o Brasil."
    ],
    keyPoints: [
      "Dólar cai para R$ 5,12 com forte entrada de capital externo",
      "IPCA de janeiro pode ficar abaixo de 0,4%, abaixo das estimativas",
      "Grupos de transportes e alimentação são os mais beneficiados",
      "Equilíbrio fiscal e postura do Fed são os riscos a monitorar"
    ]
  },
  {
    id: 4,
    category: "Empresas",
    title: "Empresas de saúde digital aceleram crescimento com foco em longevidade",
    excerpt: "Plataformas de monitoramento e protocolos de bem-estar ganham tração com executivos e investidores.",
    author: "Carlos Mendes",
    source: "Exame",
    date: "6 fev 2026",
    publishedAt: "2026-02-06T18:00:00Z",
    readingTime: 4,
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Tecnologia aplicada à saúde",
    slug: "saude-digital-crescimento-longevidade",
    tags: ["saude", "tecnologia", "empresas"],
    isTrending: true,
    content: [
      "O setor de saúde digital no Brasil registrou crescimento de 34% em receita no último ano, impulsionado pela adoção de wearables, plataformas de monitoramento remoto e protocolos de bem-estar personalizados. Startups de longevidade atraíram aportes significativos de fundos de venture capital.",
      "O perfil do consumidor dessas soluções mudou. Se antes eram atletas de alto rendimento e executivos de grandes corporações, hoje a base se ampliou para profissionais liberais e pequenos empresários que buscam performance sustentável. A pandemia acelerou a consciência sobre saúde preventiva, e essa tendência se consolidou.",
      "No lado dos investimentos, fundos especializados em saúde e tecnologia captaram R$ 1,2 bilhão no primeiro semestre. Entre os segmentos mais atrativos estão telemedicina, genômica aplicada ao estilo de vida e plataformas de coaching de saúde baseadas em dados. O mercado projeta quadruplicar até 2030.",
      "Para as empresas tradicionais de saúde, a digitalização deixou de ser opcional. Operadoras que não investirem em ferramentas de monitoramento preventivo tendem a perder market share para concorrentes mais ágeis. 'O futuro da saúde é preditivo, não reativo', resume Paulo Fonseca, especialista em healthtech."
    ],
    keyPoints: [
      "Healthtech cresceu 34% em receita no Brasil em 2025",
      "Fundos especializados captaram R$ 1,2 bi no primeiro semestre",
      "Consumidor de saúde digital agora inclui profissionais liberais",
      "Mercado de saúde digital deve quadruplicar até 2030"
    ]
  },
  {
    id: 5,
    category: "Finanças",
    title: "Fundos de dividendos voltam a atrair fluxo em 2026",
    excerpt: "Com volatilidade controlada, investidores buscam renda recorrente e proteção de caixa.",
    author: "Ricardo Lopes",
    source: "Infomoney",
    date: "6 fev 2026",
    publishedAt: "2026-02-06T15:00:00Z",
    readingTime: 4,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Gráfico de dividendos em alta",
    slug: "fundos-dividendos-voltam-atrair-fluxo",
    tags: ["dividendos", "renda"],
    isTrending: false,
    content: [
      "Os fundos de ações com foco em dividendos voltaram a registrar captação líquida positiva após dois trimestres de saídas. O movimento reflete a busca dos investidores por renda recorrente em um ambiente de juros ainda elevados, mas com perspectiva de queda gradual ao longo de 2026.",
      "Papéis como PETR4, BBAS3 e TAEE11 lideram as carteiras dos fundos de dividendos mais captados do semestre. O yield médio das carteiras varia entre 7% e 11% ao ano, competindo diretamente com a renda fixa, mas com potencial adicional de valorização do principal em cenário de queda de Selic.",
      "A estratégia de comprar ações pagadoras de dividendos e reinvestir os proventos — conhecida como 'snowball de dividendos' — tem demonstrado resultados superiores ao CDI em horizontes acima de cinco anos. O segredo está na consistência dos aportes e na paciência com a volatilidade de curto prazo.",
      "Para quem deseja ingressar nessa estratégia, especialistas recomendam diversificação entre setores como energia, bancos e saneamento, que historicamente apresentam fluxo de caixa mais previsível. Atenção: dividend yield elevado pode ser sinal de queda de preço, não necessariamente de saúde financeira da empresa."
    ],
    keyPoints: [
      "Fundos de dividendos voltam a captar após dois trimestres negativos",
      "Yield médio das carteiras entre 7% e 11% ao ano",
      "Estratégia 'snowball' supera CDI em horizontes acima de 5 anos",
      "PETR4, BBAS3 e TAEE11 são os papéis mais presentes nas carteiras"
    ]
  },
  {
    id: 6,
    category: "Bem-estar",
    title: "Sono profundo e performance cognitiva: o guia prático de 2026",
    excerpt: "Rotina de sono, minerais e hábitos simples para melhorar foco e decisões no trabalho.",
    author: "Paulo Diniz",
    source: "Mental Wealth",
    date: "6 fev 2026",
    publishedAt: "2026-02-06T12:00:00Z",
    readingTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Pessoa descansando em ambiente calmo",
    slug: "sono-profundo-performance-cognitiva-2026",
    tags: ["sono", "bem-estar", "foco"],
    isTrending: false,
    content: [
      "A relação entre sono de qualidade e capacidade cognitiva é um dos temas mais estudados na neurociência moderna. Pesquisas da Universidade de São Paulo mostram que a privação crônica de sono — dormir menos de 6 horas por noite — reduz em até 40% a capacidade de tomada de decisão e processamento de informações complexas.",
      "O sono profundo (fase de ondas lentas) é o período em que o cérebro realiza sua 'manutenção'. Durante essa fase, ocorre a consolidação da memória, a eliminação de resíduos metabólicos e a restauração das funções cognitivas. Interrupções nessa fase estão associadas a maior irritabilidade, queda na criatividade e piora nos resultados profissionais.",
      "Para melhorar a qualidade do sono, especialistas em medicina do sono recomendam: manter horários regulares (inclusive nos fins de semana), evitar telas azuis nas duas horas antes de dormir, manter o quarto fresco e escuro, e evitar cafeína após as 14h. Magnésio glicínico e L-teanina têm evidências para facilitar o relaxamento sem causar dependência.",
      "O impacto financeiro do sono inadequado é frequentemente subestimado. Um estudo da McKinsey estima que a perda de produtividade causada por privação de sono custa à economia americana US$ 411 bilhões anuais. Trabalhadores bem descansados tomam decisões mais rentáveis e cometem significativamente menos erros custosos."
    ],
    keyPoints: [
      "Privação de sono reduz capacidade decisória em até 40%",
      "Fase de sono profundo é essencial para consolidação da memória",
      "Horários regulares e ausência de telas são as melhores intervenções",
      "Custo econômico do sono ruim é estimado em US$ 411 bi/ano nos EUA"
    ]
  },
  {
    id: 7,
    category: "Empresas",
    title: "Mercado global de suplementos premium cresce com foco em imunidade",
    excerpt: "Marcas com ingredientes naturais e rastreabilidade lideram a preferência do consumidor em 2026.",
    author: "Bia Venturi",
    source: "Global Health",
    date: "5 fev 2026",
    publishedAt: "2026-02-05T20:00:00Z",
    readingTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Vitaminas e suplementos sobre mesa",
    slug: "suplementos-premium-crescimento-imunidade",
    tags: ["suplementos", "saude", "mercado"],
    isTrending: true,
    content: [
      "O mercado global de suplementos alimentares premium ultrapassou US$ 180 bilhões em 2025 e projeta crescimento anual de 8,5% até 2030. No Brasil, o crescimento foi ainda mais acelerado: 22% no último ano, puxado por consumidores das classes A e B que buscam ingredientes rastreáveis e fórmulas com comprovação científica.",
      "A demanda por rastreabilidade é a principal tendência do setor. Consumidores cada vez mais exigem saber a origem dos ativos, a pureza dos ingredientes e os laudos de controle de qualidade. Marcas que investem em certificações como NSF, Informed Sport e ISO 22000 conquistam preferência nos canais digitais e premium.",
      "Vitamina D3 combinada com K2, ômega-3 de alta concentração e probióticos de múltiplas cepas lideram as buscas nos e-commerces especializados. O interesse reflete uma mudança de paradigma: o consumidor passou do modelo reativo (tratar doenças) para o preventivo (otimizar saúde).",
      "Para os investidores, o setor oferece oportunidades interessantes. Ações de empresas como Hypera Pharma (HYPE3) e Cimed têm exposição indireta ao mercado de suplementos. Fundos de venture capital também aumentaram as apostas em startups de suplementação personalizada, baseadas em testes genéticos e bioquímicos."
    ],
    keyPoints: [
      "Mercado global supera US$ 180 bi com crescimento de 8,5% ao ano",
      "Brasil cresce 22% no segmento premium de suplementos",
      "Rastreabilidade e certificação são os diferenciais mais valorizados",
      "Vitamina D3+K2, ômega-3 e probióticos lideram as buscas no Brasil"
    ]
  },
  {
    id: 8,
    category: "Bem-estar",
    title: "Nutrição inteligente e metabolismo: tendências alinhadas à ciência",
    excerpt: "Ajustes simples de rotina e suplementação podem melhorar energia e composição corporal de forma segura.",
    author: "Mariana Silva",
    source: "Nutrition Today",
    date: "5 fev 2026",
    publishedAt: "2026-02-05T14:00:00Z",
    readingTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Alimentos saudáveis e suplementos",
    slug: "nutricao-inteligente-metabolismo-2026",
    tags: ["nutricao", "metabolismo", "saude"],
    isTrending: false,
    content: [
      "A nutrição inteligente vai além de contar calorias. Em 2026, a abordagem dominante entre especialistas é a composição de macronutrientes alinhada ao ritmo circadiano e às necessidades individuais, avaliadas por exames laboratoriais. A nutrigenômica — ciência que estuda como os alimentos interagem com nossos genes — começa a chegar às consultas particulares.",
      "O metabolismo basal — a quantidade de energia gasta em repouso — é influenciado por fatores como composição muscular, qualidade do sono, nível de cortisol e saúde da tireoide. Estratégias que aumentam a massa magra, como o treinamento de força 3x por semana, elevam o metabolismo de forma duradoura, diferente de dietas restritivas que frequentemente causam efeito rebote.",
      "Entre os ajustes de rotina com maior impacto metabólico, pesquisadores destacam: consumo de proteínas distribuído ao longo do dia (não concentrado em uma única refeição), priorizar carboidratos complexos pela manhã, hidratação adequada (mínimo 35ml por kg de peso) e intervalos regulares entre as refeições.",
      "A suplementação com creatina mono-hidratada é a intervenção nutricional com maior volume de pesquisa científica positiva: além de melhorar o desempenho físico, estudos recentes apontam benefícios cognitivos, como melhora de memória de curto prazo e redução da fadiga mental em situações de estresse elevado."
    ],
    keyPoints: [
      "Nutrigenômica personaliza dietas com base no perfil genético individual",
      "Treinamento de força 3x/semana é o melhor investimento metabólico",
      "Proteína distribuída ao longo do dia supera grandes porções únicas",
      "Creatina é o suplemento com maior respaldo científico para mente e corpo"
    ]
  },
  {
    id: 9,
    category: "Finanças",
    title: "Tesouro Direto: Estratégias para Maximizar Retornos em 2026",
    excerpt: "Com a Selic ainda em dois dígitos, entender os diferentes títulos do Tesouro é essencial para proteger e fazer crescer o patrimônio.",
    author: "Felipe Moraes",
    source: "Tesouro Nacional",
    date: "5 fev 2026",
    publishedAt: "2026-02-05T10:00:00Z",
    readingTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Gráfico financeiro com crescimento",
    slug: "tesouro-direto-estrategias-2026",
    tags: ["tesouro direto", "renda fixa", "selic"],
    isTrending: false,
    content: [
      "O Tesouro Direto continua sendo uma das formas mais acessíveis e seguras de investir no Brasil. Com a Selic ainda em patamar elevado, os títulos pós-fixados (Tesouro Selic) oferecem rendimento acima de 13% ao ano com liquidez diária, tornando-se a opção mais indicada para a reserva de emergência e objetivos de curto prazo.",
      "Para objetivos de médio e longo prazo, o Tesouro IPCA+ apresenta vantagem significativa: além de proteger contra a inflação, oferece uma taxa de juros real garantida. Em fevereiro de 2026, títulos com vencimento em 2035 pagam IPCA + 6,2% ao ano, um prêmio historicamente alto que atrai investidores que buscam preservação de poder de compra.",
      "O Tesouro Prefixado é indicado para quem acredita na queda dos juros. Se a Selic recuar conforme esperado pelo mercado nos próximos dois anos, títulos prefixados adquiridos hoje a 12,5% ao ano apresentarão valorização expressiva antes do vencimento, beneficiando investidores que souberem o momento correto de realizar o lucro.",
      "A diversificação entre os três tipos de títulos é a estratégia mais utilizada por gestores de patrimônio conservadores. A regra geral: reserva de emergência (6 meses de gastos) no Tesouro Selic; metas de longo prazo (aposentadoria) no Tesouro IPCA+; e uma fatia menor em Prefixado para quem tolera alguma volatilidade em troca de retorno potencialmente maior."
    ],
    keyPoints: [
      "Tesouro Selic rende acima de 13% ao ano com liquidez diária",
      "Tesouro IPCA+ paga IPCA + 6,2% ao ano — prêmio historicamente alto",
      "Prefixado é indicado para quem acredita na queda da Selic",
      "Diversificação entre os três tipos é a estratégia mais equilibrada"
    ]
  },
  {
    id: 10,
    category: "Finanças",
    title: "FIIs: Os Fundos Imobiliários Mais Promissores do Primeiro Semestre",
    excerpt: "O segmento de shoppings e galpões logísticos lidera os rankings de rendimento, enquanto fundos de papel ganham espaço com os juros ainda altos.",
    author: "Carla Souza",
    source: "Funds Explorer",
    date: "4 fev 2026",
    publishedAt: "2026-02-04T14:00:00Z",
    readingTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Prédios comerciais e shoppings",
    slug: "fiis-mais-promissores-2026",
    tags: ["FII", "fundos imobiliários", "dividendos", "renda passiva"],
    isTrending: true,
    content: [
      "Os Fundos de Investimento Imobiliário (FIIs) voltaram ao radar dos investidores em 2026. Com o IFIX acumulando alta de 8,3% no ano, o segmento supera a renda fixa tradicional em vários horizontes, especialmente para quem busca renda passiva mensal isenta de Imposto de Renda.",
      "Os fundos de shoppings (FIIs de tijolo) se destacam pela recuperação consistente das receitas pós-pandemia. XPML11, VISC11 e BRCO11 registraram dividend yield entre 8% e 10% nos últimos 12 meses, sustentados pela recuperação do consumo nas principais capitais. A vacância média caiu para 4,2%, o menor nível em cinco anos.",
      "No segmento de galpões logísticos, a expansão do e-commerce continua pressionando positivamente a demanda. Fundos como XPLG11 e HGLG11 mantêm portfólios com contratos atípicos de longo prazo, garantindo previsibilidade de renda. O movimento de nearshoring industrial deve manter a demanda elevada nos próximos anos.",
      "Os FIIs de papel (CRIs e LCIs) também merecem atenção. Com os juros ainda altos, fundos como KNCR11 e MXRF11 distribuem rendimentos que superam o CDI com isenção fiscal para pessoa física. A escolha entre tijolo e papel depende do horizonte do investidor: tijolo para quem tolera maior volatilidade com potencial de ganho de capital; papel para quem prioriza renda estável."
    ],
    keyPoints: [
      "IFIX acumula alta de 8,3% no ano, superando renda fixa tradicional",
      "FIIs de shoppings têm vacância de 4,2% — menor nível em 5 anos",
      "Galpões logísticos beneficiados pelo nearshoring e crescimento do e-commerce",
      "FIIs de papel superam CDI com isenção de IR para pessoa física"
    ]
  },
  {
    id: 11,
    category: "Economia",
    title: "Inflação e Poder de Compra: O Impacto Real no Bolso do Brasileiro",
    excerpt: "Com IPCA ainda acima da meta, famílias de renda média são as mais impactadas. Veja como se proteger e adaptar o orçamento doméstico.",
    author: "Ana Ferreira",
    source: "IBGE",
    date: "4 fev 2026",
    publishedAt: "2026-02-04T09:00:00Z",
    readingTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Compras no supermercado e preços",
    slug: "inflacao-poder-compra-brasileiro-2026",
    tags: ["inflação", "IPCA", "economia doméstica", "orçamento"],
    isTrending: true,
    content: [
      "O IPCA encerrou 2025 em 5,1% ao ano, acima do teto da meta estabelecida pelo Conselho Monetário Nacional (4,5%). As famílias de renda média foram as mais afetadas, pois gastam proporcionalmente mais com itens de alto reajuste como alimentação fora do domicílio (alta de 7,8%) e planos de saúde (reajuste de 6,9%).",
      "A cesta básica subiu em média 9,2% no ano em capitais como São Paulo e Rio de Janeiro, pressionada especialmente por proteínas (carnes e ovos) e hortifrutigranjeiros. O fenômeno climático La Niña impactou a produção agrícola e contribuiu para a volatilidade dos preços de alimentos no segundo semestre.",
      "Para proteger o orçamento doméstico da inflação, especialistas em finanças pessoais recomendam três estratégias principais: compras em atacado para itens não perecíveis, renegociação de contratos de serviços recorrentes (internet, seguros, mensalidades) e revisão da carteira de investimentos para incluir mais ativos indexados ao IPCA.",
      "No cenário positivo, o recuo do câmbio e a expectativa de queda gradual da Selic ao longo de 2026 devem aliviar as pressões inflacionárias. O mercado projeta IPCA de 4,2% para o ano corrente, dentro da banda de tolerância da meta. A ancoragem das expectativas de inflação é o principal desafio do Banco Central nos próximos meses."
    ],
    keyPoints: [
      "IPCA fechou 2025 em 5,1%, acima do teto da meta de 4,5%",
      "Cesta básica subiu 9,2% em São Paulo e Rio — proteínas lideram alta",
      "Atacado, renegociação de contratos e IPCA+ são as principais proteções",
      "Mercado projeta IPCA de 4,2% para 2026, dentro da banda de tolerância"
    ]
  },
  {
    id: 12,
    category: "Empresas",
    title: "Fintechs no Brasil: O Setor que Cresce 40% ao Ano e Muda o Mercado",
    excerpt: "De PIX a carteiras digitais, o ecossistema de fintechs brasileiro consolida sua posição como referência mundial em inovação financeira.",
    author: "Rafael Teixeira",
    source: "Distrito.me",
    date: "3 fev 2026",
    publishedAt: "2026-02-03T16:00:00Z",
    readingTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Celular com aplicativo financeiro",
    slug: "fintechs-brasil-crescimento-2026",
    tags: ["fintech", "PIX", "inovação", "banco digital"],
    isTrending: false,
    content: [
      "O Brasil se consolidou como o maior ecossistema de fintechs da América Latina e um dos cinco maiores do mundo. Com mais de 1.400 empresas mapeadas em 2026, o setor cresce em média 40% ao ano e já movimenta R$ 2,3 trilhões em transações anuais, segundo relatório do Distrito.me.",
      "O PIX, lançado pelo Banco Central em 2020, foi o principal catalisador da democratização financeira no país. Com mais de 140 milhões de usuários ativos e trilhões de reais transacionados, o sistema de pagamentos instantâneos tornou o Brasil referência mundial. Novidades como PIX por aproximação e PIX crédito devem ampliar ainda mais sua adoção em 2026.",
      "O segmento de crédito digital é o que mais cresce dentro do ecossistema fintech. Empresas como Nubank, Creditas e Zetra estão expandindo para novos produtos: financiamento imobiliário, crédito consignado privado e seguros embutidos em apps. A taxa de inadimplência das fintechs ficou 1,2 ponto percentual abaixo da média bancária tradicional em 2025.",
      "Para investidores, o setor de fintechs oferece tanto oportunidades em bolsa (Nubank — NUBR33, PagSeguro — PAGS) quanto em renda fixa via CRAs e CRIs emitidos por essas empresas. O risco principal é regulatório: o Banco Central está revisando normas de capital para fintechs de crédito, o que pode afetar margens no curto prazo."
    ],
    keyPoints: [
      "Brasil tem mais de 1.400 fintechs e é referência na América Latina",
      "PIX tem 140 mi de usuários — novidades como PIX crédito chegam em 2026",
      "Crédito digital cresce com inadimplência 1,2 pp abaixo dos bancos tradicionais",
      "Nubank (NUBR33) e PagSeguro (PAGS) são as principais opções em bolsa"
    ]
  }
];

export const NEWS_CAROUSEL: NewsItem[] = [
  {
    id: 1,
    title: "Mercado 2026: bancos e energia puxam a alta da semana",
    subtitle: "Ibovespa acima de 140 mil pontos e fluxo estrangeiro volta a ganhar força.",
    category: "MERCADO",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=60",
    cta: "Ler matéria completa",
    slug: "ibovespa-fecha-semana-acima-140-mil"
  },
  {
    id: 2,
    title: "Saúde & Performance: hábitos simples com grande impacto",
    subtitle: "Sono, nutrientes essenciais e rotina inteligente para foco e energia sustentada em 2026.",
    category: "BEM-ESTAR",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=60",
    cta: "Ver Guia Wellness",
    slug: "suplementos-energia-sustentada-2026"
  },
  {
    id: 3,
    title: "Tesouro Direto: como maximizar seus retornos em 2026",
    subtitle: "Com Selic em dois dígitos, entenda qual título escolher para cada objetivo financeiro.",
    category: "FINANÇAS",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=60",
    cta: "Ver Estratégias",
    slug: "tesouro-direto-estrategias-2026"
  }
];

export const RANKING_PL: RankingItem[] = [
  { symbol: 'BBAS3', value: '4.2x' },
  { symbol: 'PETR4', value: '4.8x' },
  { symbol: 'VALE3', value: '5.5x' },
  { symbol: 'CSNA3', value: '6.1x' },
  { symbol: 'PRIO3', value: '7.2x' },
];

export const RANKING_DY: RankingItem[] = [
  { symbol: 'PETR4', value: '14.5%' },
  { symbol: 'BBAS3', value: '10.2%' },
  { symbol: 'VALE3', value: '8.8%' },
  { symbol: 'CSNA3', value: '7.5%' },
  { symbol: 'ITUB4', value: '6.2%' },
];
