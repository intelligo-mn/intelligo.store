import { Injectable } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async loginUser(username: string, password: string) {
    const user = this.userService.getUser(username);
    if (!user) {
      return null;
    }
    const isValidate = await this.userService.validatePassword(
      username,
      password,
    );

    if (!isValidate) {
      return null;
    }

    return user;
  }

  async registerUser(req: any, res, next) {
    if (!req.user) {
      try {
        await this.userService.registerUser({
          id: req.body.id,
          password: req.body.password,
        });
        // @ts-ignore returnTo is an undocumented feature of passportjs
        req.session!.returnTo = `/user?id=${req.body.id}`;
      } catch (err) {
        // @ts-ignore returnTo is an undocumented feature of passportjs
        req.session!.returnTo = `/login?how=${err.code}`;
      }
    } else {
      // @ts-ignore returnTo is an undocumented feature of passportjs
      req.session!.returnTo = '/login?how=user';
    }
    next();
  }
}
