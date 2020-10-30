import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthorityRepository } from "src/core/authority.repository";
import { Authority } from "src/domain/authority.entity";
import { User } from "src/domain/user.entity";
import { Payload } from "src/security/payload.interface";
import { UserLoginDTO } from "../../domain/dto/user-login.dto";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  logger = new Logger("AuthService");
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(AuthorityRepository)
    private authorityRepository: AuthorityRepository,
    private userService: UserService
  ) {}

  async login(userLogin: UserLoginDTO): Promise<any> {
    const loginUserName = userLogin.username;
    const loginPassword = userLogin.password;

    const userFind = await this.userService.findByfields({
      where: { username: loginUserName, password: loginPassword },
    });
    if (!userFind) {
      throw new HttpException(
        "Invalid login name or password.",
        HttpStatus.BAD_REQUEST
      );
    }

    const user = await this.findUserWithAuthById(userFind.id);

    const payload: Payload = {
      id: user.id,
      username: user.login,
      authorities: user.authorities,
    };

    /* eslint-disable */
    return {
      id_token: this.jwtService.sign(payload),
    };
  }

  /* eslint-enable */
  async validateUser(payload: Payload): Promise<User | undefined> {
    return await this.findUserWithAuthById(payload.id);
  }

  async find(): Promise<Authority[]> {
    return await this.authorityRepository.find();
  }

  async findUserWithAuthById(userId: string): Promise<User | undefined> {
    const user: any = await this.userService.findByfields({
      where: { id: userId },
    });
    return user;
  }
}
