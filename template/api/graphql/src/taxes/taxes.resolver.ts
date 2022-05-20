import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TaxesService } from './taxes.service';
import { Tax } from './entities/tax.entity';
import { CreateTaxInput } from './dto/create-tax.input';
import { UpdateTaxInput } from './dto/update-tax.input';
import { GetTaxesArgs } from './dto/get-taxes.args';

@Resolver(() => Tax)
export class TaxesResolver {
  constructor(private readonly taxesService: TaxesService) {}

  @Mutation(() => Tax)
  createTax(@Args('input') createTaxInput: CreateTaxInput) {
    return this.taxesService.create(createTaxInput);
  }

  @Query(() => [Tax], { name: 'taxClasses' })
  findAll(@Args() getTaxesArgs: GetTaxesArgs) {
    return this.taxesService.findAll(getTaxesArgs);
  }

  @Query(() => Tax, { name: 'taxClass' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.taxesService.findOne(id);
  }

  @Mutation(() => Tax)
  updateTax(@Args('input') updateTaxInput: UpdateTaxInput) {
    return this.taxesService.update(updateTaxInput.id, updateTaxInput);
  }

  @Mutation(() => Tax)
  deleteTax(@Args('id', { type: () => ID }) id: number) {
    return this.taxesService.remove(id);
  }
}
