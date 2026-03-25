import { Story, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'transporte-mercadorias',
    title: 'Transporte de Mercadorias',
    description: 'Logística eficiente e segura para todo o tipo de carga industrial e comercial.',
    icon: 'Truck',
  },
  {
    id: 'materiais-construcao',
    title: 'Materiais de Construção',
    description: 'Fornecimento de inertes, cimentos e materiais estruturais de alta qualidade.',
    icon: 'HardHat',
  },
  {
    id: 'maquinas-pesadas',
    title: 'Aluguer de Máquinas',
    description: 'Frota moderna de escavadoras e camiões para projetos de qualquer dimensão.',
    icon: 'Construction',
  },
];

export const STORIES: Story[] = [
  {
    id: 'revolucao-contentor',
    category: 'Transportes',
    title: 'A Caixa que Encolheu o Mundo',
    hook: 'Sabia que, antes de 1956, carregar um navio demorava dias e exigia centenas de homens?',
    paragraphs: [
      'Malcom McLean, um empresário de transportes, teve uma ideia simples mas radical: em vez de carregar sacos e caixas individualmente, por que não colocar tudo dentro de uma grande caixa de metal que pudesse passar diretamente do camião para o navio?',
      'Esta inovação, o contentor marítimo, reduziu os custos de transporte em mais de 90% e permitiu a globalização tal como a conhecemos hoje. O que antes era um processo caótico e lento tornou-se uma coreografia logística de precisão milimétrica.',
      'Hoje, milhões destas caixas cruzam os oceanos a cada instante, garantindo que os produtos cheguem ao seu destino com uma eficiência que McLean mal poderia imaginar quando viu o seu primeiro navio partir de Nova Jersey.'
    ],
    closing: 'No transporte moderno, a padronização e a inovação são os motores que mantêm a economia global em movimento.',
    source: 'Inspirado na história de Malcom McLean (1956)',
    image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'betao-romano',
    category: 'Materiais',
    title: 'O Segredo Eterno do Panteão',
    hook: 'Como é que uma cúpula de betão sem qualquer reforço de aço se mantém intacta há quase 2000 anos?',
    paragraphs: [
      'Os antigos romanos eram mestres da engenharia de materiais. O seu segredo residia numa mistura única de cinza vulcânica (pozolana), cal e água do mar. Esta combinação não só era extremamente resistente, como tinha propriedades de "auto-cura" em contacto com a água.',
      'Ao contrário do betão moderno, que muitas vezes começa a degradar-se após algumas décadas devido à corrosão do aço interno, o betão romano torna-se mais forte com o tempo. A cúpula do Panteão em Roma continua a ser a maior cúpula de betão não armado do mundo.',
      'Recentemente, cientistas descobriram que pequenos "clastos de cal" na mistura permitiam que as fissuras se fechassem sozinhas quando a chuva penetrava na estrutura, reagindo para formar novo carbonato de cálcio.'
    ],
    closing: 'A durabilidade dos materiais de construção é a ponte que une o génio do passado à sustentabilidade do futuro.',
    source: 'Baseado em estudos arqueológicos e químicos recentes (2023)',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'estrada-gelo',
    category: 'Transportes',
    title: 'Caminhos de Cristal no Ártico',
    hook: 'Imagine conduzir um camião de 40 toneladas sobre um lago congelado, onde o único som é o estalar do gelo sob as rodas.',
    paragraphs: [
      'Nas regiões mais remotas do Canadá, as "estradas de gelo" são a única forma de transportar materiais de construção e combustível para minas isoladas. Estas estradas só existem durante dois meses por ano, quando as temperaturas descem abaixo dos -30°C.',
      'A logística aqui é uma questão de vida ou morte. Se o camião for demasiado rápido, cria uma onda de pressão que pode quebrar o gelo; se for demasiado lento, o peso pode fazer com que o gelo ceda. É um equilíbrio delicado entre física, coragem e precisão mecânica.',
      'Estes condutores são os heróis invisíveis que garantem que a infraestrutura possa ser mantida nos locais mais inóspitos do planeta, onde o asfalto é um luxo impossível.'
    ],
    closing: 'Onde a geografia impõe limites, o transporte especializado encontra soluções audazes.',
    source: 'Inspirado nas rotas logísticas do Alasca e Canadá',
    image: 'https://images.unsplash.com/photo-1518101645466-7795885ff8f8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'cimento-vivo',
    category: 'Materiais',
    title: 'O Cimento que "Respira"',
    hook: 'E se os edifícios pudessem reparar as suas próprias fendas como se fossem pele humana?',
    paragraphs: [
      'A biotecnologia está a revolucionar os materiais de construção com o desenvolvimento do "bio-betão". Este material contém bactérias dormentes que, ao serem expostas ao ar e à humidade através de uma fenda, despertam e produzem calcário.',
      'Este processo preenche naturalmente as fissuras, impedindo a entrada de água e a consequente degradação da estrutura. É uma fusão fascinante entre a biologia e a engenharia civil que promete triplicar a vida útil das nossas pontes e edifícios.',
      'Embora pareça ficção científica, este material já está a ser testado em projetos reais, reduzindo drasticamente os custos de manutenção e a pegada de carbono da indústria da construção.'
    ],
    closing: 'A inovação nos materiais de construção não é apenas sobre força, mas sobre inteligência e adaptação.',
    source: 'Inspirado em investigações da Universidade de Delft',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800',
  }
];
