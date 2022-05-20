import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TypesService } from './types.service';
import { Type } from './entities/type.entity';
import { CreateTypeInput } from './dto/create-type.input';
import { UpdateTypeInput } from './dto/update-type.input';
import { GetTypeArgs } from './dto/get-type.args';
import { GetTypesArgs } from './dto/get-types.args';

@Resolver(() => Type)
export class TypesResolver {
  constructor(private readonly typesService: TypesService) {}

  @Mutation(() => Type)
  createType(@Args('input') createTypeInput: CreateTypeInput) {
    return this.typesService.create(createTypeInput);
  }

  @Query(() => [Type], { name: 'types' })
  async getTypes(@Args() getTypesArgs: GetTypesArgs): Promise<Type[]> {
    return this.typesService.getTypes(getTypesArgs);
  }

  @Query(() => Type, { name: 'type' })
  async getType(@Args() getTypeArgs: GetTypeArgs): Promise<Type> {
    return this.typesService.getType(getTypeArgs);
  }

  @Mutation(() => Type)
  updateType(@Args('input') updateTypeInput: UpdateTypeInput) {
    return this.typesService.update(updateTypeInput.id, updateTypeInput);
  }

  @Mutation(() => Type)
  deleteType(@Args('id', { type: () => ID }) id: number) {
    return this.typesService.remove(id);
  }
}
