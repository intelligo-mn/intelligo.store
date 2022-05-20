import { PickType } from '@nestjs/swagger';
import { Withdraw } from '../entities/withdraw.entity';

export class ApproveWithdrawDto extends PickType(Withdraw, ['id', 'status']) {}
