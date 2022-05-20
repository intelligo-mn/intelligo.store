import { Injectable } from '@nestjs/common';
import {
  AuthResponse,
  ChangePasswordInput,
  ForgetPasswordInput,
  LoginInput,
  PasswordChangeResponse,
  RegisterInput,
  ResetPasswordInput,
  VerifyForgetPasswordTokenInput,
} from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { GetUserArgs } from './dto/get-user.args';
import usersJson from './users.json';
import Fuse from 'fuse.js';
import { paginate } from 'src/common/pagination/paginate';
import { plainToClass } from 'class-transformer';
import { GetUsersArgs, UserPaginator } from './dto/get-users.args';
import { MakeOrRevokeAdminInput } from './dto/make-revoke-admin.input';

const users = plainToClass(User, usersJson);
const options = {
  keys: ['name', 'type.slug', 'categories.slug', 'status'],
  threshold: 0.3,
};
const fuse = new Fuse(users, options);

@Injectable()
export class UsersService {
  private users: User[] = users;

  async register(createUserInput: RegisterInput): Promise<AuthResponse> {
    const user: User = {
      ...users[0],
      id: uuidv4(),
      ...createUserInput,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.users.push(user);
    return {
      token: 'jwt token',
      permissions: ['super_admin', 'customer'],
    };
  }

  async login(loginInput: LoginInput): Promise<AuthResponse> {
    console.log(loginInput);
    return {
      token: 'jwt token',
      permissions: ['super_admin', 'store_owner', 'customer'],
    };
  }

  async changePassword(
    changePasswordInput: ChangePasswordInput,
  ): Promise<PasswordChangeResponse> {
    return {
      success: true,
      message: 'Password change successful',
    };
  }

  async forgetPassword(
    forgetPasswordInput: ForgetPasswordInput,
  ): Promise<PasswordChangeResponse> {
    return {
      success: true,
      message: 'Password change successful',
    };
  }

  async verifyForgetPasswordToken(
    verifyForgetPasswordTokenInput: VerifyForgetPasswordTokenInput,
  ): Promise<PasswordChangeResponse> {
    return {
      success: true,
      message: 'Password change successful',
    };
  }

  async resetPassword(
    resetPasswordInput: ResetPasswordInput,
  ): Promise<PasswordChangeResponse> {
    return {
      success: true,
      message: 'Password change successful',
    };
  }

  async getUsers({ text, first, page }: GetUsersArgs): Promise<UserPaginator> {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    let data: User[] = this.users;
    if (text?.replace(/%/g, '')) {
      data = fuse.search(text)?.map(({ item }) => item);
    }
    const results = data.slice(startIndex, endIndex);
    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }

  public getUser(getUserArgs: GetUserArgs): User {
    return this.users.find((user) => user.id === Number(getUserArgs.id));
  }

  me(): User {
    return this.users[0];
  }

  updateUser(id: number, updateUserInput: UpdateUserInput) {
    return this.users[0];
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async makeOrRevokeAdmin({ user_id }: MakeOrRevokeAdminInput) {
    return true;
  }

  async subscribeToNewsletter(email: string) {
    return true;
  }
}
