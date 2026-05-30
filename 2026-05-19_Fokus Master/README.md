markdown_content = """# Fokus - Pomodoro ⏳

O **Fokus** é uma aplicação de gerenciamento de tempo baseada na técnica Pomodoro, projetada para otimizar a produtividade ao alternar entre períodos de trabalho focado e descansos.

## 🚀 Funcionalidades

- **Três Modos de Operação**:
  - **Foco**: Ciclo de 25 minutos para concentração total.
  - **Descanso Curto**: Pausa de 5 minutos para relaxar.
  - **Descanso Longo**: Pausa de 15 minutos para recuperação profunda.
- **Interface Dinâmica**: As cores de fundo e as imagens mudam automaticamente conforme o contexto selecionado (Foco, Curto ou Longo).
- **Controle de Áudio**:
  - Opção de música de fundo relaxante.
  - Alertas sonoros para início, pausa e finalização dos ciclos.
- **Temporizador Interativo**: Cronômetro regressivo com exibição em tempo real na tela.
- **Design Responsivo**: Adaptado para diferentes tamanhos de ecrã (Desktop, Tablet e Mobile).

## 📂 Estrutura do Projeto

```text
.
├── imagens/             # Ativos visuais (logos, backgrounds, ícones)
│   ├── descanso-curto.png
│   ├── descanso-longo.png
│   ├── foco.png
│   ├── logo.png
│   └── ...
├── sons/                # Efeitos sonoros e música de fundo
│   ├── beep.mp3
│   ├── luna-rise-part-one.mp3
│   └── ...
├── index.html           # Estrutura semântica da aplicação
├── styles.css           # Estilização e temas dinâmicos
└── script.js            # Lógica do cronômetro e interatividade