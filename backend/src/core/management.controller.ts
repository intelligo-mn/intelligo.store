import { Controller, Get, Logger, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { ApiTags, ApiResponse, ApiOperation, ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller('management')
@UseInterceptors(LoggingInterceptor)
@ApiTags('management-controller')
export class ManagementController {
  logger = new Logger('ManagementController');

  @ApiExcludeEndpoint()
  @Get('/info')
  @ApiOperation({ summary: 'Microservice Info' })
  @ApiResponse({
    status: 200,
    description: 'Check if the microservice is up',
  })
  info(): any {
    return {
      activeProfiles: 'no',
      'display-ribbon-on-profiles': 'no',
    };
  }
}
