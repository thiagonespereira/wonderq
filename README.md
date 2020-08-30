# WonderQ

WonderQ is a broker that allows multiple producers to write to it, and multiple consumers to read from it.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

NodeJS - https://nodejs.org/en/download/releases/

Docker - https://www.docker.com/products/docker-desktop

### Installing

To run the development environment, simply run the two steps below:

- Install dependencies

```
npm install
```

- Run the containers

```
docker-compose up
```

Local database can be accessed using these credentials:

```
HOST: db
PORT: 5432
DATABASE: dev
USERNAME: dev
PASSWORD: dev
```

## Endpoints

### /ping

Endpoint used to verify if the server is alive. Requires API key to be completed.

Request body:
```
{
    "apiKey": "SECRET"
}
```

### /produce

Endpoint used to produce a new message on the queue. Requires API key to be completed.

Request body:
```
{
    "apiKey": "SECRET",
    "message": "Message text"
}
```

### /consume

Endpoint used to get and consume the first message on the queue. Requires API key to be completed.

Request body:
```
{
    "apiKey": "SECRET"
}
```

### /process/<messageId>

Endpoint used to get and consume the first message on the queue. Requires API key to be completed.

Request body:
```
{
    "apiKey": "SECRET"
}
```

## Running the tests

Automated tests are available in this repository.
To run the tests, run the step below:

```
npm test
```

### Running coding style check

ESLint is available on this repository
To run the check, run the step below:

```
npm run lint
```

## Deployment

This repository contain files for GitHub Actions CI/CD to deploy it directly to AWS Lambda.
You need to configure your AWS credentials under SECRETS.

## Built With

* [NodeJS](https://nodejs.org/en/download/releases/)
* [NPM](https://www.npmjs.com/)
* [Docker](https://www.docker.com/)
* [Serverless Framework](https://www.serverless.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [JEST](https://jestjs.io/)

## Authors

* **Thiago Lopes Pereira** - *Initial work* - [GitHub](https://github.com/thiagonespereira)
