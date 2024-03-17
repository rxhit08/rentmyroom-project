// phone-number.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhoneNumber } from '../entities';
import { CreatePhoneNumberDto } from './phonenumber.dto';

@Injectable()
export class PhoneNumberService {
  constructor(
    @InjectRepository(PhoneNumber)
    private readonly phoneNumberRepository: Repository<PhoneNumber>,
  ) {}

  async createPhoneNumber(
    createPhoneNumberDto: CreatePhoneNumberDto,
    roomId: string,
  ) {
    // Check if email or phone number already exists for the given room
    const existingPhoneNumber = await this.phoneNumberRepository.findOne({ where: { userSubmittedNumber: createPhoneNumberDto.userSubmittedNumber, roomId }});
    const existingEmail = await this.phoneNumberRepository.findOne({ where: { userSubmittedEmail: createPhoneNumberDto.userSubmittedEmail, roomId }});

    if (existingPhoneNumber) {
      throw new Error('Phone number already exists for this room');
    }

    if (existingEmail) {
      throw new Error('Email already exists for this room');
    }

    const phoneNumber = this.phoneNumberRepository.create({
      ...createPhoneNumberDto,
      roomId,
    });

    return this.phoneNumberRepository.save(phoneNumber);
  }

  async getPhoneNumberDetails(roomId: string) {
    return this.phoneNumberRepository.find({ where: { roomId } });
  }
}
