<div align="center">
  <a href="https://intelligo.dev" target="_blank">
  <picture>
    <img src="https://github.com/intelligo-mn/intelligo/blob/master/docs/.vuepress/public/logo.png?raw=true" width="140" alt="Logo"/>
  </picture>
  </a>
</div>

<h1 align="center">Intelligo Store</h1>

<div align="center">

A headless GraphQL commerce platform offers ultra-fast, dynamic, and personalized shopping experiences with customizable online stores. Ideal for developers seeking to enhance their e-commerce offering.

</div>

  <p align="center">
    <br />
    <a href="https://docs.intelligo.dev" rel="dofollow"><strong>intelligo.store</strong></a>
    <br />

### Live demo

* Coming soon

## Features

- **Headless / API first**: Build mobile apps, custom storefronts, POS, automation, etc
- **Extensible**: Build anything with webhooks, apps, metadata, and attributes
- **GraphQL API**: Get many resources in a single request and [more](https://graphql.org/)
- **Multichannel**: Split your inventory over multiple channels, with support for pricing and currency per channel.
- **Enterprise ready**: Secure, scalable, and stable. Battle-tested by big brands
- **Dashboard**: User friendly, fast, and productive.
- **Global by design** Multi-currency, multi-language, multi-warehouse, tutti multi!
- **Media management**: Dynamic crop & resize
Cloud storage support.
- **Team support**: Granular role-based permissions
Built in admin UI.
- **Inventory management**: Unlimited variants, Stock tracking, Dynamic collections, Faceted search
- **Orders**: A comprehensive system for orders, dispatch, and refunds
- **Cart**: Advanced payment and tax options, with full control over discounts and promotions
- **Payments**: Flexible API architecture allows integration of any payment method
- **SEO**: Packed with features that get stores to a wider audience

Intelligo Store is free and always will be.
Help us out… If you love free stuff and great software, give us a star! 🌟


## Development

### 1. Install top-level dependencies

`yarn`

The root directory has a `package.json` which contains build-related dependencies for tasks including:

* Building & deploying the docs 
* Generating TypeScript types from the GraphQL schema
* Linting, formatting & testing tasks to run on git commit & push

### 2. Bootstrap the packages

`yarn bootstrap`

This runs the Lerna "bootstrap" command, which cross-links monorepo dependencies.

### 3. Build all packages

`yarn build`

Packages must be built (i.e. TypeScript compiled, admin ui app built, certain assets copied etc.) before being used.

Note that this can take a few minutes.

### 4. Set up the server

The server requires an SQL database to be available. The simplest option is to use SQLite, but if you have Docker available you can use the [dev-server docker-compose file](./packages/dev-server/docker-compose.yml) which will start up both MariaDB and Postgres as well as their GUI management tools.

Vendure uses [TypeORM](http://typeorm.io), and officially supports **MySQL**, **PostgreSQL** and **SQLite**, though other TypeORM-supported databases may work.

1. Configure the [dev config](./packages/dev-server/dev-config.ts), making sure the connection settings in the `getDbConfig()` function are correct for the database type you will be using.
2. Create the database using your DB admin tool of choice (e.g. phpMyAdmin if you are using the docker image suggested above). Name it according to the `getDbConfig()` settings. If you are using SQLite, you can skip this step.
3. Populate mock data: 
   ```bash
    cd packages/dev-server
    yarn populate
    ```
   If you do not specify the `DB` variable, it will default to "mysql".

### 5. Run the dev server

```
cd packages/dev-server
yarn start
```
Or if you are in the root package 
```
yarn dev-server:start
```

## License

MIT

## Copyright
#### Copyright © 2023, [Intelligo LLC](https://intelligo.mn/).  See [NOTICE](NOTICE.txt) for details.
.
