import { Resolver, Query } from '@nestjs/graphql';
import { AnalyticsService } from './analytics.service';
import { Analytics } from './entities/analytics.entity';

@Resolver(() => Analytics)
export class AnalyticsResolver {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Query(() => Analytics, { name: 'analytics' })
  findAll() {
    return this.analyticsService.findAll();
  }
}
