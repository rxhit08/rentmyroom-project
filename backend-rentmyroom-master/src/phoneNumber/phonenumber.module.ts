// phone-number.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneNumber } from '../entities';
import { PhoneNumberController } from './phonenumber.controller';
import { PhoneNumberService } from './phonenumber.service';
import { PhoneNumberGuard } from './phonenumber.guard';

@Module({
  imports: [TypeOrmModule.forFeature([PhoneNumber])],
  controllers: [PhoneNumberController],
  providers: [PhoneNumberService, PhoneNumberGuard],
})
export class PhoneNumberModule {}
