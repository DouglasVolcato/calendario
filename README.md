- [Como rodar esse projeto](#deploy)
- [Utilizando pelo Docker](#utilizando-docker)
- [Utilizando em servidor local](#utilizando-local)
- [Participantes](#participantes)

<div id='deploy'/>

## Como rodar esse projeto
Para utilizar esse projeto, primeiro baixe-o em sua máquina.

Tendo isso feito, o mesmo poderá ser utilizado tanto em servicor local quanto pelo auxílio do Docker.

<div id='utilizando-docker'/>

## Utilizando pelo Docker
Para isso, primeiro certifique-se de ter o [Docker](https://www.docker.com) devidamente instalado em sua máquina. Após utilize os seguintes comandos:

> Para rodar o Backend, na raiz do projeto, digite os comandos em sequêcia.

```shell
cd server
docker build -f dockerfile.dev -t stylerhum/multi-client .
docker run -it -p 3002:3002 stylerhum/multi-client
```

> Após estar com o Backend rodando, faça o mesmo para o Frontend, abrindo um novo terminal na raiz do projeto.

```shell
cd client
docker build -f dockerfile.dev -t stylerhum/multi-client .
docker run -it -p 5002:5002 stylerhum/multi-client
```

Tendo isso concluído, a página da web poderá ser aberta em [http://localhost:5002](http://localhost:5002)

<div id='utilizando-local'/>

## Utilizando em servidor local

Caso opte por utilizar sem o Docker, primeiro será necessário instalar as dependências do projeto, tando do Frontend quanto do Backend:

> Na raiz do projeto, digite os seguintes comandos em sequência.

```shell
cd client
npm i
cd ..
cd server
npm i
cd ..
```

Após instaladas as dependências, na raiz do projeto, digite os seguintes comandos para rodar o Backend e, logo após, o Frontend

> Para rodar o Backend.

```shell
cd server
npm run build
npm run start
```

> Após rodar o Backend, abra outro terminal na raiz do projeto para rodar o Frontend.

```shell
cd client
npm run start
cd ..
```

Tendo isso concluído, a página da web poderá ser aberta em [http://localhost:5002](http://localhost:5002)

<div id='participantes'/>

## Participantes

- ### [Douglas Volcato](https://github.com/DouglasVolcato)
