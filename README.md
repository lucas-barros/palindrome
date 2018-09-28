# Palindrome tester

## Technologies
- Nodejs
- Express node framework
- Vue javascript framework
- Yarn for dependency management
- Sass for stylesheets
- Bulma CSS framework
- Browsesync for synchronized browser testing
- Webpack for compiling assets
- Jest for unit testing

## Requirements
- Node.js >=9.10.0
- Yarn

## Installation
1) Clone this repo

2) Install dependencies
```
yarn install
```
3) Build assets
```
yarn build:production
```
4) Start the server
```
yarn start
```
5) Access application at http://localhost:3000

## Development
Start browsersync to start development
```
yarn watch
```

Access application at http://localhost:3001

## Test
```
yarn test
```

## API Endpoints

- GET - /api/:string

This endpoint returns status code 200 if string is a palindrome and status code 400 if it is not.
