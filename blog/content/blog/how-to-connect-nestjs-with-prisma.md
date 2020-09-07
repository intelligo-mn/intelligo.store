---
title: 'How to query your database using Prisma with NestJS'
description: 'Learn how to setup a database with Prisma 2.0 and query data using NestJS.'
published: true
publishedAt: 2020-03-02T10:12:00.000Z
updatedAt: 2020-06-24T11:02:00.000Z
tags:
  - NestJS
  - Prisma
keywords:
  - SQLite
authors:
  - 'Marc Stammerjohann'
github: 'https://github.com/notiz-dev/nestjs-prisma'
versions:
  nestjs/cli: 7.1.2
  nestjs: 7.0.x
  prisma2: 2.0.0
  prisma/client: 2.0.0
---

[Prisma](https://prisma.io) is a toolkit for modeling, querying and migrating a [database](https://www.prisma.io/docs/more/supported-databases). [Prisma 2.0](https://github.com/prisma/prisma) is rewritten with Rust, read more about the recent [release](https://www.prisma.io/blog/announcing-prisma-2-n0v98rzc8br1) 🎉.

[NestJS](https://nestjs.com) is a popular typescript server-side application framework. It is heavily influenced by Angular's architecture and enables to create a REST and [GraphQL](https://graphql.org) backend.

This guide shows how to setup a NestJS application querying data from a SQLite database using Prisma 2.0.

## TLDR

Add Prisma to a Nest application and generate a `PrismaClient`. Create a Nest `PrismaService` which extends `PrismaClient` and handles the connection using Nest lifecycle events. Inject `PrismaService` into REST controllers or GraphQL resolvers to query your data models.

## Step 1: Start a new NestJS application

Generate a new Nest application or skip to the next step if you follow along with an existing Nest project.

To generate a new Nest application use the nest cli:

```bash
npm i -g @nestjs/cli
nest new project-name
```

Change your directory into the newly created Nest application and open up your preferred IDE.

## Step 2: Add Prisma 2.0

[Add](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project) Prisma 2.0, create an empty `prisma.schema` file and install [prisma-client-js](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/api) to your Nest application.

```bash
npm install @prisma/cli --save-dev
npx prisma init

npm install @prisma/client
```

## Step 3: Update Prisma datasource

In this guide we are connecting to a SQLite database. Update the `provider` in the `prisma/prisma.schema` to `sqlite` and change the `url` environment to `file:./dev.db`. [Prisma Migrate](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-migrate) will create a SQLite database at `prisma/dev.db`.

The `prisma.schema` should look like:

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}
```

## Step 4: Define a model

Now we define a model for the database. A simple `User` model looks like:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
```

We are adding the above model to `prisma.schema` below the generator.

For more complex models check out Prisma's [data modeling](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/data-model) definition.

## Step 5: Create SQLite database with Migrate

We are creating our first database migration using the experimental Prisma Migrate.
First we save a migration using `npx prisma migrate save --experimental`. Prisma asks us to create the `dev.db` database and we select `Yes`. Next we provide a name for the migration, for example `user` as we just define the `User` model.

Now we can apply the migration with `npx prisma migrate up --experimental`.

> **Warning**: [Prisma Migrate](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-migrate) is considered experimental those we need to provide the `--experimental` flag.

## Step 6: Generate PrismaClient

For each change we make to the data model of `prisma.schema`, we have to generate the `PrismaClient` again.

Run the following command to generate a new `PrismaClient` which contains the [CRUD](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud) operations for the new `User` model:

```bash
npx prisma generate
```

## Step 7: Create a Prisma service

SQLite database is setup and a `User` model is defined with Prisma. Now its time to prepare our NestJS application to query the database using `prisma-client-js`.

We are creating a NestJS service `prisma` which will extend the `PrismaClient` to instantiate the connection.

```bash
nest generate service prisma
```

Our `PrismaService` looks like this:

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super();
  }
}
```

`PrismaClient` allows us to handle the connection ourselves using `connect()` and `disconnect()`. We will make use of Nest [Lifecycle Events](https://docs.nestjs.com/fundamentals/lifecycle-events) `OnModuleInit` and `OnModuleDestroy` to take care of the connection for us.

Our updated `PrismaService` with the lifecycle events looks like:

```typescript
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.connect();
  }

  async onModuleDestroy() {
    await this.disconnect();
  }
}
```

## Step 8: Query data model

Now we can inject the `PrismaService` into any REST controller, GraphQL resolver or service to query our data model. We will inject it into a controller and create REST endpoints querying and creating `User` models.

Note we are directly accessing the type-safe generated Api from the `PrismaClient` through `PrismaService`.

```typescript
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { CreateUserDto } from './create-user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  async users() {
    return await this.prisma.user.findMany();
  }

  @Get('users/:id')
  async user(@Param('id') id: string) {
    return await this.prisma.user.findOne({ where: { id: +id } });
  }

  @Post('user')
  async addUser(@Body() createUserDto: CreateUserDto) {
    return await this.prisma.user.create({ data: createUserDto });
  }
}
```

Now its time to continue updating your data model, generating `PrismaClient` and adding queries to your Nest application.

Checkout [nestjs-prisma-starter](https://github.com/fivethree-team/nestjs-prisma-starter) to get started quickly with Nest and Prisma.
