import { Field, ID, InputType } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload';

@InputType()
export class ImportInput {
  @Field(() => ID)
  shop_id: number;
  @Field(() => GraphQLUpload)
  csv: GraphQLUpload;
}
