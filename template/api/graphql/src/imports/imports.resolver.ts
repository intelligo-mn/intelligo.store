import { Resolver, Mutation, Args, ID } from '@nestjs/graphql';
import { ImportsService } from './imports.service';
import { GraphQLUpload } from 'graphql-upload';
// import { ImportInput } from './dto/create-import.input';

@Resolver()
export class ImportsResolver {
  constructor(private readonly importsService: ImportsService) {}

  @Mutation(() => Boolean)
  importAttributes(
    @Args('shop_id', { type: () => ID }) shop_id: number,
    @Args('csv', { type: () => GraphQLUpload }) csv: GraphQLUpload,
  ) {
    console.log(shop_id, csv);
    return true;
  }
  @Mutation(() => Boolean)
  importProducts(
    @Args('shop_id', { type: () => ID }) shop_id: number,
    @Args('csv', { type: () => GraphQLUpload }) csv: GraphQLUpload,
  ) {
    console.log(shop_id, csv);
    return true;
  }
  @Mutation(() => Boolean)
  importVariationOptions(
    @Args('shop_id', { type: () => ID }) shop_id: number,
    @Args('csv', { type: () => GraphQLUpload }) csv: GraphQLUpload,
  ) {
    console.log(shop_id, csv);
    return true;
  }
}
