# Хоол хүргэлт

Хоол хүргэлтийн системийн prototype.

### Төслийн бүтэц

| Apps            |                                                     Web |                                                                                                                                                       CI |
| --------------- | ------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Backend API** | **[localhost:8090/api/v1/docs](http://localhost:8090/api/v1/docs)** | [![Build Status](https://github.com/dev-mn/food-delivery/workflows/backend/badge.svg)](https://github.com/dev-mn/food-delivery/actions?workflow=backend) |
| **Frontend**   |             [localhost:4200](http://localhost:4200) | [![Build Status](https://github.com/dev-mn/food-delivery/workflows/frontend/badge.svg)](https://github.com/dev-mn/food-delivery/actions?workflow=frontend) |

## Шаардлагатай програмууд

Дараах програмуудыг суулгаж тохируулсан байх ёстой.

- [Nodejs 12.7 оос дээш](https://nodejs.org/en/download/)
- [XAMP](https://www.apachefriends.org/download.html)
- [Git](https://git-scm.com/downloads)
- [VSCode](https://code.visualstudio.com/) эсвэл өөр ямар нэг IDE, Editor/Typescript/

## Төслөө локал компьютерлуугаа clone хийж авах

`https://github.com/tortuvshin/food-delivery.git`

## Dependencies суулгах

```bash
$ cd backend && npm i
$ cd frontend && npm i 
```
## Backend service-ууд ажиллуулах

### Environment файл тохируулах

1. `.env.example` файлыг copy хийгээд `.env` гэсэн файл үүсгэнэ

### Өгөгдлийн сан тохируулах

[src/orm.config.ts](src/orm.config.ts) гэсэн файлд дараах тохиргоог хийнэ

```ts
if(process.env.NODE_ENV==='dev'){
  ormconfig = {
    name: "default",
    type: "mysql",
    database: "food-delivery", /Өгөгдлийн сангийн нэр/ 
    url: "mysql://root:root@192.168.64.2/food-delivery", /Connection URL root:root гэсний оронд өгөгдлийн сангийн хэрэглэгчийн нэр нууц үгийг тохируулна/ 
    logging: false,
    synchronize: commonConf.SYNCRONIZE,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    cli: commonConf.CLI,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  };
}

```

### Ажиллуулах

```bash
$ npm run start:dev
```

## Frontend ажиллуулах

`cd frontend && npm run start`

## Алдаа мэдэгдэх

Ямар нэг алдаа, ойлгомжгүй зүйл, асуулт, санал хүсэлтээ [Issues](https://github.com/tortuvshin/food-delivery/issues) хэсэгт бичээрэй.
