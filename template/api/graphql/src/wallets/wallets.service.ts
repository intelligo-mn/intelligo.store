import { Injectable } from '@nestjs/common';
import { AddPointsInput } from './dto/add-points.input';
import { UpdateWalletInput } from './dto/update-wallet.input';

@Injectable()
export class WalletsService {
  create(createWalletInput: AddPointsInput) {
    return true;
  }

  findAll() {
    return `This action returns all wallets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wallet`;
  }

  update(id: number, updateWalletInput: UpdateWalletInput) {
    return `This action updates a #${id} wallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} wallet`;
  }
}
