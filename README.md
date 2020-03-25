# Grocery app

Энэхүү төсөл нь codecanyon-д байршуулах зорилгоор хөгжүүлж буй жижиг худалдааны апп-ийн төсөл юм.

| [Шаардлага][] | [Төслийн бүтэц][] | [Backend][] | [Frontend][] |
|---|---|---|---|
     
## Шаардлага

- [MongoDB](https://www.mongodb.com/download-center)
- [Node.js 8.0+](http://nodejs.org)
- [Git](https://git-scm.com/download/win)

### Төслийн бүтэц

| Нэр      |                                    Тайлбар |                                                                                                                                                               Github Actions |
| -------- | :----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| backend  |                                Nodejs backend API |   [![Build Status](https://github.com/intelligo-systems/grocery-app/workflows/backend/badge.svg)](https://github.com/intelligo-systems/grocery-app/actions?workflow=backend) |
| frontend |                   Angular удирдлагын хэсэг | [![Build Status](https://github.com/intelligo-systems/grocery-app/workflows/frontend/badge.svg)](https://github.com/intelligo-systems/grocery-app/actions?workflow=frontend) |
| mobile   |                                Flutter Mobile app |     [![Build Status](https://github.com/intelligo-systems/grocery-app/workflows/mobile/badge.svg)](https://github.com/intelligo-systems/grocery-app/actions?workflow=mobile) |
| landing  | Танилцуулга вэб хуудас болон documentation |   [![Build Status](https://github.com/intelligo-systems/grocery-app/workflows/landing/badge.svg)](https://github.com/intelligo-systems/grocery-app/actions?workflow=landing) |


## Backend

### Dependencies суулгах

```bash
$ npm install
```

### Апп ажиллуулах

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Тэст 

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Frontend

### Development server

`ng serve` комманд ажиллуулж dev server ажиллуулна. Вэб хөтөч дээр `http://localhost:4200/` гэсэн холбоос дээр ажиллана. 

### Build хийх

`ng build` гэсэн коммандаар апп build хийнэ. Build хийсэн файл нь `dist/` хавтасанд байрлана. `--prod` flag ашиглан production build хийнэ.

### Unit test ажиллуулах

`ng test` [Karma](https://karma-runner.github.io).

### End-to-end test хийх

`ng e2e` [Protractor](http://www.protractortest.org/).

[Шаардлага]:#шаардлага
[Төслийн бүтэц]:#төслийн-бүтэц
[backend]:#backend
[frontend]:#frontend


