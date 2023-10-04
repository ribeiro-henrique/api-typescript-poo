# API Futebol Clube ⚽

Bem-vindo à API de Times de Futebol, Partidas e Resultados! Esta API permite que você gerencie informações sobre times de futebol, partidas e placares. Ela foi construída em TypeScript, seguindo princípios de Programação Orientada a Objetos (POO) e utiliza o Sequelize como ORM para interagir com o banco de dados. Além disso, a API oferece autenticação via token JWT para proteger seus endpoints.

## Requisitos de Instalação

Para executar a aplicação, siga estas etapas:

1. Clone o repositório em seu ambiente local:

```bash
git clone git@github.com:ribeiro-henrique/api-typescript-poo.git
```
2. Navegue até a pasta do projeto:
   
```bash
cd <nome-da-pasta-do-projeto>
```
3. Inicie o Docker Compose:

```bash
docker-compose up -d
```
4. Aguarde até que todos os contêineres estejam em execução.

## Endpoints da API

A API oferece os seguintes endpoints:

- **GET /teams**: Retorna a lista de times de futebol.

- **GET /teams/:id**: Retorna informações sobre um time específico com base em seu ID.

- **POST /login**: Endpoint de autenticação. Envia um pedido POST com credenciais para obter um token JWT.

- **GET /login/role**: Retorna o papel (role) do usuário com base no token JWT fornecido.

- **GET /matches**: Retorna a lista de partidas de futebol.

- **GET /matches?inProgress=false**: Retorna a lista de partidas de futebol com a opção de filtrar apenas partidas concluídas.

- **PATCH /matches/:id/finish**: Finaliza uma partida com base no ID fornecido.

- **PATCH /matches/:id**: Atualiza informações de uma partida com base no ID fornecido.

- **GET /leaderboard/home**: Retorna os resultados dos jogos para a página inicial.

## Autenticação JWT

Para acessar os endpoints protegidos, você deve fornecer um token JWT válido no cabeçalho de autorização da solicitação. Use o endpoint `/login` para obter um token válido.

Exemplo de cabeçalho de autorização:

Authorization: Bearer <seu-token-jwt>

## Exemplo de Requisição

Aqui está um exemplo de solicitação para obter a lista de times de futebol:

```yaml
[
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  },
  {
    "id": 3,
    "teamName": "Botafogo"
  }
]
```
## Habilidades Utilizadas

A construção desta API envolveu várias habilidades, incluindo:

- Desenvolvimento de API com o framework Express.
- Implementação de arquitetura baseada em camadas.
- Criação de endpoints para operações CRUD.
- Configuração de banco de dados relacional usando MySQL e Sequelize.
- Realização de testes de integração.
- Aplicação de conceitos de Programação Orientada a Objetos (POO) em TypeScript.
- Utilização de TDD (Test Driven Development).
- Aplicação de princípios SOLID.
- Dockerização da aplicação.

## Testes

A aplicação é acompanhada por testes de integração que garantem seu funcionamento adequado. Foram utilizados os seguintes frameworks:

- Mocha
- Chai
- Sinon
- Chai-http



