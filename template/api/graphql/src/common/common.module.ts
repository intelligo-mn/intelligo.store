import { Global, Module } from '@nestjs/common';
// import { Mixed } from './scalars/mixed.scalar';
import { Upload } from './scalars/upload.scalar';
@Global()
@Module({
  providers: [Upload],
})
export class CommonModule {}
