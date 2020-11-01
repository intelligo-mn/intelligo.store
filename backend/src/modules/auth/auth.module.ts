import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { config } from '../../config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorityRepository } from './authority.repository';

import { AuthController } from './auth.controller';
import { AccountController } from './account.controller';
import { JwtStrategy } from '../../core/passport.jwt.strategy';
import { UserJWTController } from '../user/user.jwt.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorityRepository]),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: config['intelligo.security.authentication.jwt.base64-secret'],
      signOptions: { expiresIn: '300s' },
    }),
  ],
  controllers: [UserJWTController, AuthController, AccountController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
