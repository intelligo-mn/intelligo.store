import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { CreateRefundInput } from './dto/create-refund.input';
import { GetRefundsArgs } from './dto/get-refunds.args';
import { UpdateRefundInput } from './dto/update-refund.input';

@Injectable()
export class RefundsService {
  create(createRefundInput: CreateRefundInput) {
    return {
      id: 1,
      ...createRefundInput,
    };
  }

  findAll({ first, page }: GetRefundsArgs) {
    const data = [];
    const results = [];
    return {
      data: data,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} refund`;
  }

  update(id: number, updateRefundInput: UpdateRefundInput) {
    return `This action updates a #${id} refund`;
  }

  remove(id: number) {
    return `This action removes a #${id} refund`;
  }
}
