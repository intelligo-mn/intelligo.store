import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from '../controllers/cat.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/grocery')],
  controllers: [AppController , CatsController],
  providers: [AppService],
})
export class AppModule {}
