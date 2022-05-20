import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { CreateWithdrawInput } from './dto/create-withdraw.input';
import { GetWithdrawsArgs, WithdrawPaginator } from './dto/get-withdraws.args';
import { ApproveWithdrawInput } from './dto/approve-withdraw.input';
import { Withdraw } from './entities/withdraw.entity';

@Injectable()
export class WithdrawsService {
  private withdraws: Withdraw[] = [];
  create(createWithdrawInput: CreateWithdrawInput) {
    return {
      id: 1,
      ...createWithdrawInput,
    };
  }

  getWithdraws({
    first,
    page,
    status,
    shop_id,
  }: GetWithdrawsArgs): WithdrawPaginator {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    let data: Withdraw[] = this.withdraws;
    // if (status) {
    //   data = fuse.search(status)?.map(({ item }) => item);
    // }

    if (shop_id) {
      data = this.withdraws.filter((p) => p.shop_id === shop_id);
    }
    const results = data.slice(startIndex, endIndex);

    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }
  findOne(id: number) {
    return this.withdraws[0];
  }

  update(id: number, updateWithdrawInput: ApproveWithdrawInput) {
    return this.withdraws[0];
  }

  remove(id: number) {
    return `This action removes a #${id} withdraw`;
  }
}
