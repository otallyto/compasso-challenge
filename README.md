# Compasso Challenge

## Prerequisites

This project requires NodeJS (version 14 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.14.14
v14.17.5
```

## Installation

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/otallyto/compasso-challenge.git
$ cd compasso-challenge
```

To install and set up the library, run:

```sh
$ npm install 
```

Or if you prefer using Yarn:

```sh
$ yarn install
```

## Usage

### Run database
```sh
$ docker run -d -p 8000:8000 amazon/dynamodb-local
```

### Serving the app

```sh
$ npm run offline
```

### Running the tests

```sh
$ npm test
```

### Deploying the app to AWS

```sh
$ npm run deploy
```
## Testing locally

### City

Create a city in the database:
```sh 
curl --request POST \
  --url http://localhost:3000/dev/city \
  --header 'Content-Type: application/json' \
  --data '{
	"nome": "Boa Vista",
	"estado": "Roraima"
}'
```
- find city by name:
```sh
curl --request GET \
  --url 'http://localhost:3000/dev/city?nome=Boa%20Vista'
```
- find a city by state:

```sh
curl --request GET \
  --url 'http://localhost:3000/dev/city?estado=Roraima'
```
### Client

- create a client in the database:
```sh
curl --request POST \
  --url http://localhost:3000/dev/client/ \
  --header 'Content-Type: application/json' \
  --data '{
	"nome": "Tállyto",
	"sobrenome": "Rodrigues",
	"sexo": "Masculino",
	"idade": 25,
	"nascimento": "06/04/1996",
	"cidade": "Curitiba - PR"
}'
```
- find client by name:
```sh
curl --request GET \
  --url 'http://localhost:3000/dev/client?nome=Tállyto'
```
- update client:
```sh
curl --request PUT \
  --url http://localhost:3000/dev/client/1 \
  --header 'Content-Type: application/json' \
  --data '{
    "nome": "Tállyto",
    "sobrenome": "Sousa Rodrigues",
    "sexo": "Masculino",
    "idade": 25,
    "nascimento": "06/04/1996",
    "cidade": "Curitiba - PR"
}'
```
- delete client:
```sh
curl --request DELETE \
  --url http://localhost:3000/dev/client/1
```