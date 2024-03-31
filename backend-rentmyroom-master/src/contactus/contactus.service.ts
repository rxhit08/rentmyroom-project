import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateContactDto } from './contactus.dto';
import { Contact } from 'src/entities/contactus';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  async createContact(contactDto: CreateContactDto) {
    const contact = this.contactRepository.create({
      ...contactDto,
    });

    return this.contactRepository.save(contact);
  }
}
