import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { RefundsService } from './refunds.service';
import { Refund } from './entities/refund.entity';
import { CreateRefundInput } from './dto/create-refund.input';
import { UpdateRefundInput } from './dto/update-refund.input';
import { GetRefundsArgs, RefundPaginator } from './dto/get-refunds.args';

@Resolver(() => Refund)
export class RefundsResolver {
  constructor(private readonly refundsService: RefundsService) {}

  @Mutation(() => Refund)
  createRefund(@Args('input') createRefundInput: CreateRefundInput) {
    return this.refundsService.create(createRefundInput);
  }

  @Query(() => RefundPaginator, { name: 'refunds' })
  findAll(@Args() getRefundsArgs: GetRefundsArgs) {
    return this.refundsService.findAll(getRefundsArgs);
  }

  @Query(() => Refund, { name: 'refund' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.refundsService.findOne(id);
  }

  @Mutation(() => Refund)
  updateRefund(@Args('input') updateRefundInput: UpdateRefundInput) {
    return this.refundsService.update(updateRefundInput.id, updateRefundInput);
  }

  @Mutation(() => Refund)
  deleteRefund(@Args('id', { type: () => ID }) id: number) {
    return this.refundsService.remove(id);
  }
}
