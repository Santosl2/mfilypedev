---
title: "Como criar uma API sem Backend"
description: "Aqui, eu tento dar uma pequena solução simples de como criar um Backend Fake para testar suas aplicações Frontend"
created_at: 1650467282909
tags: tutorial,react,node
background: "https://i.imgur.com/lhAwkVW.png"
---

Talvez algum dos vários problemas que nós como desenvolvedores FrontEnd enfrentamos, é o fato de em alguns casos não termos um Backend pronto para testar nossas aplicações. Neste tutorial, espero ser o mais rápido e simples possível, ensinando como podemos resolver este problema de forma fácil e simples.

<br/>

Antes de iniciarmos, quero ressaltar que o nome para isso se chama _Mock API_, que basicamente significa API Falsa. No mundo da programação você irá ouvir bastante sobre dados 'mockados' (dados falsos/fictícios ) e, se estiver trabalhando com testes, ouvirá ainda mais.

## Iniciando a aplicação

Para inicializarmos, para não precisarmos de criar vários dados na mão, criaremos alguns registros de forma automática. Logo, criaremos então uma pasta com algum nome qualquer

Você pode criar utilizando o comando:

```bash
mkdir mock-api
cd mock-api
```

E dentro dessa pasta iremos iniciar o nosso package.json e também instalaremos as bibliotecas necessárias com o comando:

Yarn

```bash
yarn init -y
yarn add -D json-server faker-br
```

NPM

```bash
npm init -y
npm install -D json-server faker-br
```

<br/>

Agora, iremos criar nosso arquivo _index.js_ e nosso arquivo _db.json_ com o comando:

```bash
touch index.js db.json
```

## Criado o algorítimo

Agora, iremos criar o nosso algorítimo para gerar os dados fake. Neste meu caso, quero apenas nome, e-mail e senha, porém você pode adaptar de acordo com a sua necessidade.

1- Importaremos a biblioteca _faker-br_

```javascript
var faker = require("faker-br");
```

2- Criaremos uma variável onde nossos dados serão adicionados

```javascript
var fakeDb = { users: [] };
```

3- Agora, iremos fazer um loop, para adicionar 500 registros falsos dentro desse array de _users_

```javascript
for (let i = 1; i <= 500; i++) {
  fakeDb.users.push({
    id: i,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  });
}

console.log(JSON.stringify(fakeDb)); // output
```

4- Agora, iremos executar o arquivo _index.js_ com o node e o output (a saída que está vindo do console.log) iremos salvar no db.json, que criamos no primeiro módulo deste tutorial.

```bash
node index.js > db.json
```

Com isso, toda a LOG que vier do _index.js_, será escrito dentro do arquivo _db.json_

5- Após isso, iremos iniciar o nosso servidor fake com o Json-Server (instalado no primeiro módulo)

Yarn

```bash
yarn json-server --watch db.json --port 8000
```

NPM

```bash
npm json-server --watch db.json --port 8000
```

Teremos este output

![How create a fake api](https://imgur.com/IypoLce.png "Example Fake API")

Agora só acessarmos o `localhost:8000/users` e teremos todos os nossos registros

![Fake API Exemple date](https://imgur.com/JhtfWSd.png "Example Fake API")

## Paginação e filtro

Para efetuar uma paginação, basta apenas colocar os query params` _limit` e `_page`

Nesse caso, ficaria desta maneira

```bash
http://localhost:8000/users?_page=1&_limit=1
```

Para fazer o filtro, apenas coloca um query param com o filtro que queremos, neste meu caso, eu queria filtrar pelo ID 3

```
http://localhost:8000/users?id=3
```

![Json-server filter example](https://imgur.com/SwAIs68.png "Json-server filter example")

## Desfecho

Agora que você já sabe isso, não precisa mais usar a desculpinha "preciso do backend para finalizar" ehehe

Espero que ajude :)

## Código final

```javascript
var faker = require("faker-br");

var fakeDb = { users: [] };

for (let i = 1; i <= 500; i++) {
  fakeDb.users.push({
    id: i,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  });
}

console.log(JSON.stringify(fakeDb));
```
