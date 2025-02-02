# Marvel API React App

## Descrição

Este é um projeto desenvolvido em **React** com **TypeScript**, que consome a [API da Marvel](https://developer.marvel.com/) para exibir informações sobre quadrinhos antigos da Marvel.

## Tecnologias Utilizadas

- React
- TypeScript
- Axios
- React Router

## Funcionalidades

- Listagem de quadrinhos antigos da Marvel
- Busca por quadrinhos
- Exibição de detalhes de um quadrinho
- Integração com a API da Marvel

## Requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- Node.js (versão recomendada LTS)
- Gerenciador de pacotes (NPM ou Yarn)
- Chaves da API da Marvel (public e private keys)

## Como Executar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/eumatheusvieira/marvel-comics.git
   cd seu-repositorio
   ```
2. Instale as dependências:
   ```sh
   npm install
   # ou
   yarn install
   ```
3. Crie um arquivo `.env` na raiz do projeto e adicione suas chaves da API da Marvel:
   ```env
   VITE_PUBLICKEY=SUA_CHAVE_PUBLICA
   VITE_PRIVATEKEY=SUA_CHAVE_PRIVADA
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   # ou
   yarn start
   ```
5. Acesse no navegador: `http://localhost:3000`

## Como Obter as Chaves da API Marvel

1. Acesse [Marvel Developer Portal](https://developer.marvel.com/)
2. Crie uma conta ou faça login
3. Gere suas chaves de API na seção "My Developer Account"

## Estrutura do Projeto

```
/src
  |-- components/      # Componentes reutilizáveis
  |-- assets/          # pages do projeto
  |-- main.tsx        # Ponto de entrada do aplicativo
```

## Melhorias Futuras

- Paginação na listagem de quadrinhos
- Melhor tratamento de erros
- Implementação de um sistema de favoritos

## Contribuição

Sinta-se à vontade para contribuir! Para isso:

1. Fork o repositório
2. Crie uma nova branch (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Envie para o repositório (`git push origin minha-feature`)
5. Abra um Pull Request

---

Feito com ❤️ por [Matheus Vieira](https://github.com/eumatheusvieira)!

