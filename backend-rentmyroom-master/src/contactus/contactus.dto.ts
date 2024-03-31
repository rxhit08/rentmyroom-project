import { IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber('IN')
  phoneNumber: string;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  issue: string;
}
