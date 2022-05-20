import { Injectable } from '@nestjs/common';
import { ImportInput } from './dto/create-import.input';

@Injectable()
export class ImportsService {
  create(createImportInput: ImportInput) {
    return 'This action adds a new import';
  }
}
