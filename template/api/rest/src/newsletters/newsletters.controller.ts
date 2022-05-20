import { Body, Controller, Post } from '@nestjs/common';
import { NewslettersService } from './newsletters.service';
import { CreateNewSubscriberDto } from './dto/create-new-subscriber.dto';

@Controller('subscribe-to-newsletter')
export class NewslettersController {
  constructor(private newslettersService: NewslettersService) {}

  @Post()
  async subscribeToNewsletter(@Body() body: CreateNewSubscriberDto) {
    return this.newslettersService.subscribeToNewsletter(body);
  }
}
