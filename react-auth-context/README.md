# Sistema de Autenticação com React e Context API

Este projeto foi desenvolvido como parte do Laboratório de Desenvolvimento Web da Fatec, referente à Aula 08 sobre React Context. O objetivo é demonstrar um sistema simples de autenticação de usuário utilizando a Context API do React para gerenciar o estado global de autenticação entre diferentes componentes.

## 🎯 Proposta

Desenvolver uma aplicação web com uma tela de login e uma área protegida (Dashboard) que só pode ser acessada por usuários autenticados. O projeto simula a autenticação sem a necessidade de um backend, focando na manipulação de estados locais e no compartilhamento de dados entre componentes com React Context.

## ✨ Funcionalidades Principais

* **Tela de Login**: Um formulário simples com campos de e-mail e senha[cite: 36]. Ao submeter, o usuário é considerado autenticado.
* **Contexto de Autenticação**: Um `AuthContext` que provê os dados do usuário e as funções de `login()` e `logout()` para toda a aplicação.
* **Página Protegida (Dashboard)**: Uma página acessível apenas para usuários logados, que exibe uma mensagem de boas-vindas e um botão para sair.
* **Rota Protegida**: Um componente (`ProtectedRoute`) que verifica o estado de autenticação e redireciona o usuário para a página de login caso ele não esteja autenticado.
* **Persistência de Sessão**: O estado de login é mantido mesmo após recarregar a página, utilizando o `localStorage` do navegador.

## 🛠️ Tecnologias Utilizadas

* **React** (com TypeScript)
* **Create React App** (ou Vite)
* **React Context API**: Para gerenciamento de estado global.
* **React Router DOM**: Para gerenciamento de rotas.
* **CSS**: Para estilização básica.

## 📂 Estrutura do Projeto

[cite_start]A estrutura de pastas e arquivos segue a sugestão fornecida na atividade:

```
/src
├── components
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   └── ProtectedRoute.tsx
├── context
│   └── AuthContext.tsx
├── App.tsx
├── index.css
└── index.tsx
```

## 🚀 Como Executar o Projeto

Siga as instruções abaixo para clonar e executar o projeto em sua máquina local.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/) (que inclui o npm)
* [Git](https://git-scm.com/)

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd nome-do-projeto
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```

5.  **Abra no navegador:**
    A aplicação estará disponível em `http://localhost:3000` (ou outra porta indicada no terminal).

## Autor

**Maurício Cepinho**

* **GitHub**: `https://github.com/seu-usuario`
* **LinkedIn**: `https://linkedin.com/in/seu-usuario`