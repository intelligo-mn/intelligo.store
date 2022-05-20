import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WalletsService } from './wallets.service';
import { Wallet } from './entities/wallet.entity';
import { AddPointsInput } from './dto/add-points.input';
// import { UpdateWalletInput } from './dto/update-wallet.input';

@Resolver(() => Wallet)
export class WalletsResolver {
  constructor(private readonly walletsService: WalletsService) {}

  @Mutation(() => Boolean)
  addPoints(@Args('input') input: AddPointsInput) {
    return this.walletsService.create(input);
  }

  // @Query(() => [Wallet], { name: 'wallets' })
  // findAll() {
  //   return this.walletsService.findAll();
  // }

  // @Query(() => Wallet, { name: 'wallet' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.walletsService.findOne(id);
  // }

  // @Mutation(() => Wallet)
  // updateWallet(
  //   @Args('updateWalletInput') updateWalletInput: UpdateWalletInput,
  // ) {
  //   return this.walletsService.update(updateWalletInput.id, updateWalletInput);
  // }

  // @Mutation(() => Wallet)
  // removeWallet(@Args('id', { type: () => Int }) id: number) {
  //   return this.walletsService.remove(id);
  // }
}
