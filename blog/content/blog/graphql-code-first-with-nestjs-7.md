---
title: 'GraphQL Code-First Approach with NestJS 7'
description: 'Create a GraphQL API using Code-First Approach with NestJS 7.'
published: true
publishedAt: 2020-03-31T20:30:00.000Z
updatedAt: 2020-04-07T11:56:00.000Z
tags:
  - NestJS
  - GraphQL
  - Prisma
keywords:
  - Code-First Approach
authors:
  - Marc Stammerjohann
github: https://github.com/notiz-dev/nest-graphql-code-first
---

Recently the release of [NestJS 7](https://trilon.io/blog/announcing-nestjs-7-whats-new) was announced with amazing updates to the whole framework including the [@nestjs/graphql](https://docs.nestjs.com/graphql/quick-start) ❤️ package.

We create a [GraphQL](https://graphql.org/) API using the `@nestjs/graphql`. You will learn how to write the API with TypeScript using the **code first** approach and the new [GraphQL plugin](https://docs.nestjs.com/graphql/resolvers#cli-plugin).

In this guide we are using [Prisma](https://prisma.io) to easily access a database. You can follow this guide to setup a [Nest application with Prisma](https://notiz.dev/blog/how-to-connect-nestjs-with-prisma) as Prisma is out of scope for this guide.

## Setup GraphQL

To start a GraphQL API install the following packages into your Nest application.

```bash
npm i --save @nestjs/graphql graphql-tools graphql

# for Express
npm i --save apollo-server-express
# for Fastify
npm i --save apollo-server-fastify
```

Import the `GraphQLModule` into your `AppModule`.

```ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true
    })
  ]
})
export class AppModule {}
```

To configure the GraphQL endpoint we use `GqlModuleOptions` which are passed to the underlying GraphQL server. Here we are enabling the [**code first**](https://docs.nestjs.com/graphql/quick-start#code-first) approach.

- `autoSchemaFile` enables the **code first** approach to use TypeScript classes and decorators to generate the GraphQL schema.
- `playground` enables the [GraphQl Playground](https://github.com/prisma-labs/graphql-playground), an interactive IDE for your API documentation, available at [http://localhost:3000/graphql](http://localhost:3000/graphql).
- `debug` mode

There are two options for `autoSchemaFile` providing a **path** for the schema generation or `true` for generating the schema in memory.

## GraphQL Code First approach

A GraphQL schema contains many [types](https://graphql.org/learn/schema/) and [Queries](https://graphql.org/learn/queries/). The schema grows in size and complexity for each new query, mutation and type. GraphQL [**Code First**](https://www.youtube.com/watch?v=OloBAdNCnyQ) enables us to automatically generate a GraphQL schema using TypeScript and decorators. This helps us focus on writing `.ts` files and we don't need to write the GraphQL schema ourselves.

`@nestjs/graphql` provides all decorators to generate our schema. Here are a few decorators and there usage:

- `@ObjectType()` generate class as [Type](https://graphql.org/learn/schema/#type-system)
- `@Field()` generate a class property as a [Field](https://graphql.org/learn/schema/#object-types-and-fields)
- `@InputType()` generate class as [Input](https://graphql.org/learn/schema/#input-types)
- `@Args` generate method params as [Arguments](https://graphql.org/learn/schema/#arguments)
- `@Query()` generate method as [Query](https://graphql.org/learn/schema/#the-query-and-mutation-types)
- `@Mutation()` generate method as [Mutation](https://graphql.org/learn/schema/#the-query-and-mutation-types)
- `@ResolveField` resolve relationship property

### Graphql Type

Start with creating your objects as a TypeScript `class`.

```ts
export class User {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string;
  name?: string;
  hobbies: Hobby[];
}

export class Hobby {
  id: number;
  name: string;
}
```

Let's add [decorators](https://docs.nestjs.com/graphql/resolvers#code-first) to expose this model in our GraphQL schema. Start adding `@ObjectType()` to the TypeScript class.

```ts
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  ...
}

@ObjectType()
export class Hobby {
  ...
}
```

Next we use the `@Field` decorator on each class property providing additional information about the type and state (required or optional).

```ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field(type => Date, { name: 'registeredAt' })
  createdAt: Date;

  @Field(type => Date)
  updatedAt: Date;

  @Field(type => String)
  email: string;

  password: string;

  @Field(type => String, { nullable: true })
  name?: string;

  @Field(type => [Hobby])
  hobbies: Hobby[];
}

@ObjectType()
export class Hobby {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  name: string;
}
```

The following GraphQL type is generated if this class is used in a resolver.

```graphql
type User {
  id: Int!
  registeredAt: DateTime!
  updatedAt: DateTime!
  email: String!
  name: String
  hobbies: [Hobby!]!
}
```

- `@Field` takes an optional type function (e.g. `type => String`)
- Declare a field as an array using the bracket notation `[ ]` in the type function (e.g. `type => [Hobby]`)
- Optional `FieldOptions` object to change the generated schema
  - `name`: property name in the schema (`createdAt` => `registeredAt`)
  - `description`: adding a field description
  - `deprecationReason`: adding a deprecation notice
  - `nullable`: declare a field is required or optional
- Hide properties from the schema by omitting `@Field`

For more details head over to the NestJS [docs](https://docs.nestjs.com/graphql/resolvers#object-types)!

We have added a bit of boilerplate to our `User` model and other models we will create. Nest provides a CLI plugin to reduce the boilerplate of our models. Check out the GraphQL plugin section on how to reduce the boilerplate.

### GraphQL Resolver

Great our models are in place! Now we use the Nest CLI to generate our resolvers.

```bash
nest generate resolver <name>

# alias
nest g r <name>

# User and Hobby
nest g r user
nest g r hobby
```

Our resolvers are added to the `providers` array in the `app.module.ts`.

```ts
import { Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';

@Resolver(of => User)
export class UserResolver {
  ...
}
```

Declare a `of` function in the `@Resolver` decorator (e.g. `@Resolver(of => User)`) this is used to provide a parent object in `@ResolveField`. We will cover `@ResolveField` in a bit.

Add `@Query` to your resolvers to create new GraphQL queries in your schema. Let's create a query function returning all `users()`. Use the bracket notation inside the decorator `@Query(returns => [User])` to declare an array return value.

> Note: Prisma is used in this example, but can be replaced easily with an ORM of your choice like [TypeORM](https://docs.nestjs.com/recipes/sql-typeorm), [Mongoose](https://docs.nestjs.com/recipes/mongodb) or [Sequelize](https://docs.nestjs.com/recipes/sql-sequelize). See the full database setup in the [example repo](https://github.com/notiz-dev/nest-graphql-code-first).

```ts
import { Resolver, Query } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(of => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @Query(returns => [User])
  async users() {
    return this.prisma.user.findMany();
  }
}
```

The above code generates the following query to our schema:

```graphql
type Query {
  users: [User!]!
}
```

A `User` has a relation to many hobbies. To resolve the `hobbies` property from a user, we make use of the `@ResolveField` decorator. Add `@ResolveField` to a function with the **exact** same name of the property we want to resolve. Here we add a `hobbies()` function and provide a `User` object as the parent.

```ts
import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(of => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @Query(returns => [User])
  async users() {
    return this.prisma.user.findMany();
  }

  @ResolveField()
  async hobbies(@Parent() user: User) {
    return this.prisma.hobby.findMany({
      where: { user: { id: user.id } }
    });
  }
}
```

Use the parent object to query the relationship object from a database or another endpoint.

### Test GraphQL API

Start your Nest application and navigate to the [playground](http://localhost:3000/graphql), it is available if `playground` is set to `true` in the `GraphQLModule`.

The playground shows us our GraphQL schema and the docs for our queries.

![Graphql Playground schema view](assets/img/blog/graphql-code-first-with-nestjs-7/optimized/graphql-playground-schema.png)

Additionally, we can "play" with queries inside the playground. Try out the **autocomplete** feature in the playground to create your own queries based on your schema and queries.
Let's query all users using the following query:

```graphql
query AllUsers {
  users {
    id
    registeredAt
    updatedAt
    email
    name
    hobbies {
      id
      name
    }
  }
}
```

The response will look like this with a different data set. I prepared the database with a few dummy users and hobbies.

![Users query](assets/img/blog/graphql-code-first-with-nestjs-7/optimized/users-query.png)

## GraphQL plugin

Nest 7 provides a new [GraphQL plugin](https://docs.nestjs.com/graphql/resolvers#cli-plugin) to reduce the boilerplate of decorators for our **models**, **inputs**, **args** and **entity** files. Enable the plugin by adding `compilerOptions` to `nest-cli.json`:

```json
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "plugins": ["@nestjs/graphql/plugin"]
  }
}
```

The plugin automatically handles the decorators for the files with the suffix `['.input.ts', '.args.ts', '.entity.ts', '.model.ts']`. If you like to use custom suffixes add those to the plugins option:

```json
"plugins": [
  {
    "name": "@nestjs/graphql/plugin",
    "options": {
      "typeFileNameSuffix": [".input.ts", ".model.ts"]
    }
  }
]
```

Let's clean up the boilerplate of our models. Before the plugin the models look like this:

```typescript
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Hobby } from './hobby.model';

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field(type => Date, { name: 'registeredAt' })
  createdAt: Date;

  @Field(type => Date)
  updatedAt: Date;

  @Field(type => String)
  email: string;

  password: string;

  @Field(type => String, { nullable: true })
  name?: string;

  @Field(type => [Hobby])
  hobbies: Hobby[];
}

@ObjectType()
export class Hobby {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  name: string;
}
```

After removing the extra boilerplate decorators the models looks like this:

```typescript
import { ObjectType, Field, Int, HideField } from '@nestjs/graphql';
import { Hobby } from './hobby.model';

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field({ name: 'registeredAt' })
  createdAt: Date;

  updatedAt: Date;

  email: string;

  @HideField()
  password: string;

  name?: string;

  hobbies: Hobby[];
}

@ObjectType()
export class Hobby {
  @Field(type => Int)
  id: number;

  name: string;
}
```

> Note: Hiding properties from the schema requires the `@HideField` decorator.

We can add `@Field` to any property to override the documentation and also the inferred type.
For example `number` is inferred as the GraphQL type `Float` here we can use `@Field(type => Int)` to change this to an `Int` type.
