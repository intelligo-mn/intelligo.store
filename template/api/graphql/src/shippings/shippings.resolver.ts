import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ShippingsService } from './shippings.service';
import { Shipping } from './entities/shipping.entity';
import { CreateShippingInput } from './dto/create-shipping.input';
import { UpdateShippingInput } from './dto/update-shipping.input';
import { GetShippingsArgs } from './dto/get-shippings.args';

@Resolver(() => Shipping)
export class ShippingsResolver {
  constructor(private readonly shippingsService: ShippingsService) {}

  @Mutation(() => Shipping)
  createShipping(@Args('input') createShippingInput: CreateShippingInput) {
    return this.shippingsService.create(createShippingInput);
  }

  @Query(() => [Shipping], { name: 'shippingClasses' })
  findAll(@Args() getShippingsArgs: GetShippingsArgs) {
    return this.shippingsService.findAll(getShippingsArgs);
  }

  @Query(() => Shipping, { name: 'shippingClass' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.shippingsService.findOne(id);
  }

  @Mutation(() => Shipping)
  updateShipping(@Args('input') updateShippingInput: UpdateShippingInput) {
    return this.shippingsService.update(updateShippingInput);
  }

  @Mutation(() => Shipping)
  deleteShipping(@Args('id', { type: () => ID }) id: number) {
    return this.shippingsService.remove(id);
  }
}
