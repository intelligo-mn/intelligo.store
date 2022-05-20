import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Mixed')
export class Mixed implements CustomScalar<any, any> {
  description = 'Mixed custom scalar type';

  parseValue(value: number): any {
    return value; // value from the client
  }

  serialize(value: any): number {
    return value; // value sent to the client
  }

  parseLiteral(ast: ValueNode): any {
    if (ast.kind === Kind.INT) {
      return;
    }
    return null;
  }
}
