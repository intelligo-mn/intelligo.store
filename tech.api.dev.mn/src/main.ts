import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import * as Express from 'express';
import Firebase from 'firebase';
import * as session from 'express-session';
import { parse } from 'path';
import {
  APP_PORT,
  dev,
  GRAPHQL_PATH,
  HN_API_VERSION,
  HN_DB_URI,
  useGraphqlPlayground,
} from './app.config';
import { AppModule } from './app.module';
import { HnCache } from './database/cache';
import { seedCache, warmCache } from './database/cache-warmer';
import { HnDatabase } from './database/database';
import { ArticleService } from './services/article.service';
import { CommentService } from './services/comment.service';
import { NewsItemService } from './services/item.service';
import { UserService } from './services/user.service';
import { ApolloServer } from 'apollo-server-express';

import { IGraphQlSchemaContext, resolvers } from './graphql/graphql-resolvers';
import { typeDefs } from './graphql/graphql-schema';
import { UserModel } from './models';
const ONE_MINUTE = 1000 * 60;
const SEVEN_DAYS = 1000 * 60 * 60 * 24 * 7;
const delay = dev ? ONE_MINUTE : 0;
if (!Firebase.apps.length) {
  Firebase.initializeApp({ databaseURL: HN_DB_URI });
}

const server = Express();

server.get('/news', (req, res) => {
  const actualPage = '/';
  // void server.render(req, res as ServerResponse, actualPage);
  // void server.render(req, res as ServerResponse, actualPage);
});

// server.get('*', (req, res) => {
//   // Be sure to pass `true` as the second argument to `url.parse`.
//   // This tells it to parse the query portion of the URL.
//   // const parsedUrl = parse(req.url, true);

//   // void handle(req, res as ServerResponse, parsedUrl);
// });

/* END EXPRESS ROUTES */

const firebaseApi = Firebase.database().ref(HN_API_VERSION);
const cache = new HnCache();
const db = new HnDatabase(firebaseApi, cache);

const commentService = new CommentService();
const feedService = new ArticleService();
const newsItemService = new NewsItemService();
const userService = new UserService();
const apolloServer = new ApolloServer({
  context: ({ req }): IGraphQlSchemaContext => ({
    commentService,
    feedService,
    newsItemService,
    userService,
    userId: (req.user as UserModel)?.id,
  }),
  introspection: true,
  playground: useGraphqlPlayground,
  resolvers,
  typeDefs,
} as any);
apolloServer.applyMiddleware({ app: server, path: GRAPHQL_PATH });
seedCache(db, cache, delay);
warmCache(db, cache, feedService);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.use(
    session({
      cookie: { maxAge: SEVEN_DAYS }, // Requires https: secure: false
      resave: false,
      rolling: true,
      saveUninitialized: false,
      secret: 'mysecret',
    }),
  );

  app.use(cookieParser('mysecret'));
  app.use(Express.urlencoded({ extended: false }) as Express.Handler);

  await app.listen(APP_PORT, () => {
    console.log(`> App listening on port ${APP_PORT}`);
    console.log(`> GraphQL ready on ${GRAPHQL_PATH}`);
    console.log(
      `> GraphQL Playground is ${useGraphqlPlayground ? '' : 'not '}enabled`,
    );
    console.log(`Dev: ${String(dev)}`);
  });
}
bootstrap();
