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

## Deployment

This project is used in the [Vendure Demo](https://github.com/vendure-ecommerce/vendure-demo). There is a [GitHub Actions workflow](./.github/workflows/build.yml) which is triggered whenever a new tag is added. The tag should be of the format `"vX.Y.Z"`. The workflow will run the `build:ssr` script and upload the compiled output to an Amazon S3 bucket, from which the vendure-demo project will pull the artifacts.

## License

MIT


