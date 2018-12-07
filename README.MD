# TAG Avaliações
Teste técnico feito por mim ([Cleberson F. R. Junior](https://github.com/cleberson-dev)) como avaliação para a vaga de desenvolvedor front-end na TAG Livros.

## No que consistia?
Consiste em uma aplicação que realiza comparações entre notas de livros da própria TAG (disponibilizados em um JSON local) com as notas dos livros da GoodReads.
### Desafios
- Consumo da API da GoodReads presente em um servidor proxy dado pela própria TAG.
- Ordenação dos livros por edição (do mais recente ao mais antigo).
- Através do consumo da API, recuperar informações sobre a média de avaliações da GR de cada livro que contém na minha aplicação pelo ISBN da obra, e saber lidar quando não houver o dado pedido na API.
- Dar habilidade ao usuário clicar em uma comparação e ver mais informações detalhadas sobre cada livro (titulo, autor(a), curador(a), mês/ano de edição, número de páginas, numero de avaliações da TAG e da GR)
- Implementação ser feita com a framework React para a UI, e o controle de dados da aplicação ser feita com Redux.

## Instalação e configuração
Para conseguir ver a aplicação e utilizá-la, instale as dependências necessárias:

```bash
// Aplicação em si
> npm install

// Cliente
> cd client && npm install

// Servidor
> cd server && npm install
```

E rode a aplicação na pasta raiz da repo:
```bash
> npm run app
```


## Dependências

### Aplicação
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently) - Permitir a execução de mais de um comando concorrentemente

### Cliente
- [React](https://github.com/facebook/react) - UI Framework
- [Redux](https://github.com/reduxjs/redux) - Fluxo de dados
- [React-redux](https://github.com/reduxjs/react-redux) - Binding do redux para o react
- [Styled Components](https://github.com/styled-components/styled-components) - Estlização CSS in JS
- [Luxon](https://github.com/moment/luxon) - Análise e manipulação de datas
- [React Epic Spinners](https://www.npmjs.com/package/react-epic-spinners) - Componentes animados de carregamento para React
- [Axios](https://github.com/axios/axios) - Cliente HTTP

### Servidor
- [Express](https://github.com/expressjs/express) - Framework: Servidor Web
- [Node-fetch](https://github.com/bitinn/node-fetch) - Cliente HTTP
- [Nodemon](https://github.com/remy/nodemon) - Monitora qualquer mudança na aplicação e reinicia o processo.