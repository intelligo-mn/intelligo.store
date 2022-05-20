import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RefundsService } from './refunds.service';
import { CreateRefundDto } from './dto/create-refund.dto';
import { UpdateRefundDto } from './dto/update-refund.dto';

@Controller('refunds')
export class RefundsController {
  constructor(private readonly refundsService: RefundsService) {}

  @Post()
  create(@Body() createRefundDto: CreateRefundDto) {
    return this.refundsService.create(createRefundDto);
  }

  @Get()
  findAll() {
    return this.refundsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refundsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRefundDto: UpdateRefundDto) {
    return this.refundsService.update(+id, updateRefundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refundsService.remove(+id);
  }
}
