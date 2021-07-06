<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>


## Installation

```bash
$ npm install
```

## TypeORM configuration

### Define your prod database

For prod database configuration,
in [src/orm.config.ts](src/orm.config.ts) change your **url** connection:

```ts
if(process.env.NODE_ENV==='prod'){
  ormconfig = {
      ...
      url: 'YOUR CONNECTION URL',
      logging: false,
      synchronize: commonConf.SYNCRONIZE,
      entities: commonConf.ENTITIES,
      migrations: commonConf.MIGRATIONS,
      cli: commonConf.CLI,
      migrationsRun: commonConf.MIGRATIONS_RUN,
  };
}

```

### Migration data and schema

According [typeORM migration guide](https://github.com/typeorm/typeorm/blob/master/docs/migrations.md),
there are under [src/migrations/](src/migrations/) the scripts to create the database schema and after to insert data seed.
The scripts are automatically run in the first start up, and after anymore.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# build and run in production mode
$ set NODE_ENV=prod&& npm run build && npm run start:prod

# run production build with node
$ set NODE_ENV=prod&& node dist/main.js

# build production bundle with webpack
$ npm run webpack:prod

# run production bundle with node (not require node_modules folder)
$ node dist/bundle.js
```

> You can specify dev or prod NODE_ENV value (default is dev as indicated in [.env](.env))
> The webpack build bundle automatically is configured for prod env, and **can run without node_modules**

## Lint

```bash
# run lint
$ npm run lint

# fix lint issues
$ npm run lint:fix

```

## Debug

```bash
# run this and after you can execute debug task in VSCode
$ npm run start:debug

```

## Test

```bash
# unit tests
$ npm run test

# lint
$ npm run lint

# fix lint issues
$ npm run lint:fix

# test coverage of unit tests
$ npm run test:cov

# e2e tests with full app coverage report
$ npm run test:e2e

```
