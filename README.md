# Projeto 2 - Trilha Desenvolvimento FullStack ResTIC36

## Descrição do projeto

O objetivo é desenvolver uma aplicação web frontend que utilize o framework Angular e que seja visualmente agradável e responsiva, garantindo uma boa experiência do usuário em diferentes dispositivos, utilizando boas práticas de codificação, como separação de responsabilidades, comentários no código e organização de arquivos. Além disso deve incluir funcionalidades dinâmicas, como formulários e navegação, a utilização do Angular Material e do json-server para simular a troca de dados com uma api.

Para este projeto optei por criar uma aplicação que exiba na tela uma lista de filmes e que permita ao usuário adicionar, ver os detalhes ou remover filmes, além de ordená-los pelo nome ou nota.

## Instruções de como executar a aplicação

1. Primeiro, clone este repositório;
2. Abra com qualquer IDE;
3. Abra o terminal e rode o comando `npm install`;
4. Então, rode o comando `npm start`;
5. Uma janela abrirá no seu navegador e a aplicação será executada.

## Tecnologias utilizadas

- HTML;
- CSS;
- Typescript;
- Node;
- Angular;
- [Angular Hot Toast](https://ngxpert.github.io/hot-toast/);
- [Angular Material](https://material.angular.io/);
- [JSON Server](https://www.npmjs.com/package/json-server);
- O "mocking" de filmes no arquivo `db.json` foi baseado no [The Movie DB](https://www.themoviedb.org/).

## Possíveis melhorias futuras

Novas features que seriam interessantes no futuro:

- Incluir input de pesquisa para buscar filmes pelo nome;
- Otimizar o UI/UX do usuário ao transformar o formulário de filmes em uma janela modal;
- Criar outro CRUD que permita a cada usuário criar sua própria lista de filmes;
- Utilizar uma API pública real para substituir o "mocking" de banco de dados;
- Criar paginação e exibir um limitado número de filmes por página;
- Inclusão de um modo escuro.
