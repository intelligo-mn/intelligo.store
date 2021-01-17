const commonConf = {
  SYNCRONIZE: true,
  ENTITIES: [__dirname + "/domain/*.entity{.ts,.js}"],
  MIGRATIONS: [__dirname + "/migrations/**/*{.ts,.js}"],
  CLI: {
    migrationsDir: "src/migrations",
  },
  MIGRATIONS_RUN: true,
};
process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "prod";
let ormconfig: any = {
  name: "default",
  type: "mongodb",
  database: "foodorder-app",
  url: "mongodb://admin:admin9@ds237475.mlab.com:37475/foodorder-app",
  logging: false,
  synchronize: commonConf.SYNCRONIZE,
  entities: commonConf.ENTITIES,
  migrations: commonConf.MIGRATIONS,
  cli: commonConf.CLI,
  useUnifiedTopology: true,
  migrationsRun: commonConf.MIGRATIONS_RUN,
};

if (process.env.NODE_ENV === "dev") {
  ormconfig = {
    name: "default",
    type: "mysql",
    database: "foodorder",
    url: "mysql://food:foodorder@localhost/foodorder",
    logging: false,
    synchronize: commonConf.SYNCRONIZE,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    cli: commonConf.CLI,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  };
}

if (process.env.NODE_ENV === "prod") {
  ormconfig = {
    name: "default",
    type: "mysql",
    database: "foodorder",
    url: "mysql://root:ROOT@localhost/foodorder",
    logging: false,
    synchronize: commonConf.SYNCRONIZE,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    cli: commonConf.CLI,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  };
}

if (process.env.NODE_ENV === "sqlite") {
  ormconfig = {
    name: "default",
    type: "sqlite",
    database: "../target/sqlite-dev-db.sql",
    logging: true,
    synchronize: true,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    cli: commonConf.CLI,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  };
}

if (process.env.NODE_ENV === "test") {
  ormconfig = {
    name: "default",
    type: "sqlite",
    database: ":memory:",
    logging: true,
    synchronize: true,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    cli: commonConf.CLI,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  };
}

export { ormconfig };
