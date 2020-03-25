import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';

@Module({
  providers: [CustomerService],
  controllers: [CustomerController]
})
export class CustomerModule {}
