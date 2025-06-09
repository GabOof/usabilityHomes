# Jogo Usability Homes

## 📝 Descrição

**Usability Homes** é um jogo interativo do tipo _point and click_ que ensina princípios de usabilidade de forma divertida. O jogador atua como consultor de usabilidade, ajudando empresas a resolver problemas em seus sites/sistemas com base nas 10 Heurísticas de Nielsen.

## 🎮 Como Jogar

1. **Empresas com Problemas**: Seis empresas de diferentes ramos aparecerão na tela.
2. **Alertas Aleatórios**: Fique atento aos prédios que acendem o sinal de alerta (!) - eles aparecem aleatoriamente.
3. **Sequência de Problemas**: Cada empresa possui 3 problemas sequenciais:
   - 1ª pergunta: 40 segundos para responder
   - 2ª pergunta: 30 segundos para responder
   - 3ª pergunta: 20 segundos para responder
4. **Resolução**: Clique no prédio com alerta para visualizar o problema de usabilidade.
5. **Diagnóstico**: Escolha qual heurística de Nielsen está sendo violada.
6. **Pontuação**:
   - Respostas corretas: +100 pontos
   - Respostas erradas: −200 pontos
7. **Feedback**: Após cada resposta, você recebe uma explicação detalhada.
8. **Controle de Fluxo**: Use o botão "Próximo" para avançar na sequência de problemas.
9. **Objetivo**: Alcance 1000 pontos OU resolva todos os problemas das empresas para vencer.
10. **Tempo Total**: O tempo decorrido é exibido como informação adicional.

## 🏆 Final do Jogo

Ao terminar, você verá:

- Pontuação final
- Resumo de desempenho por empresa (acertos/total de problemas)
- Opção para jogar novamente ou sair

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Tailwind CSS (para estilização)
- Design Responsivo
- Google Fonts (Poppins)

## 📂 Estrutura de Arquivos Atualizada

```

/usability-homes/
├── index.html # Tela inicial do jogo
├── jogo.html # Tela principal do jogo
├── style.css # Estilos do jogo
├── script.js # Lógica principal do jogo (módulo ES6)
├── data/
│ └── problems.js # Dados das empresas e problemas (export como módulo)
├── assets/
│ ├── logo/ # Logo do jogo
│ ├── buildings/ # Imagens dos prédios das empresas
│ └── problems/ # Screenshots dos problemas de usabilidade (organizados por empresa)
└── README.md # Documentação

```

## 🚀 Como Executar

1. Clone o repositório ou baixe os arquivos
2. Abra o projeto em um servidor local (necessário devido aos módulos ES6)
   - Recomendado: extensão **Live Server** no VS Code
3. Acesse o `index.html` no navegador

## ✨ Recursos Implementados

- Sistema de pontuação dinâmico
- Temporizador adaptável por nível de problema (40s, 30s, 20s)
- Sequência de 3 problemas por empresa
- Feedback imediato com explicações detalhadas
- Controle de fluxo com botão "Próximo"
- Sistema de alertas aleatórios
- Resumo de desempenho por empresa no final
- Animações e efeitos visuais
- Design responsivo
- Modal de fim de jogo com opções de reinício
- Persistência de estado durante a sequência de problemas

## 📚 Heurísticas de Nielsen Abordadas

O jogo cobre todas as 10 heurísticas com exemplos práticos:

1. Visibilidade do status do sistema
2. Compatibilidade entre o sistema e o mundo real
3. Controle e liberdade do usuário
4. Consistência e padrões
5. Prevenção de erros
6. Reconhecimento em vez de memorização
7. Flexibilidade e eficiência de uso
8. Estética e design minimalista
9. Ajude os usuários a reconhecer, diagnosticar e recuperar-se de erros
10. Ajuda e documentação

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar issues
- Sugerir melhorias
- Adicionar novos problemas e empresas
- Propor melhorias na jogabilidade

## 👥 Autores

Gabrielle de Oliveira Fonseca - 0072379

Mariana Moreira - 0076895

---

Desenvolvido com ♥ para o aprendizado de princípios de usabilidade e experiência do usuário.
