# Jogo Usability Homes

## 📝 Descrição

**Usability Homes** é um jogo interativo do tipo _point and click_ que ensina princípios de usabilidade de forma divertida. O jogador atua como consultor de usabilidade, ajudando empresas a resolver problemas em seus sites/sistemas com base nas 10 Heurísticas de Nielsen.

## 🎮 Como Jogar

1. **Empresas com Problemas**: Seis empresas de diferentes ramos aparecerão na tela.
2. **Alertas**: Fique atento aos prédios que acendem o sinal de alerta (!).
3. **Resolução**: Clique no prédio com alerta para visualizar o problema de usabilidade.
4. **Diagnóstico**: Escolha qual heurística de Nielsen está sendo violada.
5. **Pontuação**:

   - Respostas corretas: +100 pontos
   - Respostas erradas: −200 pontos

6. **Tempo de Resposta**: Você tem 30 segundos para responder cada problema.
7. **Leitura Após Resposta**: Após responder (ou esgotar o tempo), você pode ler a explicação e clicar no botão **"Fechar"** para voltar ao jogo no seu ritmo.
8. **Objetivo**: Alcance 1000 pontos para vencer o jogo.
9. **Tempo de Jogo**: O tempo total decorrido é exibido apenas como informação.

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Design Responsivo

## 📂 Estrutura de Arquivos

```
/usability-homes/
├── index.html          # Página principal do jogo
├── style.css           # Estilos do jogo
├── script.js           # Lógica principal do jogo
├── data/
│   └── problems.js     # Dados das empresas e problemas
├── assets/
│   ├── buildings/      # Imagens dos prédios das empresas
│   └── problems/       # Screenshots dos problemas de usabilidade
└── README.md           # Este arquivo
```

## 🚀 Como Executar

1. Clone o repositório ou baixe os arquivos.
2. Abra o projeto em um servidor local (recomendado: extensão **Live Server** no VS Code).
3. Acesse o `index.html` no navegador.

> ⚠️ **Importante**: O jogo deve ser executado em um servidor local devido ao uso de módulos JavaScript (ES6).

## ✨ Recursos Implementados

- Sistema de pontuação com feedback imediato
- Temporizador por pergunta (30 segundos)
- Tempo total decorrido exibido na interface
- Seleção aleatória de problemas e opções de resposta
- Explicação detalhada da resposta após cada tentativa
- **Botão "Fechar"** após responder, permitindo o jogador permanecer na tela para leitura
- Animações e efeitos visuais
- Design responsivo para diferentes tamanhos de tela
- Modal de fim de jogo ao atingir 1000 pontos
- Opção de reinício após o fim do jogo

## 📚 Heurísticas de Nielsen Utilizadas

O jogo aborda as 10 heurísticas de usabilidade de Jakob Nielsen:

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

## 📌 Personalização

Você pode facilmente:

- Adicionar mais empresas e problemas editando `data/problems.js`
- Alterar o tempo para responder cada problema no `script.js`
- Adicionar novas imagens na pasta `assets/problems/`
- Ajustar o estilo visual em `style.css`

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar issues
- Sugerir melhorias
- Adicionar novos problemas e empresas

## 👥 Autores

Gabrielle de Oliveira Fonseca - 0072379
Mariana Moreira - 0076895

---

Desenvolvido com ♥ para o aprendizado de princípios de usabilidade.
