import { Body, Controller, Post } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  sendMessage(@Body() payload: MessageDto): any {
    return this.messageService.sendMessage(payload);
  }
}
