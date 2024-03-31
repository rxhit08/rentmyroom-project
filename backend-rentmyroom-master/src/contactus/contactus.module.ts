import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './contactus.controller';
import { ContactService } from './contactus.service';
import { Contact } from 'src/entities/contactus';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
