import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { ormconfig } from './orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
  ],
  controllers: [
  ],
  providers: [
  ]
})
export class AppModule {}
