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
        image: "assets/problems/escola/escola1.png",
        description:
          "Formulário de matrícula com campos obrigatórios não marcados",
        heuristic: "Visibilidade do status do sistema",
        explanation:
          "O sistema deve sempre manter os usuários informados sobre o que está acontecendo, através de feedback adequado e em tempo razoável. Campos obrigatórios devem ser claramente marcados.",
        options: [ 
          "Visibilidade do status do sistema",
           "Consistência e padrões",
          "Estética e design minimalista"
        ]
      },
      {
        image: "assets/problems/escola/escola2.png",
        description:
          'Mensagens de erro com termos técnicos como "Erro 404 - Página não encontrada"',
        heuristic: "Compatibilidade entre o sistema e o mundo real",
        explanation:
          "O sistema deve falar a linguagem dos usuários, com palavras, frases e conceitos familiares ao usuário, em vez de termos orientados ao sistema. Mensagens de erro devem ser expressas em linguagem simples.",
        options: [ 
          "Compatibilidade entre o sistema e o mundo real",
          "Visibilidade do status do sistema",
          "Ajuda e documentação"
        ]
      },
      {
        image: "assets/problems/escola/escola3.png",
        description:
          'Envio de formulário com mensagens de erro pouco clara',
        heuristic: "Ajuda os usuários a reconhecer, diagnosticar e recuperar-se de erros",
        explanation:
          "Mesmo que um sistema possa ser usado sem documentação, é necessário que haja ajuda e documentação de fácil acesso. Mensagens de erro devem ser claras, concisas e oferecer sugestões construtivas para que o usuário possa corrigir o problema.",
        options: [ 
          "Ajuda os usuários a reconhecer, diagnosticar e recuperar-se de erros",
          "Compatibilidade entre o sistema e o mundo real",
          "Reconhecimento em vez de memorização"
        ]
      },
    ],
  },
  {
    id: "banco",
    name: "Banco Seguro",
    image: "assets/buildings/banco.png",
    problems: [
      {
        image: "assets/problems/banco/banco1.png",
        description:
          "O extrato bancário online apresenta dados financeiros com jargões técnicos complexos e abreviações que não são de fácil compreensão para o usuário comum.",
        heuristic: "Compatibilidade entre o sistema e o mundo real",
        explanation:
          "O sistema deve falar a linguagem dos usuários, com palavras, frases e conceitos familiares a eles, em vez de termos orientados ao sistema. Informações financeiras devem ser apresentadas de forma clara e compreensível, sem exigir conhecimento técnico aprofundado",
        options: [ 
          "Compatibilidade entre o sistema e o mundo real",
          "Estética e design minimalista",
          "Reconhecimento em vez de memorização"
        ]
      },
      {
        image: "assets/problems/banco/banco2.png",
        description:
          "Não há confirmação antes de realizar uma transferência bancária",
        heuristic: "Prevenção de erros",
        explanation:
          "Melhor do que boas mensagens de erro é um design cuidadoso que previne a ocorrência de problemas. Confirmações antes de ações críticas previnem erros.",
        options: [ 
          "Prevenção de erros",
          "Controle e liberdade do usuário",
          "Visibilidade do status do sistema"
        ]
      },
      {
        image: "assets/problems/banco/banco3.png",
        description:
          "A tela inicial do aplicativo bancário está sobrecarregada com informações desnecessárias, gráficos complexos e promoções em destaque, dificultando a localização do saldo ou das principais funcionalidades.",
        heuristic: "Estética e design minimalista",
        explanation:
          "Um sistema não devem conter informações irrelevantes ou raramente necessárias. Em um aplicativo bancário, cada informação extra compete com as unidades de informação relevantes, tornando mais difícil para o usuário encontrar o que é realmente importante, como o saldo da conta ou as opções de transação.",
        options: [ 
          "Estética e design minimalista",
          "Flexibilidade e eficiência de uso",
          "Visibilidade do status do sistema"
        ]
      },
    ],
  },
  {
    id: "loja",
    name: "Mega Loja",
    image: "assets/buildings/loja.png",
    problems: [
      {
        image: "assets/problems/loja/loja1.png",
        description: "Carrinho de compras escondido e sem contador de itens",
        heuristic: "Reconhecimento em vez de memorização",
        explanation:
          "Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis. O usuário não deve ter que lembrar de informações de uma parte do diálogo para outra.",
        options: [ 
          "Reconhecimento em vez de memorização",
          "Visibilidade do status do sistema",
          "Estética e design minimalista"
        ]
      },
      {
        image: "assets/problems/loja/loja2.png",
        description:
          "Formulário de cadastro pedindo informações desnecessárias",
        heuristic: "Flexibilidade e eficiência de uso", // Reavaliada para Flexibilidade e eficiência de uso
        explanation:
          "Aceleradores - não vistos pelo usuário novato - podem frequentemente acelerar a interação para o usuário experiente de forma que o sistema possa atender tanto a usuários inexperientes como experientes. Pedir informações desnecessárias adiciona passos e lentidão, prejudicando a eficiência.",
        options: [ 
          "Flexibilidade e eficiência de uso",
          "Estética e design minimalista",
          "Prevenção de erros"
        ]
      },
      {
        image: "assets/problems/loja/loja3.png",
        description:
          'Após adicionar um produto ao carrinho, não há um botão "Remover" visível ou uma forma fácil de alterar a quantidade sem precisar ir para uma página separada de edição do carrinho',
        heuristic: "Controle e liberdade do usuário",
        explanation:
          "Os usuários geralmente escolhem funções do sistema por engano ou mudam de ideia e precisarão de uma 'saída de emergência' claramente marcada para sair da situação indesejada. No carrinho de compras, o usuário deve ter total controle para adicionar, remover ou ajustar itens facilmente, sem impedimentos ou etapas extras.",
        options: [ 
          "Controle e liberdade do usuário",
          "Flexibilidade e eficiência de uso",
          "Visibilidade do status do sistema"
        ]
      },
    ],
  },
  {
    id: "hospital",
    name: "Hospital Saúde",
    image: "assets/buildings/hospital.png",
    problems: [
      {
        image: "assets/problems/teste.png",
        description: "Agendamento de consultas sem calendário visual",
        heuristic: "Reconhecimento em vez de memorização",
        explanation:
          "Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis. Um calendário visual ajuda mais do que campos de data.",
        options: [ 
          "Reconhecimento em vez de memorização",
          "Visibilidade do status do sistema",
          "Estética e design minimalista"
        ]
      },
      {
        image: "assets/problems/teste.png",
        description: "Termos médicos complexos sem explicação para pacientes",
        heuristic: "Compatibilidade entre o sistema e o mundo real",
        explanation:
          "O sistema deve falar a linguagem dos usuários, com palavras, frases e conceitos familiares ao usuário, em vez de termos orientados ao sistema.",
        options: [ 
          "Compatibilidade entre o sistema e o mundo real",
          "Ajuda e documentação",
          "Reconhecimento em vez de memorização"
        ]
      },
      {
        image: "assets/problems/teste.png",
        description: "Não há como desfazer o cancelamento de uma consulta",
        heuristic: "Controle e liberdade do usuário",
        explanation:
          'Usuários frequentemente escolhem funções do sistema por engano e precisam de uma "saída de emergência" claramente marcada para sair do estado indesejado sem ter que passar por diálogos extensos.',
        options: [ 
          "Controle e liberdade do usuário",
          "Prevenção de erros",
          "Visibilidade do status do sistema"
        ]
      },
    ],
  },
  {
    id: "restaurante",
    name: "Restaurante Sabor",
    image: "assets/buildings/restaurante.png",
    problems: [
      {
        image: "assets/problems/teste.png",
        description: "Menu digital sem fotos dos pratos",
        heuristic: "Reconhecimento em vez de memorização",
        explanation:
          "Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis. Fotos ajudam usuários a reconhecer pratos em vez de ter que lembrar descrições textuais.",
        options: [ 
          "Reconhecimento em vez de memorização",
          "Estética e design minimalista",
          "Compatibilidade entre o sistema e o mundo real"
        ]
      },
      {
        image: "assets/problems/teste.png",
        description: "Não há indicação clara de como fazer pedidos pelo site",
        heuristic: "Reconhecimento em vez de memorização",
        explanation:
          "Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis. O fluxo deve ser óbvio e intuitivo.",
        options: [ 
          "Reconhecimento em vez de memorização",
          "Visibilidade do status do sistema",
          "Ajuda e documentação"
        ]
      },
      {
        image: "assets/problems/teste.png",
        description:
          "Opções de dieta (vegetariano, vegano) escondidas em menus",
        heuristic: "Flexibilidade e eficiência de uso",
        explanation:
          "Aceleradores - não vistos pelo usuário novato - podem frequentemente acelerar a interação para o usuário experiente. Opções comuns devem ser facilmente acessíveis.",
        options: [ 
          "Flexibilidade e eficiência de uso",
          "Estética e design minimalista",
          "Reconhecimento em vez de memorização"
        ]
      },
    ],
  },
  {
    id: "aeroporto",
    name: "Aeroporto Global",
    image: "assets/buildings/aeroporto.png",
    problems: [
      {
        image: "assets/problems/teste.png",
        description: "Check-in online não mostra o próximo passo claramente",
        heuristic: "Visibilidade do status do sistema",
        explanation:
          "O sistema deve sempre manter os usuários informados sobre o que está acontecendo, através de feedback adequado e em tempo razoável.",
        options: [ 
          "Visibilidade do status do sistema",
          "Consistência e padrões",
          "Ajuda e documentação"
        ]
      },
      {
        image: "assets/problems/teste.png",
        description: 'Mensagens de erro sem solução ("Dados inválidos")',
        heuristic: "Ajuda e documentação",
        explanation:
          "Mesmo que seja melhor que o sistema possa ser usado sem documentação, pode ser necessário fornecer ajuda e documentação. Qualquer informação deve ser fácil de procurar, focada na tarefa do usuário e listar passos concretos a serem seguidos.",
        options: [ 
          "Ajuda e documentação",
          "Prevenção de erros",
          "Compatibilidade entre o sistema e o mundo real"
        ]
      },
      {
        image: "assets/problems/teste.png",
        description: "Processo de check-in com muitas etapas irreversíveis",
        heuristic: "Controle e liberdade do usuário",
        explanation:
          'Usuários frequentemente escolhem funções do sistema por engano e precisam de uma "saída de emergência" claramente marcada para sair do estado indesejado sem ter que passar por diálogos extensos.',
        options: [ 
          "Controle e liberdade do usuário",
          "Prevenção de erros",
          "Flexibilidade e eficiência de uso"
        ]
      },
    ],
  },
];

// Exportar os dados para uso no script principal
export { companies };