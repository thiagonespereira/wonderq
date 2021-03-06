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

- Stop the containers

```
docker-compose down
```

- Remove the containers (this will recreate the database from scratch next time you run the containers)

```
docker-compose down -v
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
#### 200

Response body:
```
pong
```

#### 403 Forbidden

Response body:
```
No api key.
```

#### 401 Unauthorized

Response body:
```
Invalid api key.
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

#### 200

Response body:
```
{
    "status": "ok",
    "message": {
        "id": 1,
        "message": "Message text",
        "reserved": false,
        "processed": false,
        "createdAt": "2020-08-30T23:40:17.396Z",
        "updatedAt": null
    }
}
```

#### 400 Bad Request

Response body:
```
No message information.
```

### /consume

Endpoint used to get and consume the first message on the queue. Requires API key to be completed.

Request body:
```
{
    "apiKey": "SECRET"
}
```

#### 200

Response body:
```
{
    "status": "ok",
    "message": {
        "reserved": true,
        "updatedAt": "2020-08-30T23:41:02.331Z",
        "id": 1,
        "message": "Message text",
        "processed": false,
        "createdAt": "2020-08-30T23:40:17.396Z"
    }
}
```

#### 404 Not Found

Response body:
```
No messages in queue.
```

### /process/*messageId*

Endpoint used to get and consume the first message on the queue. Requires API key to be completed.

Request parameter (on URL):
```
messageId
```

Request body:
```
{
    "apiKey": "SECRET"
}
```

#### 200

Response body:
```
{
    "status": "ok",
    "message": {
        "processed": true,
        "updatedAt": "2020-08-30T23:42:25.297Z",
        "id": 1,
        "message": "Message text",
        "reserved": true,
        "createdAt": "2020-08-30T23:40:17.396Z"
    }
}
```

#### 404 Not Found

Response body:
```
No messages with this id.
```

#### 403 Forbidden

Response body:
```
Message already processed.
```

#### 400 Bad Request

Response body:
```
Message not reserved. Cannot be processed.
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
