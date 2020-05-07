# Learning TypeScript

Simple project for learning how to build JS projects using [TypeScript](https://www.typescriptlang.org/).

This project is just a simple CLI for printing information about NBA players.

## What this project uses

* Typescript for generating JS file with dependencies and JS file with no dependencies
* [Node.js](https://nodejs.org/)
* Typescript `@types`
* [webpack](https://webpack.js.org/)
* Docker
* [node-fetch](https://www.npmjs.com/package/node-fetch)
* [Commander.js](https://www.npmjs.com/package/commander)

## First step to run this project

```
$ npm install
```

## Building a JS file for node.js

The following command will generate a `build/index.js` file:

```
$ npm run build
```

Then you can run the file with `node`:

```
$ node build/index.js
```

If we are going to distribute the file as is, we'll need to run `npm install` first.

## Building bundle file with no dependencies

This command will generate a bundle file:

```
$ npm run bundle
```

Now, we have a new file `dist/index.js` which can be executed with no dependencies

## How to use the CLI

```
$ node dist/index.js --help
```

## How to build a Docker image

```
$ docker . -f Dockerfile -t nbacli:v1 --no-cache
```

## How to run the cli with Docker

```
$ docker run --rm -ti nbacli:v1
```

## Project from scratch and dependencies

Create a project from scratch:

```
$ npm init
```

Installing a dependency:

```
npm i --save <package-name>
```

Installing a dev dependency:

```
npm i --save-dev <package-name>
```

Installing type definitions for specific package:

```
npm install --save @types/<package-name>
```

## Security

Checking with packages are outdated:

```
$ npm outdated --prod
```

Checking packages with security issues:

```
$ npm audit
```

Update packages with security issues:

```
$ npm update <package-name> --depth 4
```
