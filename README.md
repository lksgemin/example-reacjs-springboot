<<<<<<< HEAD
# Exemplo ReactJS + Spring Boot Java

Processo de instalação do ambiente.

* Levando em consideração que você tenha instalado o GIT, Node, Npm e Gradle.

## Clone o projeto

```sh
$ git clone https://github.com/lksgemin/exemplo-ReactJS.git
```

## Suba a aplicação (Spring Boot) via Gradle

```sh
$ cd exemplo-reactjs/api
$ gradle bootRun
```

## Instale as libs da view e inicie a aplicação

```sh
$ cd exemplo-reactjs/webapp
$ npm install
$ npm start
```

## Link de acesso a aplicação

[http://localhost:3000/](http://localhost:3000/)


## API

## Pessoa
```sh
* GET - /pessoas - buscaPessoas
* GET - /pessoas/{id} - buscaPessoaPorId
* PUT - /pessoas - alterarPessoa
* DELETE - /pessoas/{id} - desativarPessoa 
```