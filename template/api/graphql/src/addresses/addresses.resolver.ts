import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { AddressesService } from './addresses.service';
import { Address } from './entities/address.entity';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';

@Resolver(() => Address)
export class AddressesResolver {
  constructor(private readonly addressesService: AddressesService) {}

  @Mutation(() => Address)
  createAddress(@Args('input') createAddressInput: CreateAddressInput) {
    return this.addressesService.create(createAddressInput);
  }

  @Query(() => [Address], { name: 'addresses' })
  findAll() {
    return this.addressesService.findAll();
  }

  @Query(() => Address, { name: 'address' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.addressesService.findOne(id);
  }

  @Mutation(() => Address)
  updateAddress(@Args('input') updateAddressInput: UpdateAddressInput) {
    return this.addressesService.update(
      updateAddressInput.id,
      updateAddressInput,
    );
  }

  @Mutation(() => Address)
  deleteAddress(@Args('id', { type: () => ID }) id: number) {
    return this.addressesService.remove(id);
  }
}
