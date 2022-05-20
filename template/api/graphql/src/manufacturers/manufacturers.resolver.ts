import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ManufacturersService } from './manufacturers.service';
import { Manufacturer } from './entities/manufacturer.entity';
import { CreateManufacturerInput } from './dto/create-manufacturer.input';
import { UpdateManufacturerInput } from './dto/update-manufacturer.input';
import {
  ManufacturerPaginator,
  GetManufacturersArgs,
} from './dto/get-manufacturers.args';
import { GetManufacturerArgs } from './dto/get-manufacturer.args';
import { Product } from '../products/entities/product.entity';
import { GetProductArgs } from '../products/dto/get-product.args';

@Resolver(() => Manufacturer)
export class ManufacturersResolver {
  constructor(private readonly manufacturersService: ManufacturersService) {}

  @Mutation(() => Manufacturer)
  createManufacturer(
    @Args('input') createManufacturerInput: CreateManufacturerInput,
  ) {
    return this.manufacturersService.create(createManufacturerInput);
  }

  @Query(() => ManufacturerPaginator, { name: 'manufacturers' })
  async getManufacturers(
    @Args() getManufacturersArgs: GetManufacturersArgs,
  ): Promise<ManufacturerPaginator> {
    return this.manufacturersService.getManufacturers(getManufacturersArgs);
  }

  @Query(() => Manufacturer, { name: 'manufacturer' })
  async getManufacture(
    @Args() getManufacturerArgs: GetManufacturerArgs,
  ): Promise<Manufacturer> {
    return this.manufacturersService.getManufacturer(getManufacturerArgs);
  }

  @Mutation(() => Manufacturer)
  updateManufacturer(
    @Args('input') updateManufacturerInput: UpdateManufacturerInput,
  ) {
    return this.manufacturersService.update(
      updateManufacturerInput.id,
      updateManufacturerInput,
    );
  }

  @Mutation(() => Manufacturer)
  deleteManufacturer(@Args('id', { type: () => ID }) id: number) {
    return this.manufacturersService.remove(id);
  }

  @Query(() => [Manufacturer])
  async topManufacturers(
    @Args('limit', { type: () => Int }) limit: number,
  ): Promise<Manufacturer[]> {
    return this.manufacturersService.topManufacturers(limit);
  }
}
