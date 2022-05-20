import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GenerateDownloadableUrlInput {
  @Field(() => ID)
  digital_file_id: number;
}
