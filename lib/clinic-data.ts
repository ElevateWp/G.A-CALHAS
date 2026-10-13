export interface DentistProfile {
  id: string;
  slug: string;
  name: string;
  title: string;
  qualifications: string;
  specialization: string;
  experienceYears: number;
  bio: string;
  philosophy: string;
  education: string[];
  memberships: string[];
  specialties: string[];
  image: string;
  warmImage: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  navLabel: string;
  tagline: string;
  shortDescription: string;
  clinicalExplanation: string;
  whoNeeds: string[];
  benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string;
  faqs: { question: string; answer: string; relatedSlug?: string }[];
}

export interface ClinicInformation {
  name: string;
  legalName: string;
  tagline: string;
  establishedYear?: number;
  primaryLocation: {
    street: string;
    suite: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    directions: string;
    landmarks: string;
    coordinates?: { lat: number; lng: number };
  };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string };
  identityHighlights: string[];
  schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[];
  accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: 'G.A Calhas Serralheria e Vidraçaria',
  legalName: 'G.A Calhas Serralheria e Vidraçaria',
  tagline: 'Calhas, telhados e serviços de cobertura em Itapevi.',
  primaryLocation: {
    street: 'Av. Cesário de Abreu, 1258 - Dos Abreus',
    suite: '',
    city: 'Itapevi',
    state: 'São Paulo',
    postalCode: '06653-440',
    country: 'BR',
    directions: 'Av. Cesário de Abreu, 1258 - Dos Abreus, Itapevi - SP, 06653-440, Brasil',
    landmarks: 'F34G+W6 Dos Abreus, Itapevi - São Paulo, Brasil',
  },
  contact: {
    phone: '+55 11 98593-4913',
    emergencyPhone: '+55 11 98593-4913',
    whatsapp: '+55 11 98593-4913',
    email: '',
  },
  identityHighlights: ['Atendimento LGBTQ+ friendly', 'Identificada como empresa liderada por mulheres', 'Atendimento em Itapevi'],
  schedule: [
    { day: 'Segunda-feira', hours: '7h–18h' },
    { day: 'Terça-feira', hours: '7h–18h' },
    { day: 'Quarta-feira', hours: '7h–18h' },
    { day: 'Quinta-feira', hours: '7h–18h' },
    { day: 'Sexta-feira', hours: 'Fechado' },
    { day: 'Sábado', hours: '8h–14h' },
    { day: 'Domingo', hours: 'Fechado' },
  ],
  verifiedStats: [
    { value: 4, suffix: ',6', label: 'Nota no Google', description: 'Com base em 74 avaliações no Google.' },
    { value: 74, suffix: '', label: 'Avaliações no Google', description: 'Avaliações de clientes no Google.' },
  ],
  accreditations: [],
};

export const DENTISTS: DentistProfile[] = [
  {
    id: 'roofing-team',
    slug: 'our-doctor',
    name: 'G.A Calhas',
    title: 'Serralheria e vidraçaria · Calhas e telhados',
    qualifications: 'Itapevi, São Paulo',
    specialization: 'Limpeza, instalação e manutenção de calhas e telhados',
    experienceYears: 0,
    bio: 'Serviços de calhas, telhados, rufos e coberturas em Itapevi, São Paulo.',
    philosophy: 'Cada serviço é avaliado no local para alinhar o escopo e o orçamento com o cliente.',
    education: [],
    memberships: [],
    specialties: ['Limpeza de calhas', 'Instalação de calhas', 'Rufos e telhados', 'Reparos de cobertura'],
    image: '/images/ga-project-02.jpg',
    warmImage: '/images/ga-project-02.jpg',
  },
];

export interface CustomerTestimonial {
  name: string;
  rating: number;
  quote: string;
  age: string;
  source: string;
}

// Keep this to the positive review text supplied by the business owner.
export const TESTIMONIALS: CustomerTestimonial[] = [
  {
    name: 'Gabriela Nery',
    rating: 5,
    quote: 'Maravilhosos, super prestativos. Trabalho de qualidade. Recomendo muito.',
    age: 'há 3 meses',
    source: 'Avaliação no Google',
  },
  {
    name: 'Selma Peçanha',
    rating: 5,
    quote: 'O telhado ficou excelente e resolveu meu problema. Recomendo.',
    age: 'há 1 ano',
    source: 'Avaliação no Google',
  },
  {
    name: 'Rejane',
    rating: 5,
    quote: 'Gostei muito do serviço de instalação de rufo no meu telhado. Trabalho bem feito e profissional de confiança.',
    age: 'há 3 anos',
    source: 'Avaliação no Google',
  },
  {
    name: 'Shington78 Fênix',
    rating: 5,
    quote: 'Gabriel é um profissional exemplar, usa materiais de qualidade e cobra um preço justo. Excelente profissional.',
    age: 'há 2 anos',
    source: 'Avaliação no Google',
  },
  { name: 'Priscila Bastos Lima', rating: 5, quote: 'Excelente trabalho, feito com rapidez e qualidade. Gabriel é muito educado e atencioso.', age: 'há 3 anos', source: 'Avaliação no Google' },
  { name: 'Arnaldo Cassiano da Silva', rating: 5, quote: 'Excelente profissional, educado, rápido, presta um ótimo atendimento e oferece ótimo custo-benefício.', age: 'há 4 anos', source: 'Avaliação no Google' },
  { name: 'Fabio Soares', rating: 5, quote: 'Excelente atendimento, muito atencioso e inteligente ao propor melhorias. Recomendo.', age: 'há 4 anos', source: 'Avaliação no Google' },
  { name: 'Rita Cassia', rating: 5, quote: 'Atendimento perfeito, entrega dentro do prazo estimado. Recomendo muito.', age: 'há 3 anos', source: 'Avaliação no Google' },
];

const projectPhotos = Array.from({ length: 12 }, (_, index) => `/images/ga-project-${String(index + 1).padStart(2, '0')}.jpg`);

const SERVICE_GUIDES: Record<string, Pick<ServiceDetail, 'clinicalExplanation' | 'indications' | 'procedureSteps' | 'faqs'>> = {
  'limpeza-de-calhas': {
    clinicalExplanation: 'A limpeza de calhas remove folhas, galhos, terra e outros resíduos que podem dificultar o escoamento da água da chuva. O serviço começa com a avaliação das condições de acesso, do comprimento e do estado aparente das calhas e descidas. Depois de entender o local, a equipe combina o que será limpo e informa se algum ponto visível precisa de uma avaliação separada. A limpeza periódica pode ajudar a manter o caminho da água livre, especialmente em imóveis próximos a árvores ou que acumulam resíduos com frequência.',
    indications: [
      { condition: 'Folhas, galhos ou terra acumulados', explanation: 'Resíduos podem se juntar no fundo e nos cantos das calhas. A equipe verifica o acúmulo e as condições para fazer a remoção com acesso apropriado.' },
      { condition: 'Água transbordando pelas bordas', explanation: 'O transbordamento pode estar relacionado a obstruções, ao volume de chuva ou a pontos que precisam de reparo. Uma avaliação ajuda a entender a situação.' },
      { condition: 'Escoamento lento ou irregular', explanation: 'A água que permanece parada ou demora a sair pode indicar resíduos ou necessidade de conferir os pontos de saída e a inclinação.' },
      { condition: 'Calhas próximas a árvores', explanation: 'Folhas e pequenos galhos podem cair ao longo do ano. A frequência adequada depende da vegetação, das chuvas e do imóvel.' },
    ],
    procedureSteps: [
      { stepNumber: 1, title: 'Conversa e avaliação de acesso', duration: 'Com agendamento', description: 'A equipe entende onde estão as calhas, quais sinais você percebeu e como é o acesso ao telhado.', clinicalDetails: 'Altura, inclinação e condições do local ajudam a planejar o atendimento.' },
      { stepNumber: 2, title: 'Verificação das calhas', duration: 'No local', description: 'Os trechos acessíveis são observados para identificar resíduos e pontos de atenção visíveis.', clinicalDetails: 'A avaliação considera calhas, emendas, descidas e condições aparentes.' },
      { stepNumber: 3, title: 'Remoção dos resíduos', duration: 'Conforme extensão', description: 'A limpeza acordada é realizada nos trechos combinados, respeitando o acesso e as condições de segurança.', clinicalDetails: 'Reparos ou substituições não previstos são conversados à parte antes de qualquer serviço adicional.' },
      { stepNumber: 4, title: 'Orientações finais', duration: 'Ao concluir', description: 'A equipe informa o que foi limpo e compartilha observações úteis sobre os pontos verificados.', clinicalDetails: 'Se houver sinais de dano, o próximo passo e eventual orçamento são alinhados com você.' },
    ],
    faqs: [
      { question: 'Quando devo limpar as calhas?', answer: 'A frequência depende das árvores próximas, das chuvas e das condições do imóvel. Folhas acumuladas, água transbordando e escoamento lento são sinais para solicitar uma avaliação.' },
      { question: 'A limpeza inclui conserto de calhas danificadas?', answer: 'A limpeza e os reparos são serviços diferentes. Se a equipe identificar danos visíveis, explica o que observou e combina um orçamento separado antes de qualquer reparo.' },
      { question: 'Como é definido o orçamento?', answer: 'O orçamento considera a extensão das calhas, a altura e o acesso ao imóvel, o nível de acúmulo e o serviço solicitado. Os detalhes são alinhados após a avaliação.' },
      { question: 'Posso limpar as calhas por conta própria?', answer: 'Trabalhar em escadas e telhados envolve risco de queda. Não suba em um telhado molhado ou sem equipamento adequado; solicite uma avaliação profissional.' },
    ],
  },
  'instalacao-de-calhas': {
    clinicalExplanation: 'A instalação de calhas é planejada para conduzir a água da cobertura aos pontos de saída definidos para o imóvel. A equipe avalia medidas, formato do telhado, beirais, posição das descidas e condições de fixação antes de propor o serviço. O tipo de material, o acabamento, o acesso e a extensão da instalação influenciam o orçamento e o prazo. Com o escopo alinhado, a fabricação ou preparação e a instalação são combinadas com o cliente.',
    indications: [
      { condition: 'Imóvel ainda sem sistema de calhas', explanation: 'Uma avaliação identifica os lados da cobertura que precisam de coleta e os pontos mais adequados para conduzir a água.' },
      { condition: 'Calhas antigas com desgaste', explanation: 'Deformações, emendas comprometidas ou corrosão visível podem justificar avaliar substituição ou reparo.' },
      { condition: 'Água escorrendo junto às paredes', explanation: 'A água que cai diretamente do beiral pode molhar paredes e áreas de circulação. A equipe verifica a cobertura e as alternativas de direcionamento.' },
      { condition: 'Reforma ou ampliação da cobertura', explanation: 'Mudanças no telhado podem alterar o caminho da água. As medidas e os pontos de saída devem ser revistos para o novo formato.' },
    ],
    procedureSteps: [
      { stepNumber: 1, title: 'Levantamento das medidas', duration: 'Visita ao imóvel', description: 'A equipe observa o telhado, o comprimento dos beirais e os locais possíveis para as descidas.', clinicalDetails: 'O acesso, o formato da cobertura e os pontos de fixação são considerados no planejamento.' },
      { stepNumber: 2, title: 'Definição de materiais e escopo', duration: 'Após avaliação', description: 'As opções de calha, acabamentos e extensão do serviço são explicadas para você.', clinicalDetails: 'O orçamento descreve o que está incluído e as condições para executar a instalação.' },
      { stepNumber: 3, title: 'Preparação e instalação', duration: 'Prazo combinado', description: 'A instalação é realizada nos trechos definidos, com os pontos de escoamento e as fixações previstos.', clinicalDetails: 'A data e o prazo podem variar conforme medidas, materiais, clima e acesso ao local.' },
      { stepNumber: 4, title: 'Conferência e orientações', duration: 'Ao finalizar', description: 'A equipe revisa o serviço executado e conversa sobre cuidados e manutenção.', clinicalDetails: 'Qualquer ajuste ou item fora do escopo combinado é discutido com o cliente.' },
    ],
    faqs: [
      { question: 'Como solicitar um orçamento para calhas?', answer: 'Entre em contato para combinar uma avaliação. O orçamento depende das medidas, do material, do formato do telhado e das condições de acesso.' },
      { question: 'A calha é feita sob medida?', answer: 'As medidas e o formato são verificados para o imóvel. A equipe informa as opções disponíveis e o escopo proposto após avaliar o local.' },
      { question: 'Quanto tempo leva a instalação?', answer: 'O prazo depende da extensão do serviço, dos materiais, do acesso e das condições do tempo. A equipe confirma a previsão no orçamento.' },
      { question: 'A instalação inclui descidas de água?', answer: 'Os pontos de saída e as descidas precisam ser definidos conforme o imóvel. Confirme no orçamento quais trechos e componentes estão incluídos.' },
    ],
  },
  'manutencao-de-telhados': {
    clinicalExplanation: 'A manutenção de telhados ajuda a avaliar a condição visível da cobertura e a planejar os cuidados necessários para cada imóvel. Durante a conversa inicial, conte quando percebeu o problema, se ele aparece durante a chuva e quais áreas parecem afetadas. A equipe verifica telhas, encontros, acabamentos e outros pontos acessíveis para entender o escopo. O serviço pode envolver manutenção ou reparo, conforme a avaliação e o que for combinado no orçamento.',
    indications: [
      { condition: 'Telhas deslocadas, quebradas ou faltando', explanation: 'Alterações visíveis na cobertura podem deixar áreas expostas. A equipe avalia o trecho e conversa sobre as opções de correção.' },
      { condition: 'Sinais de desgaste na cobertura', explanation: 'O estado varia conforme o material, a idade e a exposição do telhado. Uma avaliação permite discutir prioridades e serviços possíveis.' },
      { condition: 'Problemas que voltam depois da chuva', explanation: 'Se manchas ou goteiras reaparecem, relate quando ocorrem e em qual parte do imóvel para ajudar a orientar a inspeção.' },
      { condition: 'Manutenção preventiva', explanation: 'Uma revisão visual pode ajudar a identificar pontos que merecem atenção. O acesso ao telhado deve ser planejado por profissionais.' },
    ],
    procedureSteps: [
      { stepNumber: 1, title: 'Entendimento do problema', duration: 'Contato inicial', description: 'Você conta o histórico, os sinais percebidos e as áreas onde nota alterações.', clinicalDetails: 'Fotos feitas do chão, se disponíveis e seguras, podem ajudar na conversa inicial.' },
      { stepNumber: 2, title: 'Avaliação da cobertura', duration: 'Visita agendada', description: 'A equipe verifica as condições visíveis do telhado e os pontos relacionados ao serviço solicitado.', clinicalDetails: 'O acesso e o clima precisam permitir uma avaliação segura.' },
      { stepNumber: 3, title: 'Orçamento e planejamento', duration: 'Após visita', description: 'As alternativas, os materiais e o escopo são apresentados antes da execução.', clinicalDetails: 'Prazo e valor são confirmados de acordo com o trabalho necessário.' },
      { stepNumber: 4, title: 'Manutenção e revisão', duration: 'Conforme combinado', description: 'O serviço acordado é executado e revisado com você ao final.', clinicalDetails: 'A equipe compartilha observações e cuidados relacionados ao trecho atendido.' },
    ],
    faqs: [
      { question: 'Quando um telhado precisa de manutenção?', answer: 'A necessidade depende das condições e do histórico da cobertura. Telhas soltas, danos visíveis ou problemas que surgem após a chuva são motivos para solicitar uma avaliação.' },
      { question: 'A manutenção evita qualquer infiltração?', answer: 'Não é possível garantir isso sem conhecer as condições do imóvel. A avaliação permite identificar pontos visíveis e explicar o serviço possível.' },
      { question: 'Preciso estar no imóvel durante a visita?', answer: 'Combine esse detalhe com a equipe ao agendar. É útil poder mostrar os sinais percebidos e esclarecer o histórico do problema.' },
      { question: 'Como preparo o imóvel para a avaliação?', answer: 'Informe as áreas afetadas e mantenha livre o acesso combinado. Não suba no telhado para preparar ou inspecionar o local.' },
    ],
  },
  'instalacao-de-rufos': {
    clinicalExplanation: 'Rufos são peças de acabamento aplicadas em pontos de encontro e junções da cobertura, como a ligação entre telhado e parede. A instalação ou manutenção começa pela avaliação do trecho, das medidas, do material existente e dos sinais de umidade. A solução adequada depende do desenho do telhado e das condições encontradas. A equipe explica o escopo e o orçamento antes de iniciar, incluindo quais áreas serão atendidas.',
    indications: [
      { condition: 'Umidade próxima ao encontro do telhado e parede', explanation: 'Manchas nessa região podem ter diferentes causas. A equipe avalia a junção e os acabamentos visíveis antes de indicar qualquer serviço.' },
      { condition: 'Rufo ausente, solto ou danificado', explanation: 'Peças deslocadas ou desgastadas podem precisar de ajuste, reparo ou substituição, conforme o trecho e as condições do local.' },
      { condition: 'Água entrando perto de junções', explanation: 'A origem nem sempre fica evidente pelo lado interno. Conte quando a água aparece e solicite uma verificação da cobertura.' },
      { condition: 'Construção ou reforma de telhado', explanation: 'Alterações na cobertura podem exigir novos acabamentos nas junções. As medidas devem ser avaliadas para o projeto.' },
    ],
    procedureSteps: [
      { stepNumber: 1, title: 'Verificação da junção', duration: 'Visita agendada', description: 'A equipe observa o encontro entre telhado e parede e entende os sinais relatados.', clinicalDetails: 'A avaliação depende do acesso seguro e das condições do telhado.' },
      { stepNumber: 2, title: 'Medição e escolha do serviço', duration: 'Após avaliação', description: 'O trecho, as medidas e o acabamento necessário são definidos com você.', clinicalDetails: 'O material e o escopo são especificados no orçamento.' },
      { stepNumber: 3, title: 'Instalação ou reparo', duration: 'Prazo combinado', description: 'O serviço aprovado é realizado no trecho definido, de acordo com as condições encontradas.', clinicalDetails: 'Serviços extras são discutidos separadamente antes de serem executados.' },
      { stepNumber: 4, title: 'Revisão do acabamento', duration: 'Ao concluir', description: 'A equipe revisa a área atendida e explica o que foi feito.', clinicalDetails: 'Você recebe orientações sobre observação e manutenção do acabamento.' },
    ],
    faqs: [
      { question: 'O rufo pode ajudar quando há infiltração?', answer: 'A causa da infiltração precisa ser avaliada no local. A equipe pode verificar os encontros do telhado e explicar se há necessidade de instalação ou reparo de rufo.' },
      { question: 'Qual a diferença entre rufo e calha?', answer: 'São componentes com funções distintas na cobertura. A equipe pode avaliar o local e explicar qual serviço se aplica ao ponto observado.' },
      { question: 'É possível trocar só um trecho do rufo?', answer: 'A possibilidade depende do estado do restante, das medidas e do acabamento existente. A equipe avalia e informa o escopo recomendado.' },
      { question: 'Como pedir um orçamento para rufos?', answer: 'Entre em contato para combinar uma avaliação. Medidas, material, extensão e acesso ao telhado influenciam o orçamento.' },
    ],
  },
  'reparos-de-telhado': {
    clinicalExplanation: 'Reparos de telhado começam pela investigação dos sinais percebidos e pela avaliação dos pontos acessíveis da cobertura. Goteiras, manchas no forro e telhas deslocadas são informações úteis, mas a origem da água pode estar distante de onde ela aparece dentro do imóvel. A equipe verifica as áreas relacionadas ao relato, conversa sobre as alternativas e apresenta o orçamento antes de executar o reparo. Em dias de chuva ou com o telhado molhado, a avaliação pode precisar ser reagendada por segurança.',
    indications: [
      { condition: 'Goteira durante a chuva', explanation: 'Registre em que momento aparece e em qual cômodo. A água pode percorrer a estrutura antes de surgir no teto.' },
      { condition: 'Mancha de umidade no teto ou parede', explanation: 'A mancha pode indicar entrada de água, mas a origem precisa ser procurada na cobertura e em suas junções.' },
      { condition: 'Telhas soltas, quebradas ou fora do lugar', explanation: 'Danos visíveis podem expor partes do telhado. Mantenha distância e peça avaliação sem subir na cobertura.' },
      { condition: 'Vazamento recorrente após reparo', explanation: 'Explique o histórico e quais intervenções já foram feitas para que a equipe considere o contexto na nova avaliação.' },
    ],
    procedureSteps: [
      { stepNumber: 1, title: 'Relato dos sinais', duration: 'Contato inicial', description: 'A equipe pergunta quando o vazamento acontece, onde aparece e se houve mudanças recentes na cobertura.', clinicalDetails: 'Não é necessário subir no telhado para enviar informações; fotos seguras feitas do chão podem ajudar.' },
      { stepNumber: 2, title: 'Inspeção da área', duration: 'Com clima seguro', description: 'Os pontos relacionados ao relato são verificados conforme as condições de acesso.', clinicalDetails: 'Em chuva, vento forte ou telhado molhado, a visita pode ser remarcada.' },
      { stepNumber: 3, title: 'Definição do reparo', duration: 'Após avaliação', description: 'A equipe explica as opções e apresenta o orçamento e o prazo previstos.', clinicalDetails: 'O serviço só é iniciado depois de o escopo ser alinhado com você.' },
      { stepNumber: 4, title: 'Execução e orientações', duration: 'Conforme combinado', description: 'O reparo aprovado é feito e a equipe informa o que foi atendido.', clinicalDetails: 'Se surgirem condições diferentes das observadas, elas são conversadas com o cliente.' },
    ],
    faqs: [
      { question: 'Como identificar a origem de uma infiltração?', answer: 'A origem pode não estar diretamente acima da mancha interna. Uma avaliação do telhado, das junções e dos pontos próximos ajuda a entender por onde a água pode estar entrando.' },
      { question: 'Posso subir no telhado para procurar o vazamento?', answer: 'Não suba no telhado, especialmente durante ou após a chuva. Mantenha pessoas afastadas da área e procure profissionais para avaliar com segurança.' },
      { question: 'O reparo pode ser feito enquanto está chovendo?', answer: 'A segurança depende do clima e do acesso. Chuva, vento e telhado molhado podem impedir o trabalho; a equipe combina o atendimento quando houver condições seguras.' },
      { question: 'O orçamento é feito antes do reparo?', answer: 'Sim. A equipe avalia o local, explica o escopo e apresenta as condições de valor e prazo para você antes de iniciar o serviço.' },
    ],
  },
  'coberturas-metalicas': {
    clinicalExplanation: 'A G.A Calhas realiza serviços de serralheria voltados a calhas, rufos e coberturas metálicas. Cada projeto é avaliado conforme as medidas, o uso pretendido, a estrutura existente e as condições de fixação e acesso. A conversa inicial ajuda a entender o que você deseja instalar ou reparar. Depois da visita, a equipe detalha os materiais previstos, o escopo, o prazo e o orçamento para aprovação.',
    indications: [
      { condition: 'Projeto de cobertura metálica', explanation: 'A equipe avalia as dimensões, o local de instalação e a estrutura para definir as possibilidades e o escopo do projeto.' },
      { condition: 'Cobertura existente com sinais de desgaste', explanation: 'Ruídos, peças soltas ou danos aparentes podem justificar uma avaliação para reparo ou substituição.' },
      { condition: 'Acabamentos metálicos danificados', explanation: 'Calhas, rufos e arremates podem ser verificados para identificar o trecho e o tipo de intervenção necessários.' },
      { condition: 'Adequação ou ampliação de área coberta', explanation: 'Mudanças no uso do espaço precisam ser avaliadas junto às medidas, aos pontos de escoamento e à estrutura existente.' },
    ],
    procedureSteps: [
      { stepNumber: 1, title: 'Conversa sobre o projeto', duration: 'Contato inicial', description: 'Você explica o objetivo, o local e os materiais ou acabamentos que tem em mente.', clinicalDetails: 'Referências e medidas aproximadas podem ajudar, mas serão conferidas na avaliação.' },
      { stepNumber: 2, title: 'Visita e levantamento', duration: 'Com agendamento', description: 'A equipe observa o espaço, verifica medidas e avalia as condições de instalação.', clinicalDetails: 'Estrutura, acesso, drenagem e interferências são considerados no planejamento.' },
      { stepNumber: 3, title: 'Escopo e orçamento', duration: 'Após avaliação', description: 'Materiais, etapas, prazo e investimento são organizados para sua aprovação.', clinicalDetails: 'Qualquer alteração de escopo é alinhada antes da execução.' },
      { stepNumber: 4, title: 'Execução e entrega', duration: 'Prazo combinado', description: 'O projeto aprovado é executado e revisado com você ao final.', clinicalDetails: 'A equipe apresenta orientações relacionadas ao serviço realizado e aos acabamentos.' },
    ],
    faqs: [
      { question: 'Quais tipos de cobertura metálica são realizados?', answer: 'O serviço possível depende do projeto, das medidas e das condições do imóvel. Entre em contato para explicar sua necessidade e combinar uma avaliação.' },
      { question: 'Posso pedir orçamento enviando fotos?', answer: 'Fotos podem ajudar na conversa inicial se forem feitas de um local seguro. A definição do escopo e do orçamento pode exigir uma visita e conferência de medidas.' },
      { question: 'O orçamento inclui materiais e instalação?', answer: 'A proposta deve descrever os itens incluídos, como materiais, acabamentos e instalação. Confirme os detalhes com a equipe antes de aprovar.' },
      { question: 'O que fazer se o telhado começar a vazar durante uma tempestade?', answer: 'Afaste pessoas e objetos da área molhada e recolha a água apenas se for seguro. Não suba em um telhado molhado nem toque em instalações elétricas atingidas pela água.' },
    ],
  },
};

const makeService = (
  slug: string,
  name: string,
  navLabel: string,
  tagline: string,
  description: string,
  problems: string[],
  benefits: string[],
  faqs: { question: string; answer: string }[],
  photoIndex: number,
): ServiceDetail => ({
  slug,
  name,
  navLabel,
  tagline,
  shortDescription: description,
  clinicalExplanation: SERVICE_GUIDES[slug]?.clinicalExplanation || description,
  whoNeeds: problems,
  benefits,
  indications: SERVICE_GUIDES[slug]?.indications || problems.map((condition) => ({ condition, explanation: `A equipe pode avaliar o telhado e explicar as opções para ${condition.toLowerCase()}.` })),
  procedureSteps: SERVICE_GUIDES[slug]?.procedureSteps || [
    { stepNumber: 1, title: 'Avaliação do local', duration: 'Com agendamento', description: 'A equipe verifica as áreas visíveis e entende o que precisa ser feito.', clinicalDetails: 'A avaliação ajuda a definir o escopo adequado para o imóvel.' },
    { stepNumber: 2, title: 'Orçamento', duration: 'Após avaliação', description: 'O serviço e os materiais previstos são explicados antes do início.', clinicalDetails: 'Preço e prazo são confirmados após a avaliação.' },
    { stepNumber: 3, title: 'Execução do serviço', duration: 'Conforme combinado', description: 'A equipe realiza o serviço acertado para o telhado ou as calhas.', clinicalDetails: 'O acesso e os cuidados de segurança são combinados previamente.' },
    { stepNumber: 4, title: 'Revisão final', duration: 'Ao concluir', description: 'O serviço realizado é revisado com o cliente.', clinicalDetails: 'A equipe compartilha orientações relacionadas ao serviço concluído.' },
  ],
  recoveryTimeline: [
    { period: 'Antes do serviço', expectedSensations: 'A equipe avalia o local e combina o escopo com você.', careProtocol: 'Se possível, compartilhe fotos e conte quando o problema acontece.' },
    { period: 'Durante o serviço', expectedSensations: 'O prazo depende do acesso, dos materiais e do trabalho necessário.', careProtocol: 'Mantenha pessoas e animais longe da área de trabalho.' },
    { period: 'Após a conclusão', expectedSensations: 'A equipe explica o que foi realizado.', careProtocol: 'Siga as orientações de manutenção compartilhadas pela equipe.' },
  ],
  costTransparency: {
    baseRange: 'Solicite um orçamento após a avaliação.',
    factors: ['Tipo e condição do telhado', 'Acesso e altura do imóvel', 'Materiais e extensão do serviço'],
    whatIsIncluded: ['Escopo combinado', 'Descrição dos materiais previstos', 'Orientações sobre o serviço concluído'],
    note: 'Preço, prazo e disponibilidade são confirmados pela equipe após a avaliação.',
  },
  beforeAfterCase: {
    category: name,
    clinicalContext: 'Fotos de serviços realizados pela G.A Calhas.',
    beforeLabel: 'Serviço de telhado',
    afterLabel: 'Serviço de telhado',
    beforeImage: projectPhotos[photoIndex % projectPhotos.length],
    afterImage: projectPhotos[(photoIndex + 1) % projectPhotos.length],
    timeframe: 'Project photos',
  },
  assignedDentistId: 'roofing-team',
  faqs: SERVICE_GUIDES[slug]?.faqs || faqs,
});

export const SERVICES: ServiceDetail[] = [
  makeService(
    'limpeza-de-calhas', 'Limpeza de calhas', 'Limpeza de calhas',
    'Remoção de folhas e resíduos acumulados nas calhas.',
    'A limpeza ajuda a desobstruir o caminho da água da chuva. A equipe avalia as condições de acesso e o estado das calhas antes de definir o serviço.',
    ['Calhas com folhas ou resíduos', 'Água transbordando pelas bordas', 'Escoamento lento da água da chuva'],
    ['Verificar o fluxo de água', 'Remover resíduos acessíveis', 'Identificar danos visíveis que precisam de avaliação'],
    [{ question: 'Quando devo limpar as calhas?', answer: 'A frequência depende das árvores próximas, das chuvas e das condições do imóvel. Uma avaliação ajuda a identificar acúmulos e danos visíveis.' }], 0,
  ),
  makeService(
    'instalacao-de-calhas', 'Instalação de calhas', 'Instalação de calhas',
    'Calhas feitas e instaladas conforme as medidas do imóvel.',
    'A instalação é planejada após avaliar o telhado, os pontos de escoamento e as medidas necessárias. Consulte a equipe para solicitar uma visita e orçamento.',
    ['Imóvel sem calhas', 'Substituição de calhas antigas', 'Água da chuva sem direcionamento adequado'],
    ['Avaliar medidas e pontos de escoamento', 'Definir o tipo e o escopo da instalação', 'Combinar materiais, prazo e orçamento'],
    [{ question: 'Como solicitar um orçamento para calhas?', answer: 'Entre em contato para combinar uma avaliação. O orçamento depende das medidas, do material e das condições de acesso ao telhado.' }], 3,
  ),
  makeService(
    'manutencao-de-telhados', 'Manutenção de telhados', 'Manutenção de telhados',
    'Avaliação e manutenção de coberturas e telhados.',
    'A equipe avalia as condições visíveis do telhado e conversa com você sobre reparos ou manutenção necessários para a cobertura.',
    ['Telhas deslocadas ou danificadas', 'Sinais visíveis de desgaste', 'Problemas recorrentes após a chuva'],
    ['Avaliar a cobertura existente', 'Identificar pontos que precisam de atenção', 'Combinar o escopo do serviço'],
    [{ question: 'Quando um telhado precisa de manutenção?', answer: 'A necessidade depende da condição, dos materiais e do histórico do telhado. Uma avaliação no local ajuda a esclarecer as opções.' }], 10,
  ),
  makeService(
    'instalacao-de-rufos', 'Instalação de rufos', 'Rufos',
    'Instalação e manutenção de rufos para telhados.',
    'Rufos ajudam a proteger encontros entre telhados e paredes. A equipe verifica o local e define as medidas e o serviço indicado.',
    ['Umidade nos encontros entre telhado e parede', 'Rufo ausente ou danificado', 'Água entrando perto de junções'],
    ['Avaliar a junção e o acabamento', 'Definir medidas e material', 'Combinar instalação ou reparo'],
    [{ question: 'O rufo pode ajudar quando há infiltração?', answer: 'A causa da infiltração precisa ser avaliada no local. A equipe pode verificar os encontros do telhado e explicar as opções de reparo.' }], 12,
  ),
  makeService(
    'reparos-de-telhado', 'Reparos de telhado', 'Reparos de telhado',
    'Avaliação de vazamentos e reparos em telhados.',
    'A equipe avalia sinais de infiltração e danos visíveis para conversar sobre as alternativas de reparo e o escopo do serviço.',
    ['Goteiras durante a chuva', 'Manchas de umidade no teto', 'Telhas soltas ou quebradas'],
    ['Verificar pontos visíveis de entrada de água', 'Avaliar telhas e junções', 'Combinar o reparo necessário'],
    [{ question: 'Como identificar a origem de uma infiltração?', answer: 'A origem pode não estar diretamente acima da mancha interna. Uma avaliação do telhado e de suas junções pode ajudar a encontrar por onde a água entra.' }], 1,
  ),
  makeService(
    'coberturas-metalicas', 'Calhas e coberturas metálicas', 'Coberturas metálicas',
    'Serviços de serralheria para calhas e coberturas.',
    'A G.A Calhas trabalha com calhas, rufos e soluções de cobertura. Entre em contato para explicar o projeto e solicitar uma avaliação.',
    ['Cobertura precisando de reparo', 'Calhas e acabamentos metálicos danificados', 'Projeto de instalação de cobertura'],
    ['Avaliar o local e as medidas', 'Definir materiais e escopo', 'Combinar prazo e orçamento'],
    [{ question: 'O que fazer se o telhado começar a vazar durante uma tempestade?', answer: 'Afaste pessoas e objetos da área molhada e recolha a água apenas se for seguro. Não suba em um telhado molhado nem toque em instalações elétricas atingidas pela água.' }], 5,
  ),
];

export interface EmergencyCondition {
  id: string;
  title: string;
  urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)';
  symptoms: string[];
  immediateAction: string[];
  clinicTreatment: string;
}

export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  { id: 'active-leak', title: 'Active roof leak', urgency: 'Same-Day (2–6 hours)', symptoms: ['Water dripping through the ceiling', 'A damp patch growing during rain'], immediateAction: ['Move people and belongings away from the wet area.', 'If safe, collect dripping water. Keep away from electrical fittings affected by water.', 'Do not climb onto the roof during rain.'], clinicTreatment: 'Assessment of the leak and the repair options once the property can be accessed safely.' },
  { id: 'storm-damage', title: 'Roof tiles displaced by wind', urgency: 'Urgent (Within 24 hours)', symptoms: ['Tiles on the ground or out of place', 'Areas of the roof exposed'], immediateAction: ['Keep clear of loose materials.', 'Photograph visible damage from the ground if safe.', 'Do not climb onto the roof or try to replace tiles yourself.'], clinicTreatment: 'Inspection of the affected roof areas when access is safe.' },
  { id: 'ceiling-water', title: 'Water near electrical fittings', urgency: 'Immediate (0–2 hours)', symptoms: ['Dampness near lights or sockets', 'Ceiling sagging or changing shape'], immediateAction: ['Leave the affected area and do not touch wet electrical equipment.', 'If there may be electrical danger, contact a qualified professional to isolate the power.', 'Seek emergency assistance if anyone or the property is in immediate danger.'], clinicTreatment: 'Make the property safe first; the roof can be assessed once the area is secure.' },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  lastUpdated: string;
  authorId: string;
  excerpt: string;
  leadImage: string;
  relatedServiceSlug: string;
  content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'signs-gutters-need-cleaning', title: 'Sinais de que as calhas precisam de limpeza', category: 'Calhas', readTime: '3 min de leitura', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'our-doctor',
    excerpt: 'Transbordamento e acúmulo visível de folhas podem indicar que as calhas precisam de atenção.', leadImage: '/images/ga-project-03.jpg', relatedServiceSlug: 'limpeza-de-calhas',
    content: { intro: 'Folhas e resíduos podem se acumular nas calhas com o tempo. Observe sinais visíveis no imóvel e solicite uma avaliação quando notar problemas no escoamento da água.', sections: [
      { heading: 'Observe o escoamento durante a chuva', body: 'Água transbordando pelas bordas ou escorrendo perto das paredes pode indicar obstrução ou necessidade de avaliação das calhas e dos pontos de saída.' },
      { heading: 'Não suba no telhado', body: 'Telhados e escadas podem ser perigosos, especialmente quando estão molhados. Mantenha distância da área e procure uma equipe para avaliar o serviço.' },
    ], faqs: [{ question: 'Como pedir uma avaliação?', answer: 'Entre em contato com a G.A Calhas para conversar sobre o imóvel e combinar uma avaliação.' }] },
  },
  {
    slug: 'roof-leak-assessment', title: 'O que fazer ao notar uma infiltração no telhado', category: 'Telhados', readTime: '3 min de leitura', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'our-doctor',
    excerpt: 'Algumas medidas simples ajudam a manter pessoas e objetos afastados da água enquanto você solicita uma avaliação.', leadImage: '/images/ga-project-01.jpg', relatedServiceSlug: 'reparos-de-telhado',
    content: { intro: 'Uma mancha úmida ou goteira pode ter diferentes origens. Registre o que consegue observar com segurança e solicite uma avaliação do telhado.', sections: [
      { heading: 'Afaste objetos da área molhada', body: 'Proteja móveis e pertences se for seguro fazê-lo. Se houver água perto de instalações elétricas, não toque nos equipamentos molhados e afaste-se da área.' },
      { heading: 'Compartilhe quando o problema aparece', body: 'Conte se a infiltração ocorre durante a chuva e indique onde a água aparece. Fotos tiradas de um local seguro também podem ajudar na conversa inicial.' },
    ], faqs: [{ question: 'Posso subir no telhado para procurar o vazamento?', answer: 'Não suba em um telhado, especialmente durante ou após a chuva. Peça ajuda a profissionais que possam avaliar o local com segurança.' }] },
  },
  {
    slug: 'roof-flashing-basics', title: 'Rufos e encontros entre telhado e parede', category: 'Rufos', readTime: '3 min de leitura', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'our-doctor',
    excerpt: 'Os encontros entre telhados e paredes merecem atenção quando surgem sinais de umidade ou desgaste.', leadImage: '/images/ga-project-05.jpg', relatedServiceSlug: 'instalacao-de-rufos',
    content: { intro: 'Junções entre telhados e paredes são pontos que podem precisar de avaliação quando há sinais de entrada de água. A condição e o tipo de cobertura influenciam o serviço necessário.', sections: [
      { heading: 'Procure sinais visíveis no imóvel', body: 'Manchas de umidade próximas a uma junção ou acabamento danificado podem ser motivos para pedir uma avaliação profissional.' },
      { heading: 'Defina o serviço após a avaliação', body: 'A equipe verifica o local e conversa sobre o escopo, os materiais e o orçamento antes de iniciar o trabalho.' },
    ], faqs: [{ question: 'Como solicitar um orçamento para rufos?', answer: 'Entre em contato com a G.A Calhas para combinar uma avaliação do telhado e das junções.' }] },
  },
];
