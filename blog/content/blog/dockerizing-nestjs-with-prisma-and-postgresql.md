---
title: Dockerizing a NestJS app with Prisma and PostgreSQL
description: How to dockerize a NestJS application with Prisma and PostgreSQL.
published: true
publishedAt: 2020-07-31T10:00:00.000Z
updatedAt: 2020-07-31T10:00:00.000Z
tags:
  - NestJS
  - Prisma
  - Docker
keywords:
  - PostgreSQL
authors:
  - Marc Stammerjohann
github: https://github.com/notiz-dev/nestjs-prisma-docker
---

[Docker](https://www.docker.com/) 🐳 enables you to build **consistent** containers of your applications for your development, testing and production environments. In this post you will dockerize a NestJS 😸 application with Prisma connecting to a PostgreSQL 🐘 database.

Requirements for this post are

1. Docker [installed](https://docs.docker.com/engine/install/)
2. [NestJS application with Prisma](https://blog.dev.mn/blog/how-to-connect-nestjs-with-prisma)

You can find the [full source code](https://github.com/notiz-dev/nestjs-prisma-docker) on GitHub.

Use this prisma schema to follow along:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Food {
  id   Int    @id @default(autoincrement())
  name String
}
```

And a `.env` file in your `prisma` directory for a dummy PostgreSQL connection url:

```bash
DATABASE_URL=postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public
```

## TL;DR Multi-stage Dockerfile

Create a `Dockerfile` in the root of your Nest application

```bash
touch Dockerfile
```

Open the `Dockerfile` and use the multi-stage build steps 🤙 

```docker
FROM node:12 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install
# Generate prisma client, leave out if generating in `postinstall` script
RUN npx prisma generate

COPY . .

RUN npm run build

FROM node:12

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
```

But wait... what is going in the `Dockerfile` 🤔❓ See the breakdown for each step below.

Don't forget to create a `.dockerignore` file next to your `Dockerfile`:

```docker
node_modules
npm-debug.log
```

The `COPY` command ignores those local files and folder and won't copy them into your Docker image to prevent **overwriting** your installed modules in your image.

Your application structure should look like this:

![Project structure](assets/img/blog/dockerizing-nestjs-with-prisma-and-postgresql/optimized/project-structure.png)

## Breakdown of the multi-stage Dockerfile

Let's breakdown the `Dockerfile` step-by-step

🏗 Builder Image

```docker
FROM node:12 AS builder
```

The first line tells Docker to use the latest [LTS](https://nodejs.org/en/about/releases/) version `12` for `node` as the base image to build the container from. To optimize the container image size you are using the [multistage-build](https://docs.docker.com/develop/develop-images/multistage-build/) and assign a name to your base image `AS builder`.

> **Note**: Before updating to a newer version of `node` check the support of Nest, Prisma and other dependencies

🧰 Working directory

```docker
# Create app directory
WORKDIR /app
```

Create the working directory for your application which stores your code. All commands (`RUN`, `COPY`) are executed inside this directory.

📦 Installation

```docker
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install
# Generate prisma client, leave out if generating in `postinstall` script
RUN npx prisma generate
```

Next you need to install your app dependencies inside the Docker image. `package.json` and `package-lock.json` are copied over. Generating the Prisma Client requires the `schema.prisma` file. `COPY prisma ./prisma/` copies the whole `prisma` directory in case you also need the migrations. 

> **Note**: Only `package*.json` and `prisma` directory is copied in this step to take advantage of the cached Docker layers.

Install all dependencies `RUN npm install` (dev too). This allows you to build the Nest application inside the Docker image. Now its also the time to generate the Prisma Client. **Leave** this step out if you are generating the client in the a `postinstall` script.

⚙️ Build app

```docker
COPY . .

RUN npm run build
```

To build your Nest application copy all of your source files (exceptions in `.dockerignore`) into the Docker image. Now it's time to build your app `RUN npm run build`.

👟 Run your app

```docker
FROM node:12
```

The second `FROM` is the second stage in the multi-stage build and is used to **run** your application.   

```docker
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
```

Copy **from** your `builder` image only files and folders required to run the Nest app.

```docker
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
```

Nest apps usually bind to port `3000`, `EXPOSE` the same port for your Docker image. Last step is the command to run the Nest application using `CMD`.

## Build and run your image

Enter the following command in the directory of your `Dockerfile`. Give your build image a name using the `-t` flag to easily start, stop and remove it.

```bash
# give your docker image a name
docker build -t <your username>/nest-api .

# for example
docker build -t nest-api .
```

After your Docker image is successfully build start it with this command

```bash
docker run -p 3000:3000 --env-file prisma/.env -d <your username>/nest-api 
```

Prisma Client requires the `DATABASE_URL` environment variable which you pass using the `--env-file prisma/.env` flag. Use this `.env` file for additional environment variables (Port, JWT Secret etc.) or copy it into your root folder.

Open up [localhost:3000](http://localhost:3000) to verify that your Nest app is running with Docker.

## Add docker-compose with PostgreSQL

[Docker Compose](https://docs.docker.com/compose/) allows you to define and run multiple Docker container together.
Here you are setting up a Docker compose file for the Nest application and a PostgreSQL database.

Create the Docker compose file

```bash
touch docker-compose.yml
```

Add following services to `docker.compose.yml`

```yaml
version: '3.7'
services:
  nest-api:
    container_name: nest-api
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - 3000:3000
    depends_on:
      - postgres
    env_file:
      - .env

  postgres:
    image: postgres:12
    container_name: postgres
    restart: always
    ports:
      - 5432:5432
    env_file:
      - .env
    volumes:
      - postgres:/var/lib/postgresql/data

volumes:
  postgres:
    name: nest-db
```

The first service **nest-api** is building the Docker image based on your `Dockerfile` for your Nest app with Prisma. The second service is creating a **postgres** database using the `postgres` Docker image in version `12`. For the Postgres image set `POSTGRESQL_USER`, `POSTGRESQL_PASSWORD` and `POSTGRES_DB` environment variables in a `.env` file next to your `docker-compose.yml`

```bash
POSTGRESQL_USER=prisma
POSTGRESQL_PASSWORD=topsecret
POSTGRES_DB=food
```

To connect to the PostgreSQL database Docker image [configure](https://www.prisma.io/docs/reference/database-connectors/postgresql) the `DATABASE_URL` in your `.env` file. Fill in your values into the Postgres connection url format

```bash
postgresql://USER:PASSWORD@HOST:PORT/DB?schema=NAME&sslmode=prefer
```

In this example add the following variable to the `.env` file. The `HOST` is when connecting from another Docker image either the service name or the container name - both `postgres`.

```bash
DATABASE_URL=postgresql://prisma:topsecret@postgres:5432/food?schema=food&sslmode=prefer
```

Time 🕙 to start your Nest app and Postgres Docker image. Make sure the ports `3000` and `5432` are not in use already.

```bash
docker-compose up
# or detached
docker-compose up -d
```

You should have the following two docker containers started

![Docker container started by docker-compose](assets/img/blog/dockerizing-nestjs-with-prisma-and-postgresql/optimized/docker-compose.png)

Open again [localhost:3000](http://localhost:3000) to verify that your Nest app is running with Docker. Also verify that your endpoints using the Prisma Client have access to the Postgres DB.

## Prisma Migrate Postgres Docker Container

Replace the host `postgres` with `localhost` if you want to perform [Prisma migrations](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-migrate) locally of your Postgres Docker container. Update the `DATABASE_URL` in `prisma/.env` to

```bash
DATABASE_URL=postgresql://prisma:topsecret@localhost:5432/food?schema=food&sslmode=prefer
```

Now you can run `npx prisma migrate save --experimental` and `npx prisma migrate save --experimental` or even seed the database if you like.

Perfect, now sit back and relax 🏝 and let Docker do the work for you.
