---
title: Introducing NestJS Prisma Schematics
description: Schematics to easily add Prisma support to a NestJS application 
published: true
publishedAt: 2020-08-07T09:30:00.000Z
updatedAt: 2020-08-17T21:25:00.000Z
tags:
  - NestJS
  - Prisma
keywords:
  - Schematics
authors:
  - Marc Stammerjohann
github: https://github.com/marcjulian/nestjs-prisma
---

Until now, adding [Prisma to a NestJS application](https://blog.dev.mn/blog/how-to-connect-nestjs-with-prisma) requires a few manual steps - installing [@prisma/cli](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-cli/command-reference) and [@prisma/client](https://github.com/prisma/prisma-client-js), creating a `PrismaService` and (eventually) adding a `Dockerfile`.

I am excited to release [`nestjs-prisma`](https://github.com/marcjulian/nestjs-prisma) - a set of schematics to perform all steps necessary to add Prisma to your NestJS application **automatically**.

All you need to do is run the following command in your Nest app:

```bash
nest add nestjs-prisma
```

![Schematics in action](assets/img/blog/nestjs-prisma-schematics/schematics-in-action.gif)

Do you need more options? I got you covered, you can go a step further and specify a Prisma version if you like:

```bash
nest add nestjs-prisma --prismaVersion 2.4.1
```

Or go crazy by adding a `Dockerfile` for your Nest app and a `docker-compose.yaml` with a **PostgreSQL** database.

```bash
nest add nestjs-prisma --addDocker
```

[Check out all options](https://github.com/marcjulian/nestjs-prisma#additional-options) and give it a try with your Nest app.
