// phone-number.controller.ts
import { Body, Controller, Get, Param, Post, Req, UseGuards, BadRequestException } from '@nestjs/common';
import { PhoneNumberService } from './phonenumber.service';
import { CreatePhoneNumberDto } from './phonenumber.dto';
import { AuthGuard } from '../auth/auth.guard';
import { PhoneNumberGuard } from './phonenumber.guard';

@Controller('phonenumber')
export class PhoneNumberController {
  constructor(private readonly phoneNumberService: PhoneNumberService) {}

  @Post(':roomId')
  async createPhoneNumber(
    @Body() createPhoneNumberDto: CreatePhoneNumberDto,
    @Req() req,
    @Param('roomId') roomId: string
  ) {
    try {
      await this.phoneNumberService.createPhoneNumber(createPhoneNumberDto, roomId);
      console.log('Phone number created successfully');
      return { message: 'Phone number created successfully' };
    } catch (error) {
      if (error.message === 'Phone number already exists') {
        throw new BadRequestException('Phone number already exists');
      } else if (error.message === 'Email already exists') {
        throw new BadRequestException('Email already exists');
      } else {
        throw new BadRequestException('Error creating phone number');
      }
    }
  }

  @Get(':roomId')
  async getPhoneNumberDetails(@Param('roomId') roomId: string) {
    return await this.phoneNumberService.getPhoneNumberDetails(roomId);
  }
}
