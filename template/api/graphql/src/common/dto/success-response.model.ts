import { ObjectType } from '@nestjs/graphql';
import { CoreMutationOutput } from './core-mutation-output.model';

@ObjectType()
export class SuccessResponse extends CoreMutationOutput {}
