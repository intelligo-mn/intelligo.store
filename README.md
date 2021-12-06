# Vendure Angular Storefront

This is an e-commerce storefront application which is designed to be used with the [Vendure ecommerce framework](https://github.com/vendure-ecommerce/vendure) as a back end.

It is a progressive web application (PWA) which also uses Angular Universal for server-side rendering.

The app is built with the [Angular CLI](https://github.com/angular/angular-cli), with the data layer being handled by [Apollo Client](https://github.com/apollographql/apollo-client).

## Development

0. Clone this repo
1. Run `npm install` or `yarn` in the root dir
2. Run `npm start` or `yarn start` to build in development mode.
3. Make sure you have a local Vendure instance running a `http://localhost:3000`.
4. Open `http://localhost:4201` to see the storefront app running.

## Code generation

This project uses [graphql-code-generator](https://www.graphql-code-generator.com/) to generate TypeScript types based on the Vendure GraphQL API. To update the types, first change the `schema` property of [codegen.yml](./codegen.yml) to point to your local Vendure server, and then run the `generate-types` npm script.

## Deployment

To deploy this storefront in a production environment, take the following steps:

1. Open the [environment.prod.ts file](./src/environments/environment.prod.ts) and change the values to match your deployed Vendure server. You also probably want to set the `baseHref` value to `'/'` rather than `'/storefront/'`.
2. Open the [angular.json file](./angular.json) and set the baseHref values to point to root:
    ```diff
      "production": {
    -    "baseHref": "/storefront/",
    -    "deployUrl": "/storefront/", 
    +    "baseHref": "/",
    +    "deployUrl": "/", 
    ```
3. You then need to build for production using the `build:ssr` npm script. This can be done either locally or on your production server, depending on your preferred workflow.
4. The built artifacts will be found in the `dist/` directory. The command to run the storefront as a server-rendered app is `node dist/server/main.js`. This will start a node server running on port 4000. You should configure your webserver to pass requests arriving on port 80 to `localhost:4000`.

### Building for demo.vendure.io

This project is used in the [Vendure Demo](https://github.com/vendure-ecommerce/vendure-demo). There is a [GitHub Actions workflow](./.github/workflows/build.yml) which is triggered whenever a new tag is added. The tag should be of the format `"vX.Y.Z"`. The workflow will run the `build:ssr` script and upload the compiled output to an Amazon S3 bucket, from which the vendure-demo project will pull the artifacts.

## License

MIT


