import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { WithdrawsService } from './withdraws.service';
import { Withdraw } from './entities/withdraw.entity';
import { CreateWithdrawInput } from './dto/create-withdraw.input';
import { ApproveWithdrawInput } from './dto/approve-withdraw.input';
import { GetWithdrawsArgs, WithdrawPaginator } from './dto/get-withdraws.args';

@Resolver(() => Withdraw)
export class WithdrawsResolver {
  constructor(private readonly withdrawsService: WithdrawsService) {}

  @Mutation(() => Withdraw)
  createWithdraw(@Args('input') createWithdrawInput: CreateWithdrawInput) {
    return this.withdrawsService.create(createWithdrawInput);
  }

  @Query(() => WithdrawPaginator, { name: 'withdraws' })
  async getWithdraws(
    @Args() getWithdrawsArgs: GetWithdrawsArgs,
  ): Promise<WithdrawPaginator> {
    return this.withdrawsService.getWithdraws(getWithdrawsArgs);
  }

  @Query(() => Withdraw, { name: 'withdraw', nullable: true })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.withdrawsService.findOne(id);
  }

  @Mutation(() => Withdraw)
  approveWithdraw(@Args('input') updateWithdrawInput: ApproveWithdrawInput) {
    return this.withdrawsService.update(
      updateWithdrawInput.id,
      updateWithdrawInput,
    );
  }

  @Mutation(() => Withdraw)
  deleteWithdraw(@Args('id', { type: () => ID }) id: number) {
    return this.withdrawsService.remove(id);
  }
}
