import { Injectable } from '@nestjs/common';
import { HN_API_VERSION, passwordIterations } from 'src/app.config';
import { createHash, createSalt } from 'src/helpers/hash-password';
import { UserModel, NewsItemModel } from 'src/models';
import { validateNewUser } from 'src/validation/user';
import { HnCache } from '../database/cache';
import { HnDatabase } from '../database/database';
import Firebase from 'firebase';
@Injectable()
export class UserService {
  firebaseApi = Firebase.database().ref(HN_API_VERSION);
  cache = new HnCache();
  db = new HnDatabase(this.firebaseApi, this.cache);

  constructor() {}

  async getUser(id: string): Promise<UserModel | void> {
    return this.cache.getUser(id) || this.db.fetchUser(id);
  }

  async getPostsForUser(id: string): Promise<NewsItemModel[]> {
    return this.db
      .getNewsItems()
      .filter((newsItem) => newsItem.submitterId === id);
  }

  async validatePassword(id: string, password: string): Promise<boolean> {
    const user = this.cache.getUser(id);
    if (user) {
      return true;
      // (await createHash(password, user.passwordSalt!, passwordIterations)) === user.hashedPassword
    }

    return false;
  }

  async registerUser(user: {
    id: string;
    password: string;
  }): Promise<UserModel> {
    // Check if user is valid
    validateNewUser(user);

    // Check if user already exists
    if (this.cache.getUser(user.id)) {
      throw new Error('Username is taken.');
    }

    // Go ahead and create the new user
    // const passwordSalt = createSalt();
    // const hashedPassword = await createHash(
    //   user.password,
    //   passwordSalt,
    //   passwordIterations,
    // );
    const passwordSalt = createSalt();
    const hashedPassword = createHash(
      user.password,
      passwordSalt,
      passwordIterations,
    );

    const newUser = new UserModel({
      hashedPassword,
      id: user.id,
      passwordSalt,
    });

    // Store the new user
    this.cache.setUser(user.id, newUser);

    return newUser;
  }
}
