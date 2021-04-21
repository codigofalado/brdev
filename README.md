# brdev

Aqui teremos o repositório de backend da plataforma BR.DEV.

BR.DEV será uma rede social para Devs e Divas, onde será fácil ensinar e aprender sobre Tecnologia da Informação. Será open-source e criaremos ao vivo no canal [Código Falado](https://www.twitch.tv/codigofalado).

Por enquanto, dá uma olhada no [Wiki](https://github.com/codigofalado/brdev/wiki) para entender o que iremos fazer aqui.

Confira também a [lista de tecnologias](https://github.com/codigofalado/brdev/wiki/Tech-Stack) que iremos usar.

## Instalando o projeto

1 - Instale as dependências:

```bash
$ npm install
```

2 - Renomeie o arquivo `.env-example` para `.env`
3 - Crie um banco de dados e atualize o `DATABASE_URL` do `.env` com a URL de conexão ao banco de dados criado.
4 - Para criar as tabelas, execute o migrations:

```bash
$ npx prisma migrate reset --preview-feature
```

Este comando irá criar todas as tabelas e adicionar os registros necessários no banco de dados.

## Rodando o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testando a parada

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Ajude o BR.DEV

O BR.DEV está sendo desenvolvido ao vivo no canal [Código Falado](https://www.twitch.tv/codigofalado).
Você pode patrocinar o projeto seguindo, divulgando, virando Subscriber na [Twitch](https://www.twitch.tv/codigofalado) ou doando dinheirinhos:

- Paypal -> [https://streamlabs.com/codigofalado](https://streamlabs.com/codigofalado)
- Picpay -> [https://picpay.me/codigofalado](https://picpay.me/codigofalado)
- PIX -> `fernando@br.dev`

## Siga-nos nas Redes Sociais

- Twitter - [@CodigoFalado](https://twitter.com/CodigoFalado)
- Instagram - [@CodigoFalado](https://instagram.com/CodigoFalado)
- YouTube - [@CodigoFaladoLiveCoding](https://youtube.com/CodigoFaladoLiveCoding)

## Entre em nosso Discord

Mais de 2000 Devs e Divas estão em nosso [Discord](https://discord.gg/3y4X9pm), cola lá: https://discord.gg/3y4X9pm

## Licença

BR.DEV usa a licença [MPL](LICENSE).
