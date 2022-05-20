import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  findAll() {
    return `This action returns all analytics`;
  }
}
