ADR-001: Padrão de Estrutura para Projetos React com TypeScript na Acelen
Status
Proposta
Contexto
Na Acelen, buscamos padronizar o desenvolvimento de aplicações front-end para garantir consistência, eficiência e escalabilidade em novos projetos React. Com o avanço das tecnologias front-end em 2025, nosso objetivo é adotar uma estrutura que maximize a eficiência no desenvolvimento e manutenção, utilize ferramentas modernas e facilite atualizações para versões futuras do React e outras dependências, assegurando transições suaves com mínimo risco de quebras.
A escolha por React com TypeScript reflete a necessidade de interfaces robustas, tipadas e fáceis de manter. Para a camada de UI, adotamos o Material UI (MUI) como design system, por sua maturidade, suporte a temas personalizados, acessibilidade e alinhamento com o Material Design. A estrutura organizacional deve promover clareza, suportar equipes de diferentes tamanhos e facilitar a integração com back-ends, mantendo a flexibilidade para diversos projetos. Este padrão será aplicado a todos os novos projetos React na Acelen, com repositórios gerenciados no Azure DevOps para controle de versão e automação de CI/CD.
Decisão
Estabelecemos o seguinte padrão para projetos React com TypeScript na Acelen, baseado no Feature-Sliced Design (FSD), com uma estrutura de pastas granular e estratégias para facilitar atualizações:
Estrutura de Pastas
/src
├── /App
│   ├── /Config        # Configurações globais (ex.: temas MUI, provedores de contexto)
│   │   ├── ThemeConfig.tsx
│   │   └── ContextProviders.tsx
│   ├── /Routes        # Definições de rotas (React Router)
│   │   ├── AppRoutes.tsx
│   │   └── RouteConstants.ts
│   └── /Styles        # Estilos globais (ex.: overrides MUI, CSS base)
│       ├── GlobalStyles.tsx
│       └── theme.ts
├── /Features
│   ├── /[FeatureName] # Ex.: Auth, Dashboard
│   │   ├── /Components
│   │   │   ├── FeatureComponent.tsx
│   │   │   └── SubFeatureComponent.tsx
│   │   ├── /Hooks
│   │   │   ├── useFeatureName.ts
│   │   │   └── useFeatureAction.ts
│   │   ├── /Services
│   │   │   ├── featureService.ts
│   │   │   └── featureApi.ts
│   │   ├── /Types
│   │   │   ├── FeatureTypes.ts
│   │   │   └── FeatureInterfaces.ts
│   │   ├── /Constants
│   │   │   └── featureConstants.ts
│   │   ├── /Pages
│   │   │   └── /[PageName]
│   │   │       ├── Index.tsx
│   │   │       └── /Components
│   │   │           ├── PageSpecificComponent.tsx
│   │   │           └── PageSubComponent.tsx
│   │   └── /Tests
│   │       ├── /Mocks
│   │       │   └── mockData.ts
│   │       └── feature.test.tsx
├── /Entities
│   ├── /[EntityName]  # Ex.: User, Product
│   │   ├── /Types
│   │   │   ├── EntityTypes.ts
│   │   │   └── EntityInterfaces.ts
│   │   └── /Utils
│   │       ├── entityUtils.ts
│   │       └── formatEntity.ts
├── /Shared
│   ├── /Components
│   │   ├── /UI
│   │   │   ├── CustomButton.tsx
│   │   │   └── CustomInput.tsx
│   │   └── /Layout
│   │       ├── AppHeader.tsx
│   │       └── AppSidebar.tsx
│   ├── /Hooks
│   │   ├── /Data
│   │   │   ├── useFetch.ts
│   │   │   └── useQueryData.ts
│   │   └── /UI
│   │       ├── useModal.ts
│   │       └── useToast.ts
│   ├── /Services
│   │   ├── apiClient.ts
│   │   └── httpService.ts
│   ├── /Utils
│   │   ├── formatUtils.ts
│   │   └── dateUtils.ts
│   ├── /Types
│   │   ├── SharedTypes.ts
│   │   └── SharedInterfaces.ts
│   └── /Constants
│       └── globalConstants.ts
├── /Pages
│   └── /[PageName]    # Ex.: Home, Profile (apenas páginas que não pertencem a features específicas)
│       ├── Index.tsx
│       └── /Components
│           ├── PageSpecificComponent.tsx
│           └── PageSubComponent.tsx
├── /Assets
│   ├── /Images
│   │   ├── logo.png
│   │   └── background.jpg
│   ├── /Fonts
│   │   ├── customFont.woff
│   │   └── customFont.woff2
│   └── /Icons
│       ├── iconHome.svg
│       └── iconProfile.svg
├── /Types
│   ├── GlobalTypes.ts
│   └── GlobalInterfaces.ts
└── /Tests
    ├── /Mocks
    │   ├── mockApi.ts
    │   └── mockData.ts
    └── Global.test.tsx

Tecnologias e Configurações

React 18.3+: Versão estável mais recente, com Concurrent Rendering e Suspense.
TypeScript 5.x: Configuração rigorosa (strict: true, noImplicitAny: true) para robustez.
Vite: Ferramenta de build e dev server, por sua velocidade e suporte a hot module replacement.
Material UI (MUI) 5.x: Design system para estilização e componentes, configurado com temas personalizados e suporte a acessibilidade.
React Router v6: Para roteamento, com API moderna.
ESLint + Prettier: Para padronização, com regras específicas para React, TypeScript e MUI.
Vitest: Para testes unitários, integrado com Vite.
Azure DevOps: Para repositórios, controle de versão e pipelines de CI/CD, com automação de linting, testes e deploy.
Husky + lint-staged: Para validação de código antes de commits.

Diretrizes para Material UI

Configuração de temas: Tema global definido em /app/config/theme.ts, utilizando createTheme do MUI, com personalizações para cores, tipografia e componentes (ex.: overrides para Button).
Componentes customizados: Componentes reutilizáveis baseados em MUI criados em /shared/components/ui/ (ex.: CustomButton).
Estilização: Uso de @mui/styles ou styled para estilização avançada, com preferência por sx prop para ajustes inline.
Acessibilidade: Seguir as diretrizes de acessibilidade do MUI, com testes de a11y integrados via @testing-library/react.
Atualizações: Monitorar releases do MUI 5.x e planejar upgrades com base nas notas de migração oficiais, usando testes para validar compatibilidade.

Diretrizes para Atualizações e Transições
Para facilitar upgrades do React, TypeScript, MUI e outras dependências:

Isolamento de dependências: Encapsular lógica em /features e /shared para reduzir impacto de mudanças em APIs.
Abstração de APIs: Cliente HTTP genérico em /shared/services/apiClient.ts (ex.: com axios) para centralizar configurações.
TypeScript flexível: Uso de genéricos e inferência em /types, /features/[feature]/types e /entities/[entidade]/types para minimizar quebras.
Testes robustos: Cobertura mínima de 80% para serviços, hooks e componentes, com Vitest e @testing-library/react.
Dependências versionadas: package.json com faixas conservadoras (ex.: ^18.3.0 para React, ^5.0.0 para MUI) e ferramentas como npm-check-updates para planejar upgrades.
Documentação de mudanças: Upgrades (ex.: MUI 5.x para 6.x) serão documentados em novos ADRs, com passos de migração e testes.
Migração incremental: Suporte a APIs legadas do React e MUI durante transições, usando feature flags se necessário.
Automação de CI/CD: Pipelines no Azure DevOps testam compatibilidade com versões candidatas (ex.: react@next, mui@next).

Diretrizes de Implementação

Serviços (endpoints):
Específicos: Em /features/[feature]/services/ (ex.: authService.ts).
Reutilizáveis: Em /shared/services/ (ex.: apiClient.ts).


Hooks:
Específicos: Em /features/[feature]/hooks/.
Reutilizáveis: Em /shared/hooks/data/ ou /shared/hooks/ui/.


Tipos:
Locais: Em /features/[feature]/types/ ou /entities/[entidade]/types/.
Globais: Em /shared/types/ ou /types/.


Performance:
Lazy loading com React.lazy e Suspense.
Uso de React.memo e useCallback para otimizar re-renderizações.


Testes:
Testes unitários para serviços, hooks e componentes, com foco em acessibilidade para MUI.
Mocks para APIs em /tests/mocks/.



Consequências
Positivas

Eficiência: MUI oferece componentes prontos, acelerando o desenvolvimento de ferramentas corporativas.
Modernidade: MUI 5.x, TypeScript e Vite alinham-se às práticas de 2025.
Facilidade de upgrades: Abstrações, testes e automação no Azure DevOps minimizam esforço em atualizações.
Acessibilidade: Suporte nativo a a11y, atendendo padrões corporativos.
Escalabilidade: Suporta projetos de diferentes tamanhos, com features autocontidas.

Negativas

Configuração inicial: Estrutura granular e MUI exigem setup inicial.
Curva de aprendizado: FSD, TypeScript e personalização do MUI podem demandar treinamento.
Bundle size: MUI pode aumentar o tamanho do bundle se não otimizado (ex.: sem tree-shaking).

Alternativas Consideradas

Estrutura por tipo (/components, /hooks, /services):
Prós: Simples para projetos pequenos.
Contras: Dificulta manutenção em projetos grandes e não suporta upgrades.
Por que descartado: Menos escalável e mais propenso a quebras.


Next.js:
Prós: Integração nativa de SSR/SSG e roteamento.
Contras: Complexidade desnecessária para projetos sem SSR.
Por que descartado: React puro com Vite é mais flexível.


Tailwind CSS:
Prós: Alta produtividade e bundle size reduzido.
Contras: Menos consistência visual e suporte a acessibilidade que MUI.
Por que descartado: MUI oferece componentes prontos e melhor suporte a temas corporativos.


Jest:
Prós: Ferramenta de teste consolidada.
Contras: Menos integrado com Vite que Vitest.
Por que descartado: Vitest é mais eficiente na nossa stack.



Justificativa
A estrutura baseada no Feature-Sliced Design foi escolhida por sua modularidade e clareza, ideal para projetos escaláveis na Acelen. O Material UI foi selecionado por sua robustez, suporte a temas personalizados e acessibilidade, alinhando-se aos objetivos de modernidade e eficiência para ferramentas corporativas. A integração com Azure DevOps garante controle de versão robusto e automação de CI/CD, facilitando colaboração e deploy. As diretrizes de atualizações (abstrações, testes, automação) minimizam riscos em upgrades do React, MUI e outras dependências. Este padrão será a base para todos os novos projetos React na Acelen, promovendo consistência, qualidade e preparo para o futuro.
Referências

Feature-Sliced Design Documentation
React 18.3 Documentation
TypeScript Handbook
Vite Documentation
Material UI Documentation (https://mui.com/material-ui/)
Azure DevOps Documentation