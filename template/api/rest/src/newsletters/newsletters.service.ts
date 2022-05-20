import { Injectable } from '@nestjs/common';
import { CreateNewSubscriberDto } from './dto/create-new-subscriber.dto';

@Injectable()
export class NewslettersService {
  async subscribeToNewsletter({ email }: CreateNewSubscriberDto) {
    return `Your email successfully subscribed`;
  }
}
