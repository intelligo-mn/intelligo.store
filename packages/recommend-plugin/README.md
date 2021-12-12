# Vendure Plugin Template

This is a template for a plugin for the [Vendure e-commerce framework](https://www.vendure.io/).

It is intended for plugins which are to be **distributed as npm packages**, either publicly or privately. If you are building a one-off plugin for a specific project, it probably makes more sense to simply nest those plugins into the project source, as is demonstrated by the [real-world-vendure folder structure](https://github.com/vendure-ecommerce/real-world-vendure)

Further information on how Vendure plugins can be used can be found in the [vendure.io Plugins documentation](https://www.vendure.io/docs/plugins/).

## As scaffold

The scaffold in this repo can be used to populate a new plugin directory with the following bash command:

```shell
curl https://codeload.github.com/vendure-ecommerce/plugin-template/tar.gz/master | \tar -xz --strip=2 plugin-template-master/src
```

## e2e Testing

See `src/e2e` for details, run tests with:

```bash
yarn test
```

## GraphQL Codegen

This repository can automatically generate GraphQL types for use in the plugin code (see `src/e2e/plugin.e2e-spec.ts`).  To generate the types, ensure the development server is running, and use the command:

```bash
yarn dev:generate-types
```

## Linting

This repository uses [eslint](https://eslint.org/) & [Prettier](https://prettier.io/) for finding and fixing common code issues and formatting your code in a standard way. To identify and fix issues, use the command:

```bash
yarn lint:fix
```

## Admin UI

This repository also implements a basic Admin UI extension, which displays and allows editing of the `Example` entity.  These UI screens make use of the `BaseList`, `BaseDetail`, and `BaseResolver` classes, which are helpful for handling CRUD operations.

## Development Server

A development server is configured in the `dev-server` folder, using [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) to spin up a Postgres database, as well as a server and worker.  This is used to test the plugin during development.

To start the server, run:

```bash
yarn dev:run
```

To populate or reset the database, run the following command:

```bash
yarn dev:populate
```

To restart the server (only) after a change, use the following command:

```bash
yarn dev:restart
```

Note: The Docker containers must be rebuilt when updating dependencies.  Use the following command:

```bash
yarn dev:rebuild
```
