# React Template Base

Este é um template base para projetos React com TypeScript, seguindo a ADR-001 da Acelen.

## Pré-requisitos

- Node.js 22.15.1 ou superior
- npm 11.4.0 ou superior

## Tecnologias Utilizadas

- React 18.3+
- TypeScript 5.x
- Vite
- Material UI (MUI) 5.x
- React Router v6
- ESLint 8.x
- Prettier
- Vitest

## Estrutura do Projeto

```
/src
├── /app
│   ├── /config        # Configurações globais
│   ├── /routes        # Definições de rotas
│   └── /styles        # Estilos globais
├── /features          # Funcionalidades específicas
├── /entities          # Entidades do domínio
├── /shared            # Componentes e utilitários compartilhados
├── /pages             # Páginas da aplicação
├── /assets            # Recursos estáticos
└── /types             # Tipos TypeScript globais
```

## Instalação

1. Instale as dependências:

```bash
npm install
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run lint` - Executa o linter
- `npm run test` - Executa os testes
- `npm run test:coverage` - Executa os testes com cobertura

## Material UI

O template utiliza Material UI (MUI) como biblioteca de componentes. A configuração do tema está em `src/app/config/theme.ts`.

### Configurações Padrão

- **Botões**: Sem transformação de texto, sem efeito ripple
- **Campos de Texto**: Variante outlined, largura total
- **Links**: Sublinhado apenas no hover
- **Scrollbar**: Estilizada para melhor usabilidade
- **Tipografia**: Fonte do sistema com fallbacks
- **Cores**: Paleta padrão do Material Design

### Uso de Componentes

```tsx
import { Button, TextField } from '@mui/material';

// Use os componentes do MUI diretamente
<Button variant="contained">Clique Aqui</Button>
<TextField label="Nome" />
```

### Customização

Para customizar o tema:

1. Edite `src/app/config/theme.ts`
2. Adicione novas configurações em `components`
3. Modifique a paleta de cores em `palette`
4. Ajuste a tipografia em `typography`

## Páginas Implementadas

- Login
- Erro 404 (Not Found)
- Erro 500 (Server Error)

## Testando o Template Base

### Autenticação Mock

O template inclui uma implementação mock de autenticação para facilitar o desenvolvimento e testes. **IMPORTANTE**: Esta implementação deve ser substituída pela autenticação real em produção.

#### Credenciais de Teste

- Email: `teste@acelen.com`
- Senha: `123456`

#### Arquivos a serem Substituídos

- `src/shared/services/authService.ts` - Implemente a autenticação real
- `src/shared/components/ui/ProtectedRoute.tsx` - Ajuste conforme necessário

### Fluxo de Teste

1. **Login**

   - Acesse a página de login
   - Use as credenciais de teste acima
   - Após login bem-sucedido, você será redirecionado para a página inicial

2. **Rotas Protegidas**

   - Todas as rotas (exceto login e páginas de erro) são protegidas
   - Tentativas de acesso sem autenticação redirecionam para o login

3. **Páginas de Erro**
   - Acesse uma URL inexistente para ver a página 404
   - Para testar a página 500, force um erro no código

## Desenvolvimento

1. Crie uma nova branch para sua feature
2. Faça suas alterações
3. Execute os testes
4. Faça o commit seguindo o padrão de commits
5. Crie um Pull Request

### Removendo o Mock

Ao iniciar o desenvolvimento real:

1. Remova ou substitua o arquivo `src/shared/services/authService.ts`
2. Implemente a autenticação real usando sua API
3. Atualize o `ProtectedRoute` conforme necessário
4. Remova as credenciais de teste do código
5. Implemente um sistema de gerenciamento de estado adequado (ex: Redux, Context API)

## Licença

Este projeto é proprietário da Acelen. Todos os direitos reservados.
