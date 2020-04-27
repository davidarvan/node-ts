# TypeScript Node/Express/SASS Template

Forked from the [TypeScript-Node-Starter](https://github.com/microsoft/TypeScript-Node-Starter) and stripped down, removing the opinionated packages; ~~mongo, pug, async, bcrypt, bluebird, compression, nodemailer, passport, bootstrap, jquery,~~ etc and services Azure, Sendgrid, etc.


## Usage

Clone the repository, or, fork it, or,

```shell
git clone https://github.com/davidarvan/node-ts.git MY_PROJECT_NAME
```

Install dependencies

```shell
cd MY_PROJECT_NAME
npm install
```

## Run in development

```shell
npm run watch
```

Open [`http://localhost:3000`](http://localhost:3000) in your browser.


## Pre Deployment

It's required to convert the TypeScript to Javascript and SASS to CSS to be run in a Node environment. Build the typescript and sass by running the following before deploying to a live staging/production/etc server.

```shell
npm run build
```

## Scripts

| Npm Script | Description |
| --- | --- |
| `start`                   | Start and serve the built server. |
| `build`                   | Full build for deployment |
| `build:*`                 | Build/compile the various components. |
| `lint`                    | Runs ESLint on project |
| `test`                    | Runs tests using Jest |
| `watch`                   | Runs all watch tasks (TypeScript, Sass, Node). |
| `watch:*`                 | Run the various components in 'watch' mode. |

## License

Carries the same license as set by Microsoft in the original.

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
