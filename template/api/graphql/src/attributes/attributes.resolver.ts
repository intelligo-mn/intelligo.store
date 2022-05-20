import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { AttributesService } from './attributes.service';
import { Attribute } from './entities/attribute.entity';
import { CreateAttributeInput } from './dto/create-attribute.input';
import { UpdateAttributeInput } from './dto/update-attribute.input';
import { GetAttributeArgs } from './dto/get-attribute.args';
import { GetAttributesArgs } from './dto/get-attributes.args';

@Resolver(() => Attribute)
export class AttributesResolver {
  constructor(private readonly attributesService: AttributesService) {}

  @Mutation(() => Attribute)
  createAttribute(@Args('input') createAttributeInput: CreateAttributeInput) {
    return this.attributesService.create(createAttributeInput);
  }

  @Query(() => [Attribute], { name: 'attributes' })
  findAll(@Args() getAttributesArgs: GetAttributesArgs) {
    return this.attributesService.findAll();
  }

  @Query(() => Attribute, { name: 'attribute' })
  findOne(@Args() getAttribute: GetAttributeArgs) {
    return this.attributesService.findOne(getAttribute);
  }

  @Mutation(() => Attribute)
  updateAttribute(@Args('input') updateAttributeInput: UpdateAttributeInput) {
    return this.attributesService.update(
      updateAttributeInput.id,
      updateAttributeInput,
    );
  }

  @Mutation(() => Attribute)
  deleteAttribute(@Args('id', { type: () => ID }) id: number) {
    return this.attributesService.remove(id);
  }
}
