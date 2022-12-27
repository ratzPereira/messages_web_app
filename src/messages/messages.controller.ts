import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';

@Controller('/messages')
export class MessagesController {
  @Get()
  public listMessages() {}

  @Post()
  public createMessage(@Body() body: CreateMessageDTO) {
    console.log(body);
  }

  @Get('/:id')
  public getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
