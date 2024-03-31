import { Body, Controller, Post, Req } from '@nestjs/common';
import { CreateContactDto } from './contactus.dto';
import { ContactService } from './contactus.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('/contactus')
  async createContact(@Body() contactDto: CreateContactDto, @Req() req) {
    return await this.contactService.createContact(contactDto);
  }
}
