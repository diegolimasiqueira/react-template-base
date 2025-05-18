# React Template Base (Privado)

Este é um **template base privado** para projetos React + TypeScript, seguindo a ADR-001 da Acelen, com arquitetura Feature-Sliced Design, Material UI, Vite, MSW e boas práticas modernas.

> **Atenção:** Este repositório é exclusivo para uso interno dos times de desenvolvimento da Acelen. Não compartilhe, distribua ou utilize este template fora do ambiente autorizado.

---

## Principais Tecnologias

- React 18+
- TypeScript 5.x
- Vite
- Material UI (MUI) 5.x
- React Router v6
- ESLint, Prettier
- Vitest
- MSW (Mock Service Worker)

## Arquitetura & Organização

- **Feature-Sliced Design**: Separação clara entre features, entidades, páginas e componentes compartilhados.
- **Componentização**: Todos os componentes globais (Sidebar, TopBar, Breadcrumb, Layout, etc) e de UI seguem padrão de reutilização e estilização local via `sx`.
- **Temas**: Suporte completo a dark/light, com gradientes, botões e textos consistentes em toda a aplicação.
- **Mocks**: MSW configurado para simulação de APIs, facilitando desenvolvimento sem backend.
- **Fluxo de autenticação**: Mock pronto para troca por API real.
- **Fluxo de reset de senha**: Componente `ResetPasswordDialog` componetizado, visual consistente, pronto para integração real.

## Estrutura do Projeto

```
/src
├── /app           # Configurações globais (tema, rotas, estilos)
├── /features      # Funcionalidades específicas
├── /entities      # Entidades do domínio
├── /shared        # Componentes e utilitários compartilhados
├── /pages         # Páginas da aplicação
├── /assets        # Recursos estáticos
├── /types         # Tipos globais
└── /tests         # Testes e mocks
```

## Como usar este template

1. **Clone o repositório** (acesso restrito):
   ```bash
   git clone <url-privada>
   cd template-base-react
   npm install
   npm run dev
   ```
2. Crie uma branch para sua feature.
3. Siga a estrutura e padrões já implementados.
4. Use os mocks e exemplos para acelerar o desenvolvimento.
5. Substitua o mock de autenticação e reset de senha pela API real quando necessário.

## Boas práticas e padrões

- **Estilização local**: Use `sx` para estilos locais em componentes.
- **Componentes globais**: Utilize e componetize sempre que possível.
- **Acessibilidade**: Todos os diálogos, botões e inputs seguem padrões do MUI.
- **Testes**: Use Vitest e MSW para garantir cobertura e mocks confiáveis.
- **Consistência visual**: Siga o padrão de temas, gradientes e botões já implementados.

## Fluxos implementados

- **Login**: Com mock, pronto para integração real.
- **Reset de senha**: Modal componetizado, visual idêntico ao login, pronto para integração real.
- **Rotas protegidas**: Exemplo de SPA com navegação segura.
- **Páginas de erro**: 404 e 500 já implementadas.

## Importante

- **Não utilize este template fora do ambiente autorizado.**
- **Não compartilhe credenciais, código ou exemplos deste repositório externamente.**
- Para dúvidas, consulte a ADR-001 ou o time de arquitetura.

---

## 🚀 Iniciando o Projeto

```bash
npm install
npm run dev
```

## Licença

Este projeto é proprietário da Acelen. Todos os direitos reservados. Uso estritamente interno.
