// Heurísticas de Nielsen
const heuristics = [
  "Visibilidade do status do sistema",
  "Compatibilidade entre o sistema e o mundo real",
  "Controle e liberdade do usuário",
  "Consistência e padrões",
  "Prevenção de erros",
  "Reconhecimento em vez de memorização",
  "Flexibilidade e eficiência de uso",
  "Estética e design minimalista",
  "Ajuda os usuários a reconhecer, diagnosticar e recuperar-se de erros",
  "Ajuda e documentação",
];

// Dados das empresas e problemas
const companies = [
  {
    id: "escola",
    name: "Escola Modelo",
    image: "assets/buildings/escola.png",
    problems: [
      {
        image: "assets/problems/escola1.jpg",
        description:
          "Formulário de matrícula com campos obrigatórios não marcados",
        heuristic: "Visibilidade do status do sistema",
        explanation:
          "O sistema deve sempre manter os usuários informados sobre o que está acontecendo, através de feedback adequado e em tempo razoável. Campos obrigatórios devem ser claramente marcados.",
      },
      {
        image: "assets/problems/escola2.jpg",
        description:
          'Botão de "Enviar" do formulário fica desabilitado sem explicação',
        heuristic: "Controle e liberdade do usuário",
        explanation:
          'Usuários frequentemente escolhem funções do sistema por engano e precisam de uma "saída de emergência" claramente marcada para sair do estado indesejado sem ter que passar por diálogos extensos.',
      },
      {
        image: "assets/problems/escola3.jpg",
        description:
          'Mensagens de erro com termos técnicos como "Erro 404 - Página não encontrada"',
        heuristic: "Compatibilidade entre o sistema e o mundo real",
        explanation:
          "O sistema deve falar a linguagem dos usuários, com palavras, frases e conceitos familiares ao usuário, em vez de termos orientados ao sistema. Mensagens de erro devem ser expressas em linguagem simples.",
      },
    ],
  },
  {
    id: "banco",
    name: "Banco Seguro",
    image: "assets/buildings/banco.png",
    problems: [
      {
        image: "assets/problems/banco1.jpg",
        description:
          "Processo de transferência com muitas etapas sem indicador de progresso",
        heuristic: "Visibilidade do status do sistema",
        explanation:
          "O sistema deve sempre manter os usuários informados sobre o que está acontecendo, através de feedback adequado e em tempo razoável. Barras de progresso ajudam usuários a entender em que etapa estão.",
      },
      {
        image: "assets/problems/banco2.jpg",
        description:
          "Não há confirmação antes de realizar uma transferência bancária",
        heuristic: "Prevenção de erros",
        explanation:
          "Melhor do que boas mensagens de erro é um design cuidadoso que previne a ocorrência de problemas. Confirmações antes de ações críticas previnem erros.",
      },
      {
        image: "assets/problems/banco3.jpg",
        description:
          "Layout diferente entre versão desktop e mobile sem necessidade",
        heuristic: "Consistência e padrões",
        explanation:
          "Os usuários não devem ter que se perguntar se palavras, situações ou ações diferentes significam a mesma coisa. Siga as convenções da plataforma.",
      },
    ],
  },
  {
    id: "loja",
    name: "Mega Loja",
    image: "assets/buildings/loja.png",
    problems: [
      {
        image: "assets/problems/loja1.jpg",
        description: "Carrinho de compras escondido e sem contador de itens",
        heuristic: "Reconhecimento em vez de memorização",
        explanation:
          "Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis. O usuário não deve ter que lembrar de informações de uma parte do diálogo para outra.",
      },
      {
        image: "assets/problems/loja2.jpg",
        description:
          "Formulário de cadastro pedindo informações desnecessárias",
        heuristic: "Flexibilidade e eficiência de uso",
        explanation:
          "Aceleradores - não vistos pelo usuário novato - podem frequentemente acelerar a interação para o usuário experiente de forma que o sistema possa atender tanto a usuários inexperientes como experientes.",
      },
      {
        image: "assets/problems/loja3.jpg",
        description:
          'Botões "Comprar" com cores diferentes em páginas diferentes',
        heuristic: "Consistência e padrões",
        explanation:
          "Os usuários não devem ter que se perguntar se palavras, situações ou ações diferentes significam a mesma coisa. Mantenha padrões consistentes.",
      },
    ],
  },
  {
    id: "hospital",
    name: "Hospital Saúde",
    image: "assets/buildings/hospital.png",
    problems: [
      {
        image: "assets/problems/hospital1.jpg",
        description: "Agendamento de consultas sem calendário visual",
        heuristic: "Reconhecimento em vez de memorização",
        explanation:
          "Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis. Um calendário visual ajuda mais do que campos de data.",
      },
      {
        image: "assets/problems/hospital2.jpg",
        description: "Termos médicos complexos sem explicação para pacientes",
        heuristic: "Compatibilidade entre o sistema e o mundo real",
        explanation:
          "O sistema deve falar a linguagem dos usuários, com palavras, frases e conceitos familiares ao usuário, em vez de termos orientados ao sistema.",
      },
      {
        image: "assets/problems/hospital3.jpg",
        description: "Não há como desfazer o cancelamento de uma consulta",
        heuristic: "Controle e liberdade do usuário",
        explanation:
          'Usuários frequentemente escolhem funções do sistema por engano e precisam de uma "saída de emergência" claramente marcada para sair do estado indesejado sem ter que passar por diálogos extensos.',
      },
    ],
  },
  {
    id: "restaurante",
    name: "Restaurante Sabor",
    image: "assets/buildings/restaurante.png",
    problems: [
      {
        image: "assets/problems/restaurante1.jpg",
        description: "Menu digital sem fotos dos pratos",
        heuristic: "Reconhecimento em vez de memorização",
        explanation:
          "Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis. Fotos ajudam usuários a reconhecer pratos em vez de ter que lembrar descrições textuais.",
      },
      {
        image: "assets/problems/restaurante2.jpg",
        description: "Não há indicação clara de como fazer pedidos pelo site",
        heuristic: "Reconhecimento em vez de memorização",
        explanation:
          "Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis. O fluxo deve ser óbvio e intuitivo.",
      },
      {
        image: "assets/problems/restaurante3.jpg",
        description:
          "Opções de dieta (vegetariano, vegano) escondidas em menus",
        heuristic: "Flexibilidade e eficiência de uso",
        explanation:
          "Aceleradores - não vistos pelo usuário novato - podem frequentemente acelerar a interação para o usuário experiente. Opções comuns devem ser facilmente acessíveis.",
      },
    ],
  },
  {
    id: "aeroporto",
    name: "Aeroporto Global",
    image: "assets/buildings/aeroporto.png",
    problems: [
      {
        image: "assets/problems/aeroporto1.jpg",
        description: "Check-in online não mostra o próximo passo claramente",
        heuristic: "Visibilidade do status do sistema",
        explanation:
          "O sistema deve sempre manter os usuários informados sobre o que está acontecendo, através de feedback adequado e em tempo razoável.",
      },
      {
        image: "assets/problems/aeroporto2.jpg",
        description: 'Mensagens de erro sem solução ("Dados inválidos")',
        heuristic: "Ajuda e documentação",
        explanation:
          "Mesmo que seja melhor que o sistema possa ser usado sem documentação, pode ser necessário fornecer ajuda e documentação. Qualquer informação deve ser fácil de procurar, focada na tarefa do usuário e listar passos concretos a serem seguidos.",
      },
      {
        image: "assets/problems/aeroporto3.jpg",
        description: "Processo de check-in com muitas etapas irreversíveis",
        heuristic: "Controle e liberdade do usuário",
        explanation:
          'Usuários frequentemente escolhem funções do sistema por engano e precisam de uma "saída de emergência" claramente marcada para sair do estado indesejado sem ter que passar por diálogos extensos.',
      },
    ],
  },
];

// Exportar os dados para uso no script principal
export { companies, heuristics };
