import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CoreMutationOutput {
  message: string;
  success: boolean;
}
