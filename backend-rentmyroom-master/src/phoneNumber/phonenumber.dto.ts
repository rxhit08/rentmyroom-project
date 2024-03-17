// phone-number.dto.ts
import { IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreatePhoneNumberDto {
  @IsNotEmpty()
  userSubmittedName: string;

  @IsNotEmpty()
  @IsEmail()
  userSubmittedEmail: string;

  @IsNotEmpty()
  @IsPhoneNumber('IN')
  userSubmittedNumber: string;
}
